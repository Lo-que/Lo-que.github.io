---
title: css 命名规范
date: 2018-01-24 11:17:11
tags: Learning Note
categories: css
---

# Learnning Note

#### css命名规范
##### base
头：header

内容：content/container

尾：footer

导航：nav

侧栏：sidebar

栏目：column

页面外围控制整体布局宽度：wrapper

左右中：left right center

登录条：loginbar

标志：logo

广告：banner

页面主体：main

热点：hot

新闻：news

下载：download

子导航：subnav

菜单：menu

子菜单：submenu

搜索：search

友情链接：friendlink

页脚：footer

版权：copyright

滚动：scroll

内容：content

标签页：tab

文章列表：list

提示信息：msg

小技巧：tips

栏目标题：title

加入：joinus

指南：guide

服务：service

注册：register

状态：status

投票：vote

合作伙伴：partner

##### 注释    

/* Header */

内容区

/* End Header */
##### id的命名:

###### (1)页面结构

容器: container

页头：header

内容：content/container

页面主体：main

页尾：footer

导航：nav

侧栏：sidebar

栏目：column

页面外围控制整体布局宽度：wrapper

左右中：left right center

###### (2)导航

导航：nav

主导航：mainbav

子导航：subnav

顶导航：topnav

边导航：sidebar

左导航：leftsidebar

右导航：rightsidebar

菜单：menu

子菜单：submenu

标题: title

摘要: summary

###### (3)功能

标志：logo

广告：banner

登陆：login

登录条：loginbar

注册：register

搜索：search

功能区：shop（如购物车）

标题：title

加入：joinus

状态：status

按钮：btn

滚动：scroll

标签页：tab

文章列表：list

提示信息：msg

当前的: current

小技巧：tips

图标: icon

注释：note

指南：guide

服务：service

热点：hot

新闻：news

下载：download

投票：vote

合作伙伴：partner

友情链接：link

版权：copyright

##### class命名    
###### (1)颜色:使用颜色的名称或者16进制代码,如

.red { color: red; }

.f60 { color: #f60; }

.ff8600 { color: #ff8600; }    

###### (2)字体大小,直接使用”font+字体大小”作为名称,如

.font10px { font-size: 10px; }

.font6pt {font-size: 6pt; }    

###### (3)对齐样式,使用对齐目标的英文名称,如

.left { float:left; }

.bottom { float:bottom; }    

###### (4)标题栏样式,使用”类别+功能”的方式命名,如

.barnews { }

.barproduct { }

** 注意事项: **
    1. 一律小写;
    2. 尽量用英文;
    3. 不加中杠和下划线;
    4. 尽量不缩写；

* class 名称中只能出现小写字符和连字符（不是下划线，也不是驼峰命名法）。连字符应当用于相关 class 的命名（类似于命名空间）（例如，.btn 和 .btn-danger）。
* 避免过度任意的简写。.btn 代表 button，但是 .s 不能表达任何意思。
* class 名称应当尽可能短，并且意义明确。
* 使用有意义的名称。使用有组织的或目的明确的名称，不要使用表现形式（presentational）的名称。
* 基于最近的父 class 或基本（base） class 作为新 class 的前缀。
* 使用 .js-* class 来标识行为（与样式相对），并且不要将这些 class 包含到 CSS 文件中。

##### 样式命名    
1）　 
主要的 master.css 
布局，版面 layout.css 
专栏 columns.css 
文字 font.css 
打印样式 print.css 
主题 themes.css    

2）
reset.css // 对浏览器的默认样式进行重设 
layout.css // 管理页面的布局 
typeset.css // 图文的编排 
color.css // 统一管理颜色的搭配 
print.css // 打印效果样式 
ie.css // 把对ie的hack单独分开     

3） 
reset.css 
header.css // 头部的所有样式 
container.css // 除头部/底部外的中间区域样式 
footer.css // 底部样式 
print.css 
ie.css     

4） 
reset.css /* 页面样式重置 */ 
header.css /* 全站头部样式 */ 
footer.css /* 全站尾部样式 */
public.css /* 全站公共模块样式 */ 
index.css /* 首页特有样式 */ 
container.css /* 二级及以下主体样式 */
print.css /* 打印样式 */ 
ie.css /* IE hack */    