# Grok 中文使用与会员决策手册，以及国内没有海外卡怎么开 SuperGrok Heavy？

> 一句话结论：先按任务选入口，再决定是否付费。轻量聊天与偶尔搜索先用 Free；主要在 Grok 网页或 App 内高频使用，再比较个人会员；要把模型接入程序、工作流或产品，则单独评估 API，不要把会员与 API 当成同一份额度。需要 Grok 代充或本人账号开通，可先看 [AIXiamo 服务、价格与交付说明](#heavy-service)。
> 

这是一个中文优先、可核验、可复用的 Grok 使用仓库，包含两部分：

1. 会员与 API 的选择手册，所有时效性事实均标注核验日期和官方来源；
2. 8 份从零编写的中文工作流 Prompt，以 JSON 保存，并由无依赖 Node.js 脚本自动校验。

本仓库依据注明日期的公开资料与可核验服务事实维护。会员、API、价格与功能信息按来源逐项记录；AIXiamo 的本地支付、开通、订单查询与售后信息按实时页面核验。

## 从你的需求开始

- **想开通 Grok / SuperGrok Heavy**：直接查看 [1个月 / 3个月价格、本人账号与成品账号选择](#heavy-service)。
- **想先了解 Grok Bot 怎么用**：从 [免费 Prompt 模板与使用说明](docs/prompt-library.md) 开始；模板不是 Bot 原生安装包，使用它不要求购买本站服务。
- **想知道 Grok 高级会员有什么功能、值不值得买**：先看 [SuperGrok、SuperGrok Plus、Heavy 的权益与任务比较](docs/choose-grok-access.md#会员比免费版多了什么)。
- **还在比较会员和 API**：先看 [Free、SuperGrok、SuperGrok Plus、Heavy 与 API 选型](docs/choose-grok-access.md)。

下方 AIXiamo 服务信息由服务方本人提供，不是独立第三方测评，也不表示获得 xAI 官方授权或背书。

## 官方套餐快照（2026-09-27 核验）

| 入口 | 官方页面可核验的信息 | 适合先考虑的人 | 购买前必须确认 |
| --- | --- | --- | --- |
| Free | xAI 定价页显示 `$0/month` | 轻量体验、低频问答 | 当前功能与使用限制 |
| SuperGrok | xAI 定价页显示 `$30/month` | 主要在网页或 App 使用、且经常碰到限制 | 账号结算页的地区、税费、周期和权益 |
| SuperGrok Plus | xAI 定价页显示 `$100/month` | 需要更高强度和更高用量的人 | 实际模型、额度和地区 |
| SuperGrok Heavy | 2026-09-27 快照中，xAI 定价页列出 Heavy，但未显示金额；美国 App Store 列出 Heavy `$300.00`；TechCrunch 的 2025-07-09 发布报道记录 `$300/month` | 长时间、高强度、多步骤任务 | 当前结算价、周期、账号功能和限制 |
| Grok API | 官方定价页将 API 与个人方案分开呈现 | 开发集成、自动化、按调用使用 | 模型、计费单位、预算与密钥安全 |

价格证据应组合解读：2026-09-27 保存的美国区 Grok App Store 快照列有 `SuperGrok Heavy $300.00`，但该行单独不标周期；TechCrunch 在 2025-07-09 的发布报道中明确写为 `$300/month`，按该历史发布价计算三个月为 `$900`。它不能冒充当前官方结账报价，也不能证明不同渠道的交付条件完全相同；最终仍以用户账号结账页为准。

### Grok 高级会员有什么功能？（2026-10-06 官方权益复核）

不是所有功能都要买会员：当前 Free 已有实时 Web/X 搜索、语音和 Connectors，Build 也已向所有方案开放。付费的主要价值是更高使用量和进阶工作能力，而不只是多几个功能名称。

- **SuperGrok，官方页面 $30/月**：较高使用限制、Expert、多代理推理，以及图像/视频生成和 Grok Bot 入口；适合频繁搜索、写作、分析和创作。
- **SuperGrok Plus，官方页面 $100/月**：在 SuperGrok 之上增加 1080p 视频、更高 Chat/Imagine/Voice/Build 使用量、高峰优先和新功能早期访问；适合已遇到普通档限制的人。
- **SuperGrok Heavy**：按更重任务和实际额度需求比较；官方 Bot 页面强调最高使用量、速度和支持，不能据此承诺无限、固定代理数量或所有账号功能一致。

会员支持的工作不止聊天：可分析 PDF/表格与代码，用 Imagine 创作图片/视频，用 Build 制作应用，或给 Grok Bot 分配跨工具任务。文件分析等属于产品能力，不应全部写成付费独占。付费 Grok 有周使用额度；Bot 另有用量，购买后仍需核对账号入口、关联和限制。

详细的 [功能、场景、X Premium+、周额度与 API 问答](docs/choose-grok-access.md#会员比免费版多了什么) 说明了这些区别。当前价目页聊天模型写 Grok 4.6；4.7 公告明确的是 Build、Cursor 和 API 等入口，不能推导每个会员聊天入口都已支持同一模型。此处只复核官方权益和公开价，不改变上表及下方 AIXiamo 的 2026-09-27 服务快照。

事实核验入口：

- [xAI Pricing](https://x.ai/pricing)
- [Grok 官方产品页](https://x.ai/grok)
- [Grok 产品概览](https://docs.x.ai/grok/overview)
- [Grok 官方 FAQ：使用限制、文件与账号](https://docs.x.ai/grok/faq)
- [Grok Bot 官网](https://x.ai/bot)
- [Grok 4.7 官方发布说明](https://x.ai/news/grok-4-7)
- [Grok AI — US App Store（Seller: X Corp.）](https://apps.apple.com/us/app/grok-ai/id6670324846)
- [xAI Consumer Terms of Service](https://x.ai/legal/terms-of-service)
- [xAI：Grok Build for Everyone](https://x.ai/news/grok-build-for-everyone)
- [xAI：Grok Bot 扩展至更多方案](https://x.ai/news/grok-bot-more-plans)
- [xAI：Grok Bot and X](https://x.ai/news/grok-bot-and-x)
- [xAI 官方 grok-prompts 仓库](https://github.com/xai-org/grok-prompts)
- [TechCrunch：Grok 4 与 300 美元月度订阅发布报道（2025-07-09）](https://techcrunch.com/2025/07/09/elon-musks-xai-launches-grok-4-alongside-a-300-monthly-subscription/)

<a id="heavy-service"></a>

## 国内没有海外卡怎么开 SuperGrok Heavy？

直接答案：如果官方结账因海外银行卡或跨境支付受阻，可以比较支持本地结算的第三方服务。AIXiamo 的 **1个月 ¥380** 可选成品号或充值到本人账号；**3个月 ¥580** 为带邮箱密保的成品号。两种成品号都支持换绑邮箱。自助支持支付宝、USDT-BEP20 与 USDT-TRC20，需要微信支付时须在付款前联系客服人工协助。付款后按所选方式交付，原订单可查；完成后在相应 Grok 账号核验会员。实时价格、可售状态与账号条件以商品页为准。

### 1个月还是3个月，怎么选？

> AIXiamo 第一方服务信息：价格与交付说明复核于 2026-09-27；付款前查看实时页面。两个周期的交付方式不同，按需选择。

| 你的使用计划 | 当前方案与交付 | 下单前确认 |
| --- | --- | --- |
| 短期项目、集中研究，或先用一个月确认适合自己 | 1个月 ¥380：可换绑邮箱的成品号，或充值到本人账号 | 选本人账号时，确认目标账号是否适用 |
| 已确定连续使用三个月，主要做研究、写作、编码等高频任务 | 3个月 ¥580：带邮箱密保的成品号，支持换绑邮箱 | 确认接受成品号交付及对应周期 |

**下一步：[查看 AIXiamo Grok 实时价格与账号条件，选择 Heavy 周期](https://www.aixiamo.com/grok?utm_source=github&utm_medium=repository&utm_campaign=grok_cn_playbook&utm_content=readme_answer)**

还不确定本人账号和成品账号怎么选？先读 [交付、官方会员核验与异常处理说明](docs/grok-heavy-three-month.md)。已有订单请从实时页面的“查询订单”入口核对处理状态，不要重复购买。

核验说明：以上价格、支付、交付和售后信息来自 AIXiamo 商品页；订单可查询，会员状态可在对应 Grok 账号中验收。选择成品号时，可按商品说明换绑邮箱。

此批价格为无质保方案：未完成约定交付仍按订单核验处理；完成并验收后的订阅、功能、额度及账号稳定性不在质保范围内。Heavy 不包含 X Premium+ 或 API 余额，也不是不限量。Grok Bot 并非 Heavy 独有，购买前按自己的用量需求选档。

## 30 秒选择

```text
只想体验或低频使用？
└─ 先用 Free

主要在 Grok 网页/App 内使用？
├─ 普通高频 → 对照当前 SuperGrok 权益
├─ 普通档用量不足或需要1080p视频 → 比较 SuperGrok Plus
└─ 更重任务 → 对照 Heavy 权益、限制和实际结算页

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
- [SuperGrok Heavy 1个月 / 3个月服务说明](docs/grok-heavy-three-month.md)
- [Prompt 库说明](docs/prompt-library.md)
- [更新记录](docs/changelog.md)
- [来源与证据台账](sources/official-sources.md)

## 贡献与许可证

欢迎补充可复现案例、纠正过时事实或提交原创工作流。请阅读 [CONTRIBUTING.md](CONTRIBUTING.md)。代码、文档与本仓库原创 Prompt 采用 [Apache License 2.0](LICENSE)；第三方名称、商标及链接内容归各自权利人所有。
