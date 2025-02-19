---
title: Owu Social-G
description: Owu Social-G 是 Owu One! 运营的 GoToSocial 实例。
---

# Owu Social-G

## 地址

**[https://scg.owu.one](https://scg.owu.one)**

## 简介

[Owu Social-G](https://scg.owu.one) 是一个中文 [GoToSocial](https://gotosocial.org) 实例。

### 特色

- **广泛联合**: 作为与联邦宇宙互联最为广泛的 GoToSocial 实例之一，Owu Social-G 既可以是你体验 GoToSocial 的最佳选择，也可以是你与联邦宇宙展开互动的起点。
- **隐私优先**：在 Owu Social-G，你的默认配置为隐私保护特别优化：例如，你的贴文默认不会出现在本站/跨站时间线和**你在网页端的个人页面**（可手动调整）；可以设置互动规则，阻止你不希望看到的互动（点赞、评论、转发），或逐个进行审核与批准；默认状态下别人的关注需要手动批准……
- **自在表达**: 单条贴文可包含最多 `5000` 字和 `9` 份媒体附件，分别是 Mastodon官方版本 上限的 `10` 倍和 `2.25` 倍。
- **时刻最新**: 我们始终率先部署最新版本，借助定期快照，让你在数据安全的情况下优先享受 GoToSocial 的最新功能和错误修复 —— 领先大多数实例数周甚至数月。

## 注册

Owu Social-G 目前开放注册，访问主页即可看到注册入口。你也可以直接在 [注册页面](https://scg.owu.one/signup) 上注册。

::: info 注册说明

- 注册时需要填写可用的邮箱地址
- 注册时需要说明注册理由
- 注册需要管理员手动批准

:::

## 兼容性

下表只展示已知与 Owu Social-G 的联合存在问题的 ActivityPub 实现。问题被解决6个月后，相关的软件条目可能会被移除。

::: details 兼容状态表

图例：

- ☑️ - 小问题（特定情况下有问题）
- ⚠️ - 可发现账户，但无法关注（通常是因为对方实例未执行签名等必要安全措施）
- ❌ - 无法发现账户/不可联合
- 👻 - 软件已过时/停止更新一年或更长时间
- 📋 - 链接到与软件相关的 [fediverse.observer](https://fediverse.observer/list) 列表

| 软件 | 联合情况 | 问题 | 测试的实例/账户（如果有）与备注 |
| --- | --- | --- | --- |
| [Misskey](https://misskey-hub.net/) [📋](https://misskey.fediverse.observer/list) / [Sharkey](https://activitypub.software/TransFem-org/Sharkey) [📋](https://sharkey.fediverse.observer/list) | ✅ | [Misskey #14915](https://github.com/misskey-dev/misskey/issues/14915) | 所有 2024.11.0 及之后版本的 Misskey/Sharkey 实例都可以与 Owu Social-G 无障碍联合。 |
| [Betula](https://sr.ht/~bouncepaw/betula) [📋](https://betula.fediverse.observer/list) | ❌ |  | [@danila@links.danilax86.space](https://links.danilax86.space/@danila) |
| [Bridgy Fed](https://fed.brid.gy/) | ☑️ | [GtS #3381](https://github.com/superseriousbusiness/gotosocial/issues/3381) | 注：目前，Owu Social-G账户已基本可以与Bridgy Fed及其账户正常联合，解引用还存在一部分问题，预计于v0.19修复。 |
| [Bonfire](https://github.com/bonfire-networks) | ⚠️ |  | https://hiti.nairatmya.org/@mossbeard |
| [Bovine](https://codeberg.org/bovine/bovine) | ⚠️ |  | @moocow@bovine.fly.dev |
| [Brutalinks](https://git.sr.ht/~mariusor/brutalinks) | ⚠️ |  | [@marius@brutalinks.tech](https://brutalinks.tech/~marius) |
| [Bugle](https://github.com/rknightuk/bugle) [📋](https://bugle.fediverse.observer/list) | ❌ |  | [@zobot@bugle.lol](https://bugle.lol/@zobot) |
| [Castopod](https://code.castopod.org/adaures/castopod) | ⚠️ | [Castopod #364](https://code.castopod.org/adaures/castopod/-/issues/364) | https://p.skobk.in/@sporadic_podcast |
| [Dokieli](https://github.com/linkeddata/dokieli) | ❓ |  | ❓ |
| [Emissary](https://github.com/EmissarySocial/emissary) [📋](https://emissary.fediverse.observer/list) | ⚠️ |  | https://benpate.dev/@ben |
| [Epicyon](https://gitlab.com/bashrc2/epicyon) | ❓ |  | ❓ |
| [Forgejo](https://codeberg.org/forgejo/forgejo) [📋](https://forgejo.fediverse.observer/list) | ⚠️ |  | [@K0RR@git.sakamoto.pl](https://git.sakamoto.pl/K0RR) |
| [Funkwhale](https://dev.funkwhale.audio/funkwhale/funkwhale) [📋](https://funkwhale.fediverse.observer/list) | ❌ |  | https://audio.pepemoss.com/@earl |
| [Friendica](https://github.com/friendica/friendica) [📋](https://friendica.fediverse.observer/list) | ☑️ | [Friendica #14316](https://github.com/friendica/friendica/issues/14316)  | https://entropysource.ru/profile/hubbitant |
| [Guppe](https://a.gup.pe) 👻 | ⚠️ | [Guppe #90](https://github.com/immers-space/guppe/issues/90) | `@board@a.gup.pe`<br/>注：Guppe使用的HTTP签名库较老，无法识别 Owu Social-G 的 Activity 签名。若有时间我们将尝试修复这一问题。 |
| [Juick](https://x.juick.com/Juick) | ❌ | [GtS #3268](https://github.com/superseriousbusiness/gotosocial/issues/3268), [GtS #1820](https://github.com/superseriousbusiness/gotosocial/issues/1820)  | [@Linda-chan@juick.com](https://juick.com/Linda-chan) |
| [Kepi](https://gitlab.com/marnanel/chapeau) 👻 [📋](https://kepi.fediverse.observer/list) | ❓ |  | ❓ |
| [Kitsune](https://github.com/kitsune-soc/kitsune) | ❓ |  | ❓ |
| [Ktistec](https://github.com/toddsundsted/ktistec) [📋](https://ktistec.fediverse.observer/list) | ⚠️ | [Ktistec #103](https://github.com/toddsundsted/ktistec/issues/103), [GtS #2991](https://github.com/superseriousbusiness/gotosocial/issues/2991)  | https://epiktistes.com/@toddsundsted |
| [Kroeg](https://puck.moe/git/kroeg) 👻 [📋](https://kroeg.fediverse.observer/list) | ⚠️ |  | https://puckipedia.com/ |
| [Lemmy](https://github.com/LemmyNet/lemmy) [📋](https://lemmy.fediverse.observer/list) | ☑️ | [GtS #2697](https://github.com/superseriousbusiness/gotosocial/issues/2697), [All issues related to GtS](https://github.com/LemmyNet/lemmy/issues?q=is%3Aissue+gotosocial) | [user](https://lemmygrad.ml/u/yogthos), [community](https://lemmygrad.ml/c/funny)<br/>注：[Owu Board](https://bdl.owu.one) 和其它所有手动启用了Activity签名的 Lemmy 实例已经能与 Owu Social-G 正常联合。此功能支持通过配置文件或管理面板配置后，此处将标记为✅（无障碍联合） |
| [Letterbook](https://github.com/Letterbook/Letterbook) | ❓ |  | ❓ |
| [Magnetar](https://git.astolfo.cool/natty/magnetar) | ❓ |  | ❓ |
| [Mbin](https://github.com/MbinOrg/mbin) ([Kbin](https://github.com/ernestwisniewski/kbin) 的维护状态存疑) [📋](https://mbin.fediverse.observer/list) | ⚠️ | 可以关注用户，但不能关注栏目(Magzine) | [user](https://kbin.earth/u/jwr1), [magazine](https://kbin.earth/m/kbinEarth) |
| [micro.blog](https://micro.blog) [📋](https://microdotblog.fediverse.observer/list) | ⚠️ |  | [@manton@manton.org](https://manton.org) |
| [NeoDB](https://github.com/neodb-social/neodb) [📋](https://neodb.fediverse.observer/list) | ⚠️ | 可以正常登录使用，但无法关注纯NeoDB账号 | [@Zucchini@minreol.dk](https://minreol.dk/users/Zucchini) |
| [NodeBB](https://github.com/NodeBB/NodeBB) [📋](https://nodebb.fediverse.observer/list) | ⚠️ |  | https://ekk.app/user/bh4-tech |
| [PeerTube](https://github.com/Chocobozzz/PeerTube) [📋](https://peertube.fediverse.observer/list) | ⚠️ |  [PeerTube #6462](https://github.com/Chocobozzz/PeerTube/issues/6462) | [@it@peervideo.ru](https://peervideo.ru/c/it) |
| [Piefed](https://codeberg.org/rimu/pyfedi) [📋](https://piefed.fediverse.observer/list) | ⚠️ | 可以关注用户，但无法关注社区 | [user](https://piefed.social/u/Jerry), [community](https://piefed.social/c/piefed_meta) |
| [Rebased](https://gitlab.com/soapbox-pub/rebased) | ❓ |  | ❓ |
|  |
| [Plume](https://github.com/Plume-org/Plume) [📋](https://plume.fediverse.observer/list) | ⚠️ |  | [@paradoxal@zone.paradoxal.netlib.re](https://zone.paradoxal.netlib.re/@/paradoxal) |
| [Seppo](https://codeberg.org/seppo/seppo) | ❌ | [GtS #2961](https://github.com/superseriousbusiness/gotosocial/issues/2961#issue-2333014325), [GtS #1186](https://github.com/superseriousbusiness/gotosocial/issues/1186) | https://seppo.social/aseppototry/o/p/ |
| [Shuttlecraft](https://github.com/benbrown/shuttlecraft) 👻 [📋](https://shuttlecraft.fediverse.observer/list) | ❌ |  | https://cerritos.glitch.me |
| [Swanye](https://codeberg.org/WammKD/Swanye) | ❓ |  |  |
| [Takahē](https://github.com/jointakahe/takahe) [📋](https://takahe.fediverse.observer/list) | ⚠️ | [Takahe #223](https://github.com/jointakahe/takahe/issues/223), [Takahe #528](https://github.com/jointakahe/takahe/issues/528) | [@wezza83@coot.vabl.dev](https://coot.vabl.dev/@wezza83@coot.vabl.dev) |
| [Tapir](https://github.com/ar-nelson/tapir) 👻 | ❓ |  | ❓ |
| [Threads](https://threads.net) | ❌ | [GtS #2491](https://github.com/superseriousbusiness/gotosocial/issues/2491) | Threads 并不开源，实行不透明的联合规则，且未按规范返回 ActivityPub 数据，GoToSocial 无意针对 Threads 进行特殊处理。我们赞同这种做法。 |
| [Toki](https://github.com/purifetchi/Toki) | ❓ |  | ❓ |
| [Writefreely](https://github.com/writefreely/writefreely) [📋](https://writefreely.fediverse.observer/list) | ✅ |  | [@baslow@read.asorrybowl.blog](https://read.asorrybowl.blog)<br/>注：[Owu Write](https://write.owu.one) 和其它所有更新到v0.15.1及之后版本的 Writefreely 实例可与 Owu Social-G 正常联合 |
| [write.as](https://write.as) (付费版？ Writefreely) | ⚠️ |  | [@write-as-roscoes-story@write.as](https://write.as/write-as-roscoes-story) |
| [Wordpress](https://github.com/WordPress/wordpress-develop) [📋](https://wordpress.fediverse.observer/list) | ⚠️ / ✅ | 取决于使用的 [ActivityPub](https://en.wikipedia.org/wiki/ActivityPub) 插件 |  |
| [wxwClub](https://github.com/wxwmoe/wxwClub) | ☑️ |  | 注： 主要的wxwClub实例ovo.st与Owu Social的联合可能受到[数据保护措施](/terms/data.md)的第 4 条的影响。请咨询Owu Social-G管理员获取详情。若发现联合中断，请向管理员报告。 |
| [Yarn](https://git.mills.io/yarnsocial/yarn) | ❓ |  | ❓ |

:::

## 开发计划

[Owu Social-G](https://scg.owu.one) 由 [GoToSocial](https://gotosocial.org) 驱动, 这是一个年轻的社交软件 (2021年2月开始开发), 目前处于 测试(Beta)阶段, 还在活跃开发中。

本节只列出可能对你（用户）的使用体验产生影响的功能。如果你想跟进有关功能支持的更新，还可以关注 [@admin@scg.owu.one](https://scg.owu.one/@admin) 。

下表中标注为`N/A`的功能表示暂无明确的支持计划。

::: details 功能开发计划一览表

| 功能 | 支持计划 |
| --- | --- |
| 在主页显示转发 | 已有 [PR #3346](https://github.com/superseriousbusiness/gotosocial/pull/3346) |
| 客户端授权管理 | 预计 2025 年发布, 具体参见 [Issue #1081](https://github.com/superseriousbusiness/gotosocial/issues/1081), [Issue #1573](https://github.com/superseriousbusiness/gotosocial/issues/1573), [Issue #2227](https://github.com/superseriousbusiness/gotosocial/issues/2227), [Issue #2523](https://github.com/superseriousbusiness/gotosocial/issues/2523) |
| 中继 | 预计 2025 年发布, Owu Social-G 通过单向订阅中继保证你能接触到广泛的内容,但你公开发布的内容目前只能依靠他人的主动关注和转发来进入其它实例。具体参见 [Issue #1123](https://github.com/superseriousbusiness/gotosocial/issues/1123), [Issue #1124](https://github.com/superseriousbusiness/gotosocial/issues/1124) |
| 双因素认证 | 预计 2025 年发布 |
| 自定义表情回应 | N/A |
| 引用贴文 | N/A |
| 仅互关可见 | N/A |
| 重设密码 | 部分支持,支持在已登录状态下通过[设置面板](https://scg.owu.one/settings)重设密码,具体参见 [Issue #263](https://github.com/superseriousbusiness/gotosocial/issues/263)<br/>如果你忘记了密码,请[联系管理员](/contact.md) |
| 多语言支持 | N/A, Owu Social 为自带网页端与设置面板提供了中文支持。<br/>具体参见 [Issue #474](https://github.com/superseriousbusiness/gotosocial/issues/474) |
| WebHook | N/A, 用于实现自动化的高级功能。具体参见 [Issue #2164](https://github.com/superseriousbusiness/gotosocial/issues/2164) |
| 链接验证 | N/A, 目前你填写的链接只要正确配置了验证字段，仍能在其它支持链接验证的实例显示。具体参见 [Issue #2352](https://github.com/superseriousbusiness/gotosocial/issues/2352) |
| HTML格式的贴文 | N/A, 具体参见 [Issue #2555](https://github.com/superseriousbusiness/gotosocial/issues/2555) |
| 改变媒体附件缩略图的焦点 | N/A, 具体参见 [Issue #2593](https://github.com/superseriousbusiness/gotosocial/issues/2593) |
| 全站公告 | N/A, 具体参见 [Issue #2621](https://github.com/superseriousbusiness/gotosocial/issues/2621) |
| 更广泛的搜索范围(搜索收藏、点赞、转嘟) | N/A, 已有搜索功能参见[搜索](search.md)。功能讨论参见 [Issue #2935](https://github.com/superseriousbusiness/gotosocial/issues/2935) |
| 中文搜索优化 | N/A, 已有搜索功能参见[搜索](search.md) |
| 通知分组 | N/A, 具体参见 [Issue #3408](https://github.com/superseriousbusiness/gotosocial/issues/3408) |
| 更多导入支持 | N/A, 具体参见 [Issue #3462](https://github.com/superseriousbusiness/gotosocial/issues/3462), [Issue #3463](https://github.com/superseriousbusiness/gotosocial/issues/3463) |
| 将话题添加到列表 | N/A, 具体参见 [Issue #3484](https://github.com/superseriousbusiness/gotosocial/issues/3484) |
| 解除“已迁移”状态 | N/A, 具体参见 [Issue #3584](https://github.com/superseriousbusiness/gotosocial/issues/3584) |
| 网页版账户页中添加快捷复制/分享按钮 | N/A，具体参见 [Issue #3648](https://github.com/superseriousbusiness/gotosocial/issues/3648) |
| 网页版账户页支持筛选包含媒体的贴文 | N/A，具体参见 [Issue #3650](https://github.com/superseriousbusiness/gotosocial/issues/3650) |
| 在设置面板中查看实例黑/白名单 | N/A，具体参见 [Issue #3711](https://github.com/superseriousbusiness/gotosocial/issues/3711) |
| 允许在隐藏“不列出”贴文时通过链接直接访问 | N/A，具体参见 [Issue #3777](https://github.com/superseriousbusiness/gotosocial/issues/3777) |
| 邀请注册 | N/A，具体参见 [Issue #3778](https://github.com/superseriousbusiness/gotosocial/issues/3778) |
:::

::: details 暂时不会支持的功能

| 功能 | 说明 |
| --- | --- |
| 一次性验证码登录 | 与当前登录流程不适配，参见 [Issue #1631](https://github.com/superseriousbusiness/gotosocial/issues/1631），但有计划支持双因素认证，参见上方“尚未支持的功能” |
| 跨实例交互引导 | GoToSocial 提供的网页是静态的，仅供浏览。参见 [Issue #1895](https://github.com/superseriousbusiness/gotosocial/issues/1895) |
:::

## 设置说明

目前你可以在此查看对 Owu Social 设置面板的各项配置的说明：

- [设置面板概述与基础设置](./gotosocial/overview.md)
- [自定义CSS](./gotosocial/custom-css.md)
- [互动规则](./gotosocial/interaction-control.md)
- [迁移](./gotosocial/migration.md)

## 开发资源

目前可用的开发资源如下

::: details GoToSocial官方文档
Owu Social 维护了完整的 GoToSocial 官方中文文档，已合并到 GoToSocial 上游。若要进行客户端开发和服务接入，推荐阅读“客户端 API 文档”部分；若要开发与 GoToSocial 进行联合的 ActivityPub 服务端，推荐阅读“联合”部分。

[https://docs.gotosocial.org/zh-cn/latest/](https://docs.gotosocial.org/zh-cn/latest/)
:::

::: details API 文档与 SDK
GoToSocial 通过 Swagger 提供 OpenAPI v2文档，可以在 [https://docs.gotosocial.org/zh-cn/latest/api/swagger/](https://docs.gotosocial.org/zh-cn/latest/api/swagger/) 查看。

目前已有以下基于 GoToSocial API 的 SDK：

| 语言 | 地址 |
| --- | --- |
| Golang | [github.com/owu-one/gotosocial-sdk](https://github.com/owu-one/gotosocial-sdk) (此 SDK 即将变更地址) |
:::

::: details 贡献指引
GoToSocial 的贡献指引可以[在此](https://github.com/superseriousbusiness/gotosocial/blob/main/docs/locales/zh/repo/CONTRIBUTING.md)查看。
:::

::: details GoToSocial 源代码
Owu Social 目前使用与 GoToSocial 上游一致的源代码。GoToSocial 的源代码托管在 GitHub 上，可以通过以下链接查看：

[https://github.com/superseriousbusiness/gotosocial](https://github.com/superseriousbusiness/gotosocial)
:::[]
