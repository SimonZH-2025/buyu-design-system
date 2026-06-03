# 组件库

> 20个经过验证的可复用组件，按使用频率排序。直接复制代码使用。

---

## 1. 卡片组件库（5种变体）

根据信息展示场景选用不同卡片风格。

---

### 1A. 杂志裁切风卡片

适用场景：需要大气场的标题卡、功能展示、首屏核心卖点

```html
<div class="magazine-card">
  <h3 class="card-title">大标题文字</h3>
  <p class="card-desc">描述文字</p>
  <span class="card-aux">AUX LABEL</span>
</div>
```

```css
.magazine-card {
  padding: 32px 24px 20px;
}
.magazine-card .card-title {
  font-family: 'DM Serif Display', 'Noto Serif SC', serif;
  font-size: 2rem;
  font-weight: 900;
  line-height: 1.15;
  color: var(--ink);
  min-height: 120px;
}
.magazine-card .card-desc {
  font-size: 0.8rem;
  color: var(--ink-light);
  margin-top: 16px;
}
.magazine-card .card-aux {
  font-size: 0.7rem;
  color: var(--blue);
  margin-top: 8px;
  font-weight: 500;
}
```

---

### 1B. 编号主导卡片

适用场景：步骤列表、问题清单、并列要点（需要视觉层次）

```html
<div class="number-card">
  <span class="card-number">01</span>
  <h3 class="card-title">标题</h3>
  <p class="card-desc">描述内容</p>
</div>
```

```css
.number-card {
  position: relative;
  padding: 28px 24px;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
}
.number-card .card-number {
  position: absolute;
  top: -10px;
  right: 10px;
  font-family: 'DM Serif Display', serif;
  font-size: 5.5rem;
  font-weight: 900;
  color: rgba(43, 127, 216, 0.08);
  line-height: 1;
  pointer-events: none;
}
.number-card .card-title {
  font-family: 'Noto Serif SC', serif;
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 8px;
  position: relative;
}
.number-card .card-desc {
  font-size: 0.85rem;
  color: var(--ink-light);
  margin-bottom: 12px;
  position: relative;
}
```

**变体**: 编号颜色按品牌三色轮换（蓝/黄/红）
```css
.number-card:nth-child(3n+1) .card-number { color: rgba(43, 127, 216, 0.08); }
.number-card:nth-child(3n+2) .card-number { color: rgba(244, 215, 88, 0.15); }
.number-card:nth-child(3n) .card-number { color: rgba(232, 74, 95, 0.1); }
```

---

### 1C. 标签卡片

适用场景：分类展示、功能矩阵、带标签的信息卡

```html
<div class="tag-card">
  <span class="card-pill card-pill--blue">分类标签</span>
  <h3 class="card-title">标题</h3>
  <p class="card-desc">描述内容</p>
</div>
```

```css
.tag-card {
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
}
.tag-card .card-pill {
  display: inline-block;
  padding: 3px 12px;
  border-radius: 20px;
  font-size: 0.7rem;
  font-weight: 500;
  margin-bottom: 14px;
}
/* pill颜色变体 */
.tag-card .card-pill--blue { background: rgba(43,127,216,0.1); color: var(--blue); }
.tag-card .card-pill--yellow { background: rgba(244,215,88,0.25); color: #9a8100; }
.tag-card .card-pill--red { background: rgba(232,74,95,0.1); color: var(--red); }
.tag-card .card-title {
  font-family: 'Noto Serif SC', serif;
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 8px;
}
.tag-card .card-desc {
  font-size: 0.85rem;
  color: var(--ink-light);
}
```

---

### 1D. 侧边icon卡片

适用场景：带图标的功能说明、能力展示、工具介绍

```html
<div class="icon-card">
  <div class="card-icon-area card-icon-area--blue">📦</div>
  <div class="card-content">
    <h3 class="card-title">标题</h3>
    <p class="card-desc">描述内容</p>
  </div>
</div>
```

```css
.icon-card {
  display: flex;
  align-items: stretch;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
  min-height: 130px;
}
.icon-card .card-icon-area {
  flex: 0 0 33%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.8rem;
}
/* icon区颜色变体 */
.icon-card .card-icon-area--blue { background: rgba(43,127,216,0.06); }
.icon-card .card-icon-area--yellow { background: rgba(244,215,88,0.12); }
.icon-card .card-icon-area--red { background: rgba(232,74,95,0.06); }
.icon-card .card-content {
  flex: 1;
  padding: 18px 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.icon-card .card-title {
  font-family: 'Noto Serif SC', serif;
  font-size: 0.95rem;
  font-weight: 700;
  margin-bottom: 6px;
}
.icon-card .card-desc {
  font-size: 0.8rem;
  color: var(--ink-light);
}
```

---

### 1E. 引用块风格卡片（5种变体）

适用场景：观点/洞察展示、Key Insights、重点提炼。根据内容调性选用不同风格。

---

#### 1E-A. 极简竖线 Minimal Line

最安静的引用风格，适合正文中嵌入的轻量级观点。

```html
<div class="quote-minimal">
  <h3 class="quote-title">观点标题</h3>
  <p class="quote-desc">观点描述内容</p>
</div>
```

```css
.quote-minimal {
  position: relative;
  padding: 24px 0 24px 32px;
}
.quote-minimal::before {
  content: '';
  position: absolute;
  left: 0;
  top: 8px;
  bottom: 8px;
  width: 2px;
  background: var(--ink);
  opacity: 0.15;
}
.quote-minimal .quote-title {
  font-family: 'Noto Serif SC', serif;
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 8px;
}
.quote-minimal .quote-desc {
  font-size: 0.88rem;
  color: var(--ink-light);
  line-height: 1.8;
}
```

---

#### 1E-B. 杂志大引号 Editorial Quote

白底圆角卡片 + oversized引号，适合长引用和核心洞察。

```html
<div class="quote-editorial">
  <h3 class="quote-title">观点标题</h3>
  <p class="quote-desc">观点描述内容</p>
  <span class="quote-source">— 来源</span>
</div>
```

```css
.quote-editorial {
  position: relative;
  padding: 48px 32px 28px 72px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 8px 40px rgba(0,0,0,0.04);
}
.quote-editorial::before {
  content: '\201C';
  position: absolute;
  top: 12px;
  left: 24px;
  font-family: 'DM Serif Display', serif;
  font-size: 5rem;
  line-height: 1;
  color: var(--yellow);
  opacity: 0.8;
}
.quote-editorial .quote-title {
  font-family: 'DM Serif Display', serif;
  font-size: 1.3rem;
  font-weight: 700;
  font-style: italic;
  margin-bottom: 12px;
  color: var(--ink);
}
.quote-editorial .quote-desc {
  font-size: 0.88rem;
  color: var(--ink-light);
  line-height: 1.9;
}
.quote-editorial .quote-source {
  margin-top: 16px;
  font-size: 0.75rem;
  color: var(--ink-faint);
  font-family: 'Fira Code', monospace;
}
```

---

#### 1E-C. 手写批注 Handwritten Note

虚线边框 + Caveat字体标签，适合提示/注意事项/笔记感。

```html
<div class="quote-handwrite">
  <span class="quote-badge">Key Insight ✦</span>
  <h3 class="quote-title">观点标题</h3>
  <p class="quote-desc">观点描述内容</p>
</div>
```

```css
.quote-handwrite {
  position: relative;
  padding: 28px 24px;
  border: 2px dashed rgba(43,127,216,0.25);
  border-radius: 12px;
  background: white;
}
.quote-handwrite .quote-badge {
  position: absolute;
  top: -12px;
  left: 20px;
  font-family: 'Caveat', cursive;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--blue);
  background: var(--cream);
  padding: 0 10px;
}
.quote-handwrite .quote-title {
  font-family: 'Caveat', cursive;
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--ink);
  margin-bottom: 8px;
  transform: rotate(-0.5deg);
}
.quote-handwrite .quote-desc {
  font-size: 0.88rem;
  color: var(--ink-light);
  line-height: 1.8;
}
```

**变体标签**: `Key Insight ✦` / `注意 ⚡` / `核心原则 🔑`

---

#### 1E-D. 荧光笔高亮 Highlighter

标题自带荧光笔底色，适合强调金句和核心论点。

```html
<div class="quote-highlight">
  <span class="quote-title">核心金句内容</span>
  <p class="quote-desc">补充说明文字</p>
</div>
```

```css
.quote-highlight {
  padding: 24px 28px;
  position: relative;
}
.quote-highlight .quote-title {
  font-family: 'Noto Serif SC', serif;
  font-size: 1.2rem;
  font-weight: 900;
  margin-bottom: 12px;
  display: inline;
  background: linear-gradient(to top, rgba(244,215,88,0.5) 45%, transparent 45%);
  line-height: 1.8;
  padding: 2px 4px;
}
.quote-highlight .quote-desc {
  font-size: 0.88rem;
  color: var(--ink-light);
  line-height: 1.9;
  margin-top: 16px;
}
```

---

#### 1E-E. 终端命令风 Terminal Style

暗色终端风格，适合技术类观点、开发者语境。

```html
<div class="quote-terminal">
  <div class="quote-toolbar">
    <span class="dot"></span><span class="dot"></span><span class="dot"></span>
  </div>
  <div class="quote-body">
    <div class="quote-prompt">$ cola insight --topic=主题</div>
    <h3 class="quote-title">观点标题</h3>
    <p class="quote-desc">观点描述内容</p>
  </div>
</div>
```

```css
.quote-terminal {
  background: #1e1e2e;
  border-radius: 12px;
  overflow: hidden;
  font-family: 'Fira Code', monospace;
}
.quote-terminal .quote-toolbar {
  background: #313244;
  padding: 8px 16px;
  display: flex;
  gap: 6px;
}
.quote-terminal .dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.quote-terminal .dot:nth-child(1) { background: var(--red); }
.quote-terminal .dot:nth-child(2) { background: var(--yellow); }
.quote-terminal .dot:nth-child(3) { background: #4ade80; }
.quote-terminal .quote-body {
  padding: 20px 24px;
}
.quote-terminal .quote-prompt {
  color: #4ade80;
  font-size: 0.75rem;
  margin-bottom: 8px;
}
.quote-terminal .quote-title {
  color: #f1f5f9;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 6px;
}
.quote-terminal .quote-desc {
  color: #94a3b8;
  font-size: 0.8rem;
  line-height: 1.8;
}
```

**使用建议**: 1E-A适合正文内嵌观点，1E-B适合核心洞察/长引用，1E-C适合提示/注意事项，1E-D适合金句强调，1E-E适合技术文章

---

## 2. Section Header（数字+标题组合）

大装饰数字 + 正式标题，制造视觉层级。

```html
<div class="section-header">
  <span class="section-number">01</span>
  <h2 class="section-title">Section标题</h2>
</div>
```

```css
.section-number {
  font-family: 'DM Serif Display', serif;
  font-style: italic;
  font-size: clamp(1.4rem, 3vw, 2rem);
  color: var(--blue, #2F6FB0);
  opacity: 0.3;
  display: block;
  margin-bottom: 0.25rem;
}
.section-title {
  font-family: 'Noto Serif SC', serif;
  font-weight: 900;
  font-size: clamp(1.4rem, 3vw, 2.2rem);
  color: var(--ink, #2A2A33);
}
```

---

## 3. 引用块 / Key Insight

三种风格可选（不使用传统左色条）：

### 3A. 极简留白式金句

黄色短线分割 + 蓝色大字金句，极简但有力。适合观点页、引用页、总结页。

```html
<div class="key-insight quote-minimal">
  <p class="quote-body">正文段落 / 背景说明</p>
  <div class="quote-rule"></div>
  <p class="quote-conclusion">金句 / 结论 / 核心观点</p>
</div>
```

```css
.quote-minimal {
  text-align: left;
}
.quote-minimal .quote-body {
  font-family: 'Noto Serif SC', serif;
  font-weight: 700;
  font-size: 1.1rem;
  line-height: 2;
  color: var(--ink, #2A2A33);
  margin-bottom: 2rem;
}
.quote-minimal .quote-body .hl {
  background: linear-gradient(transparent 60%, rgba(244,215,88,0.3) 60%);
  padding: 0 4px;
}
.quote-minimal .quote-rule {
  width: 60px;
  height: 3px;
  background: var(--yellow, #F2C53D);
  margin-bottom: 2rem;
}
.quote-minimal .quote-conclusion {
  font-family: 'Noto Serif SC', serif;
  font-size: 1.2rem;
  font-weight: 900;
  color: var(--blue, #2F6FB0);
  line-height: 1.7;
}
```

### 3B. 手写批注风

虚线边框 + Caveat字体标签，笔记批注感。

```html
<div class="key-insight quote-note">
  <span class="quote-note-tag">Key Insight ✦</span>
  <p>重要观点或引用内容</p>
</div>
```

```css
.quote-note {
  position: relative;
  padding: 24px 28px;
  background: white;
  border-radius: 10px;
  border: 1.5px dashed rgba(43, 127, 216, 0.3);
}
.quote-note-tag {
  position: absolute;
  top: -10px;
  left: 20px;
  font-family: 'Caveat', cursive;
  font-size: 1rem;
  color: var(--blue, #2F6FB0);
  background: var(--cream, #FFF8EF);
  padding: 0 8px;
  font-weight: 700;
}
.quote-note p {
  font-size: 0.93rem;
  line-height: 1.85;
  color: var(--ink-light, #6A6A76);
}
```

**变体标签**: `Key Insight ✦` / `注意 ⚡` / `核心原则 🔑`

### 3C. 纯排版强调

极短装饰线 + 斜体加粗，极简，内容即风格。

```html
<div class="key-insight quote-typo">
  <p>重要观点或引用内容</p>
</div>
```

```css
.quote-typo {
  position: relative;
  padding: 20px 28px 20px 40px;
}
.quote-typo::before {
  content: '';
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 3px;
  height: 60%;
  background: var(--yellow, #F2C53D);
  border-radius: 2px;
}
.quote-typo p {
  font-size: 1rem;
  line-height: 1.85;
  color: var(--ink, #2A2A33);
  font-weight: 500;
  font-style: italic;
}
```

**使用建议**: 3A适合长引用/关键洞察，3B适合提示/注意事项，3C适合短金句/核心原则

---

## 4. Scroll Reveal容器

几乎每页必用的入场动效。

```html
<div class="reveal">内容</div>
<div class="reveal reveal-d1">延迟0.1s</div>
<div class="reveal reveal-d2">延迟0.2s</div>
```

```css
.reveal {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
}
.reveal.visible {
  opacity: 1;
  transform: none;
}
.reveal-d1 { transition-delay: 0.1s; }
.reveal-d2 { transition-delay: 0.2s; }
.reveal-d3 { transition-delay: 0.3s; }
.reveal-d4 { transition-delay: 0.4s; }
.reveal-d5 { transition-delay: 0.5s; }

@media (prefers-reduced-motion: reduce) {
  .reveal { opacity: 1; transform: none; transition: none; }
}
```

**JS配套**（放在body底部）:
```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
```

---

## 5. 代码面板（4种变体）

代码/配置/命令展示块。根据页面调性选用不同风格。

---

### 5A. macOS窗口 Window Frame

经典macOS窗口chrome，适合展示真实代码片段。

