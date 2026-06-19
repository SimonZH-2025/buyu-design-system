# Brand DNA — Neo 的品牌基因

> 所有场景、所有页面共享的底层规范。无论哪种设计风格，都不能违背本文件的核心约束。
> 本文件是**唯一 token 真源**：模板 `:root`、组件、场景文件都以这里为准。改 token 先改这里。

---

## 0. 气质坐标（先记住这个，再看数值）

复古插画杂志风。黄打头 + 红线条 = 活泼插画感；用克制的留白和精确间距把它拉回「有品质」，避免幼稚。

| 关键词 | 含义 |
|--------|------|
| 克制 | 细节讲究、间距精确、色彩克制，不堆砌 |
| 有温度 | 有人味、不冷冰冰（背景偏暖、文字非纯黑） |
| 插画感 | 有手绘/插画元素，不是纯几何冷面 |
| 杂志风 | 排版有编辑感、有节奏、有层次 |
| 不像 AI | **最高优先级约束** |
| 个人品牌感 | 一看就知道是「我的」 |

三色比例：**暖黄 60% · 朱红 30% · 湖蓝 10%**（湖蓝永远是点缀，不做主色）。

---

## 1. 颜色 Token（复制即用）

> 来源：兔子海报复古插画配色（方案 B），背景改象牙白。所有页面 `:root` 必须粘贴本块。

```css
:root {
  /* —— 品牌三色 —— */
  --yellow:       #F2C53D;  /* 主色：大色块、底色、装饰 */
  --yellow-soft:  #FBE6A8;  /* 暖黄浅变体：高亮块、淡底 */
  --red:          #D8453B;  /* 强调：标题、插画线条、badge、高亮 */
  --blue:         #2F6FB0;  /* 点缀：链接、CTA、标签（≤10%） */
  --blue-deep:    #245B91;  /* 湖蓝 hover/按压 */
  --blue-soft:    #B6C8DF;  /* 湖蓝浅变体：淡蓝底 */

  /* —— 背景（永远偏暖，非纯白）—— */
  --cream:        #FFF8EF;  /* 主背景·象牙白 */
  --cream-dark:   #F5E9D6;  /* 深奶：分区/卡片底 */

  /* —— 文字（永远非纯黑）—— */
  --ink:          #2A2A33;  /* 正文主色·墨色 */
  --ink-light:    #6A6A76;  /* 次要文字 */
  --ink-faint:    #9A9AA6;  /* 辅助/占位文字 */

  /* —— 暗色场景底（仅 HTML 全屏页；3:4 卡片禁止深色底）—— */
  --dark-panel:   #16252E;  /* 暖墨蓝（首选）；近黑棕备选 #241F1C */
}
```

**用色硬规则：**
- 绝不用纯黑 `#000` / 纯白 `#fff`。
- 同屏大色块（暖黄/朱红铺整屏）≤ 2 个，靠象牙白留白透气。
- 层次用径向渐变，不用纯平色；但**禁止顶部/底部彩色渐变条**（见 §6 禁忌）。
- 湖蓝越界（当主色）= 直接判错。

---

## 2. 字体 Token

### 字体池

| 角色 | 字体 | 备注 |
|------|------|------|
| 中文标题 | `Noto Serif SC` 900 | 思源宋体，主标题 |
| 英文装饰/栏目名/引言 | `DM Serif Display` italic | 高对比衬线；**只套英文/数字** |
| 中文正文 | `Noto Sans SC` + 系统栈 | 跨平台无衬线 |
| 中文细字/副标题 | `PingFang SC` Light 或 `Noto Sans SC` 300 | 装饰字体没有中文字形时用它 |
| 英文手写（少量点缀） | `Caveat` | **默认不用**；小标签优先正体大写 + 字间距 |
| 等宽/终端 | `Fira Code` | 技术场景按需 |

```html
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@600;900&family=Noto+Sans+SC:wght@400;500;700&family=DM+Serif+Display:ital@0;1&family=Caveat:wght@500;700&display=swap" rel="stylesheet">
```

### 字号 / 字重层级表

> 全部用 `clamp()` 做 fluid sizing。「大的要很大，小的要真的小」—— 字号对比必须极端。

