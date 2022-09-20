---
title: 'use-gesture简介'
date: '2022/9/20'
excerpt: Use Gesture是一个支持丰富鼠标和触摸手势的 React 库
isFeatured: false
---

# react-use-gesture

> Use Gesture是一个支持丰富鼠标和触摸手势的 React 库 。 Use Gesture可以将丰富的鼠标和事件绑定到任何组件或视图。通过接收到的数据，设置手势变得非常简单，而且通常只需要几行代码。



## 安装

### React

Npm

```
npm i @use-gesture/react
```

Yarn

```
yarn add @use-gesture/react
```

### 纯JavaScript：

Npm

```
npm i @use-gesture/vanilla
```

Yarn

```
yarn add @use-gesture/vanilla
```

## 使用

### react

```js
import { useSpring, animated } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'

function Example() {
  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }))

  // Set the drag hook and define component movement based on gesture data
  const bind = useDrag(({ down, movement: [mx, my] }) => {
    api.start({ x: down ? mx : 0, y: down ? my : 0 })
  })

  // Bind it to a component
  return <animated.div {...bind()} style={{ x, y, touchAction: 'none' }} />
}
```

### javascript

```js
<!-- index.html -->
<div id="drag" />
// script.js
const el = document.getElementById('drag')
const gesture = new DragGesture(el, ({ active, movement: [mx, my] }) => {
  setActive(active)
  anime({
    targets: el,
    translateX: active ? mx : 0,
    translateY: active ? my : 0,
    duration: active ? 0 : 1000
  })
})

// when you want to remove the listener
gesture.destroy()
```

### 可用 Hooks

| Hook         | Description            |
| ------------ | ---------------------- |
| `useDrag`    | 处理拖拽手势           |
| `useMove`    | 处理鼠标移动           |
| `useHover`   | 处理鼠标进入及离开时间 |
| `useScroll`  | 处理滚动事件           |
| `useWheel`   | 处理鼠标滚轮事件       |
| `usePinch`   | 处理捏合手势           |
| `useGesture` | 处理多个手势           |