## 生成器
> 生成器（Generators）: 一个更好的方法来构建遍历器。  ---  [生成器和迭代器](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_Generators)

生成器就是一类特殊的函数，特殊之处在于：
- 字面量（函数声明/函数表达式）的关键字function后面多了一个`*`，而且这个`*`前后允许有空白字符，如：
``` javascript
  function* foo(){}
  function *foo(){}
  function*foo(){}
```
- 函数体中多了`yield`运算符
- 普通函数的执行模式是: 执行-结束, 生成器的执行模式是:  执行-暂停-结束

#### yield语句

yield语句是Generator函数内部可以暂停执行程序的语句，yield语句后面的值可以是各种数据类型，字符串，整数，布尔值等等都可以。

看个小栗子：
```javascript
  function *foo() {
      yield 1;
      yield 'hello';
      yield 'generator';
      return true;
  }
  let f1 = foo();
  f1.next();  // Object {value: 1, done: false}
  f1.next();  // Object {value: "hello", done: false}
  f1.next();  // Object {value: "generator", done: false}
  f1.next();  // Object {value: true, done: true}
  f1.next();  // Object {value: undefined, done: true}
```
这个例子反映了生成器的基本用法，有以下几点值得注意：

1.  在调用foo()时，函数体中的逻辑并不会执行（控制台没有输出），直接调用f1.next()时才会执行
2.  f1是一个对象，它由生成器foo()调用而来，注意foo()并没有返回f1对象
3.  调用f1.next()时，函数体中的逻辑才开始真正执行，每次调用时会到yield语句结束，并将yield的运算数作为结果返回
4.  f1.next()返回的结果是一个对象，对yield的运算数做了包装，并带上了done属性
5.  当done属性为false时，表示该函数逻辑还未执行完，可以调用f1.next()继续执行
6.  当返回的结果为return语句返回的结果，且done值为true
7.  返回值中done为true时，仍然可以继续调用，返回的值为undefined

#### yield和return

看个栗子：

```javascript
function *bar() {
    yield 1;
    yield 'hello';
    return true;
    yield 'generator';
}
let b1 = bar();
b1.next();  // Object {value: 1, done: false}
b1.next();  // Object {value: "hello", done: false}
b1.next();  // Object {value: true, done: true}
b1.next();  // Object {value: undefined, done: true}
```
从上面例子可以看出，当碰到return语句时，返回对象的done属性值就为true，遍历结束，不管后面是否还有yield或者return语句。不管是普通函数还是Generator函数，一旦遇到return语句，便不再返回新的值。

#### yield 和 yield*

在生成器中，yield* 可以把需要 yield 的值委托给另外一个生成器或者其他任意的可迭代对象。
```javascript
function* gen1() {
  yield 2;
  yield 3;
  yield 4;
}

function* gen2() {
  yield 1;
  yield* gen1();
  yield 5;
}

var g = gen2();

g.next(); // Object { value: 1, done: false }
g.next(); // Object { value: 2, done: false }
g.next(); // Object { value: 3, done: false }
g.next(); // Object { value: 4, done: false }
g.next(); // Object { value: 5, done: false }
g.next(); // Object { value: undefined, done: true }
```
