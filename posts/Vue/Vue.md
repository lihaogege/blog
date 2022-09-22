---
title: '前端主流三大框架之VUE'
date: '2022-8/15 17:56'
excerpt: Vue是一个基于JavaScript开发的MVVM库，是一套构建用户界面的渐进式框架。它是以数据驱动和组件化的思想构建的，采用自底向上增量开发的设计。
isFeatured: true
classify: 'Vue'
---

# 前端主流三大框架 8-3-------------------------------------------------------

- Angular      2009     
- React          2013
- Vue            2015    尤雨溪

# 前端开发架构

1. MPA  多页面应用
2. SPA  单页面应用

# Vue

> **Vue是一个基于JavaScript开发的MVVM库，是一套构建用户界面的渐进式框架。它是以数据驱动和组件化的思想构建的，采用自底向上增量开发的设计。**

- 数据驱动: 数据驱动视图
- 组件化:

## 数据绑定

> 数据绑定是指将视图和模型关联起来, 结合vue的响应系统, 数据变化 视图变化

插值;

1. {{}}   文本插值
2. 指令   v-html   v-text

## 实例化Vue

```js
 //实例化Vue   el 绑定Dom元素  data赋值  值的类型为JSON对象
```

## 指令操作

```
v-if      通过表达式 在增/删Dom元素
v-show    通过表达式 显示/隐藏Dom元素
v-else    通过if 或者 show 

```

## MVVM

> Vue在设计上使用MVVM(Model-View-ViewModel)架构模式。

MVVM的本质是通过ViewModel链接View和Model，让数据的变化自动映射为视图的更新。

## 自定义指令 8-4-------------------------------------------------------

- 自定义指令的方式有两种

  1. 全局定义

     ```js
     Vue.directive( id, [definition] )  //[definition] 指令参数
     ```

  2. 局部定义

     ```js
     new Vue({
         directives: {
             focus: {
                 // 指令的定义
                 inserted: function (el) {
                   el.focus()
                 }
             }
         }
     })
     ```

## 自定义指令的钩子函数

```js
// 注册
Vue.directive('my-directive', {
  bind: function () {},      //只调用一次  初始化操作
  inserted: function () {}, //被绑定元素插入父节点时调用（父节点存在即可调用，不必存在于 document 中）。
  update: function () {}, //被绑定元素所在的模板更新时调用，而不论绑定值是否变化。
  componentUpdated: function () {}, //被绑定元素所在模板完成一次更新周期时调用。
  unbind: function () {} //只调用一次，指令与元素解绑时调用。
})
```

## 样式绑定

-    绑定:class  
  1. 对象语法
  2. 数组语法
-  绑定 :style   (内联样式绑定)
  1. 对象语法
  2. 数组语法

##   实例属性

```js
new Vue({
    el:""
    data:Object/function,	//数据源
    template:"",	//组件模板
    props:Array/Object   //组件属性
    name: string    //组件名称
    computed:{key:function(){}}  //计算属性
	methods:{key:function(){}} 	//方法
	watch:{ [key:string]: string/Function/Object/Array}    //监听
	directives:{}   //自定义局部指令
	filters:{}   //自定义局部过滤器
	components:{}  //自定义局部组件

	//生命周期钩子函数
	//Vuex
  	store:

	//Vue-Router
})
```

### methods   //方法

1. 需要每次调用的函数
2. 事件处理程序
3. 需要给函数内部传参

## Vue事件     8-5-------------------------------------------------------

1. 事件处理方法
   - 事件处理程序
   - 表达式
2. 事件对象与传递参数
   - 事件对象/了程序记录事件触发过程中信息

## 键盘事件只能给document 和 表单 加

## 过滤器  filters

> 输入  ==>  处理 ==> 输出

### 使用

1. {{xxx| 过滤器名}}

2.  v-bind 使用过滤器

3. 在javascript里面可以用吗? 

   > 可以的

   1. 局部定义    	Vue.$options.filters.过滤器名()
   2. 全局定义  Vue.options.filters.过滤器名()

```js
<div  v-text='xxx | 过滤器名'></div>
```

### 定义:

Vue.filter("过滤器名",function(){})

### 过滤器定义

1. 全局过滤器定义

   - Vue.filter("过滤器名",function(){})

2. 局部过滤器定义

   - ```js
     new Vue({
         el:"#demo",
         data:{
             name:"king"
         },
         filters:{
             firstUpperCase:function(val){
                 return val.substr(0,1).toUpperCase()+val.substr(1);
             }
         }
     })
     ```