```html
<div class="code-macos">
  <div class="code-titlebar">
    <div class="code-dots">
      <span class="dot"></span><span class="dot"></span><span class="dot"></span>
    </div>
    <span class="code-filename">filename.ts</span>
  </div>
  <div class="code-body">
    <pre><code>// 代码内容</code></pre>
  </div>
</div>
```

```css
.code-macos {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 12px 48px rgba(0,0,0,0.15);
}
.code-macos .code-titlebar {
  background: #2d2d3a;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.code-macos .code-dots { display: flex; gap: 6px; }
.code-macos .dot { width: 12px; height: 12px; border-radius: 50%; }
.code-macos .dot:nth-child(1) { background: #ff5f56; }
.code-macos .dot:nth-child(2) { background: #ffbd2e; }
.code-macos .dot:nth-child(3) { background: #27c93f; }
.code-macos .code-filename {
  flex: 1;
  text-align: center;
  font-family: 'Fira Code', monospace;
  font-size: 0.7rem;
  color: var(--ink-faint);
}
.code-macos .code-body {
  background: #1a1b26;
  padding: 24px;
}
.code-macos pre {
  font-family: 'Fira Code', monospace;
  font-size: 0.82rem;
  line-height: 1.9;
  color: #a9b1d6;
  margin: 0;
}
```

**语法高亮色**: `.kw { color: #bb9af7; }` `.fn { color: #7aa2f7; }` `.str { color: #9ece6a; }` `.cm { color: #565f89; }`

---

### 5B. 笔记本纸 Notebook Paper

温暖纸质感，适合伪代码、Markdown笔记、配置说明。

```html
<div class="code-notebook">
  <div class="code-holes"></div>
  <div class="code-tab">✏️ 文件名</div>
  <pre><code>内容</code></pre>
</div>
```

```css
.code-notebook {
  background: #fffef8;
  border: 1px solid #e8e4d9;
  border-radius: 4px;
  padding: 0;
  position: relative;
  box-shadow: 2px 3px 0 #e8e4d9;
}
.code-notebook .code-holes {
  position: absolute;
  left: 28px;
  top: 0;
  bottom: 0;
  width: 1px;
  background: rgba(232,74,95,0.2);
}
.code-notebook .code-tab {
  padding: 8px 16px 8px 48px;
  border-bottom: 1px solid #e8e4d9;
  font-family: 'Caveat', cursive;
  font-size: 1rem;
  color: var(--blue);
  font-weight: 700;
}
.code-notebook pre {
  font-family: 'Fira Code', monospace;
  font-size: 0.8rem;
  line-height: 2.2;
  color: var(--ink);
  margin: 0;
  padding: 16px 20px 16px 48px;
  background-image: repeating-linear-gradient(
    transparent, transparent 31px, rgba(43,127,216,0.05) 31px, rgba(43,127,216,0.05) 32px
  );
}
```

**语法高亮色**: `.kw { color: var(--blue); font-weight: 700; }` `.str { color: var(--red); }` `.cm { color: var(--ink-faint); }`

---

### 5C. 打字机 Typewriter

复古打字机输出风格，适合流程描述、步骤输出。

```html
<div class="code-typewriter">
  <pre><code>内容
<span class="cursor"></span></code></pre>
</div>
```

```css
.code-typewriter {
  background: #f5f0e8;
  border: 2px solid #d4c9b5;
  padding: 32px 28px;
  position: relative;
}
.code-typewriter::before {
  content: 'TYPEWRITER OUTPUT';
  position: absolute;
  top: -11px;
  left: 20px;
  font-family: 'Fira Code', monospace;
  font-size: 0.6rem;
  letter-spacing: 2px;
  color: var(--ink-faint);
  background: #f5f0e8;
  padding: 0 8px;
}
.code-typewriter pre {
  font-family: 'Fira Code', monospace;
  font-size: 0.82rem;
  line-height: 2;
  color: var(--ink);
  margin: 0;
  letter-spacing: 0.5px;
}
.code-typewriter .kw { color: var(--blue); text-decoration: underline; text-underline-offset: 3px; }
.code-typewriter .str { color: var(--red); }
.code-typewriter .cm { color: var(--ink-faint); font-style: italic; }
.code-typewriter .cursor {
  display: inline-block;
  width: 8px;
  height: 1.1em;
  background: var(--ink);
  vertical-align: middle;
  animation: blink 1s step-end infinite;
}
@keyframes blink { 50% { opacity: 0; } }
```

---

### 5D. 极简白底 Clean White

白色背景极简风，适合轻量代码展示、嵌入正文。

```html
<div class="code-clean">
  <span class="code-corner-tag">JS</span>
  <pre><code>代码内容</code></pre>
</div>
```

```css
.code-clean {
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.04);
  position: relative;
}
.code-clean .code-corner-tag {
  position: absolute;
  top: 16px;
  right: 20px;
  font-family: 'Fira Code', monospace;
  font-size: 0.6rem;
  color: var(--ink-faint);
  padding: 2px 8px;
  border: 1px solid rgba(0,0,0,0.08);
  border-radius: 4px;
}
.code-clean pre {
  font-family: 'Fira Code', monospace;
  font-size: 0.82rem;
  line-height: 2;
  color: var(--ink);
  margin: 0;
}
.code-clean .kw { color: var(--blue); font-weight: 600; }
.code-clean .fn { color: #7c3aed; }
.code-clean .str { color: var(--red); }
.code-clean .cm { color: #94a3b8; }
.code-clean .highlight-line {
  background: rgba(43,127,216,0.06);
  margin: 0 -32px;
  padding: 0 32px;
  border-left: 3px solid var(--blue);
}
```

**使用建议**: 5A适合真实代码展示，5B适合笔记/伪代码，5C适合流程/步骤输出，5D适合嵌入正文的轻量代码

---

## 6. Pull Quote（大字引用+装饰引号）

用于强调核心金句。

```html
<div class="viral-pullquote">
  <p>核心金句内容</p>
</div>
```

```css
.viral-pullquote {
  padding: 36px 40px;
  background: var(--cream, #FFF8EF);
  border-radius: 16px;
  border: 2px solid var(--yellow, #F2C53D);
  position: relative;
}
.viral-pullquote::before {
  content: '"';
  font-family: 'DM Serif Display', serif;
  font-size: 5rem;
  color: var(--yellow, #F2C53D);
  position: absolute;
  top: -10px; left: 20px;
  opacity: 0.5;
  line-height: 1;
}
.viral-pullquote p {
  font-family: 'Noto Serif SC', serif;
  font-size: clamp(1.1rem, 2vw, 1.4rem);
  font-weight: 700;
  line-height: 1.8;
}
```

---

## 7. 对话气泡组（Chat Bubbles）

用户与AI的对话展示。

```html
<div class="chat-container">
  <div class="chat-bubble user">用户说的话</div>
  <div class="chat-bubble ai">AI回复的内容</div>
</div>
```

```css
.chat-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 640px;
}
.chat-bubble {
  padding: 14px 20px;
  border-radius: 18px;
  max-width: 85%;
  font-size: 0.9rem;
  line-height: 1.6;
}
.chat-bubble.user {
  background: var(--yellow, #F2C53D);
  color: var(--ink, #2A2A33);
  align-self: flex-end;
  border-bottom-right-radius: 4px;
}
.chat-bubble.ai {
  background: var(--blue, #2F6FB0);
  color: #FFF8EF;
  align-self: flex-start;
  border-bottom-left-radius: 4px;
}
```

---

## 8. Tip Header（超大装饰数字+标题）

用超大半透明数字制造视觉冲击。

```html
<div class="tip-header">
  <span class="tip-number">01</span>
  <h2 class="tip-title">标题内容</h2>
</div>
```

```css
.tip-number {
  font-family: 'DM Serif Display', serif;
  font-size: clamp(3rem, 8vw, 7rem);
  font-weight: 900;
  color: var(--blue, #2F6FB0);
  opacity: 0.15;
  line-height: 0.85;
  display: block;
}
.tip-title {
  font-family: 'Noto Serif SC', serif;
  font-weight: 900;
  font-size: clamp(1.4rem, 3vw, 2.2rem);
  margin-top: -0.5rem;
}
```

---

## 9. 导航栏（Fixed + Backdrop Blur）

固定在顶部的毛玻璃导航。

```html
<nav>
  <span class="nav-logo">品牌名</span>
  <div class="nav-links">
    <a href="#section1">链接1</a>
    <a href="#section2">链接2</a>
  </div>
</nav>
```

```css
nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  padding: 1rem 2rem;
  background: rgba(254,252,246,.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(26,26,26,.06);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
nav.scrolled {
  box-shadow: 0 2px 20px rgba(0,0,0,.06);
}
.nav-links {
  display: flex;
  gap: 2rem;
}
.nav-links a {
  text-decoration: none;
  color: var(--ink, #2A2A33);
  font-size: 0.85rem;
  position: relative;
}
.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -4px; left: 0; right: 0;
  height: 2px;
  background: var(--yellow, #F2C53D);
  transform: scaleX(0);
  transition: transform .25s ease-out;
}
.nav-links a:hover::after {
  transform: scaleX(1);
}
```

---

## 10. 三列Chair卡片（5种变体）

三列并排卡片，用于并列展示要点/步骤/功能。根据内容风格选用。

---

### 10A. 大编号叠底 Giant Number

半透明大编号做装饰，适合步骤列表、问题清单。

```html
<div class="chair-number-grid">
  <div class="chair-number-card">
    <span class="chair-big-num">01</span>
    <h3>标题</h3>
    <p>描述内容</p>
  </div>
  <div class="chair-number-card">
    <span class="chair-big-num">02</span>
    <h3>标题</h3>
    <p>描述内容</p>
  </div>
  <div class="chair-number-card">
    <span class="chair-big-num">03</span>
    <h3>标题</h3>
    <p>描述内容</p>
  </div>
</div>
```

```css
.chair-number-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.chair-number-card {
  position: relative;
  background: white;
  border-radius: 20px;
  padding: 40px 24px 28px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.05);
  overflow: hidden;
}
.chair-number-card .chair-big-num {
  position: absolute;
  top: -15px;
  right: -5px;
  font-family: 'DM Serif Display', serif;
  font-size: 6rem;
  font-weight: 900;
  line-height: 1;
  pointer-events: none;
}
.chair-number-card:nth-child(1) .chair-big-num { color: rgba(43,127,216,0.08); }
.chair-number-card:nth-child(2) .chair-big-num { color: rgba(244,215,88,0.15); }
.chair-number-card:nth-child(3) .chair-big-num { color: rgba(232,74,95,0.08); }
.chair-number-card h3 {
  font-family: 'Noto Serif SC', serif;
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 10px;
  position: relative;
}
.chair-number-card p {
  font-size: 0.85rem;
  color: var(--ink-light);
  line-height: 1.7;
  position: relative;
}
```

---

### 10B. 杂志排版 Magazine Editorial

纯排版感，无卡片背景，适合理念/原则/哲学类内容。

```html
<div class="chair-magazine-grid">
  <div class="chair-magazine-card">
    <div class="chair-num">i.</div>
    <h3>标题</h3>
    <p>描述内容</p>
    <span class="chair-tag">标签</span>
  </div>
  <div class="chair-magazine-card">
    <div class="chair-num">ii.</div>
    <h3>标题</h3>
    <p>描述内容</p>
    <span class="chair-tag">标签</span>
  </div>
  <div class="chair-magazine-card">
    <div class="chair-num">iii.</div>
    <h3>标题</h3>
    <p>描述内容</p>
    <span class="chair-tag">标签</span>
  </div>
</div>
```

```css
.chair-magazine-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
.chair-magazine-card {
  position: relative;
  padding: 32px 0;
}
.chair-magazine-card::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 1px;
  background: var(--ink);
  opacity: 0.1;
}
.chair-magazine-card .chair-num {
  font-family: 'DM Serif Display', serif;
  font-size: 0.75rem;
  font-style: italic;
  color: var(--ink-faint);
  margin-bottom: 12px;
}
.chair-magazine-card h3 {
  font-family: 'DM Serif Display', serif;
  font-size: 1.4rem;
  font-weight: 900;
  line-height: 1.2;
  margin-bottom: 12px;
}
.chair-magazine-card p {
  font-size: 0.85rem;
  color: var(--ink-light);
  line-height: 1.8;
}
.chair-magazine-card .chair-tag {
  display: inline-block;
  margin-top: 16px;
  font-family: 'Fira Code', monospace;
  font-size: 0.65rem;
  color: var(--blue);
  text-transform: uppercase;
  letter-spacing: 1px;
}
```

---

### 10C. 手绘虚线框 Dashed Sketch

虚线边框 + Caveat标签，手绘草图感，适合技能/工具/特性介绍。

```html
<div class="chair-dashed-grid">
  <div class="chair-dashed-card">
    <span class="chair-label">Label #1</span>
    <h3>标题</h3>
    <p>描述内容</p>
  </div>
  <div class="chair-dashed-card">
    <span class="chair-label">Label #2</span>
    <h3>标题</h3>
    <p>描述内容</p>
  </div>
  <div class="chair-dashed-card">
    <span class="chair-label">Label #3</span>
    <h3>标题</h3>
    <p>描述内容</p>
  </div>
</div>
```

```css
.chair-dashed-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.chair-dashed-card {
  border: 2px dashed;
  border-radius: 16px;
  padding: 28px 22px;
  position: relative;
  background: white;
}
.chair-dashed-card:nth-child(1) { border-color: rgba(43,127,216,0.3); }
.chair-dashed-card:nth-child(2) { border-color: rgba(244,215,88,0.5); }
.chair-dashed-card:nth-child(3) { border-color: rgba(232,74,95,0.3); }
.chair-dashed-card .chair-label {
  position: absolute;
  top: -10px;
  left: 16px;
  font-family: 'Caveat', cursive;
  font-size: 0.95rem;
  font-weight: 700;
  background: var(--cream);
  padding: 0 8px;
}
.chair-dashed-card:nth-child(1) .chair-label { color: var(--blue); }
.chair-dashed-card:nth-child(2) .chair-label { color: #9a8100; }
.chair-dashed-card:nth-child(3) .chair-label { color: var(--red); }
.chair-dashed-card h3 {
  font-family: 'Noto Serif SC', serif;
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 8px;
  margin-top: 6px;
}
.chair-dashed-card p {
  font-size: 0.85rem;
  color: var(--ink-light);
  line-height: 1.7;
}
```

---

### 10D. 渐变底卡 Gradient Fill

品牌色渐变背景，适合功能亮点/核心卖点展示。

```html
<div class="chair-gradient-grid">
  <div class="chair-gradient-card">
    <div class="chair-emoji">🎯</div>
    <h3>标题</h3>
    <p>描述内容</p>
  </div>
  <div class="chair-gradient-card">
    <div class="chair-emoji">🛠️</div>
    <h3>标题</h3>
    <p>描述内容</p>
  </div>
  <div class="chair-gradient-card">
    <div class="chair-emoji">🔐</div>
    <h3>标题</h3>
    <p>描述内容</p>
  </div>
</div>
```

