---
title: call && apply
date: 2017-01-13 20:11:26
tags: Learning Note
categories: javascript
---

**call方法:** 
语法：call([thisObj[,arg1[, arg2[,   [,.argN]]]]]) 
定义：调用一个对象的一个方法，以另一个对象替换当前对象。 
说明： 
call 方法可以用来代替另一个对象调用一个方法。call 方法可将一个函数的对象上下文从初始的上下文改变为由 thisObj 指定的新对象。 
如果没有提供 thisObj 参数，那么 Global 对象被用作 thisObj。 

**apply方法：** 
语法：apply([thisObj[,argArray]]) 
定义：应用某一对象的一个方法，用另一个对象替换当前对象。 
说明： 
如果 argArray 不是一个有效的数组或者不是 arguments 对象，那么将导致一个 TypeError。 
如果没有提供 argArray 和 thisObj 任何一个参数，那么 Global 对象将被用作 thisObj， 并且无法被传递任何参数。

```javascript
function add(a,b)  
{  
  this(a,b)
  alert(a+b) 
}  
function sub(a,b)  
{  
  alert(a-b) 
}  
  
add.call(sub,3,1)//2,4
```

`add.call(sub,3,1)`将add执行的上下文由window切换为sub，即this指向是从window变为sub。

首先 add.call(sub,3,1)执行的是 add方法， 然后，add执行的时候，this已经变成了 sub这个方法本身，所以this(a,b)这一句弹出了2。

```javascript
function Animal(name){    
     this.name = name
     this.showName = function(){    
         alert(this.name)
     }    
}    
   
function Cat(name){  
     Animal.call(this, name)
}    
   
var cat = new Cat("Black Cat")
cat.showName()
```

首先执行var cat = new Cat("Black Cat")进入function Cat(name){  

```javascript
 function Cat(name){
 	Animal.call(this, name)
 }
```


**这时候的this为Cat{}对象，并非Animal**，再接执行   

```javascript
 function Animal(name){ 
  this.name = name  
  this.showName = function(){    
    alert(this.name)   
 	}    
 }
```


此时的this对象绑定为Cat{},因此是Cat对象获得了两个属性为：

```javascript
  Cat{name: "Black Cat",showName:function() {      
    alert(this.name)    
 }}，
```

回到

```javascript
var cat = Cat{
  name:"Black Cat",
  showName:function() {    
    alert(this.name)
   }}
```

 最后才是`cat.showName()`