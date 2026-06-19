# 质量检查清单

> 做完设计后逐条对照。P0 必须全过，否则打回修改。
> 凡能量化的都给了**可测阈值**（标 📏）—— 不靠手感，直接量。

---

## P0（必须全过）

任何一条不过就要改：

- [ ] 📏 品牌三色比例 ≈ 黄60/红30/蓝10；湖蓝面积 < 全屏 15%，且不当主色块
- [ ] 📏 背景为 `var(--cream)` `#FFF8EF` 或 `var(--cream-dark)` `#F5E9D6`；全文无 `#fff` / `#ffffff` 纯白底
- [ ] 📏 文字主色为 `var(--ink)` `#2A2A33`；全文无 `#000` / `#000000` 纯黑字
- [ ] 📏 `:root` token 块与 `brand-dna.md` §1 完全一致（色值不得私改）
- [ ] 没有禁忌清单里的任何元素（蓝紫渐变 / glassmorphism / bounce 动画 / neon / 居中病 / **顶/底彩色渐变条** / 渐变文字）
- [ ] 标题衬线（Noto Serif SC）+ 正文无衬线（Noto Sans SC）混搭
- [ ] 📏 装饰字体（DM Serif / Caveat）只出现在英文/数字上，未套任何中文
- [ ] 📏 中文正文 `line-height ≥ 1.7`；带行内高亮的标题 `line-height ≥ 1.4`（含封面 h1）
- [ ] 📏 多行高亮块带 `box-decoration-break: clone`
- [ ] 📏 每个 section 布局形式互不相同（相邻两屏不得同构）
- [ ] 📏 字号、间距全部走 `clamp()`；无写死 px 的响应式断裂
- [ ] 至少一个 900px 断点；移动端是重排不是缩小
- [ ] 无任何 HTML 默认样式（默认 blockquote / border-left 引用 / 无样式 ul·ol / 默认 table）——组件全部取自 `components.md`
- [ ] **自检三问**全部通过（见 brand-dna §6）：不像 AI / 一眼是我的 / 没有「见过很多次」
- [ ] **（图文卡片）** 每页内容吃满画布 ≥75%，无未设计的空白带；没用 `flex` 空 div 撑版

---

## P1（应过）

- [ ] 📏 字号对比足够极端：最大标题 > 3rem，最小辅助文字 < 0.85rem，比值 ≥ 4×
- [ ] 至少一个 section 有视觉惊喜（出血 / 全宽色块 / 装饰突破 / 大透明英文背景）
- [ ] 有 Scroll Reveal 动效 + stagger 延迟
- [ ] 有品牌色条（border-left 4px 暖黄）或高亮标记
- [ ] 📏 `::selection { background: var(--yellow); }` 已设
- [ ] 📏 阴影一律墨色 `rgba(42,42,51,…)`，无 `rgba(0,0,0,…)`

---

## P2（加分）

- [ ] 图片溢出容器边界
- [ ] 有全宽深色面板（`var(--dark-panel)`）打破节奏（仅 HTML 全屏页）
- [ ] 装饰元素（虚线圆 / 渐变光晕 / 条纹肌理）使用克制
- [ ] `prefers-reduced-motion` 已尊重

---

## 🔲 4 横带密度自检（仅图文卡片 3:4，渲染后必跑）

打开渲染出的 PNG，把它横切成 4 条 360px 横带（0–25% / 25–50% / 50–75% / 75–100%）。逐条归类：

- **填充** — 含文字 / 图 / 数据 / 分隔线
- **合理留白** — 有明确理由：hero 图呼吸、单句金句宣言、段落首尾边距（顶部 8% / 底部 8%）
- **欠填** — 空且无理由

**判定通过的条件：**
1. 填充 + 合理留白 = 100%（不能有欠填）
2. 填充带覆盖 ≥75% 画布高度（≥1080px）
3. **任何单条欠填 >216px（15%）即判失败**
4. 相邻两条不能都是「合理留白」（会形成 >25% 的中部空洞）

**失败怎么办**：不许缩画布、不许加装饰圆点。只能——
扩充内容（加账本行 / 加长段落 / 加证据行 / 加旁注栏），或**换版式**（内容太少就换成金句大字版）。

---

## ⚡ 快速量化扫描（交付前 30 秒）

在浏览器 console 跑一遍，命中即不合格。**只查真正渲染出来的元素**（跳过 head/script 等结构节点和 0 尺寸元素，否则会把 `<html>` 的默认黑色误报）：

```js
(()=>{const bad=[];[...document.body.querySelectorAll('*')].forEach(el=>{
  const s=getComputedStyle(el), r=el.getBoundingClientRect();
  if((el.offsetParent===null&&s.position!=='fixed')||r.width===0||r.height===0) return; // 不可见跳过
  if(/^rgb\(0, 0, 0\)$/.test(s.color))            bad.push(['纯黑字',el]);
  if(/^rgb\(0, 0, 0\)$/.test(s.backgroundColor))  bad.push(['纯黑底',el]);
  if(/^rgb\(255, 255, 255\)$/.test(s.backgroundColor)) bad.push(['纯白底',el]);
  if(parseFloat(s.borderTopWidth)>0&&/rgb\(0, 0, 0\)/.test(s.borderTopColor)) bad.push(['纯黑边',el]);
  if(/(purple|violet|indigo)/i.test(s.color+s.backgroundColor+s.backgroundImage)) bad.push(['蓝紫',el]);
});console.table(bad.map(b=>b[0]));return bad.length+' 处违规';})()
```
返回 `0 处违规` = 通过。非 0 = 有真实渲染的纯黑/纯白/蓝紫，回去改。
