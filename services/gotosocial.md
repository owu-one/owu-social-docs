---
title: Owu Social-G
description: Owu Social-G 是 Owu One! 运营的 GoToSocial 实例。
---

# Owu Social-G <Badge text="主要服务" type="info" />

[Owu Social-G](https://scg.owu.one) 是 Owu One! 运营的中文 [GoToSocial](https://gotosocial.org) 实例。这是 [Owu Social](https://social.owu.one) 的旗舰服务。

站点规则和服务条款参见左侧导航栏或左上角“目录”菜单中的“基础信息”部分。

## 地址

**[https://scg.owu.one](https://scg.owu.one)**

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

## 客户端

GoToSocial 的网页仅用于展示，没有可操作功能。你可以自由选择第三方客户端进行使用。

以下客户端与 Owu Social-G 兼容良好，推荐使用。更多客户端参见 [使用指引 - 客户端](/guide/clients.md)。

::: details Web

- [Phanpy](https://phanpy.owu.one) <Badge text="推荐" type="info" />
- [PL-FE](https://plfe.owu.one) <Badge text="推荐" type="info" /><Badge text="支持设置互动规则" type="info" />
- [Elk](https://elk.owu.one)
- [Mastodon FE](https://masto-fe.owu.one) (Mastodon 独立前端)

:::

::: details Android

- [Moshidon](https://github.com/LucasGGamerM/moshidon/releases/latest)
- [Pachli](https://pachli.app/) / [Tusky](https://tusky.app/)
- [Fread](https://github.com/0xZhangKe/Fread/releases/latest)

:::

::: details iOS / macOS / iPadOS

- [Ice Cubes](https://apps.apple.com/app/ice-cubes-for-mastodon/id6444915884) <Badge text="免费" type="info" />
- [Mona](https://apps.apple.com/app/id1659154653) <Badge text="闭源" type="info" /> <Badge text="收费（买断制）" type="info" />

:::

::: details Linux

- [Tuba](https://tuba.geopjr.dev) <Badge text="推荐" type="info" />

:::

## 设置说明

Owu Social 维护的设置说明已经进入 GoToSocial 官方文档，你可以在下面的链接中查看对应的设置说明：

如果文档中的部分说明令你困惑，可以[联系管理员](/contact.md)。

- [设置面板及各项设置的介绍与说明](https://docs.gotosocial.org/zh-cn/latest/user_guide/settings/)
- [帖文设置](https://docs.gotosocial.org/zh-cn/latest/user_guide/posts/)
- [搜索](https://docs.gotosocial.org/zh-cn/latest/user_guide/search/)
- [（进阶）自定义CSS - 自己装修自己的主页](https://docs.gotosocial.org/zh-cn/latest/user_guide/custom_css/)
- [设置与修改密码](https://docs.gotosocial.org/zh-cn/latest/user_guide/password_management/)
- [RSS设置](https://docs.gotosocial.org/zh-cn/latest/user_guide/rss/)
- [迁入与迁出](https://docs.gotosocial.org/zh-cn/latest/user_guide/migration/)
- [导入你在之前的 Fediverse 站点中的数据](https://docs.gotosocial.org/zh-cn/latest/user_guide/importing_posts/)


## 站内服务

::: details GPT Bot

- **用户名**：`@gpt@scg.owu.one`
- **服务**：在发帖时提及此bot，即可调用GPT，与大模型对话。
  - 如果你是Owu Social-G用户，bot将默认使用 `Gemini 2.5 Pro` 回复。
  - 对其它用户，bot将默认使用 `Gemini 2.5 Flash` 回复。
  - 最多支持回溯所在贴文串的最近6条贴文（若回溯时积累的历史消息超过5000字则终止回溯），单条贴文最多支持识别前3张图片（支持的格式: jpg, png）
- **响应范围**： 几乎所有联邦宇宙用户
- **注意**： 当你在贴文中主动提及GPT Bot时，你的贴文内容将会被发送到与 GPT Bot 连接的第三方（包括 OpenAI）进行处理。请注意不要在贴文中透露任何敏感信息。

:::

::: details 网页存活状态检测

- **用户名**：`@areuok@scg.owu.one`
- **服务**： 提及此bot，并发送要测试的地址(不要有其他内容)，bot将会返回该地址的存活状态。(对于不确定是自己的网络问题还是网站炸了的情况可能很有用)
- **响应范围**： 几乎所有联邦宇宙用户

:::

## 兼容性

下表只展示已知与 Owu Social-G 的联合存在问题的 ActivityPub 实现。问题被解决6个月后，相关的软件条目可能会被移除。

::: details 兼容状态表

图例：

- ✅ - 正常/无问题
- ☑️ - 小问题（特定情况下有问题）
- ❓ - 未知/暂无可公开测试的实例
- ⚠️ - 可发现账户，但无法关注（通常是因为对方实例未执行签名等安全措施）
- ❌ - 无法发现账户/不可联合
- 👻 - 软件已过时/停止更新一年或更长时间
- 📋 - 链接到与软件相关的 fediverse.observer 列表

| 软件 | 联合情况 | 问题 | 测试的实例/账户（如果有）与备注 |
| --- | --- | --- | --- |
| [Mastodon](https://github.com/mastodon/mastodon) [📋](https://mastodon.fediverse.observer/list) | ✅ |  |  |
| 较流行的 Mastodon 分支 |  |  |  |
| [Chuckya](https://github.com/TheEssem/mastodon) [📋](https://mastodon.fediverse.observer/list) | ✅ |  |  |
| [Ecko](https://github.com/magicstone-dev/ecko) 👻 [📋](https://ecko.fediverse.observer/list) | ✅ |  |  |
| [Fedibird](https://github.com/fedibird/mastodon) 👻 [📋](https://mastodon.fediverse.observer/list) | ✅ |  |  |
| [Glitchcafe](https://github.com/pluralcafe/glitchcafe) 👻 [📋](https://glitchcafe.fediverse.observer/list) | ✅ |  |  |
| [Glitch-soc](https://github.com/glitch-soc/mastodon) | ✅ |  |  |
| [Hometown](https://github.com/hometown-fork/hometown) [📋](https://hometown.fediverse.observer/list) | ✅ |  |  |
| ========== |  |  |  |
| [Misskey](https://github.com/misskey-dev/misskey) [📋](https://misskey.fediverse.observer/list) | ✅ |  |  |
| 较流行的 Misskey 分支 |  |  |  |
| [CherryPick](https://github.com/kokonect-link/cherrypick) [📋](https://cherrypick.fediverse.observer/list) | ✅ |  |  |
| [Firefish](https://codeberg.org/firefish/firefish) 👻 [📋](https://firefish.fediverse.observer/list) 👻 | ✅ |  |  |
| [Foundkey](https://akkoma.dev/FoundKeyGang/FoundKey) [📋](https://foundkey.fediverse.observer/list) | ✅ |  |  |
| [Iceshrimp](https://iceshrimp.dev/iceshrimp/iceshrimp) [📋](https://iceshrimp.fediverse.observer/list) + [Iceshrimp.NET](https://iceshrimp.dev/iceshrimp/iceshrimp.net) [📋](https://iceshrimpnet.fediverse.observer/list) | ✅ |  |  |
| [Sharkey](https://activitypub.software/TransFem-org/Sharkey) [📋](https://sharkey.fediverse.observer/list) | ✅ |  |  |
| ========== |  |  |  |
| [Betula](https://sr.ht/~bouncepaw/betula) [📋](https://betula.fediverse.observer/list) | ❌ |  | [@danila@links.danilax86.space](https://links.danilax86.space/@danila) |
| [Bridgy Fed](https://fed.brid.gy/) | ✅ |  |  |
| [Bonfire](https://github.com/bonfire-networks) | ✅ | [PR #3978](https://codeberg.org/superseriousbusiness/gotosocial/pulls/3978) | https://hiti.nairatmya.org/@mossbeard |
| [Bookwyrm](https://github.com/bookwyrm-social/bookwyrm) [📋](https://bookwyrm.fediverse.observer/list) | ✅ |  | [@jussi@books.duck.cafe](https://books.duck.cafe/user/jussi) |
| [Bovine](https://codeberg.org/bovine/bovine) 👻 | ⚠️ |  | @moocow@bovine.fly.dev |
| [Brutalinks](https://git.sr.ht/~mariusor/brutalinks) | ✅ | [PR #3978](https://codeberg.org/superseriousbusiness/gotosocial/pulls/3978) | [@marius@brutalinks.tech](https://brutalinks.tech/~marius) |
| [Bugle](https://github.com/rknightuk/bugle) [📋](https://bugle.fediverse.observer/list) | ❌ |  | [@zobot@bugle.lol](https://bugle.lol/@zobot) |
| [Castopod](https://code.castopod.org/adaures/castopod) | ✅ | [Castopod #364](https://code.castopod.org/adaures/castopod/-/issues/364) | https://podcast.james.network/@linuxprepper |
| [Dokieli](https://github.com/linkeddata/dokieli) | ❓ |  | ❓ |
| [Emissary](https://github.com/EmissarySocial/emissary) [📋](https://emissary.fediverse.observer/list) | ✅ | [PR #3978](https://codeberg.org/superseriousbusiness/gotosocial/pulls/3978) | https://bandwagon.fm/@FastGhost |
| [Epicyon](https://gitlab.com/bashrc2/epicyon) | ❓ |  | ❓ |
| [Forgejo](https://codeberg.org/forgejo/forgejo) [📋](https://forgejo.fediverse.observer/list) | ✅ | [PR #3978](https://codeberg.org/superseriousbusiness/gotosocial/pulls/3978) | [@K0RR@git.sakamoto.pl](https://git.sakamoto.pl/K0RR) |
| [Funkwhale](https://dev.funkwhale.audio/funkwhale/funkwhale) [📋](https://funkwhale.fediverse.observer/list) | ❌ |  | https://audio.pepemoss.com/@earl |
| [Friendica](https://github.com/friendica/friendica) [📋](https://friendica.fediverse.observer/list) | ☑️ | [Friendica #14316](https://github.com/friendica/friendica/issues/14316) | https://entropysource.ru/profile/hubbitant |
| [Gancio](https://github.com/lesion/gancio) [📋](https://gancio.fediverse.observer/list) | ✅ |  |  |
| [GNU Social](https://notabug.org/diogo/gnu-social) 👻 [📋](https://gnusocial.fediverse.observer/list) | ✅ |  |  |
| [Goblin](https://github.com/johnHackworth/goblin) [📋](https://goblin.fediverse.observer/list) | ✅ |  | https://goblin.band/@goblin |
| [GoToSocial](https://codeberg.org/superseriousbusiness/gotosocial) [📋](https://gotosocial.fediverse.observer/list) | ✅ |  | https://gts.superseriousbusiness.org/@gotosocial |
| [gush](https://codeberg.org/gush/gush) [📋](https://gush.fediverse.observer/list) | ✅ |  | https://gush.taks.garden/poster/Tak |
| [Hollo](https://github.com/dahlia/hollo) [📋](https://hollo.fediverse.observer/list) | ✅ |  | https://hollo.social/@hollo |
| [Honk](https://humungus.tedunangst.com/r/honk) [📋](https://honk.fediverse.observer/list) | ✅ |  | https://h.icyphox.sh/@icy |
| [Hubzilla](https://framagit.org/hubzilla) [📋](https://hubzilla.fediverse.observer/list) | ✅ |  |  |
| [Juick](https://x.juick.com/Juick) | ⚠️ | [Issue #3268](https://codeberg.org/superseriousbusiness/gotosocial/issues/3268), [PR #3928](https://codeberg.org/superseriousbusiness/gotosocial/pulls/3928) | [@Linda-chan@juick.com](https://juick.com/Linda-chan) |
| [Kepi](https://gitlab.com/marnanel/chapeau) 👻 [📋](https://kepi.fediverse.observer/list) | ❓ |  | ❓ |
| [Kitsune](https://github.com/kitsune-soc/kitsune) | ❓ |  | ❓ |
| [Klaxon](https://github.com/curt/klaxon) [📋](https://klaxon.fediverse.observer/list) | ✅ |  | https://pompatus.af7kq.net |
| [Ktistec](https://github.com/toddsundsted/ktistec) [📋](https://ktistec.fediverse.observer/list) | ✅ | [Ktistec #103](https://github.com/toddsundsted/ktistec/issues/103), [Issue #2991](https://codeberg.org/superseriousbusiness/gotosocial/issues/2991) | https://soc.computermouth.com/@ben |
| [Kroeg](https://puck.moe/git/kroeg) 👻 [📋](https://kroeg.fediverse.observer/list) | ⚠️ |  | https://puckipedia.com/ |
| [Lemmy](https://github.com/LemmyNet/lemmy) [📋](https://lemmy.fediverse.observer/list) | ✅ | [Issue #2697](https://codeberg.org/superseriousbusiness/gotosocial/issues/2697)，[Lemmy 存储库中所有与 GtS 相关的 issue](https://github.com/LemmyNet/lemmy/issues?q=is%3Aissue+gotosocial)。如果某个 Lemmy 实例仍有问题，可访问该实例的 `/api/v[0-9]/site` 确认其是否启用了签名(auth fetch) | [用户](https://chachara.club/u/Sacronte)，[社群](https://chachara.club/c/naturalezaycambioclimatico) |
| [Letterbook](https://github.com/Letterbook/Letterbook) | ❓ |  | ❓ |
| [Magnetar](https://git.astolfo.cool/natty/magnetar) | ❓ |  | ❓ |
| [Manyfold](https://github.com/manyfold3d/manyfold) [📋](https://manyfold.fediverse.observer/list) | ⚠️ |  | [@sascha@3d.bonn.digital](https://3d.bonn.digital/creators/sascha) |
| [Mbin](https://github.com/MbinOrg/mbin)（[Kbin](https://github.com/ernestwisniewski/kbin) 已停止维护） [📋](https://mbin.fediverse.observer/list) | ✅ |  | [user](https://moist.catsweat.com/u/originalucifer)，[magazine](https://moist.catsweat.com/m/japan) |
| [microblog.pub](https://git.sr.ht/~tsileo/microblog.pub) 👻 [📋](https://microblogpub.fediverse.observer/list) | ✅ |  | [@josh@heretic.li](https://heretic.li) |
| [micro.blog](https://micro.blog) [📋](https://microdotblog.fediverse.observer/list) | ✅ | [PR #3978](https://codeberg.org/superseriousbusiness/gotosocial/pulls/3978) | [@manton@manton.org](https://manton.org) |
| [Mitra](https://codeberg.org/silverpill/mitra) [📋](https://mitra.fediverse.observer/list) | ✅ |  | https://mochi.mochikov.ski/@mochi |
| [Mobilizon](https://framagit.org/framasoft/mobilizon) [📋](https://mobilizon.fediverse.observer/list) | ✅ |  |  |
| [NeoDB](https://github.com/neodb-social/neodb) [📋](https://neodb.fediverse.observer/list) | ✅ | [PR #3978](https://codeberg.org/superseriousbusiness/gotosocial/pulls/3978) | [@igorette@neodb.kevga.de](https://neodb.kevga.de/users/igorette) |
| [NodeBB](https://github.com/NodeBB/NodeBB) [📋](https://nodebb.fediverse.observer/list) | ✅ | [PR #3978](https://codeberg.org/superseriousbusiness/gotosocial/pulls/3978) | https://wanderingadventure.party/user/kichae |
| [OCamlot](https://github.com/kiranandcode/ocamlot) 👻 [📋](https://ocamlot.fediverse.observer/list) | ✅ |  | https://ocamlot.xyz/users/gopiandcode |
| [PeerTube](https://github.com/Chocobozzz/PeerTube) [📋](https://peertube.fediverse.observer/list) | ⚠️ | [PeerTube #6462](https://github.com/Chocobozzz/PeerTube/issues/6462) | [@it@peervideo.ru](https://peervideo.ru/c/it) |
| [Piefed](https://codeberg.org/rimu/pyfedi) [📋](https://piefed.fediverse.observer/list) | ✅ | [PR #3978](https://codeberg.org/superseriousbusiness/gotosocial/pulls/3978) | [user](https://piefed.social/u/Jerry)，[community](https://piefed.social/c/piefed_meta) |
| [Pixelfed](https://github.com/pixelfed/pixelfed) [📋](https://pixelfed.fediverse.observer/list) | ✅ |  |  |
| ========== |  |  |  |
| [Pleroma](https://git.pleroma.social/pleroma) [📋](https://pleroma.fediverse.observer/list) | ✅ |  |  |
| Pleroma 分支 |  |  |  |
| [Akkoma](https://akkoma.dev/AkkomaGang/akkoma) [📋](https://akkoma.fediverse.observer/list) | ✅ |  |  |
| [Rebased](https://gitlab.com/soapbox-pub/rebased) | ❓ |  | ❓ |
| ========== |  |  |  |
| [Plume](https://github.com/Plume-org/Plume) [📋](https://plume.fediverse.observer/list) | ✅ | [PR #3978](https://codeberg.org/superseriousbusiness/gotosocial/pulls/3978) | [@paradoxal@zone.paradoxal.netlib.re](https://zone.paradoxal.netlib.re/@/paradoxal) |
| [upub](https://moonlit.technology/alemi/upub) | ✅ |  | https://dev.upub.social/web/actors/alemi |
| [Seppo](https://codeberg.org/seppo/seppo) | ❌ | [Issue #2961](https://codeberg.org/superseriousbusiness/gotosocial/issues/2961#issue-2333014325)，[Issue #1186](https://codeberg.org/superseriousbusiness/gotosocial/issues/1186) | https://seppo.social/aseppototry/o/p/ |
| [Socialhome](https://github.com/jaywink/socialhome) [📋](https://socialhome.fediverse.observer/list) | ✅ |  | [@delcake@delcake.com](https://delcake.com) |
| [Shuttlecraft](https://github.com/benbrown/shuttlecraft) 👻 [📋](https://shuttlecraft.fediverse.observer/list) | ❌ |  | https://cerritos.glitch.me |
| [Smithereen](https://github.com/grishka/Smithereen) [📋](https://smithereen.fediverse.observer/list) | ✅ | （自 0.17.0 起）[Smithereen #77](https://github.com/grishka/Smithereen/issues/77)，[PR #3243](https://codeberg.org/superseriousbusiness/gotosocial/pulls/3243) | https://friends.grishka.me/grishka |
| [snac](https://codeberg.org/grunfink/snac2) [📋](https://snac.fediverse.observer/list) | ✅ |  | https://snac.122.hu/kitten |
| [Streams](https://codeberg.org/streams/streams) | ✅ |  | https://fediversity.site/channel/streams |
| [Swanye](https://codeberg.org/WammKD/Swanye) 👻 | ❓ |  |  |
| [Takahē](https://github.com/jointakahe/takahe) [📋](https://takahe.fediverse.observer/list) | ✅ | [Takahe #223](https://github.com/jointakahe/takahe/issues/223)，[Takahe #528](https://github.com/jointakahe/takahe/issues/528) | [@calvin@alpha.incarnator.org](https://alpha.incarnator.org/@calvin@alpha.incarnator.org) |
| [Tapir](https://github.com/ar-nelson/tapir) 👻 | ❓ |  | ❓ |
| [Threads](https://threads.net) | ❌ | [Issue #2491](https://codeberg.org/superseriousbusiness/gotosocial/issues/2491) | Threads 并不开源，实行不透明的联合规则，且未按规范返回 ActivityPub 数据，GoToSocial 无意针对 Threads 进行特殊处理。我们赞同这种做法。 |
| [Toki](https://github.com/purifetchi/Toki) | ❓ |  | ❓ |
| [Vernissage](https://github.com/VernissageApp/VernissageServer) [📋](https://vernissage.fediverse.observer/list) | ✅ |  | https://vernissage.pnpde.social/@d3 |
| [Wafrn](https://github.com/gabboman/wafrn) [📋](https://wafrn.fediverse.observer/list) | ✅ |  | https://app.wafrn.net/dashboard/exploreLocal |
| [Writefreely](https://github.com/writefreely/writefreely) [📋](https://writefreely.fediverse.observer/list) | ✅ | [PR #3978](https://codeberg.org/superseriousbusiness/gotosocial/pulls/3978) | [@baslow@read.asorrybowl.blog](https://read.asorrybowl.blog) |
| [write.as](https://write.as)（付费版 Writefreely） | ✅ | [PR #3978](https://codeberg.org/superseriousbusiness/gotosocial/pulls/3978) | [@write-as-roscoes-story@write.as](https://write.as/write-as-roscoes-story) |
| [Wordpress](https://github.com/WordPress/wordpress-develop) [📋](https://wordpress.fediverse.observer/list) | ✅ \ ⚠️ | 取决于所用的 [ActivityPub](https://en.wikipedia.org/wiki/ActivityPub) 插件 |  |
| [wxwClub](https://github.com/wxwmoe/wxwClub) | ✅ |  | https://ovo.st/club/board<br/>注：主要的 wxwClub 实例 ovo.st 与 Owu Social 的联合可能受到[数据保护措施](/terms/data.md)第 4 条的影响。请咨询 Owu Social-G 管理员获取详情。若发现联合中断，请向管理员报告。 |
| [Yarn](https://git.mills.io/yarnsocial/yarn) | ❓ |  | ❓ |

:::

## 开发计划

[Owu Social-G](https://scg.owu.one) 由 [GoToSocial](https://gotosocial.org) 驱动, 目前处于 测试(Beta)阶段, 还在活跃开发中。

本节只列出可能对你（用户）的使用体验产生影响的功能。如果你想跟进有关功能支持的更新，还可以关注 [@admin@scg.owu.one](https://scg.owu.one/@admin) 。

下表中标注为`N/A`的功能表示暂无明确的支持计划。

::: details 功能开发计划一览表

| 功能 | 支持计划 |
| --- | --- |
| 在主页显示转发 | 已有 [PR #3346](https://codeberg.org/superseriousbusiness/gotosocial/pulls/3346) |
| 多语言支持 | Owu Social 为自带网页端与设置面板提供了中文支持，目前我们正在尝试将多语言支持带往上游。<br/>具体参见 [Issue #474](https://codeberg.org/superseriousbusiness/gotosocial/issues/474) |
| 中继 | 预计 2025 年发布, Owu Social-G 通过单向订阅中继保证你能接触到广泛的内容,但你公开发布的内容目前只能依靠他人的主动关注和转发来进入其它实例。具体参见 [Issue #1123](https://codeberg.org/superseriousbusiness/gotosocial/issues/1123), [Issue #1124](https://codeberg.org/superseriousbusiness/gotosocial/issues/1124) |
| 双因素认证 | 预计 2025 年发布 |
| 自定义表情回应 | N/A，具体参见 [Issue #4078](https://codeberg.org/superseriousbusiness/gotosocial/issues/4078) |
| 引用贴文 | N/A，目前建议依赖客户端对贴文链接的自动解析 |
| 仅互关可见 | N/A |
| 重设密码 | 部分支持,支持在已登录状态下通过[设置面板](https://scg.owu.one/settings)重设密码,具体参见 [Issue #263](https://codeberg.org/superseriousbusiness/gotosocial/issues/263)<br/>如果你忘记了密码,请[联系管理员](/contact.md) |
| 链接预览 | N/A，具体参见 [Issue #1345](https://codeberg.org/superseriousbusiness/gotosocial/issues/1345) |
| WebHook | N/A, 用于实现自动化的高级功能。具体参见 [Issue #2164](https://codeberg.org/superseriousbusiness/gotosocial/issues/2164) |
| 链接验证 | N/A, 目前你填写的链接只要正确配置了验证字段，仍能在其它支持链接验证的实例显示。具体参见 [Issue #2352](https://codeberg.org/superseriousbusiness/gotosocial/issues/2352) |
| HTML格式的贴文 | N/A, 具体参见 [Issue #2555](https://codeberg.org/superseriousbusiness/gotosocial/issues/2555) |
| 全站公告 | N/A, 具体参见 [Issue #2621](https://codeberg.org/superseriousbusiness/gotosocial/issues/2621) |
| 更广泛的搜索范围(搜索收藏、点赞、转嘟) | N/A, 已有搜索功能参见[搜索](/guide/search.md)。功能讨论参见 [Issue #2935](https://codeberg.org/superseriousbusiness/gotosocial/issues/2935), [Issue #4079](https://codeberg.org/superseriousbusiness/gotosocial/issues/4079) |
| 中文搜索优化 | N/A, 已有搜索功能参见[搜索](/guide/search.md) |
| 通知分组 | N/A, 具体参见 [Issue #3408](https://codeberg.org/superseriousbusiness/gotosocial/issues/3408) |
| 导入列表 | N/A, 具体参见 [Issue #3463](https://codeberg.org/superseriousbusiness/gotosocial/issues/3463) |
| 将话题添加到列表 | N/A, 具体参见 [Issue #3484](https://codeberg.org/superseriousbusiness/gotosocial/issues/3484) |
| 解除“已迁移”状态 | N/A, 具体参见 [Issue #3584](https://codeberg.org/superseriousbusiness/gotosocial/issues/3584) |
| 网页版账户页中添加快捷复制/分享按钮 | N/A，具体参见 [Issue #3648](https://codeberg.org/superseriousbusiness/gotosocial/issues/3648) |
| 网页版账户页支持筛选包含媒体的贴文 | N/A，具体参见 [Issue #3650](https://codeberg.org/superseriousbusiness/gotosocial/issues/3650) |
| 允许在隐藏“不列出”贴文时通过链接直接访问 | N/A，具体参见 [Issue #3777](https://codeberg.org/superseriousbusiness/gotosocial/issues/3777) |
| 邀请注册 | N/A，具体参见 [Issue #3778](https://codeberg.org/superseriousbusiness/gotosocial/issues/3778) |
| 按语言过滤贴文 | N/A，具体参见 [Issue #3818](https://codeberg.org/superseriousbusiness/gotosocial/issues/3818) |
| 在贴文详情页展示不公开列出的回复 | 预计于 v0.21.0 发布，具体参见 [Issue #4047](https://codeberg.org/superseriousbusiness/gotosocial/issues/4047) |
| 实例级自定义主题 | N/A，具体参见 [Issue #4070](https://codeberg.org/superseriousbusiness/gotosocial/issues/4070), [Issue #4071](https://codeberg.org/superseriousbusiness/gotosocial/issues/4071), [Issue #4072](https://codeberg.org/superseriousbusiness/gotosocial/issues/4072) |
| 邮件通知 | N/A，具体参见 [Issue #4123](https://codeberg.org/superseriousbusiness/gotosocial/issues/4123)，可考虑部署 [codeberg.org/eht16/mastodon_notifications_to_email](https://codeberg.org/eht16/mastodon_notifications_to_email) |
| 允许在时间线中展示重复的转发 | N/A，具体参见 [Issue #4194](https://codeberg.org/superseriousbusiness/gotosocial/issues/4194) |
| 在设置主题时显示预览 | N/A，具体参见 [Issue #4225](https://codeberg.org/superseriousbusiness/gotosocial/issues/4225) |
| 支持在举报时设置抄送实例列表 | N/A, 具体参见 [Issue #4243](https://codeberg.org/superseriousbusiness/gotosocial/issues/4243) |
| 支持在收藏夹设置子文件夹整理收藏 | 预计于 v0.21.0 发布，需客户端支持对应的 Pleroma API, 具体参见 [PR #4284](https://codeberg.org/superseriousbusiness/gotosocial/pulls/4284) |
| 在账户页展示关注按钮 | N/A，具体参见 [Issue #4299](https://codeberg.org/superseriousbusiness/gotosocial/issues/4299) |
| 实时通知 | N/A, GoToSocial 已经支持了 Web 通知推送，这足以保证在客户端支持且工作正常时及时收到通知。这一功能是为了在打开客户端浏览时客户端能够与服务端建立流式通信并实时接收通知，这在某些情形下是更为高效的方式。具体参见 [Issue #4340](https://codeberg.org/superseriousbusiness/gotosocial/issues/4340) |
| 在个人主页添加歌单播放器 | N/A, 参见 [Issue #4347](https://codeberg.org/superseriousbusiness/gotosocial/issues/4347) |
| 从 Mastodon 导入收藏列表 | N/A, 参见 [Issue #4356](https://codeberg.org/superseriousbusiness/gotosocial/issues/4356)，目前可以通过命令行工具 [slurp](https://github.com/VyrCossont/slurp) 手动导入。 |
| 使用正则表达式创建过滤规则 | N/A, 参见 [Issue #4389](https://codeberg.org/superseriousbusiness/gotosocial/issues/4389) |
| 自助删除账户 | N/A，参见 [Issue #4429](https://codeberg.org/superseriousbusiness/gotosocial/issues/4429)。你可以随时[联系管理员](/contact.md)请求删除账户。 |
| 在Web账户页渲染 XMPP 链接为超链接 | N/A, 参见 [Issue #4460](https://codeberg.org/superseriousbusiness/gotosocial/issues/4460) |
| 兼容 Mastodon 风格的引用许可 | N/A, 参见 [Issue #4462](https://codeberg.org/superseriousbusiness/gotosocial/issues/4462) |
| 随机化交互时间 | N/A，参见 [Issue #4475](https://codeberg.org/superseriousbusiness/gotosocial/issues/4475)。目前已经可以通过定时发帖来控制发帖时间。 |
| 咬其它网友 | N/A，参见 [Issue #4508](https://codeberg.org/superseriousbusiness/gotosocial/issues/4508) |
:::

::: details 暂时不会支持的功能

| 功能 | 说明 |
| --- | --- |
| 一次性验证码登录 | 与当前登录流程不适配，参见 [Issue #1631](https://codeberg.org/superseriousbusiness/gotosocial/issues/1631)，但已支持双因素验证。 |
| 跨实例交互引导 | GoToSocial 提供的网页是静态的，仅供浏览。参见 [Issue #1895](https://codeberg.org/superseriousbusiness/gotosocial/issues/1895) |
:::

## 开发资源

目前可用的开发资源如下

::: details GoToSocial官方文档
[全译 WholeTrans](https://wholetrans.org) 维护了完整的 GoToSocial 官方中文文档，已合并到 GoToSocial 上游。若要进行客户端开发和服务接入，推荐阅读“客户端 API 文档”部分；若要开发与 GoToSocial 进行联合的 ActivityPub 服务端，推荐阅读“联合”部分。

[https://docs.gotosocial.org/zh-cn/latest/](https://docs.gotosocial.org/zh-cn/latest/)
:::

::: details API 文档与 SDK
GoToSocial 通过 Swagger 提供 OpenAPI v2文档，可以在 [https://docs.gotosocial.org/zh-cn/latest/api/swagger/](https://docs.gotosocial.org/zh-cn/latest/api/swagger/) 查看。

目前已有以下基于 GoToSocial API 的 SDK：

| 语言 | 地址 |
| --- | --- |
| Golang | [codeberg.org/gotosocial-sdk/golang](https://codeberg.org/gotosocial-sdk/golang) |
:::

::: details 贡献指引
GoToSocial 的贡献指引可以[在此](https://codeberg.org/superseriousbusiness/gotosocial/src/branch/main/docs/locales/zh/repo/CONTRIBUTING.md)查看。
:::

::: details GoToSocial 源代码
Owu Social 目前使用与 GoToSocial 上游一致的源代码。GoToSocial 的源代码托管在 Codeberg 上，可以通过以下链接查看：

[https://codeberg.org/superseriousbusiness/gotosocial](https://codeberg.org/superseriousbusiness/gotosocial)
:::