```css
.chair-gradient-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.chair-gradient-card {
  border-radius: 20px;
  padding: 32px 24px;
  position: relative;
  overflow: hidden;
}
.chair-gradient-card:nth-child(1) { background: linear-gradient(145deg, rgba(43,127,216,0.08), rgba(43,127,216,0.02)); }
.chair-gradient-card:nth-child(2) { background: linear-gradient(145deg, rgba(244,215,88,0.15), rgba(244,215,88,0.03)); }
.chair-gradient-card:nth-child(3) { background: linear-gradient(145deg, rgba(232,74,95,0.08), rgba(232,74,95,0.02)); }
.chair-gradient-card .chair-emoji {
  font-size: 2rem;
  margin-bottom: 16px;
}
.chair-gradient-card h3 {
  font-family: 'Noto Serif SC', serif;
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 10px;
}
.chair-gradient-card p {
  font-size: 0.85rem;
  color: var(--ink-light);
  line-height: 1.7;
}
```

---

### 10E. 纯文字排版 Typography Only

无卡片、无背景，仅用短色条和排版区分，适合理念/价值观/设计哲学。

```html
<div class="chair-typo-grid">
  <div class="chair-typo-card">
    <div class="chair-divider"></div>
    <h3>标题</h3>
    <p>描述内容</p>
    <span class="chair-meta">分类标签</span>
  </div>
  <div class="chair-typo-card">
    <div class="chair-divider"></div>
    <h3>标题</h3>
    <p>描述内容</p>
    <span class="chair-meta">分类标签</span>
  </div>
  <div class="chair-typo-card">
    <div class="chair-divider"></div>
    <h3>标题</h3>
    <p>描述内容</p>
    <span class="chair-meta">分类标签</span>
  </div>
</div>
```

```css
.chair-typo-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 48px; }
.chair-typo-card .chair-divider {
  width: 32px;
  height: 3px;
  margin-bottom: 20px;
}
.chair-typo-card:nth-child(1) .chair-divider { background: var(--blue); }
.chair-typo-card:nth-child(2) .chair-divider { background: var(--yellow); }
.chair-typo-card:nth-child(3) .chair-divider { background: var(--red); }
.chair-typo-card h3 {
  font-family: 'DM Serif Display', serif;
  font-size: 1.3rem;
  font-weight: 900;
  margin-bottom: 12px;
  line-height: 1.3;
}
.chair-typo-card p {
  font-size: 0.88rem;
  color: var(--ink-light);
  line-height: 1.9;
}
.chair-typo-card .chair-meta {
  margin-top: 16px;
  font-family: 'Fira Code', monospace;
  font-size: 0.65rem;
  color: var(--ink-faint);
  text-transform: uppercase;
  letter-spacing: 1px;
}
```

**使用建议**: 10A适合步骤/编号类，10B适合理念/哲学类，10C适合技能/工具介绍，10D适合功能卖点/特性，10E适合极简排版语境

---

## 11. 系统流程条（Flow Arrow）

用箭头连接的流程展示。

```html
<div class="system-flow">
  <span>步骤1</span>
  <span class="flow-arrow">→</span>
  <span>步骤2</span>
  <span class="flow-arrow">→</span>
  <span>步骤3</span>
  <span class="flow-arrow">→</span>
  <span>步骤4</span>
</div>
```

```css
.system-flow {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  padding: 24px 32px;
  background: var(--cream, #FFF8EF);
  border-radius: 14px;
  border: 1px solid rgba(43, 127, 216, 0.1);
}
.system-flow span {
  font-size: 0.9rem;
  padding: 6px 14px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,.04);
}
.flow-arrow {
  color: var(--blue, #2F6FB0);
  font-size: 1.2rem;
  background: transparent !important;
  box-shadow: none !important;
  padding: 0 !important;
}
```

---

## 12. Do/Don't对比列表（4种变体）

红蓝对比的规范列表。根据页面风格选用不同展现形式。

---

### 12A. 卡片分栏 Card Columns

白色卡片 + 彩色底线，适合正式的规范/准则展示。

```html
<div class="compare-cards">
  <div class="compare-block compare-block--dont">
    <div class="compare-header">
      <span class="compare-icon">🚫</span>
      <span class="compare-label">Don't</span>
    </div>
    <ul>
      <li>不要做的事1</li>
      <li>不要做的事2</li>
    </ul>
  </div>
  <div class="compare-block compare-block--do">
    <div class="compare-header">
      <span class="compare-icon">✅</span>
      <span class="compare-label">Do</span>
    </div>
    <ul>
      <li>应该做的事1</li>
      <li>应该做的事2</li>
    </ul>
  </div>
</div>
```

```css
.compare-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}
.compare-block {
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.04);
}
.compare-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 2px solid;
}
.compare-block--dont .compare-header { border-color: var(--red); }
.compare-block--do .compare-header { border-color: var(--blue); }
.compare-header .compare-icon { font-size: 1.3rem; }
.compare-header .compare-label {
  font-family: 'DM Serif Display', serif;
  font-size: 1rem;
  font-weight: 700;
}
.compare-block--dont .compare-label { color: var(--red); }
.compare-block--do .compare-label { color: var(--blue); }
.compare-block ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.compare-block li {
  font-size: 0.88rem;
  color: var(--ink-light);
  padding-left: 20px;
  position: relative;
  line-height: 1.6;
}
.compare-block--dont li::before { content: '×'; position: absolute; left: 0; color: var(--red); font-weight: 700; }
.compare-block--do li::before { content: '✓'; position: absolute; left: 0; color: var(--blue); font-weight: 700; }
```

---

### 12B. 手写笔记 Handwritten Notes

Caveat字体标题 + 虚线边框，适合轻松/教程类内容。

```html
<div class="compare-handwrite">
  <span class="compare-annotation">— 主题标注 ✏️</span>
  <div class="compare-titles">
    <div class="compare-col-title compare-col-title--dont">别这样 ✗</div>
    <div class="compare-col-title compare-col-title--do">要这样 ✓</div>
  </div>
  <div class="compare-items">
    <div class="compare-item compare-item--dont">不要做的事</div>
    <div class="compare-item">应该做的事</div>
    <!-- 更多成对条目 -->
  </div>
</div>
```

```css
.compare-handwrite {
  position: relative;
  background: white;
  border-radius: 16px;
  padding: 32px;
  border: 1.5px dashed rgba(0,0,0,0.12);
}
.compare-handwrite .compare-annotation {
  position: absolute;
  top: -12px;
  right: 24px;
  font-family: 'Caveat', cursive;
  font-size: 0.95rem;
  color: var(--ink-faint);
  background: var(--cream);
  padding: 0 8px;
  transform: rotate(2deg);
}
.compare-handwrite .compare-titles {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 24px;
}
.compare-col-title {
  font-family: 'Caveat', cursive;
  font-size: 1.4rem;
  font-weight: 700;
}
.compare-col-title--dont { color: var(--red); }
.compare-col-title--do { color: var(--blue); }
.compare-handwrite .compare-items {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px 24px;
}
.compare-handwrite .compare-item {
  font-size: 0.88rem;
  color: var(--ink-light);
  line-height: 1.6;
  padding: 8px 0;
  border-bottom: 1px solid rgba(0,0,0,0.04);
}
.compare-handwrite .compare-item--dont { text-decoration: line-through; opacity: 0.6; }
```

---

### 12C. 表格对比 Table View

结构化表格风格，适合规格比较、功能矩阵。

```html
<div class="compare-table">
  <div class="compare-table-header">
    <span>实践</span>
    <span>Don't</span>
    <span>Do</span>
  </div>
  <div class="compare-table-row">
    <span class="compare-practice">具体实践描述</span>
    <span class="compare-status">⛔</span>
    <span class="compare-status">✅</span>
  </div>
  <!-- 更多行 -->
</div>
```

```css
.compare-table {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
}
.compare-table-header {
  display: grid;
  grid-template-columns: 1fr 80px 80px;
  background: var(--ink);
  padding: 12px 20px;
}
.compare-table-header span {
  font-family: 'Fira Code', monospace;
  font-size: 0.7rem;
  color: rgba(255,255,255,0.6);
  text-transform: uppercase;
  letter-spacing: 1px;
}
.compare-table-header span:not(:first-child) { text-align: center; }
.compare-table-row {
  display: grid;
  grid-template-columns: 1fr 80px 80px;
  padding: 14px 20px;
  background: white;
  border-bottom: 1px solid rgba(0,0,0,0.04);
  align-items: center;
}
.compare-table-row:last-child { border-bottom: none; }
.compare-table-row .compare-practice {
  font-size: 0.88rem;
  color: var(--ink-light);
}
.compare-table-row .compare-status {
  text-align: center;
  font-size: 1.1rem;
}
```

---

### 12D. 印章边框 Stamped Frame

实线边框 + 居中印章标签，适合正式文档/设计规范。

```html
<div class="compare-stamp">
  <div class="compare-stamp-col compare-stamp-col--dont">
    <span class="compare-stamp-label">AVOID</span>
    <ul>
      <li>不要做的事1</li>
      <li>不要做的事2</li>
    </ul>
  </div>
  <div class="compare-stamp-col compare-stamp-col--do">
    <span class="compare-stamp-label">PREFER</span>
    <ul>
      <li>应该做的事1</li>
      <li>应该做的事2</li>
    </ul>
  </div>
</div>
```

```css
.compare-stamp {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}
.compare-stamp-col {
  background: white;
  border: 2px solid;
  padding: 28px 24px;
  position: relative;
  border-radius: 4px;
}
.compare-stamp-col--dont { border-color: var(--red); }
.compare-stamp-col--do { border-color: var(--blue); }
.compare-stamp-col .compare-stamp-label {
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  font-family: 'DM Serif Display', serif;
  font-size: 0.75rem;
  font-weight: 900;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 2px 16px;
  background: var(--cream);
}
.compare-stamp-col--dont .compare-stamp-label { color: var(--red); }
.compare-stamp-col--do .compare-stamp-label { color: var(--blue); }
.compare-stamp-col ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 8px;
}
.compare-stamp-col li {
  font-size: 0.85rem;
  color: var(--ink-light);
  line-height: 1.6;
  padding-left: 24px;
  position: relative;
}
.compare-stamp-col--dont li::before {
  content: '✕';
  position: absolute;
  left: 0;
  font-weight: 700;
  font-size: 0.8rem;
  color: var(--red);
}
.compare-stamp-col--do li::before {
  content: '◆';
  position: absolute;
  left: 0;
  font-size: 0.6rem;
  top: 4px;
  color: var(--blue);
}
```

**使用建议**: 12A适合正式规范/准则，12B适合教程/轻松语境，12C适合多维度对比，12D适合设计文档/正式规范

---

## 13. 技能卡片（顶部色条Hover）

Hover时出现品牌色顶条（**单色，不用渐变**）。

```html
<div class="skill-card">
  <h3>技能名称</h3>
  <p>技能描述</p>
</div>
```

```css
.skill-card {
  background: #fff;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0,0,0,.06);
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease;
}
.skill-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: var(--red, #D8453B);
  opacity: 0;
  transition: opacity .3s;
}
.skill-card:hover {
  transform: translateY(-4px);
}
.skill-card:hover::before {
  opacity: 1;
}
```

---

## 14. 全屏Quote暗色块

沉浸式暗色引用面板。

```html
<section class="quote-section">
  <div class="quote-inner">
    <p class="quote-text">引用的 <em>重点词</em> 内容</p>
    <p class="quote-attr">— 来源</p>
  </div>
</section>
```

```css
.quote-section {
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0d1117;
  color: #fff;
  padding: clamp(60px, 8vh, 120px) 2rem;
}
.quote-inner {
  max-width: 720px;
  text-align: center;
}
.quote-text {
  font-size: clamp(1.3rem, 3vw, 2rem);
  font-family: 'Noto Serif SC', serif;
  font-weight: 700;
  line-height: 1.8;
}
.quote-text em {
  color: var(--yellow, #F2C53D);
  font-style: normal;
}
.quote-attr {
  margin-top: 1.5rem;
  font-size: 0.85rem;
  opacity: 0.6;
}
```

---

## 15. 头像集群（Avatar Cluster + Orbit标签）

带轨道旋转标签的头像展示。

```html
<div class="hero-cluster">
  <div class="ring"></div>
  <div class="avatar-glow"></div>
  <img class="avatar-img" src="avatar.png" alt="">
  <span class="orbit-item" style="top:0;right:10%">标签1</span>
  <span class="orbit-item" style="bottom:10%;left:0">标签2</span>
</div>
```

```css
.hero-cluster {
  position: relative;
  width: clamp(160px, 22vw, 240px);
  height: clamp(160px, 22vw, 240px);
}
.ring {
  position: absolute;
  inset: -12px;
  border: 2px dashed rgba(43,127,216,0.25);
  border-radius: 50%;
  animation: heroSpin 20s linear infinite;
}
.avatar-img {
  width: 100%; height: 100%;
  border-radius: 50%;
  object-fit: cover;
  position: relative;
  z-index: 2;
}
.orbit-item {
  position: absolute;
  background: white;
  border-radius: 20px;
  padding: 4px 12px;
  font-size: 0.7rem;
  box-shadow: 0 2px 12px rgba(0,0,0,.08);
  z-index: 3;
}
@keyframes heroSpin {
  to { transform: rotate(360deg); }
}
```

---

## 16. Filter标签栏

可切换的过滤标签。

```html
<div class="filter-bar">
  <button class="filter-tag active">全部</button>
  <button class="filter-tag">分类1</button>
  <button class="filter-tag">分类2</button>
</div>
```

```css
.filter-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 2rem;
}
.filter-tag {
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 12px;
  background: rgba(0,0,0,.05);
  border: none;
  cursor: pointer;
  transition: all .2s;
}
.filter-tag.active {
  color: #fff;
  background: var(--blue, #2F6FB0);
}
.filter-tag:hover:not(.active) {
  background: rgba(0,0,0,.1);
}
```

---

## 17. 书卡（Book Card）

带分类标签和简评的卡片。

```html
<div class="book-card">
  <span class="category-badge">分类</span>
  <h3>书名</h3>
  <p class="author">作者名</p>
  <p class="verdict">一句话简评</p>
  <div class="tags">
    <span class="tag">标签1</span>
    <span class="tag">标签2</span>
  </div>
</div>
```

```css
.book-card {
  background: #fff;
  border-radius: 16px;
  padding: 28px 24px 22px;
  box-shadow: 0 8px 40px rgba(0,0,0,.1);
  cursor: pointer;
  transition: transform .2s, box-shadow .2s;
}
.book-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 48px rgba(0,0,0,.14);
}
.category-badge {
  display: inline-block;
  padding: 3px 10px;
  border-radius: 12px;
  font-size: 0.7rem;
  background: rgba(43,127,216,0.1);
  color: var(--blue, #2F6FB0);
  margin-bottom: 0.75rem;
}
.verdict {
  border-left: 3px solid var(--blue, #2F6FB0);
  padding-left: 12px;
  font-size: 0.85rem;
  color: var(--ink-light, #6A6A76);
  margin: 0.75rem 0;
}
.tag {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 8px;
  font-size: 0.7rem;
  background: var(--cream-dark, #F5E9D6);
}
```

---

## 18. Modal滚动阅读

固定定位的模态详情面板。

