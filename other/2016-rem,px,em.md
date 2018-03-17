# CSS单位中的rem、px、em

常用的CSS记量单位
## px
  绝对单位，是css中最基本的长度单位。

  特点：准确而稳定

  缺点：如果对页面进行缩放，影响文本可读性。可通过使用em作为字体单位解决这个问题。
## em
  它不是一个具体的数值，而是相对于父元素的属性计算出来的大小

  优点：弥补了px的不足

  缺点：过于依赖父级节点，多层嵌套元素计算很麻烦，容易出现字体大小重复声明。

  使用em作为字体单位时，通常会先设置body的字体大小，譬如使用12px大小的字体，就先设置body如下：
```css
body { font-size:12px }
```
body设置完成后，就可以以em为单位来指定字体大小了：
```css
body { font-size:12px}
h1 {font-size:2em} /* 2*12px=24px */
p{font-size:1.25em} /* 1.25*12px=15px */
li, span{font-size:1.25em} /* 1.25*12px=15px */
```
## rem
rem单位是CSS3中新增的一个相对单位，只不过它要比em单位强大一些，因为它是集相对大小和绝对大小的优点于一身，也就是说它除了有px的绝对大小属性外，还具备了em的相对大小属性。为什么呢？因为rem这个单位是相对于根元素HTML的。而如果我们想修改大小，只需修改根元素HMTL 的大小就可以了。除了IE8及更早的版本个，目前所有的主流浏览器均支持此属性。

特点：基准为根元素的字体大小，不会随着其它元素的改变而改变，避免了em依赖父级元素字体大小

```css
html {
    font-size:16px;
}
```
那么如果我们想给一个P标签设置12px的字体大小那么用rem来写就是
```css
p {
    font-size: 0.75rem; //12÷16=0.75（rem）
}
```
虽然使用rem只需要进行一次换算，但还是一项比较繁琐的操作，所以在前端构建中，完全可以利用scss来解决这个问题，例如我们可以写一个scss的function px2rem即：
```scss
@function px2rem($px){
  $rem : 37.5px;
  @return ($px/$rem) + rem;
}
```
这样，当我们写具体数值的时候就可以写成：
```scss
height: px2rem(90px);
width: px2rem(90px);
```

以下是几个使用rem的线上网站：
[淘宝首页](http://m.taobao.com)
[苏宁易购](http://m.suning.com/)
[网易新闻](http://3g.163.com/touch/news/subchannel/all?version=v_standard)

一个px,em,rem单位转换工具：
[pxtoem](http://pxtoem.com/)

## 浏览器支持：
rem支持Chrome、Firefox、Safari、Opera、IE9+。
IE6,7,8就只能使用px或者em了。
