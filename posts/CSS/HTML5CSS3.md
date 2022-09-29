---
title: 'HTML5CSS3'
date: '2022-9-22'
excerpt: HTML5 是最新的 HTML 标准。HTML5 是专门为承载丰富的 web 内容而设计的，并且无需额外插件。HTML5 是跨平台的，被设计为在不同类型的硬件（PC、平板、手机、电视机等等）之上运行。
isFeatured: false
image: html5.jpg
classify: 'CSS'
codeDemo: html-css3
---

# HTML5

### 语义化

> 标签名称具有特别的含义.我们看到就知道是什么样的内容,这种类型的标签就叫做语义化标签,

### 为什么要用语义化的标签

1. 可以更好的理解网页的框架,即使在没有CSS的情况下,也能够非常清晰的区别网页结构,代码结构
2. 不同的语义化标签为我们将网页划分成不同的模块,结构分明,更加利于分解模块,利于团队的开发和维护
3. 使用语义化标签有利于浏览器的SEO,更加有利于网站的检索

### **HTML5语义化标签**

**文档声明**

> <!DOCTYPE html>：用于告诉浏览器我们当前使用的HTML版本

### **结构性标签**

> 结构性标签主要用于Web上下文结构的定义，能够确保HTML文档的完整性



| 标签名  | 描述                                                         |
| ------- | ------------------------------------------------------------ |
| section | 表示书中一部分或一章内容，也可以是一章中的一节，在Web开发应用中，section用于区域的章节描述 |
| header  | 页面主体当中的头部，与head标签不同，header用于正式的页面主体内容，head是用于网页的设置，比如网页的标题等内容 |
| footer  | 网页主体的底部（页脚），一般会将网站的一些注册信息（安全，联系方式等）展示在这里 |
| nav     | 菜单导航，链接导航的标签                                     |
| article | 表示一篇文章的主体内容，一般是大段的文字内容部分             |

### 块级性标签

> 块级性标签主要用于划分页面的区域

| 标签名 | 描述                                       |
| ------ | ------------------------------------------ |
| aside  | 用于页面标记，注释，摘要等的               |
| figure | 用于规定独立的流内容，通常与figcaption连用 |
| code   | 用来表示一段代码块                         |
| dialog | 用来表示对话框，通常与dl，dt，dd连用       |

### 行内标签

> 行内标签主要用于页面中具体内容的引用等

| 标签名   | 描述                                                         |
| -------- | ------------------------------------------------------------ |
| meter    | 用于表示一段范围的值，可以用于工资，数量，百分比等，max表示最大，min表示最小，value表示当前值 |
| time     | 用来表示时间 属性datetime                                    |
| progress | 表示进度条                                                   |

### 多媒体标签

- video:视频标签
- audio：音频标签

| 属性     | 描述                                       |
| -------- | ------------------------------------------ |
| autoplay | 自动播放，当音频就绪后马上播放             |
| controls | 给用户展示音频控件，比如暂停，开始         |
| loop     | 循环播放音频                               |
| muted    | 静音                                       |
| preload  | 在网页刷新时是否加载音频以及加载音频的形式 |
| src      | 引入音频资源的路径                         |



# CSS3

> css3是在css1和css2的基础上进行的补充和修正，在css3中新增了很多的特性，让我们的css功能更加强大和完善

**完善视觉效果**

> 在css3中新增了圆角，渐变，半透明，图片的边框等新的视觉效果

- 圆角

  ```javascript
  border-radius:值；
  圆角的值可以是百分比，也可以是像素值
  border-radius：左上  右上  右下  坐下 /*当属性值为四个值得时候，是分别给四个角设置不同得圆角*/
  border-radius:值； /*当属性值为一个值得时候，四个角的值都相同*/
  border-radius:值1 值2；/*属性值为两个的时候，值1表示左上右下，值2表示右上左下*/
  border-radius：值1 值2 值3；/*属性值为三个的时候，值1表示左上，值2表示右上和左下，值三表示右下*/
  ```

- 阴影

```css
/*有阴影添加语法*/
box-shadow: X Y 阴影模糊度 阴影大小 阴影颜色[inset]
X值得是阴影在X轴得偏移量
Y值得是阴影在Y轴得偏移量
阴影得模糊度：可以是具体得数值（10px） 也可以是百分比
阴影大小：可以是具体的数值（10px）也可以是百分比
【inset】：如果添加inset属性值的是内阴影，否则就是外阴影
注意：阴影不会被计算在元素的实际宽高中
```

- 边框背景图

