---
title: 'Nuxt.js踩坑心得'
date: '2022-10-8'
excerpt: Nuxt.js服务器端获取数据,返回在script标签中,而不是标签体,Nuxt.jsSEO收录不好,Nuxt.js刷新请求报错
isFeatured: false
classify: 'NuxtJs'
image:
codeDemo:
---

## Nuxt服务器端渲染数据做SEO

### 看源代码时,数据在script标签中, 而不是正常的标签

这里是我用的 <no-ssr> 和 <client-only>导致的, 使用它们是为了解决nuxt报的错误, 如

1.  p标签嵌套p标签 或者标签嵌套错误
2. v-if的应用,  一半情况下要用v-show  如果是有else的情况下在用v-if 不然client端会报错

#### 解决思路

1. 去掉 client-only标签 并且排查页面 是否刷新后依旧显示正常

## Nuxt的站点地图

这里我在根目录下创建了两个文件

#### 第一步:安装`@/nuxt/sitemap`

```
npm install  @nuxtjs/sitemap
```

#### 第二步:在根目录`static`目录下新建`sitemap.js`

```js
import axios from "axios";
const sitemap = {
  path: '/sitemap.xml', //生成的文件路径
  hostname: '自己网站的网址', //网站的网址
  cacheTime: 1000 * 60 * 60 * 24, //一天的更新频率，只在generate:false有用
  gzip: true, //生成.xml.gz的sitemap
  generate: false,
  exclude: ['/404', '/cart/api', '/confirmOrder/common/**', '/item/components/**','/category/minxinss','/category/components/**'], //排除不要的页面，这里的路径是相对于hostname
  defaults: {
    changefred: 'always',
    lastmod: new Date()
  },
  routes: async () => {
    let productList = await axios.post('商品列表接口地址', {
        categoryId: "",
        level: 0,
        pageNum: 1,
        pageSize: 20,
        sort: "DEFAULT"
      }

    ).then(res => {
      let proList = res.data.data.list;
      var siteArray = [];
      let siteObject = {};
      proList.forEach(element => {
        siteObject = {
          url: `/item/${element.id}.html`,
          changefred: 'daily',
          lastmod: new Date()
        }
        siteArray.push(siteObject);

      });
      return siteArray;
    })
    return productList ;

  },

  //   需要生成的xml数据，return 返回需要给出的xml数据
  // routes:()=>{
  //     const routes = [{
  //         url:"/",
  //         changefred:'always',
  //         lastmod:new Date()
  //     }]
  //     return routes
  // }

}
export default sitemap;

```

#### 第三步:在根目录`static`目录下新建`robots.txt`

> robots.txt文件可以指定爬虫只抓取指定的内容或者是禁止搜索部分内容。

```js
# 该文件可以通过`你的网站域名/Robots.txt`直接访问

# User-agent作用：描述搜索引擎的名字，对于该文件来说至少药有一条user-agent记录，则该项的值设为*
User-agent: *
# Disallow:  描述不希望被访问到的一个url
Disallow: /bin/
Sitemap: 自己网站的域名/sitemap.xml
Sitemap: 自己网站的域名/sitemap.xml
Sitemap: 自己网站的域名/sitemap.xml
这里如果有大数据量的时候可以写多个sitemap

```

#### 第四步 在`nuxt.confing.js`中引用

```js
import sitemap from './static/sitemap';
  modules: [
    '@nuxtjs/sitemap',
  ],
  sitemap:sitemap,

```

#### 第五步:查看效果

- 在浏览器中打开`自己网站的域名/sitemap.xml`看是否能直接打开，可以打开是xml文件就正确
- 在浏览器中打开`自己网站的域名/Robots.txt`看是否能直接打开，打开后文件如下所示

这两个文件都可以访问成功就说明你的站点地图做好了

## Nuxt.js刷新请求报错

这个问题困扰了我很久

路由跳转正常显示数据, 刷新页面后就报错

1. 我这里的原因是接口报错, 接口是需要携带token的, 而服务器端请求接口是获取不到本地的token的, 这里我用了nuxt官网推荐的 cookie-universal-nuxt

#### 具体实现

### 安装和实现细节

1、安装cookie-universal-nuxt



```undefined
npm install cookie-universal-nuxt -s
```

2、在nuxt.config.js添加



```bash
 modules: [
    'cookie-universal-nuxt'
  ],
```

3、设置cookie和使用cookie



```csharp
this.$cookies.set('token', data.token)

async asyncData({ app }) {
    console.log(app.$cookies.get("token"));
},
```

##### 需要强制登录的实现

在上面步骤的前提下，加上的下面的流程
 1）安装js-base64



```undefined
npm install --save js-base64
```

2）在nuxt的store文件夹中新建index.js



```jsx
// 导入Base64
import { Base64 } from 'js-base64'
 
// 设定需要储存的数据及其默认值
export const state = () => ({
  token: {
    Authorization: null,
    username: null,
    userid: null
  }
})
 
// 获取数据方法
export const getters = {
  getToken (state) {
    return state.token
  }
}
 
//更新数据方法
export const mutations = {
  setToken (state, token) {
    state.token = token
  }
}
// 初始化数据方法
export const actions = {
  // nuxtServerInit，用以初始化数据
  async nuxtServerInit ({ commit }, { app }) {
    const token = {}
    // 从cookie中获取token，并且将其中的数据更新到store
    token.Authorization = app.$cookies.get('Authorization')
    // 如果存在token
    if (token.Authorization) {
      // 解析token中携带的用户信息
      const info = JSON.parse(Base64.decode(token.Authorization.split('.')[1]))
      token.username = info.username
      token.userid = info.id
      // 将用户信息更新
       // commit用以提交需要更新的数据，并指定更新的方法
      commit('setToken', token)
    }
  }
}
```
