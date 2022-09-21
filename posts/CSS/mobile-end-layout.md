---
title: '移动端布局指南'
date: '2022-8/15 17:56'
excerpt: rem布局,弹性(FIex)布局
isFeatured: false
image:
---

---
title: '移动端布局'
date: '2022-8-16 10:56'
image:
excerpt: 移动端布局 , rem布局 , 对于rem布局的理解
isFeatured: false
---

# 移动端布局

## rem布局

### 对于rem布局的理解

- rem布局的本质时等比缩放,

- rem布局原理是根据html元素的font-size大小变化来实现等比缩放,我们可以在每一个设备下根据设备的宽度动态计算设置对应的html字号就能等比缩放

- rem是相对于网页根元素(html)字体大小的倍数,也就是说rem其实就是一个单位(相对单位)

  1rem=1*html字体大小

### 移动端页面布局时注意事项

- meta标签,将布局视口设置为理想视口

```
<meta name="viewport" content="width=device-width"
```

- 引入重置样式库(u-reset.css).它设置的html字体大小是100px,是为了便于计算.

  地址:https//unpkg.com/u-reset.css@1.0.10/u-reset.min.css

- 在html开始标签上(设计稿一般是750px  写上rem="750")

  使用相对单位rem布局

## 弹性(FIex)布局

#### 弹性布局简介

​	Flex是Flexible Box的缩写,意为"弹性布局",用来为盒状模型提供最大的灵活性,任何一个容器都可以指定为Flex布局.

​	提示:设为Flex布局以后,子元素的float属性将失效.

#### 弹性布局的兼容性

什么是兼容性?

​	所谓的浏览器兼容性问题,是指不同的浏览器对同一段代码有不同的解析,造成页面显示效果不统一的情况

PC端:由于较低版本的浏览器不知福Flex布局.因此不建议用Flex做pc端界面开发

移动端:大多浏览器都支持Flex布局,可以使用Flex做移动端界面开发.

#### 弹性布局的基本概念

- 采用Flex布局的元素,称为Flex容器(flex container),简称"容器"

- 它的所有子元素自动成为容器成员,称为Flex项目(flex item) 简称"项目"

- 容器默认存在两根轴,水平的主轴和垂直的交叉轴,

  主轴的开始位置(与边框的交叉点)叫做main start, 结束位置叫做main end;

  交叉轴的开始位置叫做cross start, 结束位置叫做cross end.

- 项目默认沿主轴排列,单个项目占据的主轴空间叫做main size, 占据的交叉轴空间叫做cross,size.

#### 给容器设置的属性

- 要想使用弹性布局:必须给容器设置:display:flex;

- 容器设置display:flex; 之后,项目的浮动和clear效果就失去作用了

- 默认情况(容器设置display:flex)下,项目会全部分布在主轴的一行上,**如果放置不下,项目的宽度会自动缩小**

- flex-direction:设置当前主轴方向(例如:row从左到右, row-reverse)从右到左.column从上到下.column-reverse从下到上)

- flex-wrap:设置当前item换行的方式(例如:nowrap不换行(默认),wrap换行,wrap-reverse)(换行并且行颠倒)

- flex-flow:flex-direction和flex-wrap的集合写法

- justify-content 设置项目**在主轴上的对齐方式**

- (flex-start起点(默认就是与主轴的起点对齐)flex-end终点,center居中,space-between 只有项目之间有相等的边距, space-around  项目之间以及项目与容器之间都有边距)

- align-items:一条轴线上的项目在交叉轴上的对齐方式

  (flex-start交叉轴的起点,flex-end交叉轴的终点,center在交叉轴上居中,stretch 前提是如果item无height值.将item在交叉轴上拉伸)

- align-content:多条轴线上的项目在交叉轴上面的分布方式

  如果项目只有一根轴线,该属性不起作用. (flex-start起点 ,flex-end终点 center居中, space-between 只有item之间有相等的边距,space-around item之间以及item与容器之间都有边距)

  **注意**:项目换行方式只要换行,那么就为多条轴线

### 给项目设置的属性:

- order 项目的排列顺序,默认为0 数值越小, 排列越靠前(可以为负值)

- flex-grow项目的放大比例,默认为0(即使存在剩余空间,也不放大)

  如果存在剩余空间,所有项目的flex-grow属性都为1,则它们将等分剩余空间

  如果一个项目的flex-grow为2,其他项目都为1,则前者占据的剩余空间将比其他项多一倍(不能为负值)

- flex-shrink 在不换行的情况下 ,项目的缩小比例默认为1(空间不足,该项目将缩小)

  如果所有项目的flex-shrink属性都为1,当空间不足时,都将等比列缩小

  如果一个项目的flex-shrink属性为0,其他项目都为1.则空间不足时,前者不缩小,

- flex-basis **根据主轴的方向**决定flex-basis为项目的宽还是高,flex-basis与项目的宽或者高同时存在,flex-basis起作用

- flex 同时设置flex-grow flex-shrink和flex-basis(集合写法)

- align-self 允许单个项目有与其他项目不一样的对齐方式(一条轴线上的项目在交叉轴上的对齐方式,可覆盖align-items属性)

  align-self:auto  |flex-start  |flex-end  |center  |baseline | stretch;  

  