```css
border-image:url("")slice width outset repeat;
url:border-image-source指定边框背景图的资源路径
slice：border-imgae-slice指定在图像边界向内偏移
width：border-image-width：指定引入边框背景图的宽度
outset：border-image-outset 指定在边框外绘制的边框背景图的区域
repeat：border-image-repeat图像边框是否平铺（repeat）铺满（round）拉伸（stretch）
```

- 背景

  - background-clip

  > 背景裁剪属性，指定图片裁剪开始的位置

  ```scss
  background-clip对应的属性值有三个，分别为border-box,padding-box,content-box
  border-box：指得是背景图被边框部分开始裁剪
  padding-box：指背景图从内填充部分开始
  content-box：指背景图从内容部分开始（在边框和内填充部分都没有背景图得展示）
  ```

  - background-origin

    > 规定了我们的背景图片相对于谁来定位

    ```
    background-origin:值
    值有以下几种情况
    border-box:相对于边框盒定位
    padding-box：相对于内填充盒定位
    content-box：相对于内容盒定位
    ```

- CSS3 2D转换

  > 通过CSS3 2D转换我们可以将元素进行平移，缩放，旋转，斜切的样式设置

  ```px
  /*基本语法
  transform：2D转换样式；
  2D转换的样式如下；
  
  平移：translateX（20px） 向X轴正向平移20px
  translateY（20px） 向Y轴正方向平移20px
  translate(X,Y) 简写方式，括号内X表示在X轴的平移量，Y表示在Y轴的平移量
  
  旋转	rotateX（50deg） 沿着X轴顺时针旋转50度
      rotateY（50deg）Y轴顺时针旋转50度
      rotateZ（50deg）沿着Z轴顺时针旋转50度
      rotate（90deg) 沿着元素的中心点进行旋转
      
  缩放：scale(X,Y)简写方式X表示在X轴放大或缩小的倍数，Y表示在Y轴方放大或缩小
  	scale(2） 在X轴方向将元素放大2倍
  	scale（0.5）在X轴方向将元素缩小为原来的0.5倍（1/2）
  	
  斜切：skewX（30deg） 沿X轴斜切30度
  	skewY（30deg） 沿Y轴斜切30度
  	skew（X,Y）	简写，X表示在X轴的斜切角度，Y表示在Y轴的斜切角度
  	
  注意：1.在页面布局中，X轴的正方形向右，Y轴的正方向向下
  	2.缩放中的值是一个具体的数值，如果数字小于1表示缩小，如果大于1表示放大
  	 
  ```

- CSS3 3D转换

  > 3D转换可以让2D的元素呈现出来3D的效果

  ```css
  /*要想实现3D转换，需要先设置一个3D空间*/
  perspective：100px； /*设置3D空间*/
  perspective-origin：center center； /*3D空间观察的中心点*/
  /*3D的子元素需要有一个父元素进行承载*/
  transform-style：preserve-3D； /*让子元素能够保存3D的属性*/
  /*子元素的3D属性转换*/
  transform：平移 旋转 缩放 斜切；
  注意：3D转换与2D转换最根本的区别就是3D多了Z轴
  ```

  | 属性                | 介绍                                                         |
  | ------------------- | ------------------------------------------------------------ |
  | transform           | 将元素转换为2D或3D                                           |
  | transform-origin    | 允许我们改变被转换元素的位置                                 |
  | transform-style     | 定义嵌套在3D空间中的元素如何进行显示,flat属性值表示不保留元素3D位置,preserve-3d属性值表示子元素保留3D位置 |
  | perspective         | 设置景深,设置观察3D元素的透视效果                            |
  | perspective-origin  | 规定观察者的位置                                             |
  | backface-visibility | 定义元素在背对屏幕时可见,visible背面可见,hidden背面不可见    |

- CSS动画属性

  - 通过@Keyframes创建一个动画

    > @keyframes用来定义动画是如何执行的

    | 设置               | 介绍                                                   |
    | ------------------ | ------------------------------------------------------ |
    | animationname      | 必填项.设置所创建动画                                  |
    | keyframes-selector | 必填项.动画时长的百分比,表达方式0%~100%  from....to... |
    | css-styles         | 必填项, 动画中要执行的CSS样式变化                      |

