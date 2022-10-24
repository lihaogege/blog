---
title: '初识canvas'
date: '2022-10-17'
excerpt: 
isFeatured: true
classify: 'Canvas'
image:
codeDemo:
---
# CANVAS [画布]

这是一个[HTML5](https://so.csdn.net/so/search?q=HTML5&spm=1001.2101.3001.7020)新增的标签，使用这个标签我们可以通过JS在该标签中直接画出各种图形。这时，JS类似画家手中的画笔，canvas就相当于画家画笔下的画布。当然，如果只是画静态图，岂不是显得很low了，我们实际开发中用canvas比较多的肯定是用它做出来的各种动画

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        canvas{
            display: block;
            margin: 0 auto;
            border: 1px solid #aaaaaa;
        }
    </style>
</head>
<body>
<!--在低版本浏览器不兼容, 需要提示用户-->
    <canvas width="600" height="500" id="canvas">您的浏览器版本过低,请升级浏览器或者使用chrome打开!</canvas>
</body>

<script>
    let canvas = document.getElementById("canvas")
    // 获取上下文对象
    let c = canvas.getContext('2d')
    // 开启一条路径
    c.beginPath();
    // 确定起始点
    c.moveTo(100,100)
    // 确定结束点
    c.lineTo(300,100)
    // 设置颜色
    c.strokeStyle = 'red'
    // 设置线宽
    c.lineWidth = 5
    // 着色
    c.stroke()

    // 关闭路径
    c.closePath()
</script>
</html>
```

