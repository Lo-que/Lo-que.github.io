---
title: 闭合浮动与BFC
date: 2018-04-30 21:40:12
tags: Picking up
categories: css
---

在火币工作的日子里，遭遇一新鲜事儿。因为是新人，有个带我的小师傅。因为PRO站全部都是float布局，所以写新的future的时候，小师傅专门交待了记得清除浮动。在做code review的时候突然想起，所以在父元素中添加了`clear:both;`然而毫无变化。定睛一看，喔唷，已经是清理过浮动之后的样式了。仔细看了一下代码，做了测试，发现习惯性添加在父元素里的`overflow:hidden`已经实现了清除浮动的效果。