- CSS3 animate属性

  > 通过@keyframes定义的动画,需要使用css中的animate进行调用,让需要动画的元素执行我们定义好的动画

  - animation

    ```css
    /*animation是所有动画的简写*/
    animation:name  duration  timing-function delay iteration-count  direction
    name:要执行的动画名称
    duration:完成一次动画所需的时间 单位s
    timing-function:规定完成动画的速度曲线  默认是"ease" 'linear'表示线性匀速运动
    delay:规定动画何时开始
    iteration-count:规定动画被播放次数,默认为1  设置infinite表示循环播放
    direction:规定动画是否在下一周期逆向的播放 normal是默认值表示正常播放
    alternate:表示动画会轮流反向
    ```

  - animation-timing-function:动画运动曲线

    | 名称                  | 介绍                                                |
    | --------------------- | --------------------------------------------------- |
    | linear                | 匀速                                                |
    | ease                  | 默认值,动画是 慢-快-慢                              |
    | ease-in               | 动画以低速开始                                      |
    | ease-out              | 动画以低速结束                                      |
    | ease-in-out           | 动画以低速开始和结束                                |
    | cubic-bezier(n,n,n,n) | n是一些数值,根据n的值不同可以创建出来不同的动画方式 |

    

  > css过渡可以给元素的表现或样式的变化添加一个过渡时间,让整个元素样式的变化更加平和,并且可以不需要js的复杂算法

  ​	----transition

  ```css
  transition: name duration timing-function
  name:需要添加过渡的样式(width,height,background,opacity)
  duration:过渡所需的时间
  timing-function:过渡的动画方式(ease, linear ,ease-in ,ease-out)
  ```

  - css3渐变和颜色

    - 颜色

      - 表示颜色的单词

      - 16进制的表示方式(#000000)

      - rgb的表达方式:rgb(0,0,0)

      - rgba的表达方式:rgba(0,0,0,透明度) 0-1

        ```
        注意:
        rgba与opacity透明度的区别
        rgba的透明度只会对元素的颜色造成影响,对元素内部的内容没有任何影响
        opacity透明会对颜色和元素内部的所有内容都造成影响
        ```

  - 渐变

    > css3渐变允许我们在两个或者是指定的多个颜色之间进行缓慢的转变

    - 线性渐变:渐变的方向为一个直线

    ```css
    background:linear-gradient(direction,start-color,color1,color2.....,end-color)
    linear-gradient:线性渐变
    direction:线性渐变的方向
    start-color:渐变开始的颜色
    color1,color2...线性渐变中间的颜色
    end-color:线性渐变终止的颜色
    ```

    - 径向渐变:以中心点开始进行渐变

    ```css
    background:radial-gradient(center shap-size,color1,color2,....,end-color)
    center:中心区域的颜色或形状
    color:除了中心区域外的第一个颜色
    end-color:最外层的区域颜色
    ```

    

  ### CSS3单位

  #### **长度单位**

  - 文本相对长度单位

    | 单位 | 介绍                                                         |
    | ---- | ------------------------------------------------------------ |
    | em   | 相对于父元素文本字体大小的单位                               |
    | ex   | 相对于字符"x"的高度,通常为字体的一半                         |
    | eh   | 字符"0"的宽度                                                |
    | rem  | 相对于根元素(HTML元素)的字体大小(font-size)的倍数 1rem= 1 * 根元素字体大小 |

  - 视口相对长度单位

    | 单位 | 介绍                                                         |
    | ---- | ------------------------------------------------------------ |
    | vw   | 相对于视口的宽度,将当前视口宽度等分成100份,1vw就占1份        |
    | vh   | 相对于视口的高度,将当前视口高度等分成100份,1vh就占1份        |
    | vmax | 相对于当前视口的宽度或高度,但是会根据两者较大的那一个确定尺寸,依旧会将它等分成100份 |
    | vmin | 相对于当前视口的宽度或高度,但是会根据两者较小的那一个确定尺寸,依旧会将它等分成100份 |

  - 绝对长度单位

    | 单位 | 名称                   |
    | ---- | ---------------------- |
    | cm   | 厘米                   |
    | mm   | 毫米                   |
    | q    | 1/4毫米    1q=0.25毫米 |
    | in   | 英寸 1in=2.54cm        |
    | pt   | 点, 1pt=1/72英寸       |
    | pc   | 排卡, 1pc=12点         |
    | px   | 像素,  1px=1/96英寸    |

  #### **角度单位**

| 单位 | 描述  |
| ---- | ----- |
| deg  | 度    |
| rad  | 弧度  |
| turn | 转/圈 |

> 角度转换成弧度  弧度 =  角度 * Math.PI/180;
>
> 弧度 = 角度 * Π / 180;
>
> 1turn=360deg=2rad