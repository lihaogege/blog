---
title: 'NextJs踩坑之路-干货满满'
date: '2022-10-10'
excerpt: 这里记录了我在开发使用NextJs这个nice的框架后的一点心得,以及踩过的坑,希望能帮助到大家
isFeatured: false
classify: 'NextJs'
image:
codeDemo:
---

# NextJs踩坑之路

### 第一坑-SEO

众所周知, 我们使用NextJs的目的是主要目的是为了SEO,让爬虫/机器人更快更准确的爬取到信息,让搜索引擎更好的收录,

但是我使用了框架所提供的 getStaticProps getServerSideProps 等服务器端获取数据方法, 数据确实从服务器端渲染出来了,但是在查看源代码时却是空的, 

​	这让我很我不李姐,  在尝试了各种方式后, 我回想到 当初使用Nuxt框架时为了处理nuxt报的错 而使用了 <client-only>这个标签 让dom在客户端去生成.导致在源代码中 看不到标签体的存在.  

​	根据之前走过的坑,我从自定义入口文件开始排查,一直到app.tsx中, 我发现是导致没有返回标签体的原因. PersistGate组件  

```tsx
  <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>      <----
                        <Layout>
                            <Head>
                                <title>{"李昊翰的博客-关注web前端技术-前端技术博客"}</title>
                                <meta name="description" content="个人博客,李昊翰的博客,分享前端前沿技术,VUE,React,NodeJs,Typescript,框架全家桶,小程序等前端知识"/>
                                <meta name="keywords" content="前端博客,个人博客,博客,李昊翰的博客,前端技术文档"/>
                            </Head>
                            <Component {...pageProps} />
                            <Search/>
                        </Layout>
                    </PersistGate>
            </Provider>
```



这个组件是为了在redux中保存的数据实现本地或会话持久化而全局包裹的组件. 事实上这个组件也确实帮我们实现了数据持久化保存,  我试图在百度中寻求答案, 

为什么服务器端可以正常渲染, 但是源代码中确不显示😢

经过查询, 我觉的此组件并不适合nextjs去做持久化保存. 它类似于 nuxt中的<client-only> 只在客户端层面去渲染, 因为只能在客户端层面去提取数据

或者说持久化保存只可以定位于client端层面, 因为本地存储会话存储都是在window对象上的. 所以当被客户端层面的组件包裹时, 站点返回时自动过滤掉客户端的dom 所以为空. 

**总结**

> 不要让依托于window对象上的组件/插件包裹内容,这样会影响服务器端返回时自动过滤或报错.

### 第二坑-获取数据

> #### next框架不会像nuxt框架似的在getStaticProps或者getServerSideProps中请求的某个接口报错, 页面即报错,这一点next确实比nuxt要友好的多. 不过即使这样, 我们也要注意在客户端去用三元表达式判断一下

```tsx
 const staticPropsGetDataHandler = () =>{
        return propsData ? propsData.map((item:any)=>{
            return  <li style={{background:"red"}}  key={item.infoId}>{item.infoTitle}</li>
        }) : []
    }
```

