## 一、为什么要在node.js中调用动态链接库

由于之前公司的一个项目中，需要调用第三方的接口API，特别是与硬件设备进行通信，而这些接口 API 基本上都是通过 C++ 动态链接库（DLL）实现的

当时有两个方案：
1. 由后端人员编写一份服务去掉调用dll，前端页面直接通过发请求到这个服务上进行操作
2. 在前端部分使用node-ffi直接调用dll动态库文件

最终我们使用了第二个方案！
## 二、什么是node-ffi
[Node FFI Tutorial](https://github.com/node-ffi/node-ffi/wiki/Node-FFI-Tutorial)
> `node-ffi` provides a powerful set of tools for interfacing with dynamic libraries using pure JavaScript in the Node.js environment. It can be used to build interface bindings for libraries without using any C++ code.

注意事项！  
- ffi只能调用C风格的模块。
- 需要将C源码build成动态链接库以供调用，在Linux下将C源码build成.so文件，在windows下build成.dll文件

## 三、安装node-ffi

``` bash
npm install ffi
```
## 四、如何使用node-ffi
简单例子：
1. 我们的业务中由这么一个API，
参数是一个short类型的端口号，一个int类型的波特率，返回小于0则表示失败，否则是机器的标识码，方法名是 `dc_init`
``` c
int USER_API dc_init(short port, int baud);
```
2. 下面是如何利用ffi在nodejs中调用这个接口，该接口的源码已经被封装成 `dcrf32.dll` 这个动态链接库了，我们直接调用就好。
``` js
let ref = require('ref')
let FFI = require('ffi')

let shortType = ref.types.short
// dll文件的路径
let dllPath = __dirname + '/dll/dcrf32.dll'

let lib = new FFI.Library(dllPath, {
  'dc_init': ['int', [shortType, 'int']]
})

let handle = lib.dc_init(2, 9600)
console.log(handle)
```
关于ref的详细api可以参看他们的官方文档：https://github.com/TooTallNate/ref