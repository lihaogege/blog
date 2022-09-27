---
title: 'NextJs全局路由监听'
date: '2022-9-27'
excerpt: NextJs全局路由监听,react监听路由变化
isFeatured: true
classify: 'NextJs'
image: nextjs-logo.png
---

## 如何在Next.js页面加载前拦截路由器

### 方法一

> Router.events.on('routeChangeStart', 事件名)

```javascript
// import App from 'next/app'

import { useEffect } from "react"
import Router from 'next/router'

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        const handleRouteChange = url => {
          console.log('App is changing to: ', url)
        }

        Router.events.on('routeChangeStart', handleRouteChange)
        return () => {
          Router.events.off('routeChangeStart', handleRouteChange)
        }
    }, [])


    return <Component {...pageProps} />
  }

  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // MyApp.getInitialProps = async (appContext) => {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }

  export default MyApp
```

1. 如果在浏览器中输入`localhost:3000/`，事件就永远不会被触发。如果输入`localhost:3000/test`，它也不会触发。它只会在`Route.push`调用或`<link>`调用上触发

   - `next/router`是一种客户端路由器。当您在浏览器中重新加载页面或输入地址时，请求将由服务器处理，因此您不会看到像`routeChangeStart`这样的事件。

     您可以实现同时适用于客户端和服务器端路由的客户端重定向。

   - 客户端重定向：

     ```javascript
     const router = useRouter();
     
     useEffect(() => {
       router.push('/redirectLocation');
     }, [])
     ```

     复制

     如果您需要在服务器端响应浏览器之前进行重定向，则必须实现自定义服务器。