| 角色 | 字体 | 字号 | 字重 | line-height | letter-spacing | 用途 |
|------|------|------|------|-------------|----------------|------|
| Hero 大标题 | Noto Serif SC | `clamp(2.8rem, 7vw, 5.5rem)` | 900 | **1.15**（带高亮 ≥1.4） | -0.01em | 封面 h1 |
| Section 标题 | Noto Serif SC | `clamp(1.6rem, 4vw, 2.6rem)` | 900 | **1.25**（带高亮 ≥1.4） | -0.01em | 内容页 h2 |
| 卡片标题 | Noto Serif SC / DM Serif | `1.15rem ~ 1.4rem` | 700–900 | 1.3 | 0 | h3 |
| 正文 | Noto Sans SC | `16px` | 400 | **1.7**（CJK 见 §3） | 0.02em | body |
| 辅助文字 | Noto Sans SC | `0.78rem ~ 0.85rem` | 400–500 | 1.6 | 0.02em | caption/label |
| 英文小标签 | Noto Sans SC 大写 | `0.7rem ~ 0.78rem` | 500 | 1 | **0.12em** | AUX LABEL |
| 大装饰数字 | DM Serif / Noto Serif | `clamp(3rem, 8vw, 7rem)` | 900 | 1 | 0 | 背景装饰，`opacity: 0.12~0.2` |

---

## 3. 中文排版纪律（CJK）

> 中文不是「英文换个字库」。以下是把中文排出杂志感、避免「AI 味」的硬规则，独立成节。

### 行距 / 字距
- **中文正文 `line-height: 1.7`**（1.7~2.0 区间，绝不 ≤ 1.5）。
- **中文标题 `line-height: 1.25~1.4`**；**凡是带行内高亮块的标题一律 ≥ 1.4**（封面 h1、内容 h2 都适用，别漏封面）。
- **正文 `letter-spacing: 0.02em`** 提升中文可读性；标题 0 ~ -0.01em。

### 标题里的高亮块（治「高亮把上下行挡住」）
中文 em-box 本身很高，行内底色块会比字形高一截，所以：
```css
.hl {
  background: var(--yellow);
  padding: 0.02em 0.26em;              /* 上下接近 0，左右才给 */
  border-radius: 6px;
  -webkit-box-decoration-break: clone; /* 多行高亮必加 */
  box-decoration-break: clone;
}
/* 容器标题务必 line-height ≥ 1.4 */
```

### 中英混排 fallback
- **英文装饰字体（DM Serif / Caveat）只能套英文/数字**——它们没有中文字形，套中文会 fallback 成歪斜系统宋体。
- 中文副标题/细字用 `PingFang SC` Light 或 `Noto Sans SC` 300，不要硬塞装饰字体。

### 标点 / 折行（长正文页推荐）
```css
body { overflow-wrap: break-word; line-break: strict; }
```
- 行头避免出现：`）」』】、。，！？`；行尾避免出现：`（「『【`。

### 避孤字（末行不留单字 · 铁律）
> 多行文本绝不允许**末行只有一个字 / 一个字 + 一个标点**（如「文。」单独成行）——这是中文排版头号丑点。

- CSS 先兜底：多行文本（标题、结论、正文）一律加 `text-wrap: pretty;`（保第一行写满 + 优化末行）。**不要用 `text-wrap: balance`**——它会让第一行也不写满，是另一种丑。
- CSS 之外**必须配合文案**：写的时候就数字数，让**末行至少 4 个字**。
  - 末行太短 → **在不改原意的前提下加几个字**把末行撑长（首选）；
  - 或反过来**精简整句**让它一行放下（结论句尤其推荐一行）。
- 适用：`.summary` 结论、卡片说明、任何会折行的 CJK 文本。

### 中文小标签（kicker / 结论标签 / 栏目名 · 铁律）
> 一句话：**靠「正体 + 宽字间距」做精致，不靠粗字重和填充色块**（重 = 降级成 generic infographic banner，这是 guizang 设计系统验证过的教训）。

- 字体：`Noto Sans SC` **500**（中等字重，绝不 700/900）。
- 字间距：`letter-spacing: .2em ~ .34em`（中文标签拉开字距才精致）。
- 颜色：品牌色（红 / 蓝），小字号（22–26px）。
- **严禁**：① `DM Serif` / `Caveat` / 任何 italic 套中文（没有中文字形，fallback 成歪斜系统宋体）；② 卡通填充 pill（暖黄/红底圆角块塞中文）；③ ≥700 重字重。
- 标准实现见 `references/scene-cards.md` 的 `.summary .stag`（方案 A · 纯字距）。

---

## 4. 间距 Token

