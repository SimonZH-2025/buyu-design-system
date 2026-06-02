# Brand DNA — buyu 的品牌基因

> 所有场景、所有页面共享的底层规范。无论哪种设计风格，都不能违背此文件的核心约束。

---

## 🎨 固定三色

> 来源：从参考图提取的「兔子海报」复古插画配色（方案 B），背景改用象牙白。

| 色名 | 色值 | 用途 |
|------|------|------|
| 暖黄 Sunny | `#F2C53D` | 主色调、大色块、底色、装饰 |
| 朱红 Vermilion | `#D8453B` | 标题、插画线条、强调、badges、高亮 |
| 湖蓝 Lake | `#2F6FB0` | 点缀、小色块、链接、CTA、标签 |
| 象牙白 Ivory | `#FFF8EF` | 主背景 |

三色比例原则：暖黄 60% · 朱红 30% · 湖蓝 10%（湖蓝永远是点缀，不做主色）

> 气质提醒：黄打头 + 红线条 = 活泼插画感；用克制的留白和精确间距把它拉回「有品质」，避免幼稚。

---

## 🔤 字体基因

### 核心原则
- **标题用衬线，正文用无衬线** — 混搭产生节奏
- **中英文搭配** — 英文做装饰/标签，中文承载内容
- **字号对比极端** — 大的要很大，小的要真的小

### 推荐字体池

| 场景 | 推荐 | 备注 |
|------|------|------|
| 中文标题 | `Noto Serif SC` (900) | 思源宋体，主标题字体，连网即用 |
| 英文装饰/标题 | `DM Serif Display` (italic) | 现代利落的高对比衬线，做装饰/栏目名/引言 |
| 中文正文 | `Noto Sans SC` + 系统栈 | 跨平台无衬线 |
| 中文正文系统栈 | `-apple-system, 'PingFang SC', 'Helvetica Neue', sans-serif` | 本地渲染最快 |
| 英文手写/轻松 | `Caveat` | 手绘感、标注、注释（按需使用） |
| 英文等宽/终端 | `Fira Code` | 技术/终端场景专用（按需使用） |

### 字体引入（Google Fonts）
```html
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@600;900&family=Noto+Sans+SC:wght@400;500;700&family=DM+Serif+Display:ital@0;1&family=Caveat:wght@500;700&display=swap" rel="stylesheet">
```

### 字号系统（fluid sizing）
- Hero大标题: `clamp(2.8rem, 7vw, 5.5rem)`
- Section标题: `clamp(1.6rem, 4vw, 2.6rem)`
- 卡片标题: `1.15rem ~ 1.4rem`
- 正文: `16px`
- 辅助文字: `0.78rem ~ 0.85rem`
- 大装饰数字: `clamp(3rem, 8vw, 7rem)` + `opacity: 0.12~0.2`

---

## ✨ 气质关键词

设计出来的东西应该让人觉得：

- **克制** — 细节讲究、间距精确、色彩克制，不堆砌
- **有温度** — 有人味、不冷冰冰
- **插画感** — 有手绘/插画元素，不是纯几何冷面
- **杂志风** — 排版有编辑感、有节奏、有层次
- **不像AI** — 这是最高优先级的约束
- **个人品牌感** — 一看就知道是"我的"

---

## 🎨 配色扩展原则

当三色不够用时：

- 背景永远偏暖（非纯白）：`#FFF8EF`（主背景·象牙白）、`#F5E9D6`（深奶·分区/卡片底）
- 文字永远非纯黑：用墨色 `#2A2A33` 或近黑 `#1F2430`
- 次要文字：`#6A6A76`、`#8A7F72`、`#999`
- 绝不用纯黑 `#000` 或纯白 `#fff`
- 暗色场景底色：用暖墨蓝 `#16252E` 或近黑棕 `#241F1C`（仅适用于HTML全屏页面，3:4卡片场景禁止深色底）
- 主色暖黄的浅色变体：`#FBE6A8`（淡黄高亮块）；湖蓝的浅色变体：`#B6C8DF`（淡蓝底）
- 径向渐变制造层次，不用纯平色

