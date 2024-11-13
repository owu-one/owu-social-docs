---
title: 联合与兼容性
description: Owu Social 与其它 ActivityPub 实现和平台的联合情况
---

# 联合与兼容性

本页总结了 Owu Social 与其他 ActivityPub 实现和平台的联合与兼容情况。如果你遇到无法与来自其它实例的账户沟通的情况，请[联系我们](/contact.md)。

::: details 符号说明
- ✅ - 没有问题
- ☑️ - 小问题（特定情况下有问题）
- ❓ - 未知/没有可联合的公开实例
- ⚠️ - 可发现账户，但无法关注（通常是因为对方实例未执行签名等必要安全措施）
- ❌ - 无法发现账户/不可联合
- 👻 - 软件已过时/停止更新一年或更长时间
- 📋 - 链接到与软件相关的 [fediverse.observer](https://fediverse.observer/list) 列表
:::

| 软件 | 联合情况 | 问题 | 测试的实例/账户（如果有）与备注 |
| --- | --- | --- | --- |
| [Mastodon](https://github.com/mastodon/mastodon) [📋](https://mastodon.fediverse.observer/list) | ✅ |  |  |
| Mastodon 派生软件 |
| [Ecko](https://github.com/magicstone-dev/ecko) [📋](https://ecko.fediverse.observer/list) | ✅ |  |  |
| [Fedibird](https://github.com/fedibird/mastodon) 👻 [📋](https://mastodon.fediverse.observer/list) | ✅ |  |  |
| [Glitchcafe](https://github.com/pluralcafe/glitchcafe) 👻 [📋](https://glitchcafe.fediverse.observer/list) | ✅ |  |  |
| [Glitch-soc](https://github.com/glitch-soc/mastodon) | ✅ |  |  |
| [Hometown](https://github.com/hometown-fork/hometown) [📋](https://hometown.fediverse.observer/list) | ✅ |  |  |
| |
| [Misskey](https://github.com/misskey-dev/misskey) [📋](https://hometown.fediverse.observer/list) | ☑️ | [Misskey #14915](https://github.com/misskey-dev/misskey/issues/14915) | https://misskey.io/@cdn <br/>注：目前已知唯一问题是，如果对应 Misskey 账户启用了关注请求批准，那么来自 Owu Social 的账户向对方发送的关注请求可能不会出现在对方的关注请求列表中。 |
| Misskey 派生软件 |
| [CherryPick](https://github.com/kokonect-link/cherrypick) [📋](https://cherrypick.fediverse.observer/list) | ☑️ | 同 Misskey |  |
| [Firefish](https://firefish.dev/firefish/firefish) [📋](https://firefish.fediverse.observer/list) | ✅ |  |  |
| [Foundkey](https://akkoma.dev/FoundKeyGang/FoundKey) [📋](https://foundkey.fediverse.observer/list) | ✅ |  |  |
| [Iceshrimp](https://iceshrimp.dev/iceshrimp/iceshrimp) [📋](https://iceshrimp.fediverse.observer/list) + [Iceshrimp.NET](https://iceshrimp.dev/iceshrimp/iceshrimp.net) [📋](https://iceshrimpnet.fediverse.observer/list) | ✅ |  |  |
| [Sharkey](https://activitypub.software/TransFem-org/Sharkey) [📋](https://sharkey.fediverse.observer/list) | ☑️ | 同 Misskey |  |
|  |
| [Betula](https://sr.ht/~bouncepaw/betula) [📋](https://betula.fediverse.observer/list) | ❌ |  | [@danila@links.danilax86.space](https://links.danilax86.space/@danila) |
| [Bluesky](https://bsky.social) | ❌ | | Bluesky 使用 AT 协议而非 ActivityPub，无法与 Owu Social 联合。有开发者实现了从 Bluesky 到 ActivityPub 的内容镜像。只要实现正确，Owu Social 可以与这些镜像服务联合，镜像账户适用于[特殊账户](/rules/special-accounts.md)的额外规定。 |
| [Bridgy Fed](https://fed.brid.gy/) | ⚠️ | [GtS #3381](https://github.com/superseriousbusiness/gotosocial/issues/3381), [BridgyFed #1033](https://github.com/snarfed/bridgy-fed/issues/1033) | 注：目前，Owu Social账户无法与Bridgy Fed桥接中心账户联合创建Bluesky上的镜像账户；可以搜索到Bluesky账户通过Bridgy Fed创建的Fediverse镜像账户，但无法关注。此问题预计在v0.18修复。 |
| [Bonfire](https://github.com/bonfire-networks) | ⚠️ |  | https://hiti.nairatmya.org/@mossbeard |
| [Bookwyrm](https://github.com/bookwyrm-social/bookwyrm) [📋](https://bookwyrm.fediverse.observer/list) | ✅ |  | [@jussi@books.duck.cafe](https://books.duck.cafe/user/jussi) |
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
| [Ganico](https://github.com/lesion/gancio) [📋](https://gancio.fediverse.observer/list) | ✅ |  |  | 
| [GNU Social](https://notabug.org/diogo/gnu-social) 👻 [📋](https://gnusocial.fediverse.observer/list) | ✅ |  |  |
| [Goblin](https://github.com/johnHackworth/goblin) [📋](https://goblin.fediverse.observer/list) | ✅ |  | https://goblin.band/@goblin |
| [Gotosocial](https://github.com/superseriousbusiness/gotosocial) [📋](https://gotosocial.fediverse.observer/list) | ✅ |  | https://gts.superseriousbusiness.org/@gotosocial |
| [Guppe](https://a.gup.pe) 👻 | ⚠️ | [Guppe #90](https://github.com/immers-space/guppe/issues/90) | `@board@a.gup.pe`<br/>注：Guppe使用的HTTP签名库较老，无法识别 Owu Social 的 Activity 签名。若有时间我们将尝试修复这一问题。 |
| [Hamabē](https://codeberg.org/hamabe/hamabe) [📋](https://hamabe.fediverse.observer/list) | ✅ |  | [@mochi@try.hamabe.space](https://try.hamabe.space/public/@mochi) |
| [Hollo](https://github.com/dahlia/hollo) [📋](https://hollo.fediverse.observer/list) | ✅ |  | https://hollo.social/@hollo |
| [Honk](https://humungus.tedunangst.com/r/honk) [📋](https://honk.fediverse.observer/list) | ✅ |  | https://h.icyphox.sh/@icy |
| [Hubzilla](https://framagit.org/hubzilla) [📋](https://hubzilla.fediverse.observer/list) | ✅ |  |  |
| [Juick](https://x.juick.com/Juick) | ❌ | [GtS #3268](https://github.com/superseriousbusiness/gotosocial/issues/3268), [GtS #1820](https://github.com/superseriousbusiness/gotosocial/issues/1820)  | [@Linda-chan@juick.com](https://juick.com/Linda-chan) |
| [Kepi](https://gitlab.com/marnanel/chapeau) 👻 [📋](https://kepi.fediverse.observer/list) | ❓ |  | ❓ |
| [Kitsune](https://github.com/kitsune-soc/kitsune) | ❓ |  | ❓ |
| [Ktistec](https://github.com/toddsundsted/ktistec) [📋](https://ktistec.fediverse.observer/list) | ⚠️ | [Ktistec #103](https://github.com/toddsundsted/ktistec/issues/103), [GtS #2991](https://github.com/superseriousbusiness/gotosocial/issues/2991)  | https://epiktistes.com/@toddsundsted |
| [Kroeg](https://puck.moe/git/kroeg) 👻 [📋](https://kroeg.fediverse.observer/list) | ⚠️ |  | https://puckipedia.com/ |
| [Lemmy](https://github.com/LemmyNet/lemmy) [📋](https://lemmy.fediverse.observer/list) | ☑️ | [GtS #2697](https://github.com/superseriousbusiness/gotosocial/issues/2697), [All issues related to GtS](https://github.com/LemmyNet/lemmy/issues?q=is%3Aissue+gotosocial) | [user](https://lemmygrad.ml/u/yogthos), [community](https://lemmygrad.ml/c/funny)<br/>注：[Owu Board](https://bdl.owu.one) 和其它所有手动启用了Activity签名的 Lemmy 实例已经能与 Owu Social 正常联合 |
| [Letterbook](https://github.com/Letterbook/Letterbook) | ❓ |  | ❓ |
| [Magnetar](https://git.astolfo.cool/natty/magnetar) | ❓ |  | ❓ |
| [Mbin](https://github.com/MbinOrg/mbin) ([Kbin](https://github.com/ernestwisniewski/kbin) 的维护状态存疑) [📋](https://mbin.fediverse.observer/list) | ⚠️ | 可以关注用户，但不能关注栏目(Magzine) | [user](https://kbin.earth/u/jwr1), [magazine](https://kbin.earth/m/kbinEarth) |
| [microblog.pub](https://git.sr.ht/~tsileo/microblog.pub) 👻 [📋](https://microblogpub.fediverse.observer/list) | ✅ |  | [@josh@heretic.li](https://heretic.li) |
| [micro.blog](https://micro.blog) [📋](https://microdotblog.fediverse.observer/list) | ⚠️ |  | [@manton@manton.org](https://manton.org) |
| [Mitra](https://codeberg.org/silverpill/mitra) [📋](https://mitra.fediverse.observer/list) | ✅ |  | https://mochi.mochikov.ski/@mochi |
| [Mobilizon](https://framagit.org/framasoft/mobilizon) [📋](https://mobilizon.fediverse.observer/list) | ✅ |  |  |
| [NeoDB](https://github.com/neodb-social/neodb) [📋](https://neodb.fediverse.observer/list) | ⚠️ | 可以正常登录使用，但无法关注纯NeoDB账号 | [@Zucchini@minreol.dk](https://minreol.dk/users/Zucchini) |
| [NodeBB](https://github.com/NodeBB/NodeBB) [📋](https://nodebb.fediverse.observer/list) | ⚠️ |  | https://ekk.app/user/bh4-tech |
| [OCamlot](https://github.com/kiranandcode/ocamlot) 👻 [📋](https://ocamlot.fediverse.observer/list) | ✅ |  | https://ocamlot.xyz/users/gopiandcode |
| [PeerTube](https://github.com/Chocobozzz/PeerTube) [📋](https://peertube.fediverse.observer/list) | ⚠️ |  [PeerTube #6462](https://github.com/Chocobozzz/PeerTube/issues/6462) | [@it@peervideo.ru](https://peervideo.ru/c/it) |
| [Piefed](https://codeberg.org/rimu/pyfedi) [📋](https://piefed.fediverse.observer/list) | ⚠️ | 可以关注用户，但无法关注社区 | [user](https://piefed.social/u/Jerry), [community](https://piefed.social/c/piefed_meta) |
| [Pixelfed](https://github.com/pixelfed/pixelfed) [📋](https://pixelfed.fediverse.observer/list) | ✅ |  |  |
|  |
| [Pleroma](https://git.pleroma.social/pleroma) [📋](https://pleroma.fediverse.observer/list) | ✅ |  |  |
| Pleroma 派生软件 |
| [Akkoma](https://akkoma.dev/AkkomaGang/akkoma) [📋](https://akkoma.fediverse.observer/list) | ✅ |  |  |
| [Rebased](https://gitlab.com/soapbox-pub/rebased) | ❓ |  | ❓ |
|  |
| [Plume](https://github.com/Plume-org/Plume) [📋](https://plume.fediverse.observer/list) | ⚠️ |  | [@paradoxal@zone.paradoxal.netlib.re](https://zone.paradoxal.netlib.re/@/paradoxal) |
| [upub](https://moonlit.technology/alemi/upub) | ✅ |  | https://dev.upub.social/web/actors/alemi |
| [Seppo](https://codeberg.org/seppo/seppo) | ❌ | [GtS #2961](https://github.com/superseriousbusiness/gotosocial/issues/2961#issue-2333014325), [GtS #1186](https://github.com/superseriousbusiness/gotosocial/issues/1186) | https://seppo.social/aseppototry/o/p/ |
| [Socialhome](https://github.com/jaywink/socialhome) [📋](https://socialhome.fediverse.observer/list) | ✅ |  | [@delcake@delcake.com](https://delcake.com) |
| [Shuttlecraft](https://github.com/benbrown/shuttlecraft) 👻 [📋](https://shuttlecraft.fediverse.observer/list) | ❌ |  | https://cerritos.glitch.me |
| [Smithereen](https://github.com/grishka/Smithereen) [📋](https://smithereen.fediverse.observer/list) | ✅ | | |
| [snac](https://codeberg.org/grunfink/snac2) [📋](https://snac.fediverse.observer/list) | ✅ |  | https://blog.sn4il.site/sn4il |
| [Streams](https://codeberg.org/streams/streams) | ✅ |  | https://fediversity.site/channel/streams |
| [Swanye](https://codeberg.org/WammKD/Swanye) | ❓ |  |  |
| [Takahē](https://github.com/jointakahe/takahe) [📋](https://takahe.fediverse.observer/list) | ⚠️ | [Takahe #223](https://github.com/jointakahe/takahe/issues/223), [Takahe #528](https://github.com/jointakahe/takahe/issues/528) | [@wezza83@coot.vabl.dev](https://coot.vabl.dev/@wezza83@coot.vabl.dev) |
| [Tapir](https://github.com/ar-nelson/tapir) 👻 | ❓ |  | ❓ |
| [Threads](https://threads.net) | ❌ | [GtS #2491](https://github.com/superseriousbusiness/gotosocial/issues/2491) | Threads 并不开源，实行不透明的联合规则，且未按规范返回 ActivityPub 数据，GoToSocial 无意针对 Threads 进行特殊处理。我们赞同这种做法。 |
| [Toki](https://github.com/purifetchi/Toki) | ❓ |  | ❓ |
| [Twitter/X](https://x.com) | ❌ |  | Twitter 不使用 ActivityPub，但有开发者实现了从 Twitter 到 ActivityPub 的单项内容镜像。只要实现正确，Owu Social 可以与这些镜像服务联合，镜像账户适用于[特殊账户](/rules/special-accounts.md)的额外规定。 |
| [Wafrn](https://github.com/gabboman/wafrn) [📋](https://wafrn.fediverse.observer/list) | ✅ |  | https://app.wafrn.net/dashboard/exploreLocal |
| [Writefreely](https://github.com/writefreely/writefreely) [📋](https://writefreely.fediverse.observer/list) | ☑️ |  | [@baslow@read.asorrybowl.blog](https://read.asorrybowl.blog)<br/>注：[Owu Write](https://write.owu.one) 和其它所有更新到v0.15.1及之后版本的 Writefreely 实例可与 Owu Social 正常联合 |
| [write.as](https://write.as) (付费版？ Writefreely) | ⚠️ |  | [@write-as-roscoes-story@write.as](https://write.as/write-as-roscoes-story) |
| [Wordpress](https://github.com/WordPress/wordpress-develop) [📋](https://wordpress.fediverse.observer/list) | ⚠️ / ✅ | 取决于使用的 [ActivityPub](https://en.wikipedia.org/wiki/ActivityPub) 插件 |  |
| [wxwClub](https://github.com/wxwmoe/wxwClub) | ✅ |  | https://ovo.st/club/board |
| [Yarn](https://git.mills.io/yarnsocial/yarn) | ❓ |  | ❓ |
