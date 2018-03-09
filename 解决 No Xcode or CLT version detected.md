解决gyp: No Xcode or CLT version detected!
在项目中使用到grpc，需要使用electron-rebuild, 结果报了 No Xcode or CLT version detected!，找了下原来是缺了xcode 的CLI 工具；只要执行下面的命令来安装就可以了。

sudo xcode-select --install