****

**注意  只可以在双括号 或者 v-bind里面使用过滤器   在指令里面不可以使用过滤器**

## Vue的生命周期

**Vue生命周期分为不同的阶段,每个阶段都会执行不同的函数,这个函数叫钩子函数**

#### 阶段:

- 初始化
  - beforeCreate()	初始化之前
  - created()                初始化之后
- 装载
  - beforeMount()	装载之前
  - mounted()             装置之后
- 更新
  - beforeUpdate() 	更新之前
  - updated()               更新之后
- 销毁
  - beforeDestroy()    销毁之前
  - destroyed()            销毁之后

![1596618581345](C:\Users\59990\AppData\Roaming\Typora\typora-user-images\1596618581345.png)

## 组件注册   8-6-------------------------------------------------------

### 全局注册

```
Vue.component('my-component', {
  // 选项
})
```

### 局部注册

```
new Vue({
    el:"#app", // 局部注册，组件只在app实例下有效
    components:{
        "hello":{
            "template":"<h1>hello Vue!!!</h1>"
        }
    }
})
```

### 组件注册的template不可以换行

> 解决方案

- 组件 模板只能有一个根元素
- 解决换行问题
  - 拼接
  - 模板字符串(注意标签规范)
  - 在字符串换行中 加入 \

## 组件名

1. 使用 kebab-case

   ```html
   <kebab-case>Hello</kebab-case>
   ```

2. 使用PascalCase

   ```html
   <PascalCase>Hello</PascalCase>
   ```

## DOM 模板解析注意事项

- table

  > 解决方案

  ```html
  <table>
    <tr is="my-row"></tr>
  </table>
  ```

- select

  > 解决方案

  ```html
  <select>
    <option is="my-row"></option>
  </select>
  ```

**每个组件的数据, 必须是独立的,属于该组件的,    因此,data必须是 函数  返回 对象这种形式**

- template 返回一个根元素
- template内容不能换行
- 组件名  首字母大写  短横线

## 使用 script 或 template 标签  (组件模板分离)

> 在template选项中拼接HTML元素比较麻烦，无法使用换行，这也导致了HTML和JavaScript的高耦合性。

- ### 使用 script 标签

  ```js
  <div id="app">
      <hello></hello>
  </div>
  <script type="text/x-template" id="hello">
      <div>
          <h1>data 必须是函数</h1>
          <p>构造 Vue 实例时传入的各种选项大多数都可以在组件里使用。只有一个例外：data 必须是函数。</p>
      </div>
  </script>
  <script>
  Vue.component("hello",{
      template:"#hello"
  })        
  new Vue({
      el:"#app"
  })
  </script>
  ```

- ### 使用 template 标签

  ```js
  <div id="app">
      <mycontent></mycontent>
  </div>
  <template id="mycontent">
      <div>
          <h1>data 必须是函数</h1>
          <p>构造 Vue 实例时传入的各种选项大多数都可以在组件里使用。只有一个例外：data 必须是函数。</p>
      </div>
  </template>
  <script>
      Vue.component('mycontent',{
          template:"#mycontent"
      })
      new Vue({
          el:'#app'
      })
  
  </script>
  ```

## 组件通信

### 父组件向子组件传递数据

> 父组件通过 prop 给子组件下发数据

```js
<div id="app">
    <!-- 可以向它传入一个普通字符串 -->
    <mytitle title="hello Vue!!"></mytitle>
</div>


Vue.component('mytitle',{
    // 声明 props
    props:['title'],
    template:"<h1>{{title}}</h1>"
})
new Vue({
    el:"#app"
})
```

**当使用的不是字符串模板时，camelCase (驼峰式命名) 的 prop 需要转换为相对应的 kebab-case (短横线分隔式命名)：**



## 组件插槽        8-7-------------------------------------------------------

> **插槽（Slot）** 是Vue提出来的一个概念，正如名字一样，插槽用于决定将组件中包含的内容，插入到组件模板某个指定位置。

- 插槽
  - <solt></solt>
- 后备内容:若组件没有包含内容,则显示<slot>组件中包含的后备内容
  - 具名插槽

### 作用域插槽

> 在组件包含内容的位置要访问组件内部的数据,需要使用作用域插槽

# 动态组件与异步组件

## 动态组件

> 通过使用保留的 `<component>` 元素，动态地绑定到它的`is`特性，我们让多个组件可以使用同一个挂载点，并动态切换：

### Promise 是一种解决异步编程的问题方案

## Vue回顾   8-10----------------------------------------------------------------

