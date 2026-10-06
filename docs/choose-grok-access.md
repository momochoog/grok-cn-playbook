<a id="grok-会员怎么选freesupergrokheavy-还是-api"></a>
# Grok 会员怎么选：Free、SuperGrok、SuperGrok Plus、Heavy 还是 API？

直接答案：低频个人使用先从 Free 开始；主要在 Grok 网页或 App 内高频使用，再比较个人会员；只有在需要程序调用、批处理、自动化或产品集成时，才优先评估 API。Heavy 不是“所有人都更划算”的默认选项，购买前应把任务强度、实际限制、计费周期和账号风险一起核对。

> 官方权益与 Free / SuperGrok / SuperGrok Plus 公开价复核：2026-10-06。AIXiamo 服务、App Store 和历史发布价格证据仍沿用既有日期快照，本轮没有重新核验。方案、价格和权益可能变化，最终以对应页面与账号结算页为准。

## 按任务而不是按名称选择

| 你的主要任务 | 建议先看的入口 | 原因 | 决策前再问一句 |
| --- | --- | --- | --- |
| 偶尔问答、体验搜索或生成 | Free | 先验证 Grok 是否适合自己的任务 | 免费限制是否能覆盖实际频率？ |
| 日常高频聊天、写作、搜索 | SuperGrok | 当前公开价为 `$30/month` | 当前账号结算页的权益和周期是什么？ |
| 更高强度、希望获得更高用量 | SuperGrok Plus | 当前公开价为 `$100/month` | 模型、额度和地区是否适用于我的账号？ |
| 长时间、高强度、多步骤任务 | SuperGrok Heavy | 官方比较表提供 Heavy 入口 | 是否真的频繁碰到限制，还是只是偶尔峰值？ |
| 程序接入、批量处理、工作流自动化 | Grok API | API 与个人会员是分开的产品路径 | 调用预算、模型选择和密钥管理是否已设计？ |
| 团队成员、权限与统一管理 | Business / Enterprise | 团队管理不是个人会员的主要目标 | 是否需要席位、权限、审计或合同支持？ |

## 会员比免费版多了什么？

“Grok 高级会员”不是一个统一套餐名。先区分 SuperGrok、SuperGrok Plus、SuperGrok Heavy，以及由 X 购买的 Premium / Premium+，再看需要的能力与用量。

| 方案 | 当前官方确认的区别 | 更具体的使用需求 |
| --- | --- | --- |
| Free | 已有实时 Web/X 搜索、语音、Connectors；Build 已面向所有方案 | 偶尔查询、语音问答，先试做一个小应用 |
| SuperGrok | $30/月；较高使用限制，Expert、图像/视频生成、Grok Bot；产品页还说明多代理推理 | 经常做带来源研究、文档分析、写作或图片/视频创作 |
| SuperGrok Plus | $100/月；含 SuperGrok，并增加 1080p 视频、更高 Chat/Imagine/Voice/Build 用量、高峰优先和新功能早期访问 | 普通档用量经常不足，或确实需要 1080p 输出 |
| SuperGrok Heavy | 当前比较表有该档；Bot 官网强调最高使用量、较快速度、复杂任务和支持 | 长任务频繁碰到现有档位限制，再核对 Heavy 实际额度与结账条件 |

