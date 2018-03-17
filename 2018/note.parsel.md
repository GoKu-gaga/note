### Parsel

#### 安装

Yarn:
```
yarn global add parcel-bundler
```
npm:
```
npm i -g parcel-bundler
```

### 简单的例子

```
mkdir demo-parcel
cd demo-parcel
```
- 创建一个 index.html 和 index.js 文件。

  - index.html
  ``` html
  <html>
    <body>
      <script src="./index.js"></script>
    </body>
  </html>
  ```
  - index.js
  ``` js
  console.log("hello world");
  ```
- Parcel 内置了一个当你改变文件时能够自动重新构建应用的开发服务器，而且为了实现快速开发，该开发服务器支持热模块替换。只需要在入口文件指出：
```
parcel index.html
```
- 在浏览器中打开 http://localhost:1234
- 也可以使用配置改变端口
```
parcel -p <port number> index.html
```

### 资源

#### 使用SCSS

安装node-sass模块
```
npm install node-sass // or yarn add node-sass
```

#### 转换

Parcel 支持许多开箱即用的转换器和内置的编译器。使用 Babel 转换 JavaScript ，使用 PostCSS 转换 CSS ，使用 PostHTML 转换 HTML。Parcel 在模块中找到配置文件 (例如 .babelrc ，.postcssrc) 时会自动运行并进行转换。

- Babel
```
yarn add babel-preset-env
```
创建 `.babelrc`
```
{
  "presets": ["env"]
}
```
- PostCSS
PostCSS 是一个使用插件转换 CSS 的工具，例如 autoprefixer，cssnext 以及 CSS Modules 。你可以使用这些名称之一创建配置，从而达到使用 Parcel 配置 PostCSS 的目的： .postcssrc (JSON)，.postcssrc.js，或 postcss.config.js。
```
yarn add postcss-modules autoprefixer
```
创建 `.postcssrc`
```
{
  "modules": true,
  "plugins": {
    "autoprefixer": {
      "grid": true
    }
  }
}
```
- PostHTML
PostHTML 是一个通过插件转换 HTML 的工具。你可以使用这些名称之一创建配置，从而达到使用 Parcel 配置 PostHTML 的目的： .posthtmlrc (JSON) ，posthtmlrc.js ，或者 posthtml.config.js。
```
yarn add posthtml-img-autosize
```
创建 `.posthtmlrc`
```
{
  "plugins": {
    "posthtml-img-autosize": {
      "root": "./images"
    }
  }
}
```
- TypeScript
TypeScript 是 JavaScript 类型的超集，它可以编译成普通的 JavaScript，同时也支持现代 ES2015+ 的特性。转换 TypeScript 无需任何额外配置，开箱即用。