### Vue基础

1. #### Vue介绍

   - Vue技术栈主要是用于开发SPA应用开发
   - Vue2.0 兼容IE9及以上,webkit内核浏览器
   - MVVM双向数据绑定,将应用分为视图V和模型M两个部分,视图改变后模型也修改,模型改变和视图也更新

2. #### Vue安装

   - script 直接引入使用
   - 通过命令行创建

3. #### Vue实例

4. #### 数据绑定

   - {{}}
   - 指令 v-text  v-html  v-model
   - 表达式:  变量与运算符结合体

5. #### 指令

   1. v-html
   2. v-text
   3. v-model
   4. v-on
   5. v-once
   6. v-if
   7. v-else
   8. v-else-if
   9. v-show
   10. v-for
   11. v-pre
   12. v-slot
   13. v-cloak
   14. v-bind

6. #### 自定义指令

   - 全局定义指令

     ```js
     Vue.directive("指令名",{
         bind(el.binding){}
         inserted(el.binding){}
     	update(el.binding){}
     	componentUpdate(el,binding){}
     	unbind(el,binding){}
     })
     ```

     ```
     Vue.directive("指令名",function(){})
     ```

   - 局部定义指令

     ```
     new Vue({
         directives:{
             "指令名":{} | function(){}
         }
     })
     ```

7. #### 样式绑定

   - class 对象 | 数组
   - style 对象 | 数组

8. #### 实例属性

   ```js
   new Vue({
       el:"",
       data:{} | function(){},
       computed:{},
       methods:{},
       watch:{},
       name:"",
       template:{},
       props:[] | {},
       components:{},
       filters:{},
       
       //路由
       router:{},
       
       //vuex
       store:{}
       
   })
   ```

9. #### 事件绑定

   - v-on
   - v-on:xxxx = '表达式|方法名, 方法()'
   - 方法在methods中定义

   1. 事件对象

      - ```
        methods:{
            //方法
        }
        ```

      - 传递参数

10. #### 指令修饰符

    - once
    - stop  //阻止事件流传播
    - prevent  //阻止浏览器默认行为

11. #### 过滤器

    - 使用:   插值,    v-bind   javaScript

    ##### 自定义过滤器

    - 全局定义过滤器

      ```
      Vue.filter("过滤器名",function(){})
      ```

    - 局部定义过滤器

      ```
      new Vue({
          filters:{
              "过滤器名":function(){
                  
              }
          }
      })
      ```

12. #### 生命周期的钩子函数

    1. 初始化   beforeCreate   created
    2. 装载    beforeMount   mounted
    3. 更新   beforeUpdate   updated
    4. 销毁  beforedestroy    destroyed

13. #### 表单

14. #### 组件

    - 全局定义组件

      ```
      Vue.component("组件名",{})
      ```

    - 局部定义组件

    - data 必须是函数

    - 单向数据流

    - 组件模板    script  type="text/x-template"        ||   template

    - 组件组合   父子

    - 组件通信   父子    

      - 父 向 子 ---通信----用props 
      - 子 向 父 --- 通信-----用事件
      - 兄弟组件      组件A -----  父组件  - ----组件B

    - 插槽

      - 匿名插槽  default

      - 后备内容   <slot>后备内容</slot>

      - 具名插槽

        ```html
        <组件>
            <template v-slot="xxx"></template>
            <组件>
        <slot name="xxx"></slot>
        ```

      - 作用域插槽

        组件定义

        ```
        <template></template>
        ```

    - 动态组件

      ```html
      <component is=""></component>
      
      <keep-alive include="" exclude="" max=""></keep-alive> //将组件保存在内存中
      
      异步组件
      Vue.component
      ```

### Vue 命令行工具

   基于Nodejs平台



​	npl install   @vue/cli  -g

使用:

1. 命令



## 前端路由

> 前端路由主要用于单页面应用(SPA)  通过改变URL 在不重新请求页面的情况下, 更新页面视图

1. 视图更新

   - 使用处理过后(不能跳转,阻止默认跳转行为)的a标签
   -  Vue中<router-link></router-link>是处理过的a标签
   - 单页面应用的核心之一是,更新视图而不重新请求页面

