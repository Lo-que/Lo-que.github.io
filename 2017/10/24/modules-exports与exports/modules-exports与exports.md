---
title: modules.exports与exports
date: 2017-10-24 21:15:57
tags: Learning Note
---

	1. module.exports 初始值为一个空对象 {}
	2. exports 是指向的 module.exports 的引用
	3. require() 返回的是 module.exports 而不是 exports