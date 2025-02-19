---
title: 自定义CSS
description: 为你的主页设置自定义CSS样式
---

# 自定义CSS

::: tip 提示
自定义CSS是一项进阶功能，需要一定的前端知识。
:::

CSS(层叠样式表)是一种与 HTML 搭配使用的编码语言，用于决定网页在浏览器中的外观：

> HTML 用于定义内容的结构和语义，而 CSS 用于为其设置样式和布局。例如，您可以使用 CSS 修改内容的字体、颜色、大小和间距，将其分成多列，或者添加动画和其他装饰功能。
>
> -- [学习 CSS (Mozilla)](https://developer.mozilla.org/en-US/docs/Learn/CSS)

在 Owu Social，您可以通过[设置面板](https://scg.owu.one/settings)为您的账户上传自定义 CSS。

您可以使用这个功能，自定义使用浏览器访问您的账户页的用户看到的外观。

## 示例 - 更改背景颜色

下面是一个标准的 Owu Social 账户页面：

![个人资料页面。标准配色方案为灰色、蓝色和橙色。](https://osraw-img.owu.one/2024/10/16/670f1d15c5afc.png)

假设我们希望将背景颜色从灰色更改为黑色。

在用户设置面板中，我们在自定义 CSS (Custom CSS)中输入以下 CSS 代码：

```css
.page {
  background: black;
}
```

然后我们点击保存个人资料信息。

返回个人资料页面并刷新页面后，它现在看起来像这样：

![相同的个人资料页面。背景现在是黑色。](https://osraw-img.owu.one/2024/10/16/670f1d8972bcf.png)

如果我们想要更精致一点，可以使用以下 CSS 代码为背景添加渐变效果：

```css
.page {
  background: linear-gradient(crimson, purple);
}
```

保存 CSS 并刷新个人资料页面后，页面现在看起来如下：(为展示渐变效果，此处采用单条贴文的截图)

![相同的个人资料页面。背景现在从深红色开始，逐渐变为紫色。](https://osraw-img.owu.one/2024/10/16/670f1de5b6c45.png)

## 无障碍访问

HTML 和 CSS 的无障碍重要性不容低估。以下建议来自 W3：

> 网络的基础设计是为了适用于所有人，无论他们的硬件、软件、语言、位置或能力如何。当网络实现这一目标时，它就可以供具有多种听觉、运动、视觉和认知能力的人使用。
>
> 因此，残障的影响在网络上得到了显著改变，因为网络消除了许多人在物理世界中面临的沟通和互动障碍。然而，当网站、应用程序、技术或工具设计不当时，它们可能会成为排除人们使用网络的障碍。
>
> 无障碍是开发者和组织希望创建高质量网站和网络工具、并不排除人们使用其产品和服务的必要条件。
>
> -- [网络无障碍介绍](https://www.w3.org/WAI/fundamentals/accessibility-intro/)

Owu Social 中的官方主题设计考虑了网络无障碍，尤其是在布局、颜色对比、字体大小等方面。

如果您为自己的账户页编写自定义 CSS，非常重要的一点就是确保其保持可读性并按预期行为。按钮应该看起来像按钮，链接应该看起来像链接，文本应以可读的字体呈现，元素不应在页面上跳动等。网页可以既美观又令人振奋，同时不牺牲可读性或造成过度复杂。

如果您更改了配色方案，建议验证新颜色是否具有足够的对比度，以便可以被视觉障碍者(如色盲)阅读。更新 CSS 后，你可以尝试在对比度检查工具中输入您的个人资料 URL，例如 [颜色对比度无障碍验证工具](https://color.a11y.com/Contrast)。您也可以使用浏览器开发者工具的“无障碍”选项卡来检查问题。

以无障碍为导向进行样式设计使网络对每个人都更好！查看以下链接了解更多信息。

## 有用的链接

- [学习 CSS (Mozilla)](https://developer.mozilla.org/en-US/docs/Learn/CSS)
- [CSS 教程 (W3 Schools)](https://www.w3schools.com/Css/default.asp)
- [CSS 和 JavaScript 无障碍最佳实践 (Mozilla)](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/CSS_and_JavaScript#css)
- [WAVE 网络无障碍评估工具](https://wave.webaim.org/)
- [颜色对比度无障碍验证工具](https://color.a11y.com/Contrast)
