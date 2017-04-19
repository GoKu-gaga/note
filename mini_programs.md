1. 小程序不是运行在浏览器中的，所以没有BOM和DOM对象

  console.log(window) => undefined

  console.log(document) => undefined


2. 小程序的JS有一些额外的成员

 App 方法 用于定义应用程序实例对象

 Page 方法 用于定义页面对象

 getApp 方法 用来获取全局应用程序对象

 getCurrentPages 方法 用来获取当前页面的调用栈(数组，最后一个就是当前页面)

 wx对象 用来提供核心API

3. 小程序的JS是支持CommonJS规范的