依据：[官方价目页](https://x.ai/pricing)、[Grok 产品页](https://x.ai/grok)、[Grok Bot 官网](https://x.ai/bot)。更高使用量不等于无限；Heavy 的固定代理数量与当前结账价未在本次可读取的页面确认。

### 功能怎么变成实际工作？

以下是任务示例，不是结果质量、独占功能或具体次数的保证：

- **研究和信息比较**：查询 Web 与 X，把同一事件的不同来源放在一起，要求注明时间、证据和不确定项；最终打开原始来源复核。
- **PDF、表格与代码分析**：上传材料，请 Grok 提取关键数据、比较文档或解释代码。让它定位页码、表名或代码位置，避免只拿一段摘要做决定。
- **图片与视频创作**：用 Imagine 生成、编辑和迭代素材。确有 1080p 视频需求时比较 Plus；不要把某档所有输出、时长或生成次数写成固定保证。
- **应用制作**：用 Build 创建网站、小工具、游戏或仪表盘并分享；它已不是 Heavy 独有。
- **跨工具后台工作**：用 Grok Bot 处理需要多个步骤和工具的任务，先限定权限，让发送、删除、付款等重要动作经过本人确认。

Grok 的 [产品概览](https://docs.x.ai/grok/overview) 与 [官方 FAQ](https://docs.x.ai/grok/faq) 说明文件、语音和多模态能力；这些能力不能全部归为付费独占。任务模板可从本仓库的 [Prompt 库](prompt-library.md) 开始，模板本身不要求购买服务。

### 普通 SuperGrok 也能用多代理和 Grok Bot 吗？

当前 Grok 产品页已把多代理推理写入 SuperGrok，不能说只有 Heavy 才能用。Grok Bot 也覆盖个人 SuperGrok、Plus 与 Heavy，但它是另一个工作入口：需要关联正确的 Grok 与 Cursor 账号，有自己的周使用量，不是聊天额度无限延伸。具体关联和用量看 [官方 Bot 文档](https://docs.x.ai/grok-bot/overview) 与 [计划说明](https://cursor.com/help/grok-bot/plans)。本仓库的 JSON Prompt 不是 Bot 原生安装包。

### 买会员以后，额度在哪里看？

在 Grok 的 Settings → Usage 查看周使用比例、产品消耗和重置时间。当前官方说明付费 Grok 使用共享周额度池，长任务或高质量视频与普通聊天的消耗不同；达到周限额后可等重置、升级或按需购买额外用量。Bot 有单独的计量入口。不要只记录“发了多少条消息”，也不要承诺买了 Heavy 就永不触顶。依据：[Grok 使用限制 FAQ](https://docs.x.ai/grok/faq)、[Bot 计划说明](https://cursor.com/help/grok-bot/plans)。

### X Premium+ 与直接购买 SuperGrok 是同一件事吗？

不是同一个购买渠道和商品。普通 X Premium 提高 Grok 使用限制，同时提供 X 平台权益；Premium+ 当前包含 SuperGrok access 和 Grok Bot 等。直接购买 SuperGrok 则以 Grok 方案为主。不能推导 X Premium+ 自动等于 SuperGrok Plus 或 Heavy；已有 X 订阅时，先在 Grok 关联 X 账号并核对权益，避免重复购买。依据：[X 官方会员说明](https://help.x.com/en/using-x/x-premium)、[Grok 账号关联 FAQ](https://docs.x.ai/grok/faq)。

### Studio、Build 和定时任务，还要买 Heavy 吗？

官方 FAQ 写明 Studio 已停止支持，改用 Build；2026-08-19 的公告已将 Build 向所有方案开放，不能沿用早期“仅 Heavy Beta”的限制。Automations 的定时任务面向所有用户，邮件触发包含在 SuperGrok；可用入口与额度仍需在账号内检查。依据：[官方 FAQ](https://docs.x.ai/grok/faq)、[Build 当前公告](https://x.ai/news/grok-build-for-everyone)、[自动化公告](https://x.ai/news/grok-automations)。

### DeepSearch、DeepResearch 和最新模型要怎么判断？

DeepSearch 出现在 Grok 3 的历史官方发布稿中，但该历史说明不足以证明今天某会员的独占权益或固定次数。本次当前价目页使用 Expert 等名称；以自己的模式入口和用量提示为准，不把“深度研究”泛称当作套餐保证。

同样，价目页聊天模型当前写 Grok 4.6，而 Grok 4.7 发布公告明确列出 Build、Cursor、API 等入口。不能看到新模型发布就承诺每个会员、每个聊天入口均已可用。依据：[Grok 3 历史说明](https://x.ai/news/grok-3)、[当前价目页](https://x.ai/pricing)、[Grok 4.7 公告](https://x.ai/news/grok-4-7)。

## 三步决策法

### 1. 写下真实任务

不要只写“想用最强模型”。写成可衡量的句子，例如：

- 每天完成 5 次带来源的行业调研；
- 每周审查 3 个中型代码变更；
- 将 2 万条文本放进自动化分类流程；
- 在网页端进行长文写作和图片创意。

### 2. 区分交互式使用和程序调用

- 在 grok.com 或 App 中由人发起任务，属于会员决策；
- 由代码、服务器或自动化流程发起调用，属于 API 决策；
- 两者都需要时，分别做预算，避免把一个入口的价格误当成另一个入口的额度。

### 3. 用最小成本验证一周

记录任务次数、碰到限制的时间、失败类型和是否真的需要更高档位。没有实际瓶颈时，不必为了方案名称提前升级；瓶颈稳定出现时，再比较升级成本与节省的时间。

## 关于价格，哪些能直接说？

官方公开价与旧价格证据分别看日期：

- 2026-10-06 复核的 xAI 定价页直接显示 Free 为 `$0/month`、SuperGrok 为 `$30/month`、SuperGrok Plus 为 `$100/month`；
- 同一页面列出 SuperGrok Heavy，但本次可读取页面没有确认 Heavy 金额；
- 2026-09-27 保存的美国区 Grok App Store 快照列出 `SuperGrok Heavy $300.00` 内购项，同一行没有标注周期；
- TechCrunch 在 2025-07-09 的发布报道中明确把 SuperGrok Heavy 写为 `$300/month`。

因此可以严谨地说：发布时有报道明确记录 300 美元月价，2026-09-27 的 App Store 快照列有 300 美元内购项；本次没有确认 Heavy 当前结账金额。按历史发布价计算三个月为 900 美元；这不代表 xAI 当前结账价，地区、平台、税费、促销和周期仍以实际结账页为准。

没有海外银行卡时，本地结算可以减少办卡和跨境支付步骤。AIXiamo 在 2026-09-27 核验的 Heavy 方案中，1个月 ¥380 可选成品号或充值到本人账号；3个月 ¥580 为带邮箱密保的成品号。两种成品号都支持换绑邮箱。具体条件和实时价格见 [README 中的 Heavy 服务说明](../README.md#heavy-service)。

## 已经确定要 Heavy，下一步怎么做？

先确认是否要用本人账号：该方式目前对应 1个月；如果选择 3个月，则接收带邮箱密保的成品号。AIXiamo 的 [Heavy 交付与会员核验说明](grok-heavy-three-month.md) 列出了付款后如何查询原订单，以及如何在账号内确认套餐。这是 AIXiamo 第一方服务信息；本仓库模板仍可免费独立使用。

## 常见误区

### 会员就是 API 额度吗？

不是一个可靠假设。官方定价页把 Individual 与 API 分开呈现，预算和使用方式也不同。详见 [订阅和 API 有什么区别](subscription-vs-api.md)。

开发者还应查看 [API 当前价目](https://docs.x.ai/developers/pricing) 和自己的 Console / Usage。某些工具可用订阅授权接入，不代表任意 API Key、模型或工具都免费无限；账号显示的适用额度与计费方式需要单独核对。

### Heavy 就是无限量吗？

不能这样承诺。官方对付费层级使用“更高限制”等表述，而不是永久无限。详见 [额度与使用限制](limits-and-usage.md)。

### 买成品账号更省事吗？

它可能减少开通过程，但会引入账号控制权、恢复权和条款风险。xAI 消费者条款明确要求不得共享账号凭据或把账号提供给他人。详见 [账号与凭据安全](account-security.md)。

## 官方来源

- [xAI Pricing](https://x.ai/pricing)
- [Grok 产品页](https://x.ai/grok)
- [Grok 产品概览](https://docs.x.ai/grok/overview)
- [Grok 官方 FAQ](https://docs.x.ai/grok/faq)
- [Grok Bot 官网](https://x.ai/bot)
- [Grok Bot 当前文档](https://docs.x.ai/grok-bot/overview)
- [Grok Bot 计划与用量](https://cursor.com/help/grok-bot/plans)
- [X Premium 官方说明](https://help.x.com/en/using-x/x-premium)
- [Build 向所有方案开放](https://x.ai/news/grok-build-for-everyone)
- [Automations 官方说明](https://x.ai/news/grok-automations)
- [Grok 3 历史说明](https://x.ai/news/grok-3)
- [Grok 4.7 发布说明](https://x.ai/news/grok-4-7)
- [API 当前价目](https://docs.x.ai/developers/pricing)
- [Grok AI — US App Store](https://apps.apple.com/us/app/grok-ai/id6670324846)
- [xAI Consumer Terms of Service](https://x.ai/legal/terms-of-service)
- [TechCrunch 发布报道（2025-07-09）](https://techcrunch.com/2025/07/09/elon-musks-xai-launches-grok-4-alongside-a-300-monthly-subscription/)