```html
<div class="modal-overlay" id="modal">
  <div class="modal-close" onclick="closeModal()">×</div>
  <div class="book-scroll">
    <div class="book-section">
      <h2>详情标题</h2>
      <p>详情内容</p>
    </div>
  </div>
</div>
```

```css
.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 1000;
  overflow-y: auto;
  background: rgba(0,0,0,.6);
  backdrop-filter: blur(4px);
  display: none;
  padding: 5vh 0;
}
.modal-overlay.active { display: block; }
.modal-close {
  position: fixed;
  top: 1.5rem; right: 1.5rem;
  width: 40px; height: 40px;
  border-radius: 50%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.4rem;
  z-index: 1001;
}
.book-scroll {
  max-width: 640px;
  margin: 0 auto;
}
.book-section {
  background: var(--cream, #FFF8EF);
  padding: 48px 44px;
  margin-bottom: 2px;
  border-radius: 16px;
}
```

---

## 19. 日历网格（Emoji情绪记录）

7列日历网格，适合追踪型展示。

```html
<div class="cal-grid">
  <div class="cal-cell">
    <span class="day-num">1</span>
    <span class="mood-emoji">😊</span>
  </div>
  <!-- 更多日期 -->
</div>
```

```css
.cal-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 3px;
}
.cal-cell {
  aspect-ratio: 1;
  border-radius: 6px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4px;
}
.day-num {
  font-size: 0.7rem;
  color: var(--ink-light, #6A6A76);
}
.mood-emoji {
  font-size: 1.2rem;
}
```

---

## 20. CTA按钮

品牌风格的行动按钮。

```html
<a href="#" class="cta-button">立即行动</a>
```

```css
.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 32px;
  background: var(--blue, #2F6FB0);
  color: #fff;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: transform .2s, box-shadow .2s;
}
.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(43,127,216,0.3);
}
```

**变体**: 黄色CTA — `background: var(--yellow); color: var(--ink);`

---

## 21. 对比表A：杂志Editorial对比

不对称grid布局（左0.35fr 右1fr），左边放大标题区（sticky），右边每行是DM Serif Display大号编号+两列对比值。暖色背景，无深色。

适用场景：两个事物的对比分析、before/after、竞品对比、架构拆解类页面

```html
<section class="section-editorial">
  <div class="container">
    <div class="editorial-layout">
      <div class="editorial-side">
        <span class="big-label">VS</span>
        <span class="section-number">04</span>
        <h2 class="section-title">对比标题</h2>
        <p class="editorial-subtitle">补充说明文字</p>
      </div>
      <div class="editorial-rows">
        <div class="editorial-row">
          <div class="editorial-num">01</div>
          <div class="editorial-col">
            <h4>对象A</h4>
            <p>值A</p>
          </div>
          <div class="editorial-col">
            <h4>对象B</h4>
            <p>值B</p>
          </div>
        </div>
        <!-- 更多行... -->
        <div style="margin-top: 8px;">
          <span class="editorial-dim">维度1 → 维度2 → 维度3</span>
        </div>
      </div>
    </div>
  </div>
</section>
```

```css
/* 杂志Editorial对比 */
.section-editorial {
  background: #F5E9D6;
  padding: clamp(80px, 12vh, 160px) 0;
}
.section-editorial .section-number {
  font-family: 'DM Serif Display', serif;
  font-style: italic;
  font-size: clamp(1.4rem, 3vw, 2rem);
  color: var(--blue, #2F6FB0);
  opacity: 0.3;
  display: block;
  margin-bottom: 0.25rem;
}
.section-editorial .section-title {
  font-family: 'Noto Serif SC', serif;
  font-weight: 900;
  font-size: clamp(1.4rem, 3vw, 2.2rem);
  color: var(--ink, #2A2A33);
}
.editorial-layout {
  display: grid;
  grid-template-columns: 0.35fr 1fr;
  gap: clamp(40px, 6vw, 100px);
  align-items: start;
}
.editorial-side {
  position: sticky;
  top: 100px;
}
.editorial-side .big-label {
  font-family: 'DM Serif Display', serif;
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 900;
  color: var(--blue, #2F6FB0);
  opacity: 0.1;
  line-height: 0.85;
  display: block;
}
.editorial-side .editorial-subtitle {
  font-size: 0.9rem;
  color: var(--ink-light, #6A6A76);
  margin-top: 1rem;
  line-height: 1.7;
}
.editorial-rows {
  display: flex;
  flex-direction: column;
}
.editorial-row {
  display: grid;
  grid-template-columns: 80px 1fr 1fr;
  gap: 16px;
  align-items: start;
  padding: 28px 0;
  border-bottom: 1px solid rgba(0,0,0,0.05);
}
.editorial-row:last-child { border-bottom: none; }
.editorial-num {
  font-family: 'DM Serif Display', serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--yellow, #F2C53D);
  line-height: 1;
}
.editorial-col h4 {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: var(--ink-faint, #9A9AA6);
  margin-bottom: 4px;
}
.editorial-col p {
  font-size: 0.95rem;
  color: var(--ink, #2A2A33);
}
.editorial-dim {
  font-family: 'Caveat', cursive;
  font-size: 1.1rem;
  color: var(--ink-faint, #9A9AA6);
  margin-top: 8px;
}

@media (max-width: 640px) {
  .editorial-layout {
    grid-template-columns: 1fr;
  }
  .editorial-side {
    position: static;
  }
  .editorial-row {
    grid-template-columns: 50px 1fr;
  }
  .editorial-row .editorial-col:last-child {
    grid-column: 2;
  }
}
```

---

## 22. 对比表B：圆点标识表

极简风格，无边框无线条。每行前面一个品牌色圆点做标识，三列：维度 | 值A | 值B。只靠字体粗细和颜色区分层次。

适用场景：简洁数据对比、功能列表、规格比较、sidebar信息面板

```html
<div class="dot-table">
  <div class="dot-row">
    <div class="dot-dim">维度名</div>
    <div class="dot-val">值A</div>
    <div class="dot-val">值B</div>
  </div>
  <div class="dot-row">
    <div class="dot-dim">维度名</div>
    <div class="dot-val">值A</div>
    <div class="dot-val">值B</div>
  </div>
  <!-- 更多行... -->
</div>
```

```css
/* 圆点标识表 */
.dot-table {
  display: flex;
  flex-direction: column;
}
.dot-row {
  display: grid;
  grid-template-columns: 120px 1fr 1fr;
  gap: 16px;
  padding: 16px 0;
  align-items: baseline;
}
.dot-dim {
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--ink-faint, #9A9AA6);
  position: relative;
  padding-left: 16px;
}
.dot-dim::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--yellow, #F2C53D);
}
.dot-row:nth-child(2n) .dot-dim::before { background: var(--blue, #2F6FB0); }
.dot-row:nth-child(3n) .dot-dim::before { background: var(--red, #D8453B); }
.dot-val {
  font-size: 0.9rem;
  color: var(--ink, #2A2A33);
}

@media (max-width: 640px) {
  .dot-row {
    grid-template-columns: 1fr;
    gap: 4px;
    padding: 12px 0 12px 16px;
    border-left: 2px solid rgba(0,0,0,0.05);
  }
}
```

---

## 21. 机票/航班卡片（3种变体）

用于展示航班、交通等行程信息。三种风格适配不同场景。

### §21A — 复古登机牌风

模拟真实纸质登机牌，撕裂边缘/穿孔线，monospace字体，vintage质感。适合旅行主题页面。

```html
<div class="ticket-vintage">
  <div class="main-section">
    <div class="airline-row">
      <span class="badge">MH377</span>
      <span>MALAYSIA AIRLINES</span>
    </div>
    <div class="route-row">
      <div>
        <div class="city-code">CAN</div>
        <div class="city-name">白云T2</div>
      </div>
      <div class="route-arrow"><span>4h05m ✈</span></div>
      <div>
        <div class="city-code">KUL</div>
        <div class="city-name">吉隆坡T1</div>
      </div>
    </div>
    <div class="time-row">DEP 14:25 → ARR 18:30</div>
    <div class="details-row">
      <div class="detail-item"><label>Aircraft</label><span>A330-300</span></div>
      <div class="detail-item"><label>Class</label><span>Economy</span></div>
      <div class="detail-item"><label>Meal</label><span>Included</span></div>
    </div>
  </div>
  <div class="stub-section">
    <div class="stub-label">Date</div>
    <div class="stub-date">24 SEP</div>
    <div class="stub-label">Seat</div>
    <div class="stub-seat">32A</div>
    <div class="barcode"><!-- 用JS或手写span生成 --></div>
  </div>
</div>
```

```css
.ticket-vintage {
  background: #F5E9D6;
  border: 2px dashed #c4b89a;
  border-radius: 4px;
  padding: 0;
  position: relative;
  overflow: hidden;
  display: flex;
}
.ticket-vintage::before {
  content: '';
  position: absolute;
  top: 0; bottom: 0;
  right: 28%;
  width: 2px;
  background: repeating-linear-gradient(to bottom, transparent 0px, transparent 4px, #c4b89a 4px, #c4b89a 12px);
}
.ticket-vintage .main-section {
  flex: 1;
  padding: clamp(20px, 3vw, 36px);
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.ticket-vintage .stub-section {
  width: 28%;
  padding: clamp(16px, 2vw, 28px);
  background: #f5f0e3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  text-align: center;
}
.ticket-vintage .airline-row {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Fira Code', monospace;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #6A6A76;
}
.ticket-vintage .airline-row .badge {
  background: #2F6FB0;
  color: #FFF8EF;
  padding: 2px 8px;
  font-size: 0.65rem;
  font-weight: 600;
}
.ticket-vintage .route-row {
  display: flex;
  align-items: center;
  gap: clamp(12px, 2vw, 24px);
}
.ticket-vintage .city-code {
  font-family: 'Fira Code', monospace;
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  font-weight: 600;
  color: #2A2A33;
}
.ticket-vintage .city-name {
  font-size: 0.7rem;
  color: #888;
}
.ticket-vintage .route-arrow {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.ticket-vintage .route-arrow::before {
  content: '';
  width: 100%;
  height: 1px;
  background: #c4b89a;
  position: absolute;
}
.ticket-vintage .route-arrow span {
  background: #F5E9D6;
  padding: 0 8px;
  position: relative;
  font-family: 'Fira Code', monospace;
  font-size: 0.65rem;
  color: #888;
}
.ticket-vintage .time-row {
  font-family: 'Fira Code', monospace;
  font-size: 0.72rem;
  color: #6A6A76;
}
.ticket-vintage .details-row {
  display: flex;
  gap: clamp(16px, 3vw, 32px);
  flex-wrap: wrap;
}
.ticket-vintage .detail-item label {
  font-family: 'Fira Code', monospace;
  font-size: 0.6rem;
  text-transform: uppercase;
  color: #888;
  letter-spacing: 0.12em;
}
.ticket-vintage .detail-item span {
  font-family: 'Fira Code', monospace;
  font-size: 0.78rem;
  color: #2A2A33;
}
.ticket-vintage .stub-section .stub-date {
  font-family: 'Fira Code', monospace;
  font-size: 0.85rem;
  font-weight: 600;
}
.ticket-vintage .stub-section .stub-seat {
  font-family: 'Fira Code', monospace;
  font-size: 1.4rem;
  font-weight: 600;
  color: #D8453B;
}
```

---

### §21B — 杂志排版风

大字号对比、editorial layout，留白多，时间数字特别大。适合强调时间感的行程展示。

```html
<div class="ticket-editorial">
  <div class="top-line">
    <span class="flight-no">MH377 · MALAYSIA AIRLINES</span>
    <span class="date-display">24 September</span>
  </div>
  <div class="time-hero">
    <span class="time-big">14:25</span>
    <span class="time-divider">→</span>
    <span class="time-big">18:30</span>
  </div>
  <div class="cities-line">
    <span class="city-editorial">广州 <span class="airport">CAN 白云T2</span></span>
    <span class="arrow-editorial">—</span>
    <span class="city-editorial">吉隆坡 <span class="airport">KUL T1</span></span>
  </div>
  <div class="meta-strip">
    <div class="meta-item"><span class="label">Duration</span><span class="value">4h 05m</span></div>
    <div class="meta-item"><span class="label">Aircraft</span><span class="value">A330-300</span></div>
    <div class="meta-item"><span class="label">Class</span><span class="value">Economy</span></div>
    <div class="meta-item"><span class="label">Meal</span><span class="value">Included</span></div>
  </div>
</div>
```

```css
.ticket-editorial {
  background: #FFF8EF;
  border-top: 3px solid #2A2A33;
  border-bottom: 1px solid #e8e4dc;
  padding: clamp(28px, 4vw, 48px) clamp(20px, 3vw, 36px);
}
.ticket-editorial .top-line {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 24px;
}
.ticket-editorial .flight-no {
  font-family: 'DM Serif Display', serif;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: #6A6A76;
}
.ticket-editorial .date-display {
  font-family: 'DM Serif Display', serif;
  font-style: italic;
  font-size: 0.9rem;
  color: #888;
}
.ticket-editorial .time-hero {
  display: flex;
  align-items: baseline;
  gap: clamp(16px, 4vw, 40px);
  margin-bottom: 8px;
}
.ticket-editorial .time-big {
  font-family: 'DM Serif Display', serif;
  font-size: clamp(3.5rem, 10vw, 6rem);
  font-weight: 900;
  line-height: 0.9;
  color: #2A2A33;
}
.ticket-editorial .time-divider {
  font-family: 'DM Serif Display', serif;
  font-size: clamp(2rem, 5vw, 3rem);
  color: #F2C53D;
  font-weight: 300;
}
.ticket-editorial .cities-line {
  display: flex;
  gap: clamp(16px, 4vw, 40px);
  align-items: baseline;
  margin-bottom: 28px;
}
.ticket-editorial .city-editorial {
  font-family: 'Noto Serif SC', serif;
  font-size: clamp(1.1rem, 2.5vw, 1.5rem);
  font-weight: 700;
  color: #2A2A33;
}
.ticket-editorial .city-editorial .airport {
  font-family: 'Noto Sans SC', sans-serif;
  font-size: 0.72rem;
  font-weight: 400;
  color: #888;
  margin-left: 6px;
}
.ticket-editorial .arrow-editorial {
  color: #2F6FB0;
  font-size: 1.2rem;
}
.ticket-editorial .meta-strip {
  display: flex;
  gap: clamp(24px, 4vw, 48px);
  flex-wrap: wrap;
  padding-top: 16px;
  border-top: 1px solid #e8e4dc;
}
.ticket-editorial .meta-item {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.ticket-editorial .meta-item .label {
  font-size: 0.6rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #888;
}
.ticket-editorial .meta-item .value {
  font-family: 'DM Serif Display', serif;
  font-size: 0.9rem;
  font-weight: 700;
  color: #2A2A33;
}
```

---

### §21C — 极简信息卡

黑白为主+红色圆点点缀，信息紧凑。适合密集行程列表。

