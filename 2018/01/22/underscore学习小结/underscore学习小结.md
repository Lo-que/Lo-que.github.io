---
title: underscore学习小结
date: 2018-01-22 20:38:34
tags: Learning summary
---

## underscore.js

**Underscore.js** 是一个由**Jeremy Ashkenas**开发的**JavaScript**库，提供了许多作为开发者在开发Web项目时所需要的实用功能。

代码变得更加易读：

 ` _.isEmpty({})  //true `

代码更容易编写：

`_.flatten([[0, 1], [2, 3], [4, 5]]) // [0, 1, 2, 3, 4, 5]` 

提供了原生没有的方法：

`_.range(5)  //[0, 1, 2, 3, 4]`

甚至可以作为模版引擎：

`_.template('<p><%= text %></p>', {text: 'SitePoint Rocks!'}) //   <p>SitePoint Rocks!</p>`

- [USA Today](https://www.usatoday.com/ "USA Today")   今日美国
- [LinkedIn](https://www.linkedin.com "LinkedIn")  领英
- [Khan Academy](https://www.khanacademy.org "Khan Academy")  可汗学院

1. 集合：数组或对象

   1. each 对集合循环操作，只针对function

      ```javascript
        //遍历数组或者对象的每个元素
        // 第一个参数为数组（包括类数组）或者对象
        // 第二个参数为迭代方法，对数组或者对象每个元素都执行该方法
        // 该方法又能传入三个参数，分别为 (item, index, array)（(value, key, obj) for object）
        // 与 ES5 中 Array.prototype.forEach 方法传参格式一致
        // 第三个参数（可省略）确定第二个参数 iteratee 函数中的（可能有的）this 指向
        // 即 iteratee 中出现的（如果有）所有 this 都指向 context
        // notice: _.each 方法不能用 return 跳出循环（同样，Array.prototype.forEach 也不行）
      _.each([1, 2, 3], function (ele, idx) {
      	console.log(idx + ":" + ele);
      });
      => 0:1 1:2 2:3
      ```

   2. map 对集合以map方式进行遍历，返回一个新数组  iteratee 可以是对象或字符串

      ```javascript
      console.log(
      _.map([1, 2, 3], function(num){
      return num * 3;
      })
      );
      => [3, 6, 9]
      ```

   3. reduce: 按callback缩减集合

      ```javascript
      console.log(
      _.reduce([1, 2, 3], function (memo, num) {
      return memo + num;
      }, 0)
      );
      => 6
      ```

   4. filter: 过滤器  _.find =  _.detect 返回第一个

      ```javascript
      console.log(
      _.filter([1, 2, 3, 4, 5, 6], function(num){
      return num & 1 == 0;
      })
      );
      => [ 2, 4, 6 ]
      ```

   5. reject: 过滤不符合要求的

      ```javascript
      console.log(
      _.reject([1, 2, 3, 4, 5, 6], function(num){
      return num & 1 == 0;
      })
      );
      => [ 1, 3, 5 ]
      ```

   6. where: 根据指定键值对 遍历list，返回新的数组。（类似于sql语句中的where）&： find 返回第一个

      ```javascript
      var list = [
      {title:"AAA",year: 1982},
      {title:"BBB",year: 1900},
      {title:"CCC",year: 1982}
      ];
      console.log(
      _.where(list,{year: 1982})
      );
      => [ { title: 'AAA', year: 1982 }, { title: 'CCC', year: 1982 } ]
      ```

   7. _.contains = _.includes = _.include: 判断数组或者对象中（value 值）是否有指定元素

   8. every = all  所有满足 返回true

   9. some = any  只有有一个满足 返回true

   10. invoke:  数组或者对象中的每个元素都调用 method 方法，返回调用后的结果（数组或者关联数组）

   11. pluck: 提取一个集合里指定的属性值

       ```javascript
       var users = [
       {name: 'moe', age: 40},
       {name: 'larry', age: 50}
       ];
       console.log(
       _.pluck(users, 'name')
       );
       => [ 'moe', 'larry' ]
       ```

   12. max,min,sortBy: 取list中的最大，最小元素，自定义比较器

       ```javascript
       console.log(
       _.max(users, function (stooge) {
       return stooge.age;
       })
       );
       => { name: 'larry', age: 50 }
        
       var numbers = [10, 5, 100, 2, 1000];
       console.log(
       _.min(numbers)
       );
       => 2
        
       console.log(
       _.sortBy([3, 4, 2, 1 , 6], function (num) {
       return Math.max(num);
       })
       );
       => [ 1, 2, 3, 4, 6 ]
       ```

       ​

   13. ```javascript
       groupBy: 把一个集合分组成多个集合

       console.log(
       _.groupBy(['one', 'two', 'three'], 'length')
       );
       => { '3': [ 'one', 'two' ], '5': [ 'three' ] }
       countBy: 把一个数据分组后计数

       onsole.log(
       _.countBy([1, 2, 3, 4, 5], function (num) {
       return num % 2 == 0 ? 'even' : 'odd';
       })
       );
       => { odd: 3, even: 2 }
       ```

   14. ```javascript
       toArray: 将list转换成一个数组

       console.log(
       (function () {
       return _.toArray(arguments).slice(1);
       })(1, 2, 3, 4)
       );
       => [ 2, 3, 4 ]
       size: 得到list中元素个数

       console.log(
       _.size({one: 1, two: 2, three: 3})
       );

       ```

   15. shuffle 随机打乱 洗牌算法

   16. partition 将数组或者对象中符合条件的元素和不符合条件的元素分别放入两个数组

2. 数组

   1. _.first = _.head = _.take 返回前n个元素 n默认为1

   2. initial 返回出去后n个元素的数组

   3. last 返回后n个元素

   4. rest = tail 返回出去前n个元素

   5. compact  去除数组中所有的假值 false null undefined '' NaN 0

   6. √ flatten 将数组展开  

      ```javascript
        //input => Array 或者 arguments
        // shallow => 是否只展开一层
        // strict === true，通常和 shallow === true 配合使用
        // 表示只展开一层，但是不保存非数组元素（即无法展开的基础类型）
        // flatten([[1, 2], 3, 4], true, true) => [1, 2]
        // flatten([[1, 2], 3, 4], false, true) = > []
        // startIndex => 从 input 的第几项开始展开
        // ===== //
        // 可以看到，如果 strict 参数为 true，那么 shallow 也为 true
        // 也就是展开一层，同时把非数组过滤
        // [[1, 2], [3, 4], 5, 6] => [1, 2, 3, 4]
        var flatten = function(input, shallow, strict, startIndex) {
          // output 数组保存结果
          // 即 flatten 方法返回数据
          // idx 为 output 的累计数组下标
          var output = [], idx = 0;

          // 根据 startIndex 变量确定需要展开的起始位置
          for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
            var value = input[i];
            // 数组 或者 arguments
            // 注意 isArrayLike 还包括 {length: 10} 这样的，过滤掉
            if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
              // flatten current level of array or arguments object
              // (!shallow === true) => (shallow === false)
              // 则表示需深度展开
              // 继续递归展开
              if (!shallow)
                // flatten 方法返回数组
                // 将上面定义的 value 重新赋值
                value = flatten(value, shallow, strict);

              // 递归展开到最后一层（没有嵌套的数组了）
              // 或者 (shallow === true) => 只展开一层
              // value 值肯定是一个数组
              var j = 0, len = value.length;

              // 这一步貌似没有必要
              // 毕竟 JavaScript 的数组会自动扩充
              // 但是这样写，感觉比较好，对于元素的 push 过程有个比较清晰的认识
              output.length += len;

              // 将 value 数组的元素添加到 output 数组中
              while (j < len) {
                output[idx++] = value[j++];
              }
            } else if (!strict) {
              // (!strict === true) => (strict === false)
              // 如果是深度展开，即 shallow 参数为 false
              // 那么当最后 value 不是数组，是基本类型时
              // 肯定会走到这个 else-if 判断中
              // 而如果此时 strict 为 true，则不能跳到这个分支内部
              // 所以 shallow === false 如果和 strict === true 搭配
              // 调用 flatten 方法得到的结果永远是空数组 []
              output[idx++] = value;
            }
          }
          return output;
        };
      ```

   7. without 从数组中移除指定的元素，返回移除后的数组副本

   8. union,intersection,difference,uniq: 并集，交集，差集，取唯一(去重)

   9. zip unzip 合并数组中的元素 是group的反向操作

   10. indexOf,lastIndexOf, 取索引位置 sortedIndex 二分查找

       ```javascript
       function createIndexFinder(dir, predicateFind, sortedIndex)
       ```

   11. ​

3. 函数

   1. bind: this指向不变  bindAll 绑定方法名到对象上, 当这些方法被执行时将在对象的上下文执行. 绑定函数用作事件处理时非常方便, 否则函数调用时 this 关键字根本没什么用

      ```javascript
      var func = function(greeting){ return greeting + ': ' + this.name };
      func = _.bind(func, {name : 'moe'}, 'hi');
      console.log(func());
      => hi: moe

      var buttonView = {
      label : 'underscore',
      onClick : function(){ console.log('clicked: ' + this.label); },
      onHover : function(){ console.log('hovering: ' + this.label); }
      };
      var func = _.bindAll(buttonView, 'onClick', 'onHover');
      func.onClick();
      => clicked: underscore
      ```

      ​

   2. partial:在不改变this的情况下，通过参数填充数据  ~~可以使方法设定默认值~~ [柯里化(Currying)](https://en.wikipedia.org/wiki/Currying)

      ```javascript
      var add = function(a, b) { return a + b; };
      add5 = _.partial(add, 5);
      console.log(add5(10));
      => 15
      ```

      ​

   3. memoize 记忆化，存储中间运算结果，提高效率

      ```javascript
        // 参数 hasher 是个 function，用来计算 key
        // 如果传入了 hasher，则用 hasher 来计算 key
        // 否则用 key 参数直接当 key（即 memoize 方法传入的第一个参数）
        // _.memoize(function, [hashFunction])
        // 适用于需要大量重复求值的场景
        // 比如递归求解菲波那切数
        var fibonacci = _.memoize(function(n) {
          return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
        });
        console.log(fibonacci(10));
        => 55
      ```

      ​

   4. delay: 延迟触发 setTimeout   _.defer = _.partial ( _.delay, _, 1);

   5. throttle: 函数节流（如果有连续事件响应，则每间隔一定时间段触发）

      ```javascript
        // 每间隔 wait(Number) milliseconds 触发一次 func 方法
        // 如果 options 参数传入 {leading: false}
        // 那么不会马上触发（等待 wait milliseconds 后第一次触发 func）
        // 如果 options 参数传入 {trailing: false}
        // 那么最后一次回调不会被触发
        // options 不能同时设置 leading 和 trailing 为 false
        // 示例：
        // var throttled = _.throttle(updatePosition, 100);
        // $(window).scroll(throttled);
        // 调用方式（注意看 A 和 B console.log 打印的位置）：
        // _.throttle(function, wait, [options])
        // sample 1: _.throttle(function(){}, 1000)
        // print: A, B, B, B ...
        // sample 2: _.throttle(function(){}, 1000, {leading: false})
        // print: B, B, B, B ...
        // sample 3: _.throttle(function(){}, 1000, {trailing: false})
        // print: A, A, A, A ...
      ```

   6. debounce: 函数去抖（连续事件触发结束后只触发一次）

      ```javascript
      // sample 1: _.debounce(function(){}, 1000)
      // 连续事件结束后的 1000ms 后触发
      // sample 1: _.debounce(function(){}, 1000, true)
      // 连续事件触发后立即触发（此时会忽略第二个参数）
      ```

   7. wrap 以函数作为函数传递，可以增加函数前后的控制

      ```javascript
      var hello = function(name) { return "hello: " + name; };
      hello = _.wrap(hello, function(func) {
      return "before, " + func("moe") + ", after";
      });
      console.log(hello());
      => before, hello: moe, after
      ```

      ​

   8. compose: 组合函数调用关系，把单独的f(),g(),h()组合成f(g(h()))

4. 对象

   ```javascript
   // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
     // IE < 9 下 不能用 for key in ... 来枚举对象的某些 key
     // 比如重写了对象的 `toString` 方法，这个 key 值就不能在 IE < 9 下用 for in 枚举到
     // IE < 9，{toString: null}.propertyIsEnumerable('toString') 返回 false
     // IE < 9，重写的 `toString` 属性被认为不可枚举
     // 据此可以判断是否在 IE < 9 浏览器环境中
     var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');

     // IE < 9 下不能用 for in 来枚举的 key 值集合
     //为什么constructor要和nonEnumerableProps区分处理
     // 个人觉得可能是 `constructor` 和其他属性不属于一类
     // nonEnumerableProps[] 中都是方法
     // 而 constructor 表示的是对象的构造函数
     // 所以区分开来了
     var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
                         'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

   ```

   ​

   1. keys,values,paris,invert: 取属性名，取属性值，把对象转换成[key,value]数组，对调键值

      ```javascript
      var obj = {one: 1, two: 2, three: 3}
      console.log(_.keys(obj));
      console.log(_.values(obj));
      console.log(_.pairs(obj));
      console.log(_.invert(obj));
      => [ 'one', 'two', 'three' ]
      [ 1, 2, 3 ]
      [ [ 'one', 1 ], [ 'two', 2 ], [ 'three', 3 ] ]
      { '1': 'one', '2': 'two', '3': 'three' }
      ```

      ​

   2. extend: 复制对象的所有属性到目标对象上，覆盖已有属性

      defaults: 复制对象的所有属性到目标对象上，跳过已有属性

      ```javascript
      console.log(
      _.extend({name : 'moe'}, {age : 50})
      );
      => { name: 'moe', age: 50 }
      ```

```
  var iceCream = {flavor : "chocolate"};
  console.log(
  _.defaults(iceCream, {flavor : "vanilla", sprinkles : "lots"})
  );
  => { flavor: 'chocolate', sprinkles: 'lots' }
  ```
```

1. pick,omit: 返回一个对象的副本，保留指定的属性或去掉指定的属性

2. tag: 用对象作为参数来调用函数，作为函数链式调用的一环

3. isEqual:

   ```javascript
    // "内部的"/ "递归地"/ "比较"
     // 该内部方法会被递归调用
     var eq = function(a, b, aStack, bStack) {
       // Identical objects are equal. `0 === -0`, but they aren't identical.
       // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
       // a === b 时
       // 需要注意 `0 === -0` 这个 special case
       // 0 和 -0 被认为不相同（unequal）
       // 至于原因可以参考上面的链接
       if (a === b) return a !== 0 || 1 / a === 1 / b;

       // A strict comparison is necessary because `null == undefined`.
       // 如果 a 和 b 有一个为 null（或者 undefined）
       // 判断 a === b
       if (a == null || b == null) return a === b;

       // Unwrap any wrapped objects.
       // 如果 a 和 b 是 underscore OOP 的对象
       // 那么比较 _wrapped 属性值（Unwrap）
       if (a instanceof _) a = a._wrapped;
       if (b instanceof _) b = b._wrapped;

       // Compare `[[Class]]` names.
       // 用 Object.prototype.toString.call 方法获取 a 变量类型
       var className = toString.call(a);

       // 如果 a 和 b 类型不相同，则返回 false
       // 类型都不同了还比较个蛋！
       if (className !== toString.call(b)) return false;

       switch (className) {
         // Strings, numbers, regular expressions, dates, and booleans are compared by value.
         // 以上五种类型的元素可以直接根据其 value 值来比较是否相等
         case '[object RegExp]':
         // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
         case '[object String]':
           // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
           // equivalent to `new String("5")`.
           // 转为 String 类型进行比较
           return '' + a === '' + b;

         // RegExp 和 String 可以看做一类
         // 如果 obj 为 RegExp 或者 String 类型
         // 那么 '' + obj 会将 obj 强制转为 String
         // 根据 '' + a === '' + b 即可判断 a 和 b 是否相等
         // ================

         case '[object Number]':
           // `NaN`s are equivalent, but non-reflexive.
           // Object(NaN) is equivalent to NaN
           // 如果 +a !== +a
           // 那么 a 就是 NaN
           // 判断 b 是否也是 NaN 即可
           if (+a !== +a) return +b !== +b;

           // An `egal` comparison is performed for other numeric values.
           // 排除了 NaN 干扰
           // 还要考虑 0 的干扰
           // 用 +a 将 Number() 形式转为基本类型
           // 即 +Number(1) ==> 1
           // 0 需要特判
           // 如果 a 为 0，判断 1 / +a === 1 / b
           // 否则判断 +a === +b
           return +a === 0 ? 1 / +a === 1 / b : +a === +b;

         // 如果 a 为 Number 类型
         // 要注意 NaN 这个 special number
         // NaN 和 NaN 被认为 equal
         // ================

         case '[object Date]':
         case '[object Boolean]':
           // Coerce dates and booleans to numeric primitive values. Dates are compared by their
           // millisecond representations. Note that invalid dates with millisecond representations
           // of `NaN` are not equivalent.
           return +a === +b;

         // Date 和 Boolean 可以看做一类
         // 如果 obj 为 Date 或者 Boolean
         // 那么 +obj 会将 obj 转为 Number 类型
         // 然后比较即可
         // +new Date() 是当前时间距离 1970 年 1 月 1 日 0 点的毫秒数
         // +true => 1
         // +new Boolean(false) => 0
       }
   ```

```
      // 判断 a 是否是数组
      var areArrays = className === '[object Array]';

      // 如果 a 不是数组类型
      if (!areArrays) {
        // 如果 a 不是 object 或者 b 不是 object
        // 则返回 false
        if (typeof a != 'object' || typeof b != 'object') return false;

        // 通过上个步骤的 if 过滤
        // !!保证到此的 a 和 b 均为对象!!

        // Objects with different constructors are not equivalent, but `Object`s or `Array`s
        // from different frames are.
        // 通过构造函数来判断 a 和 b 是否相同
        // 但是，如果 a 和 b 的构造函数不同
        // 也并不一定 a 和 b 就是 unequal
        // 比如 a 和 b 在不同的 iframes 中！
        // aCtor instanceof aCtor 这步有点不大理解，啥用？
        var aCtor = a.constructor, bCtor = b.constructor;
        if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
                                 _.isFunction(bCtor) && bCtor instanceof bCtor)
                            && ('constructor' in a && 'constructor' in b)) {
          return false;
        }
      }

      // Assume equality for cyclic structures. The algorithm for detecting cyclic
      // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

      // Initializing stack of traversed objects.
      // It's done here since we only need them for objects and arrays comparison.
      // 第一次调用 eq() 函数，没有传入 aStack 和 bStack 参数
      // 之后递归调用都会传入这两个参数
      aStack = aStack || [];
      bStack = bStack || [];

      var length = aStack.length;

      while (length--) {
        // Linear search. Performance is inversely proportional to the number of
        // unique nested structures.
        if (aStack[length] === a) return bStack[length] === b;
      }

      // Add the first object to the stack of traversed objects.
      aStack.push(a);
      bStack.push(b);

      // Recursively compare objects and arrays.
      // 将嵌套的对象和数组展开
      // 如果 a 是数组
      // 因为嵌套，所以需要展开深度比较
      if (areArrays) {
        // Compare array lengths to determine if a deep comparison is necessary.
        // 根据 length 判断是否应该继续递归对比
        length = a.length;

        // 如果 a 和 b length 属性大小不同
        // 那么显然 a 和 b 不同
        // return false 不用继续比较了
        if (length !== b.length) return false;

        // Deep compare the contents, ignoring non-numeric properties.
        while (length--) {
          // 递归
          if (!eq(a[length], b[length], aStack, bStack)) return false;
        }
      } else {
        // 如果 a 不是数组
        // 进入这个判断分支

        // Deep compare objects.
        // 两个对象的深度比较
        var keys = _.keys(a), key;
        length = keys.length;

        // Ensure that both objects contain the same number of properties before comparing deep equality.
        // a 和 b 对象的键数量不同
        // 那还比较毛？
        if (_.keys(b).length !== length) return false;

        while (length--) {
          // Deep compare each member
          // 递归比较
          key = keys[length];
          if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
        }
      }

      // Remove the first object from the stack of traversed objects.
      // 与 aStack.push(a) 对应
      // 此时 aStack 栈顶元素正是 a
      // 而代码走到此步
      // a 和 b isEqual 确认
      // 所以 a，b 两个元素可以出栈
      aStack.pop();
      bStack.pop();

      // 深度搜索递归比较完毕
      // 放心地 return true
      return true;
    };
  ```

  ​
```

1. isNaN   ====>   _.isNaN(new Number(0))  =>  true  

2. 实用功能

   1. noConflict: 把 “_” 变量的控制权预留给它原有的所有者. 返回一个引用给 Underscore 对象

   2. identity: 返回与传入参数相等的值. 相当于数学里的: f(x) = x

   3. times: 执行某函数n次

   4. escape,unescape:转义HTML字符串，反转到HTML字符串

      ```javascript
      console.log(_.escape('Curly, Larry & Moe'));
      => Curly, Larry &amp; Moe
      console.log(_.unescape('Curly, Larry &amp; Moe'));
      => Curly, Larry & Moe
      ```

      ​

   5. ​

   ​

3. 链式

   1. chain: 返回一个封装的对象。在封装的对象上调用方法会返回封装的对象本身，直到value()方法调用为止。

      ```javascript
      var stooges = [{name : 'curly', age : 25}, {name : 'moe', age : 21}, {name : 'larry', age : 23}];
      var youngest = _.chain(stooges)
      .sortBy(function(stooge){ return stooge.age; })
      .map(function(stooge){ return stooge.name + ' is ' + stooge.age; })
      .first()
      .value();
      console.log(youngest);
      => moe is 21
      ```

      ​

4. [可能不是很需要underscore](https://github.com/reindexio/youmightnotneedunderscore)

   ### 数组

   #### Iterate

   - Underscore

     ```
     _.each(array, iteratee)
     ```

   - ES5.1

     ```
     array.forEach(iteratee)
     ```

   #### Map

   - Underscore

     ```
     _.map(array, iteratee)
     ```

   - ES5.1

     ```
     array.map(iteratee)
     ```

   #### Use a function to accumulate a single value from an array (left-to-right)

   - Underscore

     ```
     _.reduce(array, iteratee, memo)
     ```

   - ES5.1

     ```
     array.reduce(iteratee, memo)
     ```

   #### Use a function to accumulate a single value from an array (right-to-left)

   - Underscore

     ```
     _.reduceRight(array, iteratee, memo)
     ```

   - ES5.1

     ```
     array.reduceRight(iteratee, memo)
     ```

   #### Test whether all elements in an array pass a predicate

   - Underscore

     ```
     _.every(array, predicate)
     ```

   - ES5.1

     ```
     array.every(predicate)
     ```

   #### Test whether some element in an array passes a predicate

   - Underscore

     ```
     _.some(array, predicate)
     ```

   - ES5.1

     ```
     array.some(predicate)
     ```

   #### Find a value in an array

   - Underscore

     ```
     _.find(array, predicate)
     ```

   - ES2015

     ```
     array.find(predicate)
     ```

   #### Get a property from each element in an array

   - Underscore

     ```
     _.pluck(array, propertyName)
     ```

   - ES2015

     ```
     array.map(value => value[propertyName])
     ```

   #### Check if array includes an element

   - Underscore

     ```
     _.includes(array, element)
     ```

   - ES2016

     ```
     array.includes(element)
     ```

   #### Convert an array-like object to array

   - Underscore

     ```
     _.toArray(arguments)
     ```

   - ES2015

     ```
     [...arguments]
     ```

   #### Convert an array of keys and values to an object

   - Underscore

     ```
     _.object(array)
     ```

   - ES2015

     ```
     array.reduce((result, [key, val]) => Object.assign(result, {[key]: val}), {})
     ```

   - Object Rest/Spread (Stage 2)

     ```
     array.reduce((result, [key, val]) => {...result, [key]: val}, {})
     ```

   #### Create a copy of an array with all falsy values removed

   - Underscore

     ```
     _.compact(array)
     ```

   - ES5.1

     ```
     array.filter(Boolean)
     ```

   - ES2015

     ```
     array.filter(x => !!x)
     ```

   #### Create a copy of an array with duplicates removed

   - Underscore

     ```
     _.uniq(array)
     ```

   - ES2015

     ```
     [...new Set(array)]
     ```

   #### Find the index of a value in an array

   - Underscore

     ```
     _.indexOf(array, value)
     ```

   - ES5.1

     ```
     array.indexOf(value)
     ```

   #### Find the index in an array by predicate

   - Underscore

     ```
     _.findIndex([4, 6, 7, 12], isPrime);
     ```

   - ES2015

     ```
     [4, 6, 7, 12].findIndex(isPrime);
     ```

   #### Create an array with n numbers, starting from x

   - Underscore

     ```
     _.range(x, x + n)
     ```

   - ES2015

     ```
     Array.from(Array(n), (_, i) => x + i)
     ```

   ### Objects

   #### Names of own enumerable properties as an array

   - Underscore

     ```
     _.keys(object)
     ```

   - ES5.1

     ```
     Object.keys(object)
     ```

   #### Number of keys in an object

   - Underscore

     ```
     _.size(object)
     ```

   - ES5.1

     ```
     Object.keys(object).length
     ```

   #### Names of all enumerable properties as an array

   - Underscore

     ```
     _.allKeys(object)
     ```

   - ES2015

     ```
     [...Reflect.enumerate(object)]
     ```

   #### Values

   - Underscore

     ```
     _.values(object)
     ```

   - ES2015

     ```
     Object.keys(object).map(key => object[key])
     ```

   #### Create a new object with the given prototype and properties

   - Underscore

     ```
     _.create(proto, properties)
     ```

   - ES2015

     ```
     Object.assign(Object.create(proto), properties)
     ```

   #### Create a new object from merged own properties

   - Underscore

     ```
     _.assign({}, source, { a: false })
     ```

   - ES2015

     ```
     Object.assign({}, source, { a: false })
     ```

   - Object Rest/Spread (Stage 2)

     ```
     { ...source, a: false }
     ```

   #### Create a shallow clone of own properties of an object

   - Underscore

     ```
     _.extendOwn({}, object)
     ```

   - Object Rest/Spread (Stage 2)

     ```
     { ...object }
     ```

   #### Check if an object is an array

   - Underscore

     ```
     _.isArray(object)
     ```

   - ES5.1

     ```
     Array.isArray(object)
     ```

   #### Check if an object is a finite Number

   - Underscore

     ```
     _.isNumber(object) && _.isFinite(object)
     ```

   - ES2015

     ```
     Number.isFinite(object)
     ```

   ### Functions

   #### Bind a function to an object

   - Underscore

     ```
     foo(_.bind(function () {
       this.bar();
     }, this));

     foo(_.bind(object.fun, object));
     ```

   - ES2015

     ```
     foo(() => {
       this.bar();
     });

     foo(() => object.fun());
     ```

   ### Utility

   #### Identity function

   - Underscore

     ```
     _.identity
     ```

   - ES2015

     ```
     value => value
     ```

   #### A function that returns a value

   - Underscore

     ```
     _.constant(value)
     ```

   - ES2015

     ```
     () => value
     ```

   #### The empty function

   - Underscore

     ```
     _.noop
     ```

   - ES2015

     ```
     () => {}
     ```

   #### Get the current time in milliseconds since the epoch

   - Underscore

     ```
     _.now()
     ```

   - ES5.1

     ```
     Date.now()
     ```

   #### Template

   - Underscore

     ```
     var greeting = _.template("hello <%= name %>");
     greeting({ name: 'moe' });
     ```

   - ES2015

     ```
     const greeting = ({ name }) => `hello ${name}`;
     greeting({ name: 'moe' });
     ```