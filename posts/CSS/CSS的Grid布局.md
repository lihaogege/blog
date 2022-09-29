---
title: 'CSS的Grid布局'
date: '2022-9-28'
excerpt: Grid 布局与 Flex布局 有一定的相似性，都可以指定容器内部多个***项目的位置***。但是，Grid 布局远比 Flex 布局强大！
isFeatured: true
classify: 'CSS'
image: css.jpg
codeDemo: 
---

# Grid布局

## 一、Grid布局概述

首先，Grid 布局与 Flex布局有一定的相似性，都可以指定容器内部多个***项目的位置***。但是，Grid 布局远比 Flex 布局强大！

- Flex 布局是轴线布局，只能指定"项目"针对轴线的位置，可以看作是**一维布局**。
- Grid 布局则是将容器划分成"行"和"列"，产生单元格，然后指定"项目所在"的单元格，可以看作是**二维布局**。

## 二、基本概念

![img](https://img2022.cnblogs.com/blog/2569817/202201/2569817-20220127213511901-46021564.png)

### （1）容器和项目

> 采用网格布局的区域，称为"容器"（container）。容器内部采用网格定位的子元素，称为"项目"（item）。

```js
<div class="container">
  <div class="item"><p>1</p></div>
  <div class="item"><p>2</p></div>
  <div class="item"><p>3</p></div>
</div>
```

上述代码中，如果`.container`设置了`display:grid`属性，则它就是网格布局容器 ，其内部孩子节点`.item`就称为项目

**注意**：项目只能是容器的顶层子元素，不包含项目的子元素，所以`p`元素不是项目。**Grid 布局只对项目生效**

### （2）行和列

> 容器里面的水平区域称为"行"（row），垂直区域称为"列"（column），行和列的交叉区域，称为"单元格"（cell）

![img](https://img2022.cnblogs.com/blog/2569817/202201/2569817-20220127214215778-1726804290.png)

### （3）网格线

> 划分网格的线，称为"网格线"（grid line）。水平网格线划分出行，垂直网格线划分出列。

![img](https://www.wangbase.com/blogimg/asset/201903/1_bg2019032503.png)

这就是一个4行4列的网格，存在5根水平网格线和5根垂直网格线

## 三、容器属性

> 定义在容器上面的属性，称为容器属性

### （1）display

- **`display: grid`指定一个容器采用块级网格布局**

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
        <style type="text/css">
            .container{    
                display: grid;
                grid-template-columns: 50px 50px; 
                grid-template-rows: 50px 50px; 
                border: 3px solid #9575CD;
            }
            .item {
              font-size: 2em;
              text-align: center;
              border: 1px solid #e5e4e9;
            }
            .item-1 {
              background-color: #aaaaff;
            }
            
            .item-2 {
              background-color: #1bf6d5;
            }
            
            .item-3 {
              background-color: #56a982;
            }
            
            .item-4 {
              background-color: #6072c2;
            }
        </style>
    </head>
    <body>
<span>辅助元素1</span>
<div class="container">
    <div class="item item-1">1</div>
    <div class="item item-2">2</div>
    <div class="item item-3">3</div>
    <div class="item item-4">4</div>
</div>
<span>辅助元素2</span>
    </body>
</html>
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

![img](https://img2022.cnblogs.com/blog/2569817/202201/2569817-20220129202740319-81374058.png)

- **`display: inline-grid`****指定一个容器采用行内网格布局**

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
.container{    
    display: inline-grid;
    grid-template-columns: 50px 50px; 
    grid-template-rows: 50px 50px; 
    border: 3px solid #9575CD;
}
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

![img](https://img2022.cnblogs.com/blog/2569817/202201/2569817-20220129202704026-579515178.png)

**特别注意**：设为网格布局以后，容器子元素（项目）的**`float`、`display: inline-block`、`display: table-cell`、`vertical-align`和`column-\*`**等设置都将失效。

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
.item {
  font-size: 2em;
  text-align: center;
  border: 1px solid #e5e4e9;
  float: right; /* 设置所有项目右浮动（失效） */
}
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

![img](https://img2022.cnblogs.com/blog/2569817/202201/2569817-20220129202740319-81374058.png)

从结果可以看出，子项目并没有右浮动到最右边（失效）

### （2）grid-template-columns 和 grid-template-rows

> `grid-template-columns` 属性定义每一列的**列宽**
>
> `grid-template-rows` 属性定义每一行的**行高**

- **使用绝对单位划分**

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
.container{    
    display: grid;
    grid-template-columns: 50px 50px; /* 定义两列，列宽为50px */
    grid-template-rows: 50px 50px; /* 定义两行，行高为50px */
    border: 3px solid #9575CD;
}
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

![img](https://img2022.cnblogs.com/blog/2569817/202201/2569817-20220129203055538-1748864077.png)

- **使用百分比划分**

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
.container{    
    display: grid;
    grid-template-columns: 20% 10%; /* 定义两列，列宽为20% 10% */
    grid-template-rows: 40% 30%; /* 定义两行，行高为40% 30% */
    border: 3px solid #9575CD;
}
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

![img](https://img2022.cnblogs.com/blog/2569817/202201/2569817-20220129203338560-1815897023.png)

- **repeat()函数**

> 从上面例子可以看出，存在重复写同样的值，如果网格很多会显得十分臃肿，这时可以使用`reapeat()`函数来优化

```
.container{    
    display: grid;
    grid-template-columns: repeat(2,150px);
    grid-template-rows: repeat(2,50px);
}
```

![img](https://img2022.cnblogs.com/blog/2569817/202201/2569817-20220129204702463-163490330.png)

`reapeat()`函数接收两个值，第一个值为重复次数，第二个值为需要重复的值。另外，重复某种模式也是可以的：

```
.container{    
    display: grid;
    grid-template-columns: repeat(2,150px 50px);
}
```

![img](https://img2022.cnblogs.com/blog/2569817/202201/2569817-20220129204541356-1765437979.png)

```
repeat(2,150px 50px)`：表示重复了模式，定义了4列，第一列和第三列为`150px` ,第二列和第四列为`50px
```

- **auto-fill 关键字**

> auto-fill值用于自动填充，当单元格的大小需要固定不变，容器大小不确定时使用

```
.container{    
    display: grid;
    grid-template-columns: repeat(auto-fill,50px);
}
```

![img](https://img2022.cnblogs.com/blog/2569817/202201/2569817-20220129205123678-1629568090.png)

`repeat(auto-fill,50px)`：表示设置每列宽度为`50px`自动填充，直到容器不能放置更多的列，然后换行排列（例子如下）：

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
.container{    
    display: grid;
    width: 150px;
    border: 1px dashed red;
    grid-template-columns: repeat(auto-fill,50px);
}
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

![img](https://img2022.cnblogs.com/blog/2569817/202201/2569817-20220129205048262-2047085485.png)（换行排列）

- **fr 关键字**

> fr关键字用于表示比例关系（fraction 的缩写，意为"片段”）

```
.container{    
    display: grid;
    grid-template-columns: 1fr 5fr;
}
```

![img](https://img2022.cnblogs.com/blog/2569817/202201/2569817-20220129205554952-255575241.png)

`1fr 5fr`：表示设置两列，列宽分别为`1fr`和`5fr` ，第二列是第一列的5倍

另外，`fr`可以与绝对长度的单位结合使用：

```
.container{    
    display: grid;
    grid-template-columns:50px 1fr 2fr;
}
```

![img](https://img2022.cnblogs.com/blog/2569817/202201/2569817-20220129205858824-604286794.png)

`50px 1fr 2fr`：表示第一列宽度为`50px`，第二列宽度时第三列的一半

- **auto 关键字
  **

> auto关键字表示由浏览器决定自己的长度

```
.container{    
    display: grid;
    grid-template-columns: 50px auto 50px auto;
}
```

![img](https://img2022.cnblogs.com/blog/2569817/202201/2569817-20220129211026086-1891990012.png)

```
50px auto 50px auto`表示第二列和第四列自动填充，相当于`flex:1
```

### （3）row-gap 和 column-gap

> `row-gap`属性设置 `行与行` 的间隔（行间距）
>
> `column-gap`属性设置 `列与列` 的间隔（列间距）

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
.container{    
    display: grid;
    grid-template-columns: 50px 50px;
    grid-template-rows: 50px 50px;
    row-gap: 20px; /* 行间距为20px */
    column-gap: 10px; /* 列间距为10px */
}
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

![img](https://img2022.cnblogs.com/blog/2569817/202201/2569817-20220129212301438-1553454762.png)

另外，这两个属性有个复合属性：`gap`

gap语法：

```
gap: <row-gap> <column-gap>;
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
.container{    
    row-gap: 20px; 
    column-gap: 10px;
    /* 等同于 */
    gap: 20px 10px;
}
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

**注意**：如果`gap`只有一个值，默认第二个值等于第一个值

**普及**：这三个属性名原来是由前缀`grid-`的，目前最新标准已经将`grid-`前缀删除，但还是可以用~

### （4）grid-auto-flow

>  划分网格后，容器中的子元素默认按照“先行后列”的顺序自动放置在每一个网格中（先填满第一行，在开始第二行）
>
> grid-auto-flow属性自己规定排列顺序，默认值为
>
> ```
> row
> ```
>
> ，可以设置
>
> ```
> column
> ```
>
> ，类似于
>
> ```
> flex-direction
> ```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
.container{    
    display: grid;
    grid-template-columns: 50px 50px;
    grid-template-rows: 50px 50px;
    grid-auto-flow: row; /* 默认值 */
}
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

![img](https://img2022.cnblogs.com/blog/2569817/202201/2569817-20220129215222279-609438204.png)

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
.container{    
    display: grid;
    grid-template-columns: 50px 50px;
    grid-template-rows: 50px 50px;
    grid-auto-flow: column; /* 先列后行 */
}
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

![img](https://img2022.cnblogs.com/blog/2569817/202201/2569817-20220129215345967-200266980.png)

### （5）justify-items 和 align-items

> `justify-items`属性设置单元格**内容**的`水平`位置（左中右）
>
> `align-items`属性设置单元格**内容**的`垂直`位置（上中下）

语法：

```
.container {
  justify-items: start | end | center | stretch;
  align-items: start | end | center | stretch;
}
```

你没有看错，这两个属性的属性值完全相同，都可以去这几个值：

- start：对齐单元格的起始边缘。
- end：对齐单元格的结束边缘。
- center：单元格内部居中。
- stretch：拉伸，占满单元格的整个宽度（默认值）。

`start`：单元格的内容**头部**对齐：

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
.container{    
    display: grid;
    width: 200px;
    border: 1px dashed red;
    grid-template-columns: 100px 100px;
    grid-template-rows: 100px 100px;
    justify-items: start;
}
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

效果如图：

![img](https://img2022.cnblogs.com/blog/2569817/202201/2569817-20220129220832631-1702791854.png)

 `end`：单元格的内容**尾部**对齐：

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
.container{    
    display: grid;
    width: 200px;
    border: 1px dashed red;
    grid-template-columns: 100px 100px;
    grid-template-rows: 100px 100px;
    justify-items: end; /* 对齐单元格的结束边缘 */
}
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

效果如图：

![img](https://img2022.cnblogs.com/blog/2569817/202201/2569817-20220129221001472-1637862100.png)

`center`：单元格内部**居中**：

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
.container{    
    display: grid;
    width: 200px;
    border: 1px dashed red;
    grid-template-columns: 100px 100px;
    grid-template-rows: 100px 100px;
    justify-items: center; /* 单元格内部居中 */
}
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

效果如图：

![img](https://img2022.cnblogs.com/blog/2569817/202201/2569817-20220129221418065-1891167557.png)

`stretch`：占据单元格整个宽度（**拉伸**）：

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
.container{    
    display: grid;
    width: 200px;
    border: 1px dashed red;
    grid-template-columns: 100px 100px;
    grid-template-rows: 100px 100px;
    justify-items: stretch; /* 默认值-拉伸占据整个宽度 */
}
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

效果如图：

![img](https://img2022.cnblogs.com/blog/2569817/202201/2569817-20220129221750614-814898094.png)

这里只演示下`justify-items` 属性，对应单元格的左中右，相信大家也有点感觉了，`align-items` 取值是一样的，对应的是单元格的上中下部分，这里就不再演示了，感兴趣的小伙伴自行尝试哟

同样，这两个属性也有**复合属性**：`place-items`

语法：

```
place-items: <align-items> <justify-items>;
```

第一个值为单元格内容垂直位置，第二个值为单元格水平位置

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
.container{    
    display: grid;
    width: 200px;
    border: 1px dashed red;
    grid-template-columns: 100px 100px;
    grid-template-rows: 100px 100px;
    place-items: center center; /* 单元格内容水平垂直居中 */
}
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

效果如图：

![img](https://img2022.cnblogs.com/blog/2569817/202201/2569817-20220129222630331-1914771472.png)

**注意**：如果省略第二个值，则默认与第一个值相等

### （6）justify-content 和 align-content

> `justify-content`属性是整个内容区域在容器里面的`水平位置`（左中右）
>
> `align-content`属性是整个内容区域的`垂直位置`（上中下）

注意区分justify-items 和 align-items属性，一个是内容相对于单元格位置，一个是整个内容区域相对于父容器位置！！！

语法：

```
.container {
  justify-content: start | end | center | stretch | space-around | space-between | space-evenly;
  align-content: start | end | center | stretch | space-around | space-between | space-evenly;  
}
```

你又没有看错，这两个属性的属性值也是完全相同，都可以去这几个值：

- start - 对齐容器的起始边框。
- end - 对齐容器的结束边框。
- center - 容器内部居中。
- stretch - 项目大小没有指定时，拉伸占据整个网格容器。
- space-around - 每个项目两侧的间隔相等。所以，项目之间的间隔比项目与容器边框的间隔大一倍。
- space-between - 项目与项目的间隔相等，项目与容器边框之间没有间隔。
- space-evenly - 项目与项目的间隔相等，项目与容器边框之间也是同样长度的间隔。

同样，这里我也只演示`justify-content`属性，`align-content` 属性完全一致，只是方向不同，感兴趣的小伙伴自行尝试下啦~~

`start`：对齐容器的起始边框。

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
.container{    
    display: grid;
    width: 300px;
    border: 1px dashed red;
    grid-template-columns: 100px 100px;
    grid-template-rows: 100px 100px;
    justify-content: start;/* 对齐容器的起始边框（默认） */
}
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

![img](https://img2022.cnblogs.com/blog/2569817/202201/2569817-20220129223714735-559830616.png)

`end`：对齐容器的结束边框。

```
.container{
    justify-content: end;/* 对齐容器的结束边框 */
}
```

![img](https://img2022.cnblogs.com/blog/2569817/202201/2569817-20220129223818807-1840873601.png)

`center`：容器内部居中。

```
.container{
    justify-content: center;/* 容器内部居中 */
}
```

![img](https://img2022.cnblogs.com/blog/2569817/202201/2569817-20220129223935261-277110423.png)

`space-around`：每个项目两侧的间隔相等。项目之间的间隔比项目与容器边框的间隔大一倍。

```
.container{
    justify-content: space-around;/* 每个项目两侧的间隔相等。项目之间的间隔比项目与容器边框的间隔大一倍 */
}
```

![img](https://img2022.cnblogs.com/blog/2569817/202201/2569817-20220129224803537-1100427155.png)

`space-between`：项目与项目的间隔相等，项目与容器边框之间没有间隔。

```
.container{
    justify-content: space-between;/* 项目与项目的间隔相等，项目与容器边框之间没有间隔。 */
}
```

![img](https://img2022.cnblogs.com/blog/2569817/202201/2569817-20220129224936009-1490364478.png)

`space-evenly`：项目与项目的间隔相等，项目与容器边框之间也是同样长度的间隔。

```
.container{
    justify-content: space-evenly;/* 项目与项目的间隔相等，项目与容器边框之间也是同样长度的间隔。 */
}
```

![img](https://img2022.cnblogs.com/blog/2569817/202201/2569817-20220129225047082-701015184.png)

 

相信大家看完这几个属性值后，学过 [Flex布局](https://www.cnblogs.com/libo-web/p/15705585.html) 的小伙伴肯定再熟悉不过了，在flex布局中项目与容器对齐方式也类似这几种

同样滴，这两个属性也是有复合属性的：`place-content`

语法：

```
place-content: <align-content> <justify-content>
```

第一个值整个内容相对容器的垂直位置，第二个值整个内容相对容器的水平位置

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
.container{    
    display: grid;
    width: 300px;
    height: 300px;
    border: 1px dashed red;
    grid-template-columns: 100px 100px;
    grid-template-rows: 100px 100px;
    place-content: center center; /* 整体内容水平垂直居中 */
}
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

效果如图：

![img](https://img2022.cnblogs.com/blog/2569817/202201/2569817-20220129225628838-1653489552.png)

**注意**：如果省略第二个值，则默认与第一个值相等

## 四、项目属性

> 注意：项目属性需要定义在项目上才能生效！

### （1）grid-column-start、grid-column-end、grid-row-start、grid-row-end

> 这四个属性是用于指定某个项目的位置，根据项目的四个边框来定位在哪根儿网格线

- `grid-column-start` 属性：左边框所在的垂直网格线
- `grid-column-end` 属性：右边框所在的垂直网格线
- `grid-row-start` 属性：上边框所在的水平网格线
- `grid-row-end` 属性：下边框所在的水平网格线

下面所演示的代码片段也是基于前面的例子：

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
.container{    
    display: grid;
    width: 300px;
    height: 300px;
    border: 1px dashed red;
    grid-template-columns: 100px 100px;
    grid-template-rows: 100px 100px;
}
.item-1 {
    grid-column-start: 2;/* 开始于第二根网格线 */
    grid-column-end: 4;/* 结束于第四根网格线 */
    background-color: #aaaaff;
}
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

效果如图：

![img](https://img2022.cnblogs.com/blog/2569817/202201/2569817-20220129231206238-494073556.png)

只有项目一指定了具体，其他项目自动布局，为了便于观察，再定位一次：

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
.item-1 {
    grid-column-start: 2;/* 垂直第一根 */
    grid-column-end: 4; /* 垂直第四根 */
    grid-row-start: 1;/* 水平第一根 */
    grid-row-end: 3;/* 水平第三根 */
    background-color: #aaaaff;
}
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

效果如下：

![img](https://img2022.cnblogs.com/blog/2569817/202201/2569817-20220129231606281-235354460.png)

这四个属性值还可以使用`span`关键字，表示“跨越”，就像table表格的单元格合并`colspan和rowspan`

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
.item-1 {
    grid-column-start: span 2;/* 横跨两个网格线 */
    /* 等同于 */
    grid-column-end: span 2;/* 横跨两个网格线 */
    background-color: #aaaaff;
}
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

效果如图：

![img](https://img2022.cnblogs.com/blog/2569817/202201/2569817-20220129232309667-107956457.png)

这个结果相信有些小伙伴会说其他子元素为什么没有在第一个子元素之后继续排列？

我想说的是`grid-template-columns: 100px 100px;` 我只设置了两列，如果改成`grid-template-columns: 100px 100px 100px;` 这样，那容器剩余的空间就可以补齐啦~

**注意**：使用这四个属性，如果产生了项目的重叠，则使用`z-index`属性指定项目的重叠顺序

### （2）grid-column 和 grid-row 

> grid-column：`grid-column-start`和`grid-column-end`的合并简写形式
>
> grid-row：`grid-row-start`属性和`grid-row-end`的合并简写形式

语法：

```
.item {
  grid-column: <start-line> / <end-line>;
  grid-row: <start-line> / <end-line>;
}
```

来个栗子：

```
.item-1 {
    grid-column: 1 / 3; /* 占据水平方向上的第1根和第3根 */
    grid-row: 2 / 4; /* 占据垂直方向上的第2根和第4根 */
    background-color: #aaaaff;
}
```

效果如图：

![img](https://img2022.cnblogs.com/blog/2569817/202201/2569817-20220129233206593-154740453.png)

 **注意**：斜杠以及后面的部分可以省略，默认跨越一个网格

### （3）justify-self 和 align-self

> `justify-self`属性设置单元格内容的水平位置（左中右），跟`justify-items`属性的用法完全一致，但只作用于单个项目。
>
> `align-self`属性设置单元格内容的垂直位置（上中下），跟`align-items`属性的用法完全一致，也是只作用于单个项目。

语法：

```
.item {
  justify-self: start | end | center | stretch;
  align-self: start | end | center | stretch;
}
```

取值：

- start：对齐单元格的起始边缘。
- end：对齐单元格的结束边缘。
- center：单元格内部居中。
- stretch：拉伸，占满单元格的整个宽度（默认值）

```
.item-1 {
    justify-self: start; /* 指定项目单元格左对齐 */
    background-color: #aaaaff;
}
```

![img](https://img2022.cnblogs.com/blog/2569817/202201/2569817-20220129233647106-779195900.png)

这里我就演示一个就行了，其他都一样，有手就行，大家可以自行尝试下

`place-self`属性是`align-self`属性和`justify-self`属性的合并简写形式

语法：

```
place-self: <align-self> <justify-self>;
```

例子：

```
.item-1 {
    place-self: center center;
    background-color: #aaaaff;
}
```

![img](https://img2022.cnblogs.com/blog/2569817/202201/2569817-20220129233929419-1392533808.png)