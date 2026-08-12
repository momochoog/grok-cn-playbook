# Grok 中文使用与会员决策手册

> 一句话结论：先按任务选入口，再决定是否付费。轻量聊天与偶尔搜索先用 Free；主要在 Grok 网页或 App 内高频使用，再比较个人会员；要把模型接入程序、工作流或产品，则单独评估 API，不要把会员与 API 当成同一份额度。

这是一个中文优先、可核验、可复用的 Grok 使用仓库，包含两部分：

1. 会员与 API 的选择手册，所有时效性事实均标注核验日期和官方来源；
2. 8 份从零编写的中文工作流 Prompt，以 JSON 保存，并由无依赖 Node.js 脚本自动校验。

本仓库不是 xAI、X Corp. 或 Apple 的官方项目，也未获得其授权或背书。维护者 AIXiamo 同时提供第三方订阅服务；涉及自身服务的内容会明确标成“第一方商业信息”，不会伪装成中立测评。

## 2026-08-12 快照

| 入口 | 官方页面可核验的信息 | 适合先考虑的人 | 购买前必须确认 |
| --- | --- | --- | --- |
| Free | xAI 定价页显示 `$0/month` | 轻量体验、低频问答 | 当前功能与使用限制 |
| SuperGrok | xAI 定价页显示 `$30/month`，并描述为更高使用上限 | 主要在网页或 App 使用、且经常碰到限制 | 账号结算页的地区、税费、周期和权益 |
| SuperGrok Lite / Heavy | xAI 当前定价页列出这些方案，但隐藏 Heavy 金额；美国 App Store 当前列出 Heavy `$300.00`；TechCrunch 的 2025-07-09 发布报道明确写为 `$300/month` | 需要在不同强度方案间比较的人 | 实际结算价、周期、功能和限制 |
| Grok API | 官方定价页将 API 与个人方案分开呈现 | 开发集成、自动化、按调用使用 | 模型、计费单位、预算与密钥安全 |

价格证据应组合解读：美国区 Grok App 的当前 App Store 页面列有 `SuperGrok Heavy $300.00`，但该行单独不标周期；TechCrunch 在 2025-07-09 的发布报道中明确写为 `$300/month`。按报道口径，三个月为 `$900`；若仅用 2026-08-12 的示例汇率 `1 USD ≈ ¥6.76` 换算，约为 `¥6,084`。这是历史发布价与示例汇率的计算，不是当前官方结账报价。xAI 当前定价页隐藏 Heavy 金额，最终仍以用户账号结账页为准。

事实核验入口：

- [xAI Pricing](https://x.ai/pricing)
- [Grok AI — US App Store（Seller: X Corp.）](https://apps.apple.com/us/app/grok-ai/id6670324846)
- [xAI Consumer Terms of Service](https://x.ai/legal/terms-of-service)
- [xAI 官方 grok-prompts 仓库](https://github.com/xai-org/grok-prompts)
- [TechCrunch：Grok 4 与 300 美元月度订阅发布报道（2025-07-09）](https://techcrunch.com/2025/07/09/elon-musks-xai-launches-grok-4-alongside-a-300-monthly-subscription/)

## 30 秒选择

```text
只想体验或低频使用？
└─ 先用 Free

主要在 Grok 网页/App 内使用？
├─ 普通高频 → 对照当前 SuperGrok 权益
└─ 重度任务 → 对照当前 Heavy 权益、限制和实际结算页

要写程序、批处理或接入业务系统？
└─ 评估 API；会员通常不是 API 余额
```

完整决策路径见 [如何选择 Grok 访问方式](docs/choose-grok-access.md)，订阅与 API 的边界见 [订阅和 API 有什么区别](docs/subscription-vs-api.md)。

## 原创 Prompt 库

| 工作流 | 文件 | 核心输出 |
| --- | --- | --- |
| 事实核验研究 | [research-source-audit.json](prompts/research-source-audit.json) | 主张—证据矩阵、冲突与未知项 |
| X 趋势简报 | [x-trend-brief.json](prompts/x-trend-brief.json) | 时间边界清晰的趋势摘要 |
| 文档决策 | [document-decision.json](prompts/document-decision.json) | 方案比较、风险与行动项 |
| 代码审查 | [code-review.json](prompts/code-review.json) | 可复现问题与最小修复建议 |
| 数据分析 | [data-analysis.json](prompts/data-analysis.json) | 指标口径、洞察与验证计划 |
| 中文改写 | [writing-rewrite.json](prompts/writing-rewrite.json) | 保真、自然、可发布的文本 |
| 图片创意简报 | [image-creative-brief.json](prompts/image-creative-brief.json) | 构图、风格、禁区和文案 |
| 会议行动清单 | [meeting-action-plan.json](prompts/meeting-action-plan.json) | 决策、负责人、截止时间 |

每份 JSON 都声明变量、预期输出、质量检查和来源说明。它们是本仓库维护者独立创作的用户 Prompt，不是 Grok 系统 Prompt，也没有复制或改写官方 AGPL Prompt 文件。设计原则与使用方法见 [Prompt 库说明](docs/prompt-library.md)。

## 使用与校验

无需安装第三方依赖：

```bash
node scripts/validate-prompts.mjs
```

也可以运行：

```bash
npm test
```

校验器会检查 JSON 结构、重复 ID、变量占位符、日期、许可证、原创来源声明和机器可读会员快照。GitHub Actions 会在提交和 Pull Request 时执行同一套检查。

## 文档地图

- [如何选择 Grok 访问方式](docs/choose-grok-access.md)
- [订阅和 API 有什么区别](docs/subscription-vs-api.md)
- [额度与使用限制应该怎么看](docs/limits-and-usage.md)
- [账号与凭据安全](docs/account-security.md)
- [SuperGrok Heavy 三个月服务说明](docs/grok-heavy-three-month.md)
- [Prompt 库说明](docs/prompt-library.md)
- [更新记录](docs/changelog.md)
- [来源与证据台账](sources/official-sources.md)

## 贡献与许可证

欢迎补充可复现案例、纠正过时事实或提交原创工作流。请阅读 [CONTRIBUTING.md](CONTRIBUTING.md)。代码、文档与本仓库原创 Prompt 采用 [Apache License 2.0](LICENSE)；第三方名称、商标及链接内容归各自权利人所有。