---

## 🚫 通用禁忌清单

| 类型 | 禁止 |
|------|------|
| 配色 | 蓝紫渐变、cyan、neon、纯黑白、AI常用的冷灰蓝调、黑色/深色版面（仅3:4卡片场景禁止，HTML全屏页面不受限） |
| 字体 | Inter/Roboto/Arial等overused字体（除非明确是终端风格辅助字体）、monospace充当"技术感" |
| 布局 | 所有section居中、千篇一律卡片网格、cards嵌套cards |
| 动效 | bounce/elastic、animate width/height、无限循环动画 |
| 装饰 | glassmorphism、圆角矩形+阴影千篇一律、渐变文字、AI光效 |
| 整体 | 看起来像AI生成的通用模板、generic Landing Page模板感 |
| 排版 | 行间距/字间距必须肉眼检查，不允许出现过松或过紧的异常节奏 |
| 图片 | AI生成的stock photo风、过度滤镜、无意义装饰图 |
| 默认样式 | HTML默认blockquote、默认border-left引用块、无样式ul/ol列表、默认table——所有组件必须从components.md选用，绝不允许浏览器默认渲染 |

### 自检问题
做完设计后问自己：
1. 这个页面截图发到Twitter上，会不会被人评论"又是AI做的"？
2. 能不能一眼认出这是"我的"？
3. 有没有哪个部分让你觉得"见过很多次了"？

---

## 📐 通用间距原则

- Section之间: `clamp(80px, 12vh, 160px)`
- 内容块之间: `clamp(40px, 6vw, 100px)`
- 卡片内padding: `clamp(28px, 3vw, 44px)`
- 元素间gap: `clamp(24px, 3vw, 48px)`
- 全部用 `clamp()` 做fluid sizing
- `max-width: 1300px` + `margin: 0 auto` 约束内容宽度

---

## 📱 响应式通用规则

- 断点: 900px（两栏→单栏）、600px（字号微缩）
- 移动端是"重新排列"不是"缩小"
- 尊重 `prefers-reduced-motion`
- 移动端不隐藏内容——adapt不amputate

---

## 🔍 细节规范

- **选中文本高亮**: `::selection { background: #F2C53D; color: #2A2A33; }`
- **链接悬停**: 用暖黄底色块或朱红下划线，不用变色
- **大色块用法**: 暖黄/朱红可做整屏大色块底（参考兔子海报），但同屏不超过 2 个大色块，靠象牙白留白透气
- **标题里的高亮块**（治"高亮块太大、把上下行挡住"）：中文字体的 em-box 本身很高，行内底色块会比字形高一截，所以 ——
  - **凡是带高亮的标题，`line-height ≥ 1.4`**（封面大 `h1`、内容页 `h2` 一律适用，别漏掉封面）。紧行距 1.1~1.2 必翻车。
  - 高亮**上下** padding 压到接近 0：`padding: 0.02em 0.26em`（上下别给大值，中文 em-box 已经够高，再加 padding 就撑爆顶到邻行）
  - 多行高亮必须加 `-webkit-box-decoration-break: clone; box-decoration-break: clone;`
  - `border-radius: 6px`
- **英文装饰字体只能套英文/数字**（DM Serif Display / Fraunces / Caveat）——它们**没有中文字形**，套在中文上会 fallback 成歪斜的系统宋体，很丑。中文副标题/细字用 `PingFang SC` Light（苹方-简 细体）或 `Noto Sans SC` 300。
- **不用顶部彩色渐变条**（esther 模板遗留的 `deco-top`）——既突兀又踩"渐变"禁忌。要分隔用纯色三色分段块或单色发丝线。

---

*This is the foundation. Every scene file builds on top of this.*
