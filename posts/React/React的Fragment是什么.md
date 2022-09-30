---
title: 'React的Fragment是什么'
date: '2022-9-30'
excerpt: React的Fragment是什么?
isFeatured: false
classify: 'React'
image:
codeDemo:
---

# React的Fragment

> ```jsx
> *          是一个专门用来作为父容器的组件
> *              它智慧将它里面的子元素直接返回, 不会创建任何多余的元素
> *           - 当我们希望有一个芙蓉区
> *              但同时又不希望父容器在网页中产生多余的结构时
> *              就可以使用Fragment
> *              <></> 空标签是Fragment的语法糖 和 React.Fragment一致
> ```

```jsx
<React.Fragment>
           <div className="App">
               <p >
                   <h1 className={`${classes.App} ${classes.AppHeader}`} style={pStyle} onClick={()=>setRedBorder(!redBorder)}>我是一个段落</h1>
               </p>
               <p >
                   <h1 className={`${classes.App} ${classes.AppHeader}`} style={pStyle} onClick={()=>setRedBorder(!redBorder)}>我是一个段落</h1>
               </p>
           </div>
           <div className="App">
               <p >
                   <h1 className={`${classes.App} ${classes.AppHeader}`} style={pStyle} onClick={()=>setRedBorder(!redBorder)}>我是一个段落</h1>
               </p>
           </div>
       </React.Fragment>
```

