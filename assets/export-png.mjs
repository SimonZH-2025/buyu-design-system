#!/usr/bin/env node
/**
 * neo-design-skill 标准导出脚本 · Playwright + 真实 Chrome
 *
 * 用法:
 *   node export-png.mjs <输入HTML路径> [输出目录]
 *
 * 示例:
 *   node export-png.mjs ~/Documents/小红书图文/cc-进阶10招.html
 *   node export-png.mjs ~/Documents/小红书图文/cc-进阶10招.html ~/Pictures/export
 *
 * 为什么用 Playwright 而不是 html2canvas?
 * ─ html2canvas 用 JS 重新绘制,不支持 box-decoration-break / text-wrap / box-shadow
 * ─ Playwright 用真实 Chrome 引擎,100% 还原浏览器渲染,零失真
 */
import { createRequire } from 'module';
import { mkdirSync, existsSync } from 'fs';
import { resolve, dirname, basename } from 'path';
import os from 'os';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');

const HOME = os.homedir();
const args = process.argv.slice(2);

// 解析参数
if (args.length === 0) {
  console.error(`
❌ 用法: node export-png.mjs <输入HTML路径> [输出目录]

示例:
  node export-png.mjs ~/Documents/小红书图文/cc-进阶10招.html
  node export-png.mjs ~/Documents/小红书图文/cc-进阶10招.html ~/export

若输出目录不指定，默认在输入 HTML 同目录下创建 export/ 子目录。
  `);
  process.exit(1);
}

const inputPath = resolve(args[0].replace('~', HOME));
const outputDir = args[1]
  ? resolve(args[1].replace('~', HOME))
  : resolve(dirname(inputPath), 'export');

if (!existsSync(inputPath)) {
  console.error(`❌ 输入文件不存在: ${inputPath}`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
const htmlUrl = `file://${inputPath}`;

console.log(`📄 输入: ${inputPath}`);
console.log(`📁 输出: ${outputDir}\n`);

// 启动 Playwright
const browser = await chromium.launch({
  channel: 'chrome',
  proxy: { server: 'http://127.0.0.1:7897' },   // 让 Google Fonts 走代理加载
});
const page = await browser.newPage({ deviceScaleFactor: 2 }); // 2x 高清

try {
  await page.goto(htmlUrl, { waitUntil: 'networkidle' });
  await page.evaluate(async () => { await document.fonts.ready; });   // 等字体真正就绪

  // 去掉预览用的样式(scale / margin / shadow / 圆角),恢复成 1080×1440 原始卡
  await page.evaluate(() => {
    const bar = document.querySelector('.export-bar');
    if (bar) bar.style.display = 'none';
    document.querySelectorAll('.card').forEach(el => {
      el.style.transform = 'none';
      el.style.margin = '0';
      el.style.boxShadow = 'none';
      el.style.borderRadius = '0';
    });
  });
  await page.waitForTimeout(400);

  const cards = await page.$$('.card');
  if (cards.length === 0) {
    console.error(`❌ 未找到任何 .card 元素`);
    process.exit(1);
  }

  console.log(`🖼  找到 ${cards.length} 张卡片，开始导出...\n`);

  for (let i = 0; i < cards.length; i++) {
    const n = String(i + 1).padStart(2, '0');
    const filename = `card-${n}.png`;
    const filepath = resolve(outputDir, filename);
    await cards[i].screenshot({ path: filepath });
    console.log(`  ✓ ${filename}`);
  }

  console.log(`\n✅ DONE: 已导出 ${cards.length} 张高清 PNG`);
  console.log(`📂 保存位置: ${outputDir}\n`);

} catch (err) {
  console.error(`❌ 导出失败: ${err.message}`);
  process.exit(1);
} finally {
  await browser.close();
}
