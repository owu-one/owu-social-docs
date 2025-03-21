---
title: 发现内容
description: 如何在 Owu Social 快速找到你感兴趣的内容。
---

# 发现内容

Owu Social 提供的大多数联邦宇宙服务没有算法推荐，你在你自己的时间线（主页时间线）上看到的内容都来自你关注的账号或话题标签，按照时间倒序排列。

因此在这种情况下，**发现内容的关键是找到你感兴趣的账户和话题**。这里有几种方法帮助你发现有趣的账号/话题标签，你可以浏览它们的简介、置顶和帖文，感兴趣的话就发送关注请求。

::: tip 发送关注请求前的注意事项

- 有些账户不愿接收没有头像或原创帖文的关注请求，所以最好在申请前完善一下你的主页，并发布一些原创帖文。这样有助于提高对方接受你请求的可能性。
- 不确定对方是否接受请求时，可以先留言或私信对方，告诉对方关注的理由。
- 如果发现对方明确拒绝了你的关注请求（关注状态从“待批准”变回未关注），不要重复频繁发送请求，这会让对方感到困扰。如果确实想关注对方，你可以等待一阵子（数周甚至数月）再发送关注请求，或考虑以RSS等方式订阅对方的公开贴文。在 Owu Social，频繁向同一账户发送关注请求被视为骚扰，详情请见[站点规则](/rules/content.md)。

:::

::: details 从旧有社交网络迁移

因为平台不兼容，从旧有社交网络（如Twitter）完整迁移并不现实。你可以逐步迁移：先关注部分账户 -> 在Fediverse发布内容 -> 减少旧社交网络的使用 -> 选择性离开旧平台。

- **Twitter/X**: 由于 Twitter 停用了免费版 API，绝大多数自动化导入工具已经失效。可以尝试通过以下几种方法手动发现推友在 Fediverse 的账号。
  - 进入你的关注列表，检查你关注的人的昵称和账户简洁是否包含`@username@instance.domain`或`https://instance.domain/@username` / `https://instance.domain/users/username` 这样格式的用户名。如果有，你可以复制对应的用户名或链接，使用你喜欢的客户端在 Owu Social 进行搜索。
  - 一些人可能只会在置顶推文或最近一条推文公布他们在新平台的账号，你可以尝试打开你较为关注的人的主页，看看他们有没有在置顶推文中公布自己的新账号。
  - 如果你只需要单项
- **BlueSky**: BlueSky 与联邦宇宙的互联性主要通过 Bridgy Fed 项目实现，你可以尝试打开你关注的人的主页，看他们有没有在账号简介、置顶帖文中包含`@<bluesky用户名>@bsky.brid.gy`格式的账户，如果有，就可以复制对应的用户名，在 Owu Social 搜索并关注。你也可以直接在Owu Social搜索`@<bluesky用户名>@bsky.brid.gy`，看看是否会有结果出现。
- **Fediverse**: 一般而言，大多数 Fediverse 平台都实现了数据导出/导入支持，你可以登录旧有 Fediverse 站点的设置面板，查找数据导入/导入部分的设置，并完成对应的操作。Owu Social 在 [导出与导入](/guide/migration.md) 中介绍了一些常见的情况和方法。
:::

::: details 浏览本站与跨站时间线

本站时间线包括了所有 Owu Social 用户发布的公开帖文，跨站时间线包括了所有与 Owu Social 联合的用户发布的公开帖文。如果你还没有任何关注列表，这是发现内容的好方法。

:::

::: details 关注转发机器人、版聊机器人与群组

转发机器人、版聊机器人或群组实质上是别人事先准备好的信息流 —— 这实际上是推送算法的雏形，可帮助发现内容。

- 转发机器人按照事先设定的规则（如赞/转数量阈值）转发帖文
- 版聊机器人在收到提及时自动转发对应帖文给所有关注此机器人的用户，达到“版聊”的效果
- 群组在机制上和版聊机器人类似。

以下是一些你可以尝试关注的相关机器人。除非特别说明，Owu Social不控制这些机器人，也与它们的运营没有关联。如果你关注这些机器人后收到了不想看到的内容，可以考虑通过[过滤、静音与屏蔽](filter.md)功能屏蔽特定的账号，或取关这些机器人。

| 用户名 | 名称 | 说明 |
| --- | --- | --- |
| `@board@ovo.st` | 公共留言板 | 中文联邦宇宙中最大的版聊机器人。 |
| `@rtme@mstdn.social` | RT Bot | 一个个人运营的转发机器人，似乎主要转发热门帖文。 |

:::

::: details 主动输出和参与互动

主动输出内容，等待别人来关注你，这也是一种发现内容的方式。而且，主动输出内容还可以让你在联邦宇宙中建立自己的“声誉”，这样你在关注别人时别人就更有可能接受你的关注请求。

如果你目前不想主动输出自己的内容，还可以根据别人的发布的话题和内容与别人互动。上面我们提到可以浏览本站/跨站时间线以及bot，你可以在在这些地方看到感兴趣的帖文时点赞、评论、转发，这样对方账户就会收到通知，进而有可能注意到你，联系就是这样建立起来的。

:::

::: details 依靠现有关注

当你积累了一定数量的关注时，你就可以从你关注的账户的回复和转发中发现更多的账户，形成一个正向的循环。当你走到这一步的时候，你就可以说是已经成功建立了自己在联邦宇宙的网友圈了！

:::
