---
title: 数据保护
description: Owu Social 采取的数据保护措施
---

# 数据保护

::: warning 注意
本页所述的数据保护措施仅适用于 Owu Social 本身。您的贴文和其他数据一旦被其他实例或服务获取，将超出 Owu Social 的控制范围，我们对其后续的数据保护措施及后果概不负责。
:::

为了尽可能(Best effort)保护您的数据免受爬取和不当使用，Owu Social 在行业标准之上采取了以下额外措施:

1. Owu Social 的索引规则要求主流AI爬虫、推广和SEO爬虫不得爬取我们的站点。特别地，对于 AI 爬虫，Owu Socal 设定了专门的`User-Agent`规则，强制阻止其爬取我们的站点。 [查看 Owu Social-G 的 robots.txt](https://scg.owu.one/robots.txt)
2. Owu Social 额外阻止部分中国大陆云服务商IP的请求，以求阻止不尊重robots.txt规则的爬虫等恶意探测与爬取行为。
3. Owu Social 对所有请求响应添加两个`X-Robots-Tag`标头，值分别为`noimageai`和`noai`。许多AI爬虫认可具有上述值的标头作为退出数据索引的声明。这有助于进一步保护用户贴文不被爬取和用于训练AI模型。

::: info Owu Social-G 的额外措施

[Owu Social-G](/services/gotosocial.md) 由更为隐私友好的 GoToSocial 驱动，因而部署了由 GoToSocial 提供的额外隐私保护措施。

1. GoToSocial 的默认设置支持在网页端展示“公开”可见性的贴文，在默认情况下，设置为“未列出”及更严格可见性的贴文无论如何都无法以使用浏览器访问本站URL的方式查看。
2. GoToSocial 在所有API Endpoint都设定了请求速率限制，显著提高专门通过API爬取数据的难度。
3. GoToSocial 支持启用爬虫防护模式，通过在给定页面进行基于 PoW 的验证来显著提高爬去公开账户页的成本。

:::
