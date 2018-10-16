---
title: 在https中引入http资源
date: 2018-04-30 21:39:37
tags: Picking up
categories: network
---

在进行个人网站的维护中，遇到了在https中引入http资源的问题，本以为是需要进行资源跨域访问解决，后来无意间发现[How to Disable Mixed Content Security Warning in Google Chrome](https://thehackernews.com/2015/04/disable-mixed-content-warning.html)

`<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">`

