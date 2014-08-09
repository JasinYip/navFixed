navFixed
========

这是一款可以滚动将导航条固定在顶部的jQuery插件。



开发背景
----

由于开发[个人简介][1]这个网页，需要用到导航条滚动时固定在顶部（原来并非在顶部）的效果，曾经试过 jQuery.pin 以及 stickUp
但都有些小BUG，于是就决定自己开发这款插件。


更新日志
----

V1.0.1
- 修复在使用margin或padding时会出现的不正常情况


开发人员
----

本插件由本人 Jasin Yip 独立开发。



依赖
--

本插件依赖 jQuery，开发插件使用的 jQuery 版本为 1.11.1。

使用本插件时，需要引入 jQuery 。



如何使用
----

引入 navFixed.js 后，使用 $(*selector*).navFixed() 即可。



    <script src="navFixed.js"></script>

    $(selector).navFixed();

    

演示地址
----

[navFixed Demo][2]

[1]: <http://jasinyip.com/resume>
[2]: <http://jasinyip.com/demo/navFixed>
