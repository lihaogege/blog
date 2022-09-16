---
title: '博客项目创建指南'
date: '2022-8/15 17:56'
excerpt: 利用Nextjs,react,redux,typescript,RTK,RTKQ等技术搭建的博客项目,供大家参考指正
isFeatured: true
---

# Vue
1. 概念知识
   Web发展史
   前端开发架构：单页面架构SPA、多页面架构 MPA
   组件化思想
2. Vue基础
   1> Vue介绍    
      Vue技术栈主要用于SPA应用开发。
      Vue2.0 兼容IE9及以上，webkit内核浏览器。
      MVVM 双向数据绑定  将应用分为 视图V与模型M两个部分，视图改变后模型也修改，模型改变后视图也更新。
   2> Vue安装
      script直接引入使用
      通过vue命令行工具创建使用
   3> Vue实例 
      window.Vue = function (options){}

      new Vue({
          el:"",
          data:{}
      })
   4> 数据绑定
      {{}} 
      指令：v-text v-html v-model

      表达式：变量与运算符结合体
   5> 指令
   v-html v-text v-show v-for v-if v-else v-else-if
   v-pre v-model v-slot v-bind v-on v-cloak v-once

   6> 自定义指令
   两种：
   全局定义
   Vue.directive("",{
       bind(el,binding){},
       inserted(el,binding){},
       update(el,binding){}
       componentUpdated(el,binding){},
       unbind(el,binding){}
   })
   Vue.directive("",function(){})
   局部定义
   new Vue({
       directives:{
           "",{}|function(){}
       }
   })
   7> 样式绑定
   class  对象 ，数组
   style  对象 ，数组
   8> 实例属性
   new Vue({
       el: string|function(){},
       data: {}|function(){},
       computed:{},
       methods:{},
       watch:{},
       name:"",
       template:"",
       props:[]|{},
       components:{},
       directives:{},
       filters:{},
       
       // 路由
       router:{},
        
       // vuex
       store:{}
       
       // 生命周期
   })
   9> 事件绑定 
      v-on

      v-on:xxxx="表达式|方法名，方法()"

      方法在methods中定义

      事件对象
      methods:{
          // 方法名
          xxx:function(e){},
          // 方法($event),
          xxx:function(e){},
      }

      传递参数
      v-on:xxxx="方法(参数)"

      methods:{
          // 方法(参数),
          xxx:function(参数){},
      }

      指令修饰符
      .stop  
      .prevent
      .once
    8> 过滤器
    使用： 插值 ， v-bind ，JavaScript

    自定义过滤器
    全局
    Vue.filter('',function(){})
    局部
    new Vue({
        filters:{
            "",function(){}
        }
    })

    第三方过滤器：vue-filter

    9> 生命周期
    初始化 beforeCreate  created
    装载   beforeMount   mounted
    更新   beforeUpdate  updated
    销毁   beforeDestroy destroyed

    10> 表单

    11> 组件

    定义：
    Vue.component("",{})

    {
        components:{

        }
    }

    data 必须是函数

    单向数据流

    组件模板   script type="text/x-template"
              template

    组件组合  父子

    组件通信  父子
      父组件 ---- props------> 子组件
      父组件 <---- 事件 ------ 子组件

      兄弟组件
       组件A      父组件    组件B
    插槽

    匿名插槽   default
    后备内容   <slot>后备内容</slot>
    具名插槽  
    <组件>
       <template v-slot:xxx></template>
    </组件> 
    <slot name="xxx">后备内容</slot>
    作用域插槽 

    组件定义
    <template>
        <div>
            <slot text="xxx"></slot> 
        </div>
    </template>

    <组件>
       <template v-slot:default="props">
       // props = {text:'xxxx'}
        {{props.text}}
       </template>
    </组件>
   
    动态组件
    <component is=""></component>
   
    <keep-alive include="" exclude="" max=""></keep-alive>

    异步组件
    Vue.component("",function(reslove,reject){

        reslove({
            
        })
    })

3. Vue命令行工具
   基于Nodejs平台

   npm install @vue/cli -g

   使用：
   1. 命令 
      vue create <项目名称>
   2. 图形界面
      vue ui
本周内容：
Vue路由
Vue案例 elementUI  vant
Nodejs 2-3  webpakc  babel  手动搭建 vue开发环境
________________________________________________________
# Vue路由

后端路由：路由就是前端用来跟后端服务器进行交互的一种方式，通过不同的路径来请求不同的资源。

路由的概念最开始是由后端提出来的，在以前用模板引擎开发页面的时候，是使用路由返回不同的页面，

