# buyu-design-system

把"我的审美"写成一份 **AI 必须照着执行的规则集**，让任意 AI（Claude Code / Codex 等）产出风格统一、**不像 AI 套模板**的 HTML 页面与小红书图文卡片。

核心赌注一句话：**约束越明确，输出越稳定。** AI 不许自由发挥颜色、字体、版式，只能在这套规则里选。

---

## 为什么需要它

直接让 AI "做个好看的页面"，每次结果都不一样、且大概率是那种一眼假的通用模板。
这套系统把判断前置成可执行的硬约束 —— 配色比例、字体红线、留白占比、禁忌清单都写死，AI 每次先读规则再动手，于是产出可预期、有辨识度。

---

## 它能产出什么

- **HTML 页面**：教程/介绍页、活动/Landing、App 型功能页
- **小红书图文卡片**：3:4、字大手机可读、内置一键导出 PNG、吃满画布不留空

---

## 仓库结构

```
buyu-design-system/
├── SKILL.md            # 工作流：AI 按什么步骤干活
├── brand-dna.md        # 品牌基因（最高优先级）：配色 / 字体 / 气质 / 禁忌
├── references/
│   ├── scene-cards.md      # 小红书卡片场景：竖向分区 + 占用率 + 欠填修复
│   ├── scene-*.md          # 教程 / 活动 / App 场景规范
│   ├── layouts.md          # 布局库
│   ├── components.md       # 组件库（含代码，直接复制用）
│   └── checklist.md        # 交付前自检（含 4 横带密度检查）
└── assets/
    ├── template-cards.html # 卡片种子模板（自带"吃满画布"填充骨架）
    └── template-*.html     # 各场景起点模板
```

读取顺序：`SKILL.md`（怎么做）→ `brand-dna.md` + 对应 `scene-*`（什么能用）→ 复制 `assets/template-*`（从模板改，不从零写）→ 跑 `checklist.md`。

---

## 品牌基因（当前）

**三色**（复古插画风）：暖黄 `#F2C53D` 60% · 朱红 `#D8453B` 30% · 湖蓝 `#2F6FB0` 10%，背景象牙白 `#FFF8EF`。
**字体**：中文标题 思源宋体 Noto Serif SC · 英文装饰 DM Serif Display · 正文 Noto Sans SC · 中文细字 苹方 Light。
**气质**：克制 · 有温度 · 插画感 · 杂志风 · 不像 AI。

> 这是「我的」配置。想做成你自己的，主要改 `brand-dna.md` 的颜色/字体/气质即可，其余规则可复用。

---

## 这套系统沉淀下来的几条硬规则

这些是实战踩坑后写进规则、AI 调用时必须遵守的：

1. **卡片必须吃满画布 ≥75%**：模板用 `flex + space-between + .grow` 主体块把内容撑满，**禁止用空 div 占位假撑版**。
2. **英文装饰字体只套英文/数字**：DM Serif / Caveat 没有中文字形，套中文会 fallback 成歪斜系统宋体。中文细字用苹方 Light。
3. **标题高亮块** `line-height ≥ 1.4` + 极小上下 padding + `box-decoration-break: clone`，否则底色块顶到邻行。
4. **禁用通用 AI 模板感**：无蓝紫渐变 / glassmorphism / 默认 HTML 样式；交付前过 `checklist.md` 的 4 横带密度自检。

---

## 致谢

结构与理念受 [Esther 不二的个人设计系统](https://github.com/esthersjw) 启发，并参考 [归藏 op7418](https://github.com/op7418) 的 PPT Design Skill。本仓库的品牌配置、填充骨架与规则为重新编写。

Made by **布鱼**