```css
/* 全部 clamp() fluid sizing */
--space-section:  clamp(80px, 12vh, 160px);  /* Section 之间 */
--space-block:    clamp(40px, 6vw, 100px);   /* 内容块之间 */
--space-card-pad: clamp(28px, 3vw, 44px);    /* 卡片内 padding */
--space-gap:      clamp(24px, 3vw, 48px);    /* 元素间 gap */
```
- 内容宽度：`max-width: 1300px; margin: 0 auto;`

---

## 5. 阴影 / 层级表

> 复古插画风慎用大阴影。优先用**纯色块 / 单色发丝线 / 边框**做分隔，阴影只在确需浮起时用，且偏暖。

| 层级 | 值 | 用途 |
|------|----|------|
| 0 平 | `none` | 默认。色块/边框分区 |
| 1 轻浮 | `0 2px 8px rgba(42,42,51,0.06)` | 卡片轻微抬起 |
| 2 浮起 | `0 8px 24px rgba(42,42,51,0.10)` | 弹层、强调卡片 |
| 发丝线 | `1px solid rgba(42,42,51,0.12)` | 分隔（**优先于阴影**） |
| 品牌左条 | `border-left: 4px solid var(--yellow)` | 引用/重点块 |

阴影色一律用墨色 `rgba(42,42,51,…)`，不用纯黑 `rgba(0,0,0,…)`。

---

## 6. 通用禁忌清单

| 类型 | 禁止 |
|------|------|
| 配色 | 蓝紫渐变、cyan、neon、纯黑白、AI 常用冷灰蓝调；深色版面仅 3:4 卡片禁止（HTML 全屏页不受限） |
| 字体 | Inter/Roboto/Arial 等 overused 字体（终端辅助除外）、用 monospace 充「技术感」 |
| 布局 | 所有 section 居中、千篇一律卡片网格、cards 嵌套 cards |
| 动效 | bounce/elastic、animate width/height、无限循环动画 |
| 装饰 | glassmorphism、圆角矩形+阴影千篇一律、渐变文字、AI 光效、**顶部/底部彩色渐变条**（esther 遗留 deco-top/deco-bottom）——分隔只用纯色块或单色发丝线 |
| 排版 | 行/字间距过松或过紧（必须肉眼检查）、装饰字体套中文、带高亮标题 line-height < 1.4 |
| 图片 | AI 生成 stock photo 风、过度滤镜、无意义装饰图 |
| 默认样式 | HTML 默认 blockquote / border-left 引用 / 无样式 ul·ol / 默认 table——所有组件必须从 `components.md` 选用，绝不浏览器默认渲染 |
| 整体 | 看起来像 AI 通用模板、generic Landing Page 模板感 |

### 自检三问（做完必答）
1. 这页截图发 Twitter，会不会被评论「又是 AI 做的」？
2. 能不能一眼认出这是「我的」？
3. 有没有哪个部分让你觉得「见过很多次了」？

---

## 7. 细节规范

- **选中高亮**：`::selection { background: var(--yellow); color: var(--ink); }`
- **链接悬停**：暖黄底色块或朱红下划线，不用变色。
- **响应式**：断点 900px（两栏→单栏）、600px（字号微缩）；移动端是「重新排列」不是「缩小」，adapt 不 amputate；尊重 `prefers-reduced-motion`。

---

## 8. Agent 快速参考（开工前一眼抓全）

```
品牌：复古插画杂志风 · 黄60/红30/蓝10 · 不像AI是最高约束
背景：var(--cream) #FFF8EF（偏暖，非纯白）
文字：var(--ink) #2A2A33（非纯黑）
主色：var(--yellow) #F2C53D | 强调 var(--red) #D8453B | 点缀 var(--blue) #2F6FB0
标题字体：Noto Serif SC 900（衬线）  正文字体：Noto Sans SC（无衬线）
英文装饰：DM Serif Display italic（只套英文/数字）
中文正文：16px / line-height 1.7 / letter-spacing 0.02em
带高亮标题：line-height ≥ 1.4 + box-decoration-break: clone
字号对比要极端 · 全用 clamp() · max-width 1300px
分隔优先纯色块/发丝线，阴影偏暖且克制
禁：蓝紫渐变 · glassmorphism · 渐变文字 · 顶/底彩色渐变条 · 装饰字体套中文 · HTML默认样式
```

工作流见 `SKILL.md`；组件代码见 `references/components.md`；交付前跑 `references/checklist.md`。

---

*This is the foundation. Every scene file builds on top of this.*
