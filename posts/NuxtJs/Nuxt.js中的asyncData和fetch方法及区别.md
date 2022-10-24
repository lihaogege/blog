---
title: 'Nuxt.js中的asyncData和fetch方法及区别'
date: '2022-10-8'
excerpt: Nuxt.js中的asyncData和fetch方法及区别有哪些?
isFeatured: false
classify: 'NuxtJs'
image:
codeDemo:
---

## asyncData()和fetch()的相同点

- 参数是一个object,为context(上下文) ：**被设定为当前页面的上下文对象**

```js
//asyncData()(context) {
fetch()(context) {
  // Universal keys
  const {
    app,     //包含所有插件的 Vue 根实例。例如：在使用 axios 的时候，你想获取 $axios 可以直接通过 context.app.$axios 来获取
    store,   // Vuex.Store 实例。只有vuex 数据流存在相关配置时可用
    route,   // Vue Router 路由实例
    params,  // route.params 的别名
    query,   // route.query 的别名
    from,    // 路由的导航路线
    env,     // nuxt.config.js 中配置的环境变量
    isDev,   //是否是开发 dev 模式，在生产环境的数据缓存中用到
    isHMR,   //是否是通过模块热替换 webpack hot module replacement (仅在客户端以 dev 模式)
    req,     // Node.js API 的 Request 对象。如果 Nuxt 以中间件形式使用的话，这个对象就根据你所使用的框架而定。nuxt generate 不可用
    res,     // 与req同理
    redirect,// 用这个方法重定向用户请求到另一个路由。状态码在服务端被使用，默认 302 redirect([status,] path [, query])
    error,   // 用这个方法展示错误页：error(params) 。params 参数应该包含 statusCode 和 message 字段
    $config  // 访问运行配置
  } = context
  // Server-side
  if (process.server) {
    const { req, res, beforeNuxtRender } = context
  }
  // Client-side
  if (process.client) {
    const { from, nuxtState } = context
  }
}

```

- 注意：由于asyncData和fetch方法是**在组件 初始化 前被调用的**，所以在方法内是**没有办法通过 this 来引用组件的实例对象**

## asyncData()和fetch()的不同点

#### asyncData()

- 应用场景：在服务器端获取并渲染数据(异步请求数据，返回给当前组件的data)，asyncData方法使得你能够在渲染组件之前异步获取数据

- 什么时候被调用：

  - asyncData方法会在组件（**限于页面组件**）每次加载之前被调用。
  - 它可以在服务端或路由更新之前被调用

- 利用 asyncData方法来获取数据并返回给当前组件

  - ```js
    <template>
      <div>
        <h1>{{ post.title }}</h1>
        <p>{{ post.description }}</p>
      </div>
    </template>
    
    <script>
      export default {
        async asyncData({ params }) {
          const post = await await axios.get(`https://api.nuxtjs.dev/posts/${params.id}`)
          return { post }
        }
      }
    </script>
    
    ```

#### fetch()

- 应用场景： 在渲染页面前填充应用的状态树（store）数据（不会设置组件的数据）

- 什么时候被调用：

  - 组件每次加载前被调用（在服务端或切换至目标路由之前）

- 可以用 fetch 方法来获取数据填充应用的状态树（vuex）。为了让获取过程可以异步，你需要返回一个 Promise，Nuxt.js 会等这个 promise 完成后再渲染组件,如

  - ```js
    <template>
      <h1>Stars: {{ $store.state.stars }}</h1>
    </template>
    
    <script>
    export default {
      async fetch ({ store, params }) {
        let { data } = await axios.get('http://my-api/stars')
        store.commit('setStars', data)
      }
    }
    </script>
    
    ```

- 失效：查询字符串(query)更改, fetch()不会调用。
  - 失效解决方案：设置通过页面组件的watchQuery属性来监听参数的变化

### 所以它们直接到底有什么不同?

- 其实我觉的相差不是很大,

- asyncData只能用于页面组件，不能用于自定义组件,而fetch在任何组件中使用，无论是页面组件还是自定义组件，如果你用asyncData,那么你在自定义组件就不能更新vuex状态树了
