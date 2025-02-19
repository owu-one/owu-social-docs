---
title: Bot 服务
description: Owu One! 运营的 Bot 服务
---

# Bot服务

## 哔埔市 beepboop.city 

哔埔市 beepboop.city 是 Owu One! 运营的专门为 Bot 账户提供服务的 Fediverse 实例。

::: details 详情

目前哔埔市提供以下两个实例，均开放注册：

- GoToSocial 实例：[sloth.beepboop.city](https://sloth.beepboop.city)
- Iceshrimp.NET 实例：[shrimp.beepboop.city](https://shrimp.beepboop.city)

上述实例均提供了 Mastodon API 支持。如果你使用 Mastodon API 开发机器人，可以较为轻松地迁移到哔埔市。

提交注册申请： https://r.owu.one/beepboopcity-zh

注：
1. 暂不接受仅转发RSS内容的机器人的注册，我们之后（大概2025年1-2月）会为RSS机器人创建专门的服务。但是，如果你对RSS中的内容进行了进一步处理，则可以继续申请注册。
2. 原则上不接受使用生成式人工智能的机器人的注册，我们将根据之后的反馈确定这方面的政策。
3. 将在之后发布具体的实例规则、使用文档和开发指引等资源。

:::

## Owu Social 站内机器人

::: details GPT Bot

- **用户名**：`@gpt@scg.owu.one`
- **服务**：在发帖时提及此bot，即可调用GPT，与大模型对话。
  - 如果你是Owu Social用户，bot将默认使用`GPT-o3-mini`回复。
  - 如果你是外站用户，bot将默认使用`Gemini Flash 2.0`回复。
  - 最多支持回溯所在贴文串的最近6条贴文（若回溯时积累的历史消息超过5000字则终止回溯），单条贴文最多支持识别前3张图片（支持的格式: jpg, png）
- **响应范围**： 几乎所有联邦宇宙用户
- **注意**： 当你在贴文中主动提及GPT Bot时，你的贴文内容将会被发送到与 GPT Bot 连接的第三方（包括 OpenAI）进行处理。请注意不要在贴文中透露任何敏感信息。

:::

::: details 网页存活状态检测

- **用户名**：`@areuok@scg.owu.one`
- **服务**： 提及此bot，并发送要测试的地址(不要有其他内容)，bot将会返回该地址的存活状态。(对于不确定是自己的网络问题还是网站炸了的情况可能很有用)
- **响应范围**： 几乎所有联邦宇宙用户

:::