2. 前端路由实现原理?  URL如何发生变化

   前提:不给服务器发送请求,页面发生变化

   - 基于hash 	看着不像真实的URL

     - http://localhost/#/login

     - http://localhost/#/main

     - ```js
       window.onhashchange = function(){
           //获取 URL hash值
           location.hash
           //让hash值与更新视图操作一一对应
           // hash改变 执行  对应的更新视图操作
       }
       ```

   - 基于history

     - http://localhost/login

     - http://localhost/main

     - 当用户在浏览器输入框输入地址,发出请求后,服务器返回不了内容(404)

       **缺陷:后台Web服务器需要做处理  无论用户访问什么返回的都是index.html**

     ```{
     window.addEventListener('popstate',function(){})  //监听历史记录变化
     
     function pushState(title,url){
         //改变地址栏
         history.pushState('',title,url)
         //
     }
     ```

     ### 前端路由有什么优点和缺点？

     优点：

     1. 良好的前后端分离。SPA和RESTful架构一起使用，后端不再负责模板渲染、输出页面工作，web前端和各种移动终端地位对等，后端API通用化。
     2. 用户体验好、快，内容的改变不需要重新加载整个页面，快速展现给用户
     3. 同一套后端程序代码，不用修改就可以用于Web界面、手机、平板、等多种客户端

     缺点：

     1. 不利于SEO
     2. 使用浏览器的前进，后退键的时候回重新发送请求，没有合理的利用缓存
     3. 单页面无法记住之前滚动的位置，无法在前进，后退的时候记住滚动位置

   ### 路由

   1. 分析项目  路径与页面

   2. 在项目 src/roter/index.js

   3. ```
      const toutes = [
          // 路径与页面组件映射关系
          {
              path:"",
              compontent:""
          },
      ]
      ```

### 动态路由匹配

- 如何获取url动态参数?
  - 当匹配到一个路由时,参数值会被设置到 this.$rote.params()

给某个页面传递参数,有哪些方式

1. 动态参数

   /good/:id    this.$route.params   //获取传递参数

2. 查询字符串

   /good?id=100   this.$rote.query   获取传递参数

### 面试问题

- $rote   和 $roter 的区别

  ```
  //$roet 是 保存本次路由的访问信息
  // $roter 是vueRote构造函数的实例化对象
  ```

  

## Vue项目开发流程       8-11---------------------------------------------------------

<style> scopen 作用域  当前css只能作用到当前组件



### 基本使用

1. 
2. 引入element
   1. 完成引入: 把所有的组件都引入项目,每个组件都可以使用
   2. 按需引入: 只引入需要的组件



## Vue 引入Icon图标

1.   自定义图标的话   设计师设计  自己上传

2. 使用

   - 配置为ElementUI项目可用的字体图标
   - 我的项目 ; 更多操作   =>  项目编辑

3. FontClass/Symbol  前缀 : el-icon-

4. Font Family:element-icons

   **使用图标:   在项目开发阶段使用:   直接引入 iconfont class 链接    在项目上线阶段使用: 下载,使用模块方式引入,用链接也是可以的**



## 乾坤管理 路由思路

1. 从$router里面的options routes里面 找到路径和name  icont 标题 等信息

2. 通过v-for 渲染出来     判断是否有chilrend  有的话就渲染子目录

   ### 乾坤管理		  (9个二级,   13个三级暂定)

3. 首页   **二级 **			------Home

4. 资产入库    **二级 **            ------Asset

5. 区域管理 **二级**               --------region

6. 领用退库   **二级 **             ------Collection 

7. 借用归还   **二级**              ------Return

8. 信息维护    **二级 **            ------Information 

   - 基本信息     **三级 **         ------essential 
   - 维保信息     **三级 **         ------MaintenanceInfo
   - 财务信息     **三级 **         ------financial 

9. 维修管理   **二级 **           ------maintenance 

10. 清理报废   **二级 **           ------Clean

11. 分析报表   **二级 **           ------Analysis 

   - 资产清单     **三级 **              ------AssetList
   - 分类使用情况     **三级 **       ------Classified 
   - 到期资产     **三级**               ------Dueassets
   - 清理清单     **三级 **              ------CleanupList

11. 系统管理   **二级**      ------management

    - 仓库管理     **三级 **          ------Warehouse
    - 分类管理     **三级**           ------Categories
    - 系统配置     **三级 **          ------configuration
    - 组织架构     **三级 **          ------organizational 
    - 员工信息     **三级 **          ------Employee 
    - 系统角色     **三级 **           ------SystemRole

## Vue                               8-13-------------------------------------------------

## Vue                                 8-14-------------------------------------------------

#### 组织架构

> 管理公司部门,对部分进行增删改查

1. 树形结构     =>    树形数据结构

ElementUI   el-card,  el-row  , el-col  ,  el-tree , el-dialog,   el-cascader,    el-form