```html
<div class="ticket-minimal">
  <div class="min-header">
    <span class="min-airline">马来西亚航空 MH377 · 9月24日</span>
    <span class="min-dot"></span>
  </div>
  <div class="min-route">
    <div class="min-point">
      <span class="time">14:25</span>
      <span class="code">CAN 白云T2</span>
    </div>
    <div class="min-connector">
      <div class="line"></div>
      <span class="duration">4h05m</span>
    </div>
    <div class="min-point">
      <span class="time">18:30</span>
      <span class="code">KUL 吉隆坡T1</span>
    </div>
  </div>
  <div class="min-footer">
    <span>空客330-300</span>
    <span>经济舱</span>
    <span>有餐食</span>
  </div>
</div>
```

```css
.ticket-minimal {
  background: #FFF8EF;
  border: 1px solid #e8e4dc;
  border-left: 4px solid #2A2A33;
  padding: clamp(20px, 3vw, 32px);
}
.ticket-minimal .min-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.ticket-minimal .min-airline {
  font-size: 0.72rem;
  font-weight: 500;
  color: #6A6A76;
}
.ticket-minimal .min-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #D8453B;
}
.ticket-minimal .min-route {
  display: flex;
  align-items: center;
  gap: clamp(12px, 3vw, 28px);
  margin-bottom: 20px;
}
.ticket-minimal .min-point .time {
  font-size: clamp(1.4rem, 3.5vw, 1.8rem);
  font-weight: 700;
  color: #2A2A33;
  line-height: 1;
}
.ticket-minimal .min-point .code {
  font-size: 0.72rem;
  color: #888;
}
.ticket-minimal .min-connector {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}
.ticket-minimal .min-connector .line {
  width: 100%;
  height: 1px;
  background: #2A2A33;
  position: relative;
}
.ticket-minimal .min-connector .line::after {
  content: '';
  position: absolute;
  right: -1px;
  top: -3px;
  width: 0; height: 0;
  border-left: 5px solid #2A2A33;
  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;
}
.ticket-minimal .min-connector .duration {
  font-size: 0.65rem;
  color: #888;
}
.ticket-minimal .min-footer {
  display: flex;
  gap: clamp(16px, 3vw, 32px);
  flex-wrap: wrap;
  font-size: 0.72rem;
  color: #6A6A76;
}
.ticket-minimal .min-footer span::before {
  content: '';
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: #c4b89a;
  display: inline-block;
  margin-right: 4px;
  vertical-align: middle;
}
```

---

## 22. 住宿/酒店卡片（3种变体）

用于展示酒店、民宿等住宿信息。三种风格适配不同场景。

### §22A — 杂志排版风

顶部粗黑线、大衬线酒店名、底部meta细线分隔、大量留白。适合高端酒店展示。

```html
<div class="hotel-editorial">
  <div class="hotel-name-zh">吉隆坡大华酒店</div>
  <div class="hotel-name-en">The Majestic Hotel Kuala Lumpur, Autograph Collection</div>
  <div class="detail-row">
    <div class="detail-item">
      <div class="detail-label">日期</div>
      <div class="detail-value">9/24 — 9/26 · 2晚</div>
    </div>
    <div class="detail-item">
      <div class="detail-label">房型</div>
      <div class="detail-value">豪华双床客房 · 2张双人床 · 40㎡</div>
    </div>
    <div class="detail-item">
      <div class="detail-label">早餐</div>
      <div class="detail-value">无早餐</div>
    </div>
    <div class="detail-item">
      <div class="detail-label">入住</div>
      <div class="detail-value">15:00后</div>
    </div>
  </div>
  <div class="note">⚠ 订单确认后不可取消 · 建议提前3天联系酒店确认</div>
</div>
```

```css
.hotel-editorial {
  border-top: 4px solid var(--ink);
  padding: clamp(24px, 3vw, 40px) 0;
}
.hotel-editorial .hotel-name-zh {
  font-family: 'Noto Serif SC', serif;
  font-weight: 900;
  font-size: clamp(1.8rem, 5vw, 2.8rem);
  line-height: 1.2;
  margin-bottom: 4px;
}
.hotel-editorial .hotel-name-en {
  font-family: 'DM Serif Display', serif;
  font-style: italic;
  font-size: 0.85rem;
  color: var(--sub);
  margin-bottom: clamp(20px, 3vw, 32px);
}
.hotel-editorial .detail-row {
  display: flex;
  flex-wrap: wrap;
}
.hotel-editorial .detail-item {
  padding: 10px 0;
  border-top: 1px solid #e0ddd4;
  flex: 1 1 auto;
  min-width: 140px;
}
.hotel-editorial .detail-item:not(:last-child) {
  padding-right: 20px;
  margin-right: 20px;
  border-right: 1px solid #e0ddd4;
}
.hotel-editorial .detail-label {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--muted);
  margin-bottom: 2px;
}
.hotel-editorial .detail-value {
  font-size: 0.9rem;
  font-weight: 500;
}
.hotel-editorial .note {
  margin-top: 16px;
  font-size: 0.78rem;
  color: var(--muted);
  padding-top: 12px;
  border-top: 1px solid #e0ddd4;
}
```

---

### §22B — 明信片/邮票风

邮戳装饰+手写字体+虚线边框。适合旅行日记风格页面。

```html
<div class="hotel-postcard">
  <div class="city-tag">Kuala Lumpur, Malaysia</div>
  <div class="handwritten-title">吉隆坡大华酒店</div>
  <div class="postcard-body">
    9月24号到26号，住两晚～<br>
    豪华双床客房，40㎡，两张大双人床。<br>
    下午三点后入住，没有早餐哦。
  </div>
  <div class="postcard-meta">
    <span>不可取消</span>
    <span>提前3天联系确认</span>
    <span>15:00 check-in</span>
  </div>
</div>
```

```css
.hotel-postcard {
  background: #fffdf7;
  border: 2px solid #d4c9a8;
  border-radius: 4px;
  padding: clamp(24px, 4vw, 40px);
  position: relative;
  overflow: hidden;
  box-shadow: 2px 3px 12px rgba(0,0,0,0.06);
}
.hotel-postcard::before {
  content: '';
  position: absolute;
  top: 12px; right: 12px;
  width: 56px; height: 64px;
  border: 2px dashed #c4b68a;
  border-radius: 2px;
  opacity: 0.5;
}
.hotel-postcard .city-tag {
  display: inline-block;
  font-family: 'DM Serif Display', serif;
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--blue);
  border-bottom: 1.5px solid var(--yellow);
  padding-bottom: 2px;
  margin-bottom: 16px;
}
.hotel-postcard .handwritten-title {
  font-family: 'Caveat', cursive;
  font-size: clamp(1.6rem, 4vw, 2.2rem);
  font-weight: 700;
  color: var(--ink);
  margin-bottom: 4px;
  transform: rotate(-1deg);
}
.hotel-postcard .postcard-body {
  font-family: 'Caveat', cursive;
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--sub);
  margin-top: 12px;
}
.hotel-postcard .postcard-meta {
  margin-top: 20px;
  padding-top: 12px;
  border-top: 1px dashed #c4b68a;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  font-size: 0.8rem;
  color: var(--sub);
}
.hotel-postcard .postcard-meta span::before {
  content: '✦ ';
  color: var(--yellow);
}
```

---

### §22C — 杂志格栅

CSS Grid两栏布局、2px粗边框系统、酒店名跨列、日期蓝色大字高亮。适合信息密度高的行程总览。

```html
<div class="hotel-grid">
  <div class="eg-title">
    <h3>吉隆坡大华酒店</h3>
    <div class="eg-en">The Majestic Hotel Kuala Lumpur, Autograph Collection</div>
  </div>
  <div class="eg-col-left">
    <div class="eg-date-highlight">9/24 — 26</div>
    <div class="eg-field">
      <div class="eg-field-label">住宿</div>
      <div class="eg-field-value">2晚</div>
    </div>
    <div class="eg-field">
      <div class="eg-field-label">入住时间</div>
      <div class="eg-field-value">15:00后</div>
    </div>
  </div>
  <div class="eg-col-right">
    <div class="eg-field">
      <div class="eg-field-label">房型</div>
      <div class="eg-field-value">豪华双床客房</div>
    </div>
    <div class="eg-field">
      <div class="eg-field-label">床型 / 面积</div>
      <div class="eg-field-value">2张双人床 · 40㎡</div>
    </div>
    <div class="eg-field">
      <div class="eg-field-label">早餐</div>
      <div class="eg-field-value">无早餐</div>
    </div>
  </div>
  <div class="eg-footer">⚠ 订单确认后不可取消 · 建议提前3天联系酒店确认</div>
</div>
```

```css
.hotel-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  border: 2px solid var(--ink);
}
.hotel-grid .eg-title {
  grid-column: 1 / -1;
  padding: clamp(20px, 3vw, 32px);
  border-bottom: 2px solid var(--ink);
}
.hotel-grid .eg-title h3 {
  font-family: 'Noto Serif SC', serif;
  font-weight: 900;
  font-size: clamp(1.4rem, 3.5vw, 2rem);
  line-height: 1.2;
}
.hotel-grid .eg-title .eg-en {
  font-family: 'DM Serif Display', serif;
  font-style: italic;
  font-size: 0.75rem;
  color: var(--sub);
  margin-top: 4px;
}
.hotel-grid .eg-col-left {
  padding: clamp(16px, 2.5vw, 28px);
  border-right: 1px solid var(--ink);
}
.hotel-grid .eg-col-right {
  padding: clamp(16px, 2.5vw, 28px);
}
.hotel-grid .eg-field {
  margin-bottom: 12px;
}
.hotel-grid .eg-field-label {
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--muted);
  margin-bottom: 2px;
}
.hotel-grid .eg-field-value {
  font-size: 0.88rem;
  font-weight: 500;
}
.hotel-grid .eg-footer {
  grid-column: 1 / -1;
  padding: 12px clamp(16px, 2.5vw, 28px);
  border-top: 2px solid var(--ink);
  font-size: 0.72rem;
  color: var(--muted);
  background: var(--bg-deep);
}
.hotel-grid .eg-date-highlight {
  font-family: 'DM Serif Display', serif;
  font-size: 1.8rem;
  font-weight: 900;
  color: var(--blue);
  line-height: 1;
  margin-bottom: 4px;
}
@media (max-width: 600px) {
  .hotel-grid { grid-template-columns: 1fr; }
  .hotel-grid .eg-col-left { border-right: none; border-bottom: 1px solid var(--ink); }
}
```

---

## 21. 报纸多栏排版

适用场景：信息密度高的科普内容、长篇摘要、多角度并列信息展示。模拟传统报纸的多栏 + 分隔线 + 手写批注风格。

```html
<section class="newspaper-layout">
  <div class="masthead">THE DAILY BRIEF</div>
  <div class="newspaper-grid">
    <div class="news-col">
      <h3 class="news-headline">主标题文字</h3>
      <p class="news-body">正文内容段落，模拟报纸的紧凑排版。信息密度高，行距略紧。</p>
      <p class="news-handwrite">↑ 手写批注强调</p>
    </div>
    <div class="news-divider"></div>
    <div class="news-col">
      <h3 class="news-headline">第二栏标题</h3>
      <p class="news-body">第二栏内容，与第一栏并列呈现不同维度信息。</p>
    </div>
    <div class="news-divider"></div>
    <div class="news-col">
      <h3 class="news-headline">第三栏标题</h3>
      <p class="news-body">第三栏内容，补充角度。</p>
      <p class="news-handwrite">重点！！</p>
    </div>
  </div>
</section>
```

```css
.newspaper-layout {
  background: #f5f0e8;
  color: #1a1a1a;
  padding: clamp(40px, 6vh, 80px) clamp(24px, 4vw, 60px);
}
.masthead {
  font-family: 'Playfair Display', 'Noto Serif SC', serif;
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 900;
  text-align: center;
  border-bottom: 3px solid #000;
  border-top: 1px solid #000;
  padding: 12px 0;
  margin-bottom: clamp(20px, 3vh, 36px);
}
.newspaper-grid {
  display: grid;
  grid-template-columns: 2fr 1px 1fr 1px 1fr;
  gap: clamp(16px, 2vw, 28px);
}
.news-divider {
  background: #333;
}
.news-col {
  font-size: 0.85rem;
  line-height: 1.85;
}
.news-headline {
  font-family: 'Playfair Display', 'Noto Serif SC', serif;
  font-size: 1.3rem;
  font-weight: 900;
  margin-bottom: 10px;
  line-height: 1.3;
}
.news-body {
  color: #333;
}
.news-handwrite {
  font-family: 'Caveat', cursive;
  color: var(--red, #D8453B);
  font-size: 1.3rem;
  transform: rotate(-2deg);
  margin-top: 12px;
  display: inline-block;
}
@media (max-width: 900px) {
  .newspaper-grid {
    grid-template-columns: 1fr;
  }
  .news-divider {
    height: 1px;
    width: 100%;
  }
}
```

---

## 22. 极简日式留白

适用场景：需要高级感、冥想感的封面或过渡页。大量留白 + 竖线 + 单个视觉焦点 + 极细字体。

```html
<section class="jp-minimal">
  <div class="jp-vline"></div>
  <div class="jp-kanji">猫</div>
  <div class="jp-circle">🐱</div>
  <div class="jp-subtitle">英 国 短 毛 猫 · 养 护 指 南</div>
</section>
```

```css
.jp-minimal {
  background: #fafafa;
  color: #1a1a1a;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 60px 24px;
}
.jp-vline {
  width: 1px;
  height: 120px;
  background: #1a1a1a;
  margin-bottom: 2rem;
}
.jp-kanji {
  font-family: 'Noto Serif SC', serif;
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 900;
  letter-spacing: 0.5em;
  margin-bottom: 2rem;
}
.jp-circle {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  font-size: 4rem;
}
.jp-subtitle {
  font-size: 0.8rem;
  color: #888;
  letter-spacing: 0.2em;
}
```

**使用原则**：
- 留白面积不低于80%
- 整页最多3个视觉元素
- 字体极细或极粗，没有中间态
- 适合做章节过渡、封面、情感收尾页

---

## 23. 胶片/电影字幕风

适用场景：故事性内容、个人叙事、情感表达、品牌故事。模拟胶片颗粒质感 + 电影字幕式文字排列。

```html
<section class="film-section">
  <div class="film-grain"></div>
  <div class="film-frame">
    <span class="film-meta">◉ 35mm · 2026</span>
    <h2 class="film-title">British Shorthair</h2>
    <p class="film-body">
      温顺的蓝灰色被毛，圆滚滚的脸庞和铜色眼睛。<br>
      它不会大声告诉你它不舒服——<br>
      所以你要替它注意。
    </p>
  </div>
</section>
```

```css
.film-section {
  background: #1a1612;
  color: #f5e6d3;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: clamp(60px, 10vh, 120px) clamp(40px, 6vw, 100px);
  position: relative;
  overflow: hidden;
}
.film-grain {
  position: absolute;
  inset: 0;
  background: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
  pointer-events: none;
}
.film-frame {
  border: 8px solid #f5e6d3;
  border-radius: 4px;
  padding: clamp(32px, 5vw, 56px);
  max-width: 700px;
  position: relative;
}
.film-meta {
  position: absolute;
  top: -24px;
  left: 20px;
  font-family: 'DM Mono', 'Fira Code', monospace;
  font-size: 0.6rem;
  color: rgba(245, 230, 211, 0.4);
}
.film-title {
  font-family: 'Instrument Serif', 'DM Serif Display', serif;
  font-size: clamp(2rem, 4vw, 3rem);
  font-style: italic;
  margin-bottom: 1.2rem;
  font-weight: 400;
}
.film-body {
  font-size: 0.92rem;
  line-height: 2.2;
  opacity: 0.75;
}
```

**使用原则**：
- 暗调背景（深棕/深灰），文字用暖白不用纯白
- 颗粒感滤镜用SVG feTurbulence实现，不用图片
- 文字间距宽松（line-height ≥ 2），模拟字幕节奏
- 适合叙事性强的内容：个人故事、品牌介绍、情感收尾

---

## 24. 全屏大片压字

适用场景：视觉冲击力最大化的封面/Hero。全屏图片 + 底部渐变遮罩 + 大字压在图上。

```html
<section class="mag-hero">
  <img class="mag-bg" src="your-image.jpg" alt="">
  <div class="mag-overlay"></div>
  <div class="mag-content">
    <h1 class="mag-title">The Gentle<br>Giant.</h1>
    <p class="mag-sub">BRITISH SHORTHAIR CARE GUIDE — 英国短毛猫养护指南</p>
  </div>
</section>
```

```css
.mag-hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: clamp(40px, 6vh, 80px) clamp(40px, 6vw, 100px);
  overflow: hidden;
}
.mag-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}
.mag-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.85) 25%, transparent 65%);
  z-index: 1;
}
.mag-content {
  position: relative;
  z-index: 2;
}
.mag-title {
  font-family: 'Playfair Display', 'DM Serif Display', 'Noto Serif SC', serif;
  font-size: clamp(3rem, 9vw, 6rem);
  font-weight: 900;
  color: #fff;
  line-height: 1.05;
}
.mag-sub {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.55);
  margin-top: 1.2rem;
  font-weight: 300;
  letter-spacing: 0.06em;
}
```

**使用原则**：
- 图片必须高清、有主体，不用AI生成的stock风
- 渐变遮罩从底部往上，保证文字可读
- 标题超大（clamp 3rem-6rem），字母间距紧凑
- 副标题用极细字重+高letter-spacing+半透明白
- 适合封面、章节开头、视觉冲击页

---

## 25. 打字机/终端风

适用场景：技术向内容、代码展示、CLI演示、极客感叙事、markdown风格呈现。

```html
<section class="typewriter-section">
  <div class="type-header">cat_care_guide.md</div>
  <div class="type-content">
    <p>> 品种：英国短毛猫</p>
    <p>> 性格：温顺、独立、不粘人但恋家</p>
    <p>> 体重：公猫 4-8kg</p>
    <p>> 寿命：12-20 年</p>
    <p class="type-blank"></p>
    <p>## 饮食</p>
    <p>- 蛋白质 30-40%（动物蛋白）</p>
    <p>- 湿粮占比 50-70%</p>
    <p>- 每日 180-300 大卡</p>
    <p class="type-blank"></p>
    <p class="type-warn">⚠️ 极易发胖，运动=续命</p>
    <span class="type-cursor"></span>
  </div>
</section>
```

```css
.typewriter-section {
  background: #faf8f5;
  color: #2a2a2a;
  padding: clamp(60px, 10vh, 120px) clamp(40px, 6vw, 100px);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* 可选：网格纸纹理背景 */
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100' height='100' fill='none' stroke='%23e8e4dc' stroke-width='0.5'/%3E%3C/svg%3E");
}
.type-header {
  font-family: 'DM Mono', 'Fira Code', monospace;
  font-size: 1.8rem;
  font-weight: 400;
  border-bottom: 2px solid #333;
  display: inline-block;
  padding-bottom: 4px;
  margin-bottom: 2rem;
}
.type-content {
  font-family: 'DM Mono', 'Fira Code', monospace;
  font-size: 0.88rem;
  line-height: 2.4;
  max-width: 650px;
}
.type-content p {
  margin: 0;
}
.type-blank {
  height: 1.2em;
}
.type-warn {
  color: var(--red, #D8453B);
  font-weight: 700;
}
.type-cursor {
  display: inline-block;
  width: 8px;
  height: 1.2em;
  background: #333;
  animation: cursor-blink 1s infinite;
  vertical-align: middle;
  margin-left: 4px;
}
@keyframes cursor-blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}
```

**使用原则**：
- 等宽字体只用 `DM Mono` 或 `Fira Code`
- 行距宽松（line-height ≥ 2），营造逐行阅读的节奏感
- 用 `>` 前缀模拟引用/输入，用 `##` 模拟标题层级
- 闪烁光标用CSS animation实现，增加“正在输入”的动态感
- 适合技术教程、开发者向内容、CLI风格展示、极客叙事

---

## 26. 横向滑动卡片（Horizontal Scroll Cards）

适用场景：多个并列内容项（步骤、手法、功能点）需要逐一展示，不同时占版面。移动端友好。

```html
<div class="hscroll-container">
  <h2 class="hscroll-title">标题</h2>
  <div class="hscroll-track">
    <div class="hscroll-card">
      <span class="hscroll-num">01</span>
      <h3>卡片标题</h3>
      <p>内容描述文字，一张卡片讲一个点。</p>
    </div>
    <div class="hscroll-card">
      <span class="hscroll-num">02</span>
      <h3>卡片标题</h3>
      <p>内容描述文字。</p>
    </div>
    <!-- 更多卡片 -->
  </div>
  <p class="hscroll-hint">← 左右滑动查看全部 →</p>
</div>
```

```css
.hscroll-track {
  display: flex; gap: 24px; overflow-x: auto; scroll-snap-type: x mandatory;
  padding: 20px 0; -webkit-overflow-scrolling: touch;
}
.hscroll-track::-webkit-scrollbar { height: 4px; }
.hscroll-track::-webkit-scrollbar-thumb { background: var(--accent-light, #d4a06a); border-radius: 2px; }
.hscroll-card {
  min-width: 340px; max-width: 380px; flex-shrink: 0; scroll-snap-align: center;
  background: #fff; border-radius: 16px; padding: 32px 28px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.06); position: relative;
}
.hscroll-card .hscroll-num {
  position: absolute; top: 16px; right: 20px; font-family: 'Caveat', cursive;
  font-size: 2rem; color: var(--accent-light, #d4a06a); opacity: 0.4;
}
.hscroll-card h3 { font-size: 1.1rem; font-weight: 700; margin-bottom: 12px; }
.hscroll-card p { font-size: 0.82rem; color: var(--ink-light, #5a4f3f); line-height: 1.9; }
.hscroll-hint { font-size: 0.75rem; color: var(--ink-faint, #8a7e6d); margin-top: 1rem; font-family: 'Caveat', cursive; }
```

**使用原则**：
- 卡片宽度固定 340-380px，确保移动端一次看一张
- 编号用轻量手写字体做右上角装饰，不抢主内容
- scroll-snap 保证滑动停在卡片中心
- 适合 3-6 张卡片的并列展示

---

## 27. Tab 切换面板（Tab Switcher）

适用场景：同一版面多个分类内容需要切换展示。适合手法对比、分类讲解、功能列表。

```html
<div class="tab-container">
  <div class="tab-bar">
    <div class="tab-item active" onclick="switchTab(this, 0)">标签一</div>
    <div class="tab-item" onclick="switchTab(this, 1)">标签二</div>
    <div class="tab-item" onclick="switchTab(this, 2)">标签三</div>
  </div>
  <div class="tab-panels">
    <div class="tab-panel active">
      <h3>面板标题</h3>
      <p>面板内容。</p>
      <div class="tab-example">引用/示例文字</div>
    </div>
    <div class="tab-panel">
      <h3>面板标题</h3>
      <p>面板内容。</p>
      <div class="tab-example">引用/示例文字</div>
    </div>
    <div class="tab-panel">
      <h3>面板标题</h3>
      <p>面板内容。</p>
      <div class="tab-example">引用/示例文字</div>
    </div>
  </div>
</div>

<script>
function switchTab(el, idx) {
  const tabs = el.parentElement.querySelectorAll('.tab-item');
  const panels = el.closest('.tab-container').querySelectorAll('.tab-panel');
  tabs.forEach(t => t.classList.remove('active'));
  panels.forEach(p => p.classList.remove('active'));
  el.classList.add('active');
  panels[idx].classList.add('active');
}
</script>
```

```css
.tab-bar { display: flex; gap: 0; margin-bottom: 2rem; border-bottom: 2px solid var(--accent-light, #d4a06a); }
.tab-item {
  padding: 10px 20px; font-size: 0.82rem; font-weight: 500; cursor: pointer;
  border-bottom: 3px solid transparent; margin-bottom: -2px; transition: all 0.2s;
  color: var(--ink-faint, #8a7e6d);
}
.tab-item.active { border-bottom-color: var(--accent, #8b4513); color: var(--ink, #2c2416); font-weight: 700; }
.tab-item:hover { color: var(--ink-light, #5a4f3f); }
.tab-panels { position: relative; }
.tab-panel { display: none; animation: tabFadeIn 0.3s; }
.tab-panel.active { display: block; }
.tab-panel h3 { font-size: 1.3rem; font-weight: 700; margin-bottom: 12px; }
.tab-panel p { font-size: 0.88rem; color: var(--ink-light, #5a4f3f); line-height: 2; max-width: 550px; }
.tab-example { margin-top: 1rem; background: #fff; border-radius: 10px; padding: 16px 20px; font-size: 0.9rem; color: var(--accent, #8b4513); border-left: 3px solid var(--accent-light, #d4a06a); }
@keyframes tabFadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
```

**使用原则**：
- Tab 数量控制在 2-5 个，超过5个用横向滚动卡片代替
- Tab 文字简短（2-4个字），用下划线指示当前选中
- 面板内容高度尽量一致，避免切换时版面跳动
- 适合分类讲解、对比展示、FAQ

---

## 28. 手风琴展开（Accordion）

适用场景：有序列内容需要逐项展开查看。适合步骤、问答、目录结构。

```html
<div class="accordion-list">
  <div class="accordion-item open">
    <div class="accordion-header" onclick="toggleAccordion(this)">
      <span class="accordion-step">1</span>
      <h4>条目标题</h4>
      <span class="accordion-arrow">▼</span>
    </div>
    <div class="accordion-body">
      <p>展开后的详细内容。</p>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">
      <span class="accordion-step">2</span>
      <h4>条目标题</h4>
      <span class="accordion-arrow">▼</span>
    </div>
    <div class="accordion-body">
      <p>展开后的详细内容。</p>
    </div>
  </div>
</div>

<script>
function toggleAccordion(header) {
  const item = header.parentElement;
  const wasOpen = item.classList.contains('open');
  item.parentElement.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('open'));
  if (!wasOpen) item.classList.add('open');
}
</script>
```

```css
.accordion-list { max-width: 600px; }
.accordion-item { border-bottom: 1px solid rgba(139,69,19,0.15); }
.accordion-header {
  display: flex; align-items: center; gap: 16px; padding: 18px 0; cursor: pointer; transition: all 0.2s;
}
.accordion-header:hover { padding-left: 8px; }
.accordion-step {
  width: 32px; height: 32px; border-radius: 50%; background: var(--accent, #8b4513);
  color: #fff; font-size: 0.8rem; font-weight: 700; display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}
.accordion-header h4 { font-size: 0.95rem; font-weight: 700; }
.accordion-arrow { margin-left: auto; font-size: 0.8rem; color: var(--ink-faint, #8a7e6d); transition: transform 0.2s; }
.accordion-item.open .accordion-arrow { transform: rotate(180deg); }
.accordion-body { padding: 0 0 18px 48px; display: none; }
.accordion-item.open .accordion-body { display: block; animation: tabFadeIn 0.3s; }
.accordion-body p { font-size: 0.82rem; color: var(--ink-light, #5a4f3f); line-height: 1.9; }
```

**使用原则**：
- 默认展开第一项（.open class），让用户知道可以点击
- 编号圆圈提供视觉锚点和顺序感
- hover 微移增加交互感
- 适合 FAQ、步骤说明、有层级的内容目录

---

## 29. 箭头轮播（Arrow Carousel）

适用场景：内容在固定区域内轮播，用箭头+圆点控制。适合居中展示、焦点突出的场景。

```html
<div class="carousel-container">
  <div class="carousel-slides" id="carouselSlides">
    <div class="carousel-slide">
      <div class="carousel-icon">🎯</div>
      <h3>幻灯片标题</h3>
      <p>内容描述。</p>
    </div>
    <div class="carousel-slide">
      <div class="carousel-icon">⚡</div>
      <h3>幻灯片标题</h3>
      <p>内容描述。</p>
    </div>
  </div>
  <div class="carousel-arrows">
    <button class="carousel-arrow" onclick="moveSlide(-1)">←</button>
    <button class="carousel-arrow" onclick="moveSlide(1)">→</button>
  </div>
  <div class="carousel-dots">
    <span class="carousel-dot active"></span>
    <span class="carousel-dot"></span>
  </div>
</div>

<script>
let carouselIdx = 0;
const totalSlides = document.querySelectorAll('.carousel-slide').length;
function moveSlide(dir) {
  const slides = document.getElementById('carouselSlides');
  const dots = document.querySelectorAll('.carousel-dot');
  carouselIdx = (carouselIdx + dir + totalSlides) % totalSlides;
  slides.style.transform = `translateX(-${carouselIdx * 100}%)`;
  dots.forEach((d, i) => d.classList.toggle('active', i === carouselIdx));
}
</script>
```

```css
.carousel-container { position: relative; width: 100%; max-width: 600px; margin: 0 auto; overflow: hidden; }
.carousel-slides { display: flex; transition: transform 0.4s ease; }
.carousel-slide { min-width: 100%; padding: 40px; text-align: center; }
.carousel-icon { font-size: 2.5rem; margin-bottom: 1rem; }
.carousel-slide h3 { font-size: 1.4rem; font-weight: 700; margin-bottom: 16px; }
.carousel-slide p { font-size: 0.85rem; color: var(--ink-light, #5a4f3f); line-height: 2; max-width: 450px; margin: 0 auto; }
.carousel-arrows { display: flex; justify-content: center; gap: 16px; margin-top: 2rem; }
.carousel-arrow {
  width: 40px; height: 40px; border-radius: 50%; border: 1.5px solid var(--accent-light, #d4a06a);
  background: transparent; cursor: pointer; font-size: 1rem; color: var(--accent, #8b4513); transition: all 0.2s;
}
.carousel-arrow:hover { background: var(--accent, #8b4513); color: #fff; }
.carousel-dots { display: flex; justify-content: center; gap: 8px; margin-top: 1rem; }
.carousel-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--accent-light, #d4a06a); opacity: 0.4; transition: all 0.2s; }
.carousel-dot.active { opacity: 1; transform: scale(1.3); background: var(--accent, #8b4513); }
```

**使用原则**：
- 内容居中展示，单屏一张，焦点突出
- 箭头圆形按钮 hover 变实心增强反馈
- 圆点指示当前位置
- 适合 3-6 项的重点内容轮播展示

---

## 30. 堆叠卡片（Stacked Cards）

适用场景：内容像一沓卡片堆叠，点击顶部飞走露出下一张。视觉趣味性强，适合教学、游戏化展示。

