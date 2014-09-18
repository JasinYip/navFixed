# navFixed 
 
[navFixed 官方网站](http://navFixed.jasinyip.com/)

这是一款超轻量级的 jQuery 插件。 它可以让原本不是在顶部的导航条，在滚动到它的位置时固定在顶部。

## 开发背景

由于开发[个人简介](<http://jasinyip.com/resume>)这个网页，需要用到导航条滚动时固定在顶部（原来并非在顶部）的效果，曾经试过
jQuery.pin 以及 stickUp ，但都有些小BUG，于是就决定自己开发这款插件。

## 更新日志

### V1.0.2

- 变量的作用域私有处理。
- 为了 Github 更新时更易看diff，从此版本开始项目中的文件名不再有版本号。

### V1.0.1

- 修复在使用margin或padding时会出现的不正常情况。

## 开发人员

本插件由本人 Jasin Yip 独立开发，您可以：[查看我的个人介绍](http://resume.jasinyip.com)

## 依赖

本插件依赖 jQuery，开发插件使用的 jQuery 版本为 1.11.1。

使用本插件时，需要引入 jQuery 。

## 下载方法

- [navFixed.js](http://navfixed.jasinyip.com/navFixed.js) 
- [navFixed.min.js](http://navFixed.jasinyip.com/navFixed.min.js)

## 安装指南

1. 在引入 jQuery 后，引入 navFixed.js 。 
2. 然后在 `$(function(){})` 里使用 `$(selector).navFixed()` 即可。

navFixed 官方网站使用的就是本插件，点击进入 [navFixed官方网站](http://navFixed.jasinyip.com/) 进行查看
