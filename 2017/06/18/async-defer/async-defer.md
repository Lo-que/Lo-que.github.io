---
title: async && defer
date: 2017-06-18 21:05:37
tags: Learning Note
---

# Learnning Note

## async defer

### 查阅资料

1. `<script src="myscript.js"></script>`没有 defer 或 async，浏览器会立即加载并执行指定的脚本，“立即”指的是在渲染该 script 标签之下的文档元素之前，也就是说不等待后续载入的文档元素，读到就加载并执行。
2. `<script async src="myscript.js"></script>`有 async，加载和渲染后续文档元素的过程将和 script.js 的加载与执行并行进行（异步）。
3. `<script defer src="myscript.js"></script> `有 defer，加载后续文档元素的过程将和 script.js 的加载并行进行（异步），但是 script.js 的执行要在所有元素解析完成之后，DOMContentLoaded 事件触发之前完成。
   1. defer 和 async 在网络读取（下载）这块儿是一样的，都是异步的（相较于 HTML 解析）
   2. 它俩的差别在于脚本下载完之后何时执行，显然 defer 是最接近我们对于应用脚本加载和执行的要求的
   3. 关于 defer，此图未尽之处在于它是按照加载顺序执行脚本的，这一点要善加利用
   4. async 则是一个乱序执行的主，反正对它来说脚本的加载和执行是紧紧挨着的，所以不管你声明的顺序如何，只要它加载完了就会立刻执行
   5. 仔细想想，async 对于应用脚本的用处不大，因为它完全不考虑依赖（哪怕是最低级的顺序执行），不过它对于那些可以不依赖任何脚本或不被任何脚本依赖的脚本来说却是非常合适的，最典型的例子：Google Analytics

### 自己理解

1. 默认引用 script:`<script type="text/javascript" src="x.min.js"></script>`
   当浏览器遇到 script 标签时，文档的解析将停止，并立即下载并执行脚本，脚本执行完毕后将继续解析文档。
2. async模式 `<script type="text/javascript" src="x.min.js" async="async"></script>`
   当浏览器遇到 script 标签时，文档的解析不会停止，其他线程将下载脚本，脚本下载完成后开始执行脚本，脚本执行的过程中文档将停止解析，直到脚本执行完毕。
3. defer模式 `<script type="text/javascript" src="x.min.js" defer="defer"></script>`
   当浏览器遇到 script 标签时，文档的解析不会停止，其他线程将下载脚本，待到文档解析完成，脚本才会执行。