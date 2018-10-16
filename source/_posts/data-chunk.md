---
title: data chunk
date: 2017-10-24 16:57:24
tags: Learning Note
categories: nodejs
---

首先 组装chunk

```nodejs
var data = ""  
res  
  .on('data', function (chunk) {  
  data += chunk  
})  
  .on("end", function () {  
  //对data转码  
}) 
```
但是 当我们调用的时候就会发现
```nodejs
var testIconv = new Iconv('GBK', 'UTF-8')   
testIconv.convert(data).toString()  
```
会抛出EILSEQ异常

仔细查看会发现两个chunk（Buffer对象）的拼接并不正常，相当于进行了buffer.toString() + buffer.toString()。如果buffer不是完整的，则toString出来后的string是存在问题的（比如一个中文字被截断）。这样出来的string就无法被正常转码。

所以应该这样拼接
```nodejs
var chunks = []
var size = 0
res
  .on('data', function (chunk) {  
    chunks.push(chunk)
    size += chunk.length
  })
  .on('end', function () {  
    var data = null
    switch(chunks.length) {  
      case 0: data = new Buffer(0)
        break
      case 1: data = chunks[0]
        break
      default:  
        data = new Buffer(size);  
        for (var i = 0, pos = 0, l = chunks.length; i < l; i++) {  
          var chunk = chunks[i] 
          chunk.copy(data, pos)
          pos += chunk.length
        }  
        break
    }  
  })
```

对其进行封装重构

```nodejs
var BufferHelper = function () {
  this.buffers = []
  this.size = 0
  this._status = "changed"
}

BufferHelper.prototype.concat = function (buffer) {
  for (var i = 0, l = arguments.length; i < l; i++) {
    this._concat(arguments[i])
  }
  return this
}

BufferHelper.prototype._concat = function (buffer) {
  this.buffers.push(buffer)
  this.size = this.size + buffer.length
  this._status = "changed"
  return this
}

BufferHelper.prototype._toBuffer = function () {
  var data = null
  var buffers = this.buffers
  switch(buffers.length) {
    case 0:
      data = new Buffer(0)
      break
    case 1:
      data = buffers[0]
      break
    default:
      data = new Buffer(this.size)
      for (var i = 0, pos = 0, l = buffers.length; i < l; i++) {
        var buffer = buffers[i]
        buffer.copy(data, pos)
        pos += buffer.length
      }
      break
  }
  // Cache the computed result
  this._status = "computed"
  this.buffer = data
  return data
}

BufferHelper.prototype.toBuffer = function () {
  return this._status === "computed" ? this.buffer : this._toBuffer()
}

BufferHelper.prototype.toString = function () {
  return Buffer.prototype.toString.apply(this.toBuffer(), arguments)
}

module.exports = BufferHelper
```
这里有两个私有方法，_concat和_toBuffer。其目的是保证每个方法的职责单一，还在toBuffer里做了一下状态设置，使得不浪费CPU。接下来的调用就非常简单了。

```nodejs
var http = require('http')
var BufferHelper = require('bufferhelper')

http.createServer(function (request, response) {
  var bufferHelper = new BufferHelper()

  request.on("data", function (chunk) {
    bufferHelper.concat(chunk)
  })

  request.on('end', function () {
    var html = bufferHelper.toBuffer().toString()
    response.writeHead(200)
    response.end(html)
  })
}).listen(8001)
```

最后，node-iconv的作者提供了一个工具集[node-iconv](https://github.com/bnoordhuis/node-buffertools)

**以上是朴灵大大很久前发表在cnodejs.org上的文章, 现在可以把chunk push进临时数组, 之后concat拼接下, 代码如下**
```nodejs
dataArray.push(chunk)
Buffer.concat(dataArray).toString(‘base64’)
```