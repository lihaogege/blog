---
title: 'JS小技巧'
date: '2022-9-22'
excerpt: 怎么给scrrollTo 加一个过渡的效果
isFeatured: false
classify: 'Javascript'
image: 
codeDemo: 
---

# JS小技巧

## 怎么给scrrollTo 加一个过渡的效果

> ```js
> top 等同于  y-coord
> left 等同于  x-coord
> behavior  类型String,表示滚动行为,支持参数 smooth(平滑滚动),instant(瞬间滚动),默认值auto,实测效果等同于instant
> 
> window.scrollTo({ 
>     top: 1000, 
>     left:11,
>     behavior: "smooth" 
> 
> ```