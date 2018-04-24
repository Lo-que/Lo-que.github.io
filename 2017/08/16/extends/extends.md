---
title: extends
date: 2017-08-16 21:12:35
tags: Learning Note
---

# Learnning Note
## extends理解

extends   block   拓展调用    在本文件中（使用extengds的文件中）调用
 block content  将之后的代码整合为块
 实际上在 被extends的文件中  使用
 佐证  在被extengds的文件中  更换 block content与block desc的顺序 可证

```jade
 doctype html
<!--[if IE 8]><html class='ie8'><![endif]-->
<!--[if IE 9]><html class='ie9'><![endif]--><!--[if !IE]><!--><html><!--<![endif]-->
head
	meta(charset='utf8')
	- var course = 'jade'
	title  #{course.toUpperCase()}
body

	block content
	block desc
		p 测试
</html>
```

 index.jade  实际上在指向layout.jade

```jade
var index = layout
```

**include才是引用  在本文件中使用被include的文件中的代码**