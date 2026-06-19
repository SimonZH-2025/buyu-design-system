---
name: neo-design-skill
description: |
  Neo的个人视觉设计系统（品牌DNA：暖黄·朱红·湖蓝复古插画风 + 宋体标题）。把内容做成**视觉成品**：小红书 3:4 图文卡片（1080×1440、多图可导出 PNG）、HTML 页面 / landing page、海报、封面等。从模板改、不从零写，输出风格统一、不像 AI。
  触发：用户要「做图文/做卡片/小红书图文/把文章转成卡片/做个页面/做 landing/做海报/做封面」等需要**出图或出页面**的视觉任务。说「做图/图文/卡片/小红书/生成 html」含糊时默认走 3:4 卡片，不默认做长滚动网页；明确说「网页/landing/官网」才做网页。
  现状：**目前只有小红书 3:4 卡片是成熟稳定输出**（公众号封面等在建）。要强制锁定 3:4 卡片、绝不退回网页，用命令 /nds-xhs。
  不适用：纯文字文案（用 neo-write-skill）；视频（用 neo-video-skill）。
---

触发条件：当用户要求制作HTML网页、个人页面、教程页面、介绍型页面、landing page、活动页面、App型页面、作品集等任何前端设计相关任务时触发。也在用户说"做图文"、"图文卡片"、"小红书图文"、"文章转卡片"、"转成图文"、"做卡片"时触发。

## 使用方式（7步工作流）

### Step 0: 挑场景（推荐）
打开 `gallery.html` 看四套模板的 live preview，对照标签和「考验什么」选定场景，再进 Step 1。

### Step 1: 澄清需求
向用户确认5个问题：
1. **类型** — 教程/介绍/科普？活动页/Landing？App型/功能型？**图文卡片？**
2. **受众** — 给谁看的？技术水平？
3. **Section数** — 大概几屏内容？
4. **素材** — 有哪些文案/图片/数据？
5. **硬约束** — 必须包含什么？有没有合作品牌色？

### Step 2: 读规范
1. **必读** `brand-dna.md` — 唯一 token 真源。开工前先抓文末 §8「Agent 快速参考」，把 `:root` 色值整块粘进页面；中文页务必过 §3「CJK 排版纪律」
2. 根据类型选读场景文件：
   - 教程型/介绍型/科普型 → `references/scene-tutorial.md`
   - 活动页/分享会/Landing → `references/scene-landing.md`
   - App型/功能型（看板/书架/Canvas） → `references/scene-app.md`
   - **图文卡片/小红书图文/文章转卡片** → `references/scene-cards.md`

### Step 3: 拷模板
从 `assets/` 选择对应模板作为起点：
- 教程型 → `assets/template-tutorial.html`
- 活动页/Landing → `assets/template-landing.html`
- App型/功能型 → `assets/template-app.html`
- **图文卡片** → `assets/template-cards.html`

**从模板开始改，不从零写。**

### Step 4: 选布局组合
从 `references/layouts.md` 中选取 3~5 种布局模式，为每个 section 分配不同布局。

**每个 section 布局必须不同。**

（图文卡片模式：参考 `scene-cards.md` 中的推荐排版手法，为每页选择不同手法。）

### Step 5: 选组件填充
从 `references/components.md` 中选取组件填入各 section。

**硬规则：禁止使用任何HTML默认样式。** 所有引用块、列表、表格、卡片必须从 components.md 里选用对应组件的代码。不允许用默认 `<blockquote>`、默认 `border-left` 引用、无样式 `<ul>/<ol>`、默认 `<table>`。如果在 components.md 里找不到合适的，自己设计一个符合 brand-dna 规范的，但绝不能用浏览器默认样式。

### Step 6: 自检
对照 `references/checklist.md` 逐条检查：
- **P0 必须全过** — 任何一条不过就要改
- P1 应过 — 尽量满足
- P2 加分 — 锦上添花

（图文卡片模式：额外对照 `scene-cards.md` 底部的 Checklist。）

### Step 7: 交付 + 导出（仅图文卡片）
输出最终 HTML 文件，确保可直接在浏览器打开。

**如果是图文卡片，导出 PNG 用 Playwright 脚本（100% 零失真）：**
```bash
# 进入 neo-design-skill 目录
cd ~/Documents/Github/neo-design-skill

# 运行导出脚本（需要 Playwright 和 Google Chrome 已装）
node assets/export-png.mjs ~/Documents/小红书图文/cc-进阶10招.html
# → 输出: ~/Documents/小红书图文/export/card-01.png ... card-08.png

# 也支持自定义输出目录
node assets/export-png.mjs ~/Documents/小红书图文/cc-进阶10招.html ~/Pictures/export
```

详见 `references/scene-cards.md` §导出为 PNG。

## 场景类型速查

| 类型 | 场景文件 | 模板 |
|------|----------|------|
| 教程型/介绍型/科普型 | `references/scene-tutorial.md` | `assets/template-tutorial.html` |
| 活动页/分享会/Landing | `references/scene-landing.md` | `assets/template-landing.html` |
| App型/功能型 | `references/scene-app.md` | `assets/template-app.html` |
| 图文卡片/小红书图文 | `references/scene-cards.md` | `assets/template-cards.html` |

## 关键原则
- **从模板开始改，不从零写** — 模板已内置品牌变量和基础结构
- **每个 section 布局必须不同** — 避免单调重复，从 layouts.md 选不同模式
- **做完必须跑 checklist** — P0 全过才能交付

## 禁忌
严格遵守 `brand-dna.md` 的禁忌清单，不在此重复。核心底线：截图发 Twitter 不会被说"又是AI做的"。