```html
<div class="stack-container" id="cardStack">
  <div class="stack-card" onclick="flipStack()">
    <span class="stack-tag">标签一</span>
    <h3>卡片标题</h3>
    <p>卡片内容。</p>
  </div>
  <div class="stack-card" onclick="flipStack()">
    <span class="stack-tag">标签二</span>
    <h3>卡片标题</h3>
    <p>卡片内容。</p>
  </div>
  <div class="stack-card" onclick="flipStack()">
    <span class="stack-tag">标签三</span>
    <h3>卡片标题</h3>
    <p>卡片内容。</p>
  </div>
</div>
<p class="stack-hint">点击卡片翻到下一张</p>

<script>
function flipStack() {
  const stack = document.getElementById('cardStack');
  const cards = [...stack.children];
  const first = cards[0];
  first.style.transform = 'translateX(-120%) rotate(-5deg)';
  first.style.opacity = '0';
  setTimeout(() => {
    stack.appendChild(first);
    first.style.transform = '';
    first.style.opacity = '';
    [...stack.children].forEach((card, i) => {
      card.style.zIndex = 4 - i;
      if (i === 0) { card.style.transform = 'translateY(0) scale(1)'; card.style.opacity = '1'; }
      else if (i === 1) { card.style.transform = 'translateY(12px) scale(0.96)'; card.style.opacity = '0.8'; }
      else if (i === 2) { card.style.transform = 'translateY(24px) scale(0.92)'; card.style.opacity = '0.6'; }
      else { card.style.transform = 'translateY(36px) scale(0.88)'; card.style.opacity = '0.4'; }
    });
  }, 300);
}
</script>
```

```css
.stack-container { position: relative; width: 380px; height: 280px; perspective: 1000px; margin: 1.5rem auto; }
.stack-card {
  position: absolute; inset: 0; background: #fff; border-radius: 16px;
  padding: 32px; box-shadow: 0 6px 24px rgba(0,0,0,0.08);
  transition: all 0.4s ease; cursor: pointer;
}
.stack-card:nth-child(1) { z-index: 4; transform: translateY(0) scale(1); }
.stack-card:nth-child(2) { z-index: 3; transform: translateY(12px) scale(0.96); opacity: 0.8; }
.stack-card:nth-child(3) { z-index: 2; transform: translateY(24px) scale(0.92); opacity: 0.6; }
.stack-card:nth-child(4) { z-index: 1; transform: translateY(36px) scale(0.88); opacity: 0.4; }
.stack-card h3 { font-size: 1.2rem; font-weight: 700; margin-bottom: 12px; }
.stack-card p { font-size: 0.82rem; color: var(--ink-light, #5a4f3f); line-height: 1.9; }
.stack-tag { display: inline-block; background: var(--accent, #8b4513); color: #fff; font-size: 0.7rem; padding: 2px 8px; border-radius: 3px; margin-bottom: 10px; }
.stack-hint { font-size: 0.75rem; color: var(--ink-faint, #8a7e6d); text-align: center; margin-top: 3.5rem; font-family: 'Caveat', cursive; }
```

**使用原则**：
- 卡片数量 3-5 张效果最佳
- 堆叠偏移 12px + 缩小 4% 制造纵深
- 飞出动画 300ms + 左移旋转增加趣味
- 适合游戏化教学、知识卡片、功能点展示

---

## 31. 翻转卡片（3D Flip Card）

适用场景：正反两面信息展示——正面是核心句/名言/问题，背面是翻译/答案/解释。适合教学、名句展示、闪卡。

```html
<div class="flip-scene">
  <div class="flip-card" onclick="this.classList.toggle('flipped')">
    <div class="flip-front">
      <h2>正面大字内容</h2>
      <p class="flip-hint">↺ 点击翻转</p>
    </div>
    <div class="flip-back">
      <h3>背面标题</h3>
      <p>背面详细内容/翻译/答案</p>
    </div>
  </div>
</div>
```

```css
.flip-scene { perspective: 1000px; width: 500px; max-width: 90vw; height: 320px; }
.flip-card {
  width: 100%; height: 100%; position: relative;
  transform-style: preserve-3d; transition: transform 0.6s ease; cursor: pointer;
}
.flip-card.flipped { transform: rotateY(180deg); }
.flip-front, .flip-back {
  position: absolute; inset: 0; backface-visibility: hidden;
  border-radius: 20px; display: flex; flex-direction: column;
  justify-content: center; align-items: center; padding: 40px;
}
.flip-front { background: #fff; box-shadow: 0 8px 32px rgba(0,0,0,0.08); }
.flip-front h2 { font-size: clamp(2.2rem, 5vw, 3.2rem); line-height: 1.6; text-align: center; }
.flip-front .flip-hint { font-size: 0.75rem; color: var(--ink-faint, #8a7e6d); margin-top: 2rem; }
.flip-back {
  background: var(--accent, #8b4513); color: #fff;
  transform: rotateY(180deg); text-align: center;
}
.flip-back h3 { font-size: 1rem; font-weight: 400; opacity: 0.8; margin-bottom: 1rem; }
.flip-back p { font-size: 0.92rem; line-height: 2; max-width: 380px; }
```

**使用原则**：
- 正面只放核心内容（大字、名句、问题），不放解释
- 背面放翻译/答案/解释，形成对照
- 翻转动画 0.6s，preserve-3d 保证视觉正确
- 适合古文名句、单词卡、问答、知识闪卡

---

## 32. 悬停揭示卡片（Hover Reveal Card）

适用场景：核心内容常驻展示，翻译/注释/补充信息在悬停时覆盖显示。比翻转卡片更轻量，适合不需要完整翻面的场景。

```html
<div class="reveal-card">
  <h2 class="reveal-text">正面主内容</h2>
  <p class="reveal-sub">副信息（拼音/出处等）</p>
  <div class="reveal-overlay">
    <p>悬停后显示的翻译/解释内容</p>
    <p class="reveal-note">补充注释</p>
  </div>
</div>
<p class="reveal-hint">悬停查看翻译 →</p>
```

```css
.reveal-card {
  position: relative; width: 550px; max-width: 90vw;
  text-align: center; padding: 48px 40px; background: #fff;
  border-radius: 20px; box-shadow: 0 4px 20px rgba(0,0,0,0.05); overflow: hidden;
}
.reveal-text {
  font-size: clamp(2.5rem, 6vw, 3.5rem); line-height: 1.5;
  color: var(--ink, #2c2416); position: relative; z-index: 2;
}
.reveal-sub { font-size: 0.8rem; color: var(--ink-faint, #8a7e6d); margin-top: 0.5rem; letter-spacing: 0.1em; position: relative; z-index: 2; }
.reveal-overlay {
  position: absolute; inset: 0; background: var(--accent, #8b4513); color: #fff;
  display: flex; flex-direction: column; justify-content: center; align-items: center;
  padding: 40px; opacity: 0; transition: opacity 0.4s ease; z-index: 3; border-radius: 20px;
}
.reveal-card:hover .reveal-overlay { opacity: 1; }
.reveal-overlay p { font-size: 0.9rem; line-height: 2; text-align: center; max-width: 380px; }
.reveal-note { margin-top: 1rem; font-size: 0.82rem; opacity: 0.7; }
.reveal-hint { font-size: 0.75rem; color: var(--ink-faint, #8a7e6d); margin-top: 1rem; text-align: center; }
```

**使用原则**：
- 正面信息要足够"重"——大字、醒目，让人想探索
- 遮罩用品牌色/强调色，与正面形成反差
- transition 0.4s 平滑过渡
- 适合名句展示、术语解释、产品功能揭示

---

## 33. 暗底大字+按钮揭示（Dark Hero Reveal）

适用场景：深色背景突出核心名句/标语，超大装饰字做氛围，翻译/释义通过按钮主动触发显示。适合需要仪式感的展示。

```html
<div class="dark-reveal-wrap">
  <div class="dark-reveal-bgchar">字</div>
  <div class="dark-reveal-content">
    <h2>核心名句大字</h2>
    <div class="dark-reveal-divider"></div>
    <div class="dark-reveal-trans" id="darkTrans">
      隐藏的翻译/解释文字
    </div>
    <button class="dark-reveal-btn" onclick="document.getElementById('darkTrans').classList.toggle('show'); this.textContent = this.textContent === '显示翻译' ? '隐藏翻译' : '显示翻译';">显示翻译</button>
  </div>
</div>
```

```css
/* 需要深色背景容器 background: #1a1510; color: #f0e9dc; */
.dark-reveal-bgchar {
  position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
  font-size: clamp(20rem, 40vw, 35rem); color: rgba(255,255,255,0.03);
  pointer-events: none; line-height: 1;
}
.dark-reveal-content { position: relative; z-index: 1; text-align: center; max-width: 550px; }
.dark-reveal-content h2 {
  font-size: clamp(2.5rem, 7vw, 4rem); line-height: 1.6; color: #fff; margin-bottom: 2rem;
}
.dark-reveal-divider { width: 40px; height: 2px; background: var(--accent-light, #d4a06a); margin: 0 auto 2rem; }
.dark-reveal-trans {
  font-size: 0.88rem; color: rgba(255,255,255,0.6); line-height: 2;
  opacity: 0; transition: opacity 0.5s;
}
.dark-reveal-trans.show { opacity: 1; }
.dark-reveal-btn {
  margin-top: 2rem; padding: 8px 20px; border: 1px solid var(--accent-light, #d4a06a);
  background: transparent; color: var(--accent-light, #d4a06a); border-radius: 20px;
  font-size: 0.78rem; cursor: pointer; transition: all 0.2s;
}
.dark-reveal-btn:hover { background: var(--accent-light, #d4a06a); color: #1a1510; }
```

**使用原则**：
- 背景用深色（#1a1510 或 #0d1117），文字白/米色
- 超大装饰字用极低透明度（0.03），做氛围不干扰
- 按钮触发比悬停更有仪式感，适合正式教学场景
- 适合名言金句、品牌slogan、演讲稿重点句展示

---

## 34. 左右分栏问答（Split Q&A）

适用场景：左侧放问题/任务列表，右侧放辅助信息（结构图、流程、提示）。适合课后练习、FAQ+Tips、任务+参考。

```html
<div class="split-qa">
  <div class="split-qa-left">
    <h2>标题</h2>
    <div class="split-qa-item">
      <span class="split-qa-num">1</span>
      <p>问题内容</p>
    </div>
    <div class="split-qa-item">
      <span class="split-qa-num">2</span>
      <p>问题内容</p>
    </div>
  </div>
  <div class="split-qa-right">
    <h3>辅助标题</h3>
    <div class="split-qa-flow">
      <span class="split-qa-step">步骤一</span>
      <span class="split-qa-arrow">→</span>
      <span class="split-qa-step">步骤二</span>
      <span class="split-qa-arrow">→</span>
      <span class="split-qa-step">步骤三</span>
    </div>
  </div>
</div>
```

```css
.split-qa { display: grid; grid-template-columns: 1.2fr 1fr; gap: clamp(32px, 5vw, 60px); align-items: start; }
.split-qa-left h2 { font-family: 'Noto Serif SC', serif; font-weight: 900; font-size: clamp(1.8rem, 4vw, 2.5rem); margin-bottom: 1.5rem; }
.split-qa-item { display: flex; gap: 14px; margin-bottom: 1.5rem; align-items: flex-start; }
.split-qa-num {
  width: 28px; height: 28px; border-radius: 50%; background: var(--accent, #8b4513);
  color: #fff; font-size: 0.75rem; font-weight: 700; flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
}
.split-qa-item p { font-size: 0.85rem; color: var(--ink-light, #5a4f3f); line-height: 1.8; }
.split-qa-right {
  background: #fff; border-radius: 16px; padding: 28px 24px;
  border: 1px solid rgba(139,69,19,0.1);
}
.split-qa-right h3 { font-size: 0.85rem; font-weight: 700; color: var(--accent, #8b4513); margin-bottom: 12px; }
.split-qa-flow { display: flex; align-items: center; flex-wrap: wrap; gap: 8px; }
.split-qa-step { background: var(--cream-dark, #f0e9dc); padding: 6px 14px; border-radius: 20px; font-size: 0.78rem; color: var(--ink-light, #5a4f3f); }
.split-qa-arrow { font-size: 0.7rem; color: var(--accent-light, #d4a06a); }
@media (max-width: 768px) { .split-qa { grid-template-columns: 1fr; } }
```

**使用原则**：
- 左栏信息优先级高（问题/任务），右栏为辅助（参考/结构/提示）
- 编号圆圈与 Accordion 风格统一
- 右栏药丸标签+箭头适合展示流程/结构
- 适合课后练习、Q&A+参考、任务分配+资源

---

## 35. 编号卡片网格（Numbered Card Grid）

适用场景：多个并列任务/要点用卡片形式展示，编号作背景装饰。可设置单张横跨整行。

```html
<div class="numgrid">
  <div class="numgrid-card" data-num="01">
    <h4>卡片标题</h4>
    <p>卡片内容。</p>
  </div>
  <div class="numgrid-card" data-num="02">
    <h4>卡片标题</h4>
    <p>卡片内容。</p>
  </div>
  <div class="numgrid-card full" data-num="03">
    <h4>横跨卡片标题</h4>
    <p>横跨内容。</p>
  </div>
</div>
```

```css
.numgrid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; max-width: 600px; }
.numgrid-card {
  background: #fff; border-radius: 14px; padding: 24px 20px;
  position: relative; overflow: hidden; transition: transform 0.2s;
}
.numgrid-card:hover { transform: translateY(-3px); }
.numgrid-card::before {
  content: attr(data-num); position: absolute; top: -8px; right: 12px;
  font-family: 'Caveat', cursive; font-size: 3rem; color: var(--accent-light, #d4a06a); opacity: 0.2;
}
.numgrid-card h4 { font-size: 0.82rem; font-weight: 700; margin-bottom: 6px; color: var(--accent, #8b4513); }
.numgrid-card p { font-size: 0.78rem; color: var(--ink-light, #5a4f3f); line-height: 1.8; }
.numgrid-card.full { grid-column: 1 / -1; }
@media (max-width: 768px) { .numgrid { grid-template-columns: 1fr; } }
```

**使用原则**：
- 2列网格，hover微浮增加交互感
- data-num 通过 CSS attr() 做背景大字装饰
- `.full` class 横跨整行，用于总结性卡片
- 适合并列要点、任务列表、功能展示

---

## 36. 交互清单（Interactive Checklist）

适用场景：有序任务列表，可点击打勾。适合教学任务、待办清单、学习进度跟踪。

```html
<div class="checklist">
  <div class="checklist-item">
    <div class="checklist-check" onclick="this.classList.toggle('checked')"></div>
    <div class="checklist-content">
      <h4>任务标题</h4>
      <p>任务描述。</p>
      <span class="checklist-tag">标签</span>
    </div>
  </div>
  <div class="checklist-item">
    <div class="checklist-check" onclick="this.classList.toggle('checked')"></div>
    <div class="checklist-content">
      <h4>任务标题</h4>
      <p>任务描述。</p>
      <span class="checklist-tag">标签</span>
    </div>
  </div>
</div>
```

```css
.checklist { max-width: 550px; }
.checklist-item {
  display: flex; align-items: flex-start; gap: 14px; padding: 14px 0;
  border-bottom: 1px solid rgba(139,69,19,0.1);
}
.checklist-check {
  width: 22px; height: 22px; border-radius: 6px; border: 2px solid var(--accent-light, #d4a06a);
  flex-shrink: 0; margin-top: 2px; cursor: pointer; transition: all 0.2s;
  display: flex; align-items: center; justify-content: center;
}
.checklist-check.checked { background: var(--accent, #8b4513); border-color: var(--accent, #8b4513); }
.checklist-check.checked::after { content: '✓'; color: #fff; font-size: 0.7rem; }
.checklist-content h4 { font-size: 0.85rem; font-weight: 600; margin-bottom: 2px; }
.checklist-content p { font-size: 0.78rem; color: var(--ink-light, #5a4f3f); line-height: 1.7; }
.checklist-tag { display: inline-block; font-size: 0.65rem; background: var(--cream-dark, #f0e9dc); color: var(--ink-faint, #8a7e6d); padding: 2px 8px; border-radius: 3px; margin-top: 4px; }
```

**使用原则**：
- 点击方块切换打勾状态，增加参与感
- 标签用于分类（思考/归纳/拓展/背诵等）
- border-bottom 分隔各项，视觉清晰
- 适合课后任务、学习清单、进度追踪

---

## 37. 手写明信片（Handwritten Postcard）

适用场景：结尾页、寄语、课后总结。模拟手写卡片的温暖感，微歪旋转+虚线分隔+邮票装饰。

```html
<div class="postcard">
  <h2 class="postcard-title">标题（手写体）</h2>
  <div class="postcard-body">
    <span class="postcard-num">①</span> 第一行内容<br>
    <span class="postcard-num">②</span> 第二行内容<br>
    <span class="postcard-num">③</span> 第三行内容
  </div>
  <hr class="postcard-divider">
  <div class="postcard-footer">
    补充信息或寄语
  </div>
  <span class="postcard-stamp">— 署名 ✦</span>
</div>
```

```css
.postcard {
  background: #fff; border-radius: 4px; padding: 48px 44px;
  max-width: 520px; box-shadow: 0 4px 24px rgba(0,0,0,0.06);
  border: 1px solid rgba(139,69,19,0.08); position: relative;
  transform: rotate(-0.5deg);
}
.postcard::before {
  content: ''; position: absolute; top: 20px; right: 20px;
  width: 50px; height: 50px; border: 2px solid var(--accent-light, #d4a06a); opacity: 0.3;
}
.postcard-title {
  font-family: 'Ma Shan Zheng', cursive; font-size: 1.8rem;
  margin-bottom: 1.5rem; transform: rotate(0.5deg);
}
.postcard-body {
  font-family: 'Caveat', cursive; font-size: 1.05rem; line-height: 2.8;
  color: var(--ink-light, #5a4f3f);
}
.postcard-num { color: var(--accent, #8b4513); font-weight: 700; }
.postcard-divider { border: none; border-top: 1px dashed var(--accent-light, #d4a06a); margin: 1.5rem 0; }
.postcard-footer { font-size: 0.8rem; color: var(--ink-faint, #8a7e6d); line-height: 2; }
.postcard-footer strong { color: var(--accent, #8b4513); }
.postcard-stamp {
  position: absolute; bottom: -12px; right: 24px; font-family: 'Caveat', cursive;
  font-size: 0.75rem; color: var(--ink-faint, #8a7e6d); transform: rotate(2deg);
}
```

**使用原则**：
- transform: rotate(-0.5deg) 制造随意放置感
- 右上角方框模拟邮票位
- Caveat字体 + 编号圆圈营造手写质感
- 虚线分隔主内容和附加信息
- 适合结尾寄语、课后思考、感谢页、个人备忘

---

## #38 点击弹窗详情（Click-to-Modal Detail）

**用途**：点击卡片/图片弹出大型Modal，展示详细信息+多图gallery+标签。适合作品集、建筑项目、案例展示。

```html
<!-- Grid of clickable cards -->
<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; max-width: 760px;">
  <div class="work-card" onclick="openModal(0)" style="border-radius: 14px; overflow: hidden; cursor: pointer; position: relative; aspect-ratio: 16/10;">
    <img src="[image-url]" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s;">
    <div style="position: absolute; top: 12px; right: 12px; background: rgba(255,255,255,0.15); backdrop-filter: blur(4px); padding: 4px 10px; border-radius: 12px; font-size: 0.6rem; color: #fff;">Click to explore →</div>
    <div style="position: absolute; bottom: 0; left: 0; right: 0; padding: 16px 18px; background: linear-gradient(to top, rgba(0,0,0,0.8), transparent); color: #fff;">
      <h3 style="font-size: 0.9rem; font-weight: 700;">Project Name</h3>
      <span style="font-size: 0.68rem; opacity: 0.8;">Year · Category</span>
    </div>
  </div>
</div>

<!-- Modal -->
<div class="modal-overlay" id="modal" onclick="closeModal(event)" style="display: none; position: fixed; inset: 0; z-index: 1000; background: rgba(0,0,0,0.88); align-items: center; justify-content: center; padding: 24px;">
  <span onclick="closeModal()" style="position: fixed; top: 20px; right: 24px; font-size: 2rem; color: #fff; cursor: pointer; z-index: 1001;">&times;</span>
  <div style="background: #F5F5F0; border-radius: 16px; max-width: 900px; width: 100%; max-height: 90vh; overflow-y: auto;" onclick="event.stopPropagation()">
    <img src="[hero-image]" style="width: 100%; aspect-ratio: 21/9; object-fit: cover; border-radius: 16px 16px 0 0;">
    <div style="padding: 28px 32px 32px;">
      <h2>Title</h2>
      <span style="font-size: 0.75rem; color: var(--copper);">Year · Location</span>
      <p>Description with rich detail...</p>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin: 16px 0;">
        <img src="[gallery-1]" style="width: 100%; aspect-ratio: 4/3; object-fit: cover; border-radius: 8px;">
        <img src="[gallery-2]" style="...">
        <img src="[gallery-3]" style="...">
      </div>
      <div style="display: flex; gap: 6px; flex-wrap: wrap; margin-top: 16px;">
        <span style="font-size: 0.65rem; background: #EFE8D8; color: #8B4513; padding: 4px 10px; border-radius: 4px; font-weight: 600;">Tag</span>
      </div>
    </div>
  </div>
</div>
```

**设计要点**：
- 卡片hover时scale(1.05)微放大
- Modal overlay点击空白处 / Esc关闭
- Hero图21:9宽幅电影比例
- Gallery 3列网格展示多角度
- 底部标签列表标注关键词
- body overflow: hidden 防止背景滚动

---

## #39 缩略图轨道+侧面板（Thumbnail Rail + Side Panel）

**用途**：左侧竖向缩略图、中间大图、右侧文字面板。类gallery app体验，适合建筑/摄影/作品展示。

```html
<div style="display: flex; gap: 0; max-width: 850px; height: 420px; border-radius: 14px; overflow: hidden; box-shadow: 0 8px 30px rgba(0,0,0,0.08);">
  <!-- Thumbnail rail -->
  <div style="width: 100px; background: #2C2A26; display: flex; flex-direction: column; gap: 2px; flex-shrink: 0; overflow-y: auto;">
    <img src="[thumb-1]" style="width: 100%; aspect-ratio: 1; object-fit: cover; cursor: pointer; opacity: 1;" onclick="switchPanel(0)">
    <img src="[thumb-2]" style="width: 100%; aspect-ratio: 1; object-fit: cover; cursor: pointer; opacity: 0.5;" onclick="switchPanel(1)">
    <img src="[thumb-3]" style="...opacity: 0.5;" onclick="switchPanel(2)">
  </div>
  <!-- Main image area -->
  <div style="flex: 1; position: relative; overflow: hidden;">
    <img src="[full-1]" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: 1; transition: opacity 0.4s;">
    <img src="[full-2]" style="...opacity: 0; transition: opacity 0.4s;">
  </div>
  <!-- Side panel -->
  <div style="width: 280px; background: #fff; padding: 28px 20px; overflow-y: auto; flex-shrink: 0; border-left: 1px solid #EFE8D8;">
    <h3 style="font-size: 1rem; font-weight: 800;">Title</h3>
    <p style="font-size: 0.72rem; color: #B87333; font-weight: 600;">Year · Location</p>
    <p style="font-size: 0.78rem; color: #5A5650; line-height: 1.8;">Description text...</p>
  </div>
</div>
```

**设计要点**：
- 缩略图active为opacity:1，inactive为0.5
- 中间大图绝对定位叠放，通过opacity切换
- 右侧面板固定宽度，内容随选中项变化
- 整体圆角+阴影组成一个完整的"app窗口"感

---

## #40 悬停翻转卡片（Hover Flip Cards）

**用途**：鼠标悬停翻转，正面为图片，背面为深色文字介绍。适合作品集、人物介绍、产品展示。

```html
<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; max-width: 800px; perspective: 1200px;">
  <div style="aspect-ratio: 3/4; position: relative; cursor: pointer;">
    <div class="flip-inner" style="width: 100%; height: 100%; position: relative; transition: transform 0.6s; transform-style: preserve-3d; border-radius: 12px;">
      <!-- Front -->
      <div style="position: absolute; inset: 0; backface-visibility: hidden; border-radius: 12px; overflow: hidden;">
        <img src="[image]" style="width: 100%; height: 100%; object-fit: cover;">
        <div style="position: absolute; bottom: 0; left: 0; right: 0; padding: 10px 12px; background: linear-gradient(to top, rgba(0,0,0,0.7), transparent); color: #fff; font-size: 0.72rem; font-weight: 600;">Label</div>
      </div>
      <!-- Back -->
      <div style="position: absolute; inset: 0; backface-visibility: hidden; transform: rotateY(180deg); background: #2C2A26; border-radius: 12px; padding: 20px; display: flex; flex-direction: column; justify-content: center; color: #fff;">
        <h4 style="font-size: 0.85rem; font-weight: 700;">Title</h4>
        <span style="font-size: 0.68rem; color: #D4A574;">Year</span>
        <p style="font-size: 0.72rem; color: rgba(255,255,255,0.7); line-height: 1.7; margin-top: 8px;">Description</p>
      </div>
    </div>
  </div>
</div>
```

**CSS hover trigger**：
```css
.flip-card:hover .flip-inner { transform: rotateY(180deg); }
```

**设计要点**：
- perspective: 1200px 制造3D透视感
- transform-style: preserve-3d 保持子元素3D空间
- backface-visibility: hidden 隐藏背面
- 正面底部gradient标签提示内容
- 背面深色底+木色accent统一风格
- 3:4竖向比例适合人像/建筑

---

## #41 巨大引号居中（Giant Quote Centered）

**用途**：结尾页/金句页。奶油底色+大字号引号居中，极简但有力。

```html
<section style="min-height: 100vh; display: flex; align-items: center; justify-content: center; background: #EFE8D8; text-align: center; padding: 60px;">
  <div>
    <p style="font-family: 'Libre Baskerville', serif; font-style: italic; font-size: clamp(1.5rem, 3.5vw, 2.5rem); line-height: 1.8; max-width: 750px; color: #2C2A26;">"Quote text here."</p>
    <p style="font-size: 0.75rem; color: #8E8880; margin-top: 24px; letter-spacing: 0.15em; text-transform: uppercase;">— Attribution</p>
  </div>
</section>
```

**设计要点**：大量留白撑开视觉重量，serif字体营造权威感

---

## #42 肖像分割+引号（Portrait Split Quote）

**用途**：结尾页。左侧人物肖像占45%，右侧引号+总结文字。

```html
<section style="min-height: 100vh; display: flex; align-items: center;">
  <div style="width: 45%; height: 100vh; overflow: hidden;">
    <img src="[portrait]" style="width: 100%; height: 100%; object-fit: cover;">
  </div>
  <div style="width: 55%; padding: 60px 80px;">
    <p style="font-family: 'Libre Baskerville', serif; font-style: italic; font-size: clamp(1.1rem, 2.2vw, 1.5rem); line-height: 2;">"Quote"</p>
    <p style="font-size: 0.72rem; color: #B87333; margin-top: 20px; font-weight: 600; letter-spacing: 0.1em;">ATTRIBUTION</p>
    <p style="font-size: 0.78rem; color: #8E8880; margin-top: 16px; line-height: 1.8;">Summary text.</p>
  </div>
</section>
```

---

## #43 深色字幕式结尾（Dark Typographic Ending）

**用途**：深色全屏+巨大水印文字背景+居中引号，电影感结尾。

```html
<section style="min-height: 100vh; display: flex; align-items: center; justify-content: center; background: #2C2A26; text-align: center; position: relative;">
  <div style="font-size: clamp(4rem, 10vw, 8rem); font-weight: 800; color: rgba(212,165,116,0.08); position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); white-space: nowrap;">WATERMARK</div>
  <div style="position: relative; max-width: 600px; padding: 40px;">
    <p style="font-family: 'Libre Baskerville', serif; font-style: italic; font-size: clamp(1.1rem, 2.2vw, 1.4rem); line-height: 2; color: rgba(255,255,255,0.85);">"Quote"</p>
    <div style="width: 40px; height: 2px; background: #D4A574; margin: 24px auto;"></div>
    <p style="font-size: 0.72rem; color: rgba(255,255,255,0.4); letter-spacing: 0.15em; text-transform: uppercase;">Attribution</p>
  </div>
</section>
```

---

## #44 极简留白引号（Ultra-Minimal Quote）

**用途**：纯白底+左对齐引号+巨大留白。最克制的结尾方式。

```html
<section style="min-height: 100vh; display: flex; align-items: center; justify-content: center; background: #F5F5F0; padding: 60px;">
  <div style="max-width: 500px; text-align: left;">
    <p style="font-family: 'Libre Baskerville', serif; font-size: 1.1rem; line-height: 2.2; color: #2C2A26;">"Quote text here."</p>
    <div style="display: flex; align-items: center; gap: 12px; margin-top: 32px;">
      <div style="width: 32px; height: 1px; background: #D4A574;"></div>
      <span style="font-size: 0.68rem; color: #8E8880; letter-spacing: 0.12em; text-transform: uppercase;">Attribution</span>
    </div>
  </div>
</section>
```

---

## #45 暗化肖像+居中引号（Portrait Overlay Quote）

**用途**：结尾页。全铺人物照暗化+灰度处理，白色引号居中叠加。

```html
<section style="min-height: 100vh; display: flex; align-items: center; justify-content: center; position: relative; text-align: center;">
  <img src="[portrait]" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; filter: brightness(0.3) grayscale(0.3);">
  <div style="position: relative; z-index: 2; max-width: 600px; padding: 40px;">
    <p style="font-family: 'Libre Baskerville', serif; font-style: italic; font-size: clamp(1.2rem, 2.5vw, 1.8rem); line-height: 2; color: #fff;">"Quote"</p>
    <div style="width: 40px; height: 2px; background: #D4A574; margin: 28px auto;"></div>
    <p style="font-size: 0.75rem; color: rgba(255,255,255,0.6); letter-spacing: 0.12em; text-transform: uppercase;">Attribution</p>
  </div>
</section>
```

**设计要点**：filter: brightness(0.3) grayscale(0.3) 让人物退后成氛围，文字成为焦点
