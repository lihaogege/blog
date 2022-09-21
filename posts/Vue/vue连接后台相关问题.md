---
title: 'VUE连接后台相关问题(可忽略)'
date: '2022-8/15 17:56'
excerpt: 作者自己的问题小结
isFeatured: true
---

# 问题

1. token 用户data 存储

   × × 内存?  全局变量  Vue.xxx  刷新后 全局变量丢失 Vuex 全局状态管理 (存储在内存中)

   **本地存储 localstorage  sessionstorage**

   ​		**localstorage  5M 永久存储**

   ​		**sessionstorage 5M 会话存储**	 

2. 如何携带token

   **使用 axios 实例 的请求拦截 给headers 添加 token字段**

3. 如何处理 身份认证无效 重新登录



- axios 总结    拦截器    (请求拦截器,响应拦截器)
- vue-router   导航守卫 (全局前置守卫)