大致流程可以看成这样：
（1）浏览器发出请求
（2）服务器端监听到80(http)端口或者443(https)有请求过来，并解析url路径
（3）根据服务器的路由配置，返回相应信息（可以是html文件，json数据，也可以是图片）
（4）浏览器根据数据包的content-type来决定如何解析数据

简单来说路由就是用来跟后端服务器进行交互的一种方式，通过不同的路径来请求不同的资源，请求不同的页面是路由的其中一项功能。


随着前端应用的业务功能越来越复杂、用户对于使用体验的要求越来越高，单页应用（SPA）成为前端应用的主流形式。大型单页应用最显著特点之一就是采用前端路由系统，通过改变URL，在不重新请求页面的情况下，更新页面视图。

前端路由：主要用于单页面应用，通过改变URL，在不重新请求页面的情况下，更新页面视图。


前端路由：
1. 视图更新
   使用处理过后(不能跳转 阻止默认跳转行为)的<a>标签。
   Vue中 <router-link></router-link> 经过处理的a标签。

   单页面应用(SPA)的核心之一是: 更新视图而不重新请求页面; 
2. 前端路由实现原理？
   前提：不给服务器发请求，页面发生变化
   1. 基于hash   看着不像真实的URL
      http://localhost/#/login
      http://localhost/#/main

      window.onhashchange = function(){
          // 获取URL hash值
          location.hash
          // 让 hash值 与 更新视图操作 一一对应
          // hash改变 执行 对应的更新视图操作
      }
   2. 基于history  用户体验更好
      http://localhost/login
      http://localhost/main
      当用户在浏览器输入框，输入地址 发出请求后 服务器返回不了内容(404)。
      缺陷：后台Web服务器需要做处理，无论用户访问什么地址都返回 index.html页面。
      
      监听历史记录变化
      window.addEventListener('popstate', function(){})

      function pushState(title,url){
          // 改变地址栏
          history.pushState('',title,url)
          // 更新视图
          updateView();
      }


前端路由有什么优点和缺点？
优点：
1. 良好的前后端分离。SPA和RESTful架构一起使用，后端不再负责模板渲染、输出页面工作，web前端和各种移动终端地位对等，后端API通用化。
2. 用户体验好、快，内容的改变不需要重新加载整个页面，快速展现给用户
3. 同一套后端程序代码，不用修改就可以用于PC Web、移动端WebAPP、APP、小程序等多种客户端

缺点：
1. 不利于SEO：搜索引擎爬取页面 空html，数据是页面运行的时候才能请求
2. 使用浏览器的前进，后退键的时候回重新发送请求，没有合理的利用缓存
3. 单页面无法记住之前滚动的位置，无法在前进，后退的时候记住滚动位置


## vue-router 前端路由
vue-router是Vue.js官方的路由插件，它和vue.js是深度集成的，适合用于构建单页面应用。

vue的单页面应用是基于路由和组件(页面级组件)的，路由用于设定访问路径，并将路径和组件(页面级组件)映射起来。 传统的页面应用，是用一些超链接来实现页面切换和跳转的。在vue-router单页面应用中，则是路径之间的切换，也就是组件的切换。


手动配置Vue路由：
1. 命令行搭建开发环境
   vue create router1
2. 安装路由 
   npm install vue-router --save-dev
   npm i vue-router -D
3. 使用路由

   配置路由
   创建router文件夹/在文件夹中 创建 router.js 文件 放置路由代码
   //router.js 配置路由
    import Vue from "vue";
    import VueRouter from "vue-router";

    Vue.use(VueRouter);

   使用路由
   路径与页面组件映射。

   //引入页面   src/pages/
   import Home from "../pages/Home.vue"
   import News from "../pages/News.vue"
   //定义路径与页面映射关系
   var routes = [
       {
           path:"/",
           component: Home
       },
       {
           path:"/news",
           component: News
       }
   ]

   export default new VueRouter({
       mode: "history", //使用那种路由模式 hash | history 
       routes: routes
   })

4. 将路由模块挂载至Vue实例
   在main.js文件中，导入路由，挂载至实例

   import router from "./router/router.js"
   new Vue({
       router:router
   })
5. 在APP.vue中写入路由出口
   Vue路由 use后，提供两个组件：
    <router-view></router-view> 规定路由匹配后组件出口
    <router-link to=""></router-link> 实现页面切换(类似A)

   <template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <router-link to="/">主页</router-link>
        <router-link to="/news">新闻</router-link>
        <router-link to="/about">关于我们</router-link>
        <router-view></router-view>
    </div>
    </template>