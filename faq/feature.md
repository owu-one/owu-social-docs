---
title: 功能支持
description: Owu Social 的功能支持情况
---

# 功能支持

[Owu Social](https://scg.owu.one) 由 [GoToSocial](https://gotosocial.org) 驱动, 这是一个年轻的社交软件 (2021年2月开始开发), 目前处于 测试(Beta)阶段, 还在活跃开发中。

## 尚未支持的功能

本节只列出可能对你（用户）的使用体验产生影响的功能。

::: tip 提示
如果你是普通用户,想要跟进有关功能支持的更新,只需关注 [@admin@scg.owu.one](https://scg.owu.one/@admin) 即可。

标注为`N/A`的功能表示暂无明确的支持计划。
:::

| 功能 | 支持计划 |
| --- | --- |
| 编辑贴文 | 预计在 v0.18 发布, 具体参见 [Issue #1990](https://github.com/superseriousbusiness/gotosocial/issues/1990) |
| 通知推送 | 预计在 v0.18 发布, 具体参见 [Issue #1350](https://github.com/superseriousbusiness/gotosocial/issues/1350) |
| 在主页显示转发 | 已有 [PR #3346](https://github.com/superseriousbusiness/gotosocial/pull/3346) |
| 客户端授权管理 | 预计 2024 年底到 2025 年初发布, 具体参见 [Issue #1081](https://github.com/superseriousbusiness/gotosocial/issues/1081), [Issue #1573](https://github.com/superseriousbusiness/gotosocial/issues/1573), [Issue #2227](https://github.com/superseriousbusiness/gotosocial/issues/2227), [Issue #2523](https://github.com/superseriousbusiness/gotosocial/issues/2523) |
| 中继 | 预计 2024 年底到 2025 年初发布, Owu Social 通过单向订阅中继保证你能接触到广泛的内容,但你公开发布的内容目前只能依靠他人的主动关注和转发来进入其它实例。具体参见 [Issue #1123](https://github.com/superseriousbusiness/gotosocial/issues/1123), [Issue #1124](https://github.com/superseriousbusiness/gotosocial/issues/1124) |
| 双因素认证 | 预计 2024 年底到 2025 年初发布 |
| 自定义表情回应 | N/A |
| 重设密码 | 部分支持,支持在已登录状态下通过[设置面板](https://scg.owu.one/settings)重设密码,具体参见 [Issue #263](https://github.com/superseriousbusiness/gotosocial/issues/263)<br/>如果你忘记了密码,请[联系管理员](/contact.md) |
| 多语言支持 | N/A, Owu Social 已将大多数公开页面和邮件通知翻译为中文,但设置面板仍为英文。<br/>具体参见 [Issue #474](https://github.com/superseriousbusiness/gotosocial/issues/474) |
| WebHook | N/A, 用于实现自动化的高级功能。具体参见 [Issue #2164](https://github.com/superseriousbusiness/gotosocial/issues/2164) |
| 链接验证 | N/A, 目前你填写的链接只要正确配置了验证字段，仍能在其它支持链接验证的实例显示。具体参见 [Issue #2352](https://github.com/superseriousbusiness/gotosocial/issues/2352) |
| HTML格式的嘟文 | N/A, 具体参见 [Issue #2555](https://github.com/superseriousbusiness/gotosocial/issues/2555) |
| 改变媒体附件缩略图的焦点 | N/A, 具体参见 [Issue #2593](https://github.com/superseriousbusiness/gotosocial/issues/2593) |
| 全站公告 | N/A, 具体参见 [Issue #2621](https://github.com/superseriousbusiness/gotosocial/issues/2621) |
| 更广泛的搜索范围(搜索收藏、点赞、转嘟) | N/A, 已有搜索功能参见[搜索](search.md)。功能讨论参见 [Issue #2935](https://github.com/superseriousbusiness/gotosocial/issues/2935) |
| 中文搜索优化 | N/A, 已有搜索功能参见[搜索](search.md) |
| 通知分组 | N/A, 具体参见 [Issue #3408](https://github.com/superseriousbusiness/gotosocial/issues/3408) |
| 更多导入支持 | N/A, 具体参见 [Issue #3462](https://github.com/superseriousbusiness/gotosocial/issues/3462), [Issue #3463](https://github.com/superseriousbusiness/gotosocial/issues/3463) |
| 将话题添加到列表 | N/A, 具体参见 [Issue #3484](https://github.com/superseriousbusiness/gotosocial/issues/3484) |
| 解除“已迁移”状态 | N/A, 具体参见 [Issue #3584](https://github.com/superseriousbusiness/gotosocial/issues/3584) |

## 特色功能

本节展示由 GoToSocial 率先支持和提供的特色功能

| 功能 | 概述 |
| --- | --- |
| [互动控制](/settings/interaction-control.md) | 精准控制谁可以转发、点赞或回复你的贴文。|
| 在公开页隐藏所有贴文 | 可以通过[设置面板](https://scg.owu.one/settings)关闭所有贴文的公开显示，这样通过浏览器访问你的主页时，只会看到你的账户基本信息。 |

## 不会支持的功能

::: tip 说明
此处列出的是被 GoToSocial 明确在今后一段时间内不会支持的功能。
:::

| 功能 | 说明 |
| --- | --- |
| 一次性验证码登录 | 与当前登录流程不适配，参见 [Issue #1631](https://github.com/superseriousbusiness/gotosocial/issues/1631)，但有计划支持双因素认证，参见上方“尚未支持的功能” |
| 跨实例交互引导 | GoToSocial 提供的网页是静态的，仅供浏览。参见 [Issue #1895](https://github.com/superseriousbusiness/gotosocial/issues/1895) |
