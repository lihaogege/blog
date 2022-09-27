---
title: 'NextJs的服务器端请求'
date: '2022-9-27'
excerpt: NextJs的服务器端请求有哪些?NextJs的服务器端请求最多可以请求几个接口?NextJs的服务器端请求是否会影响页面响应速度
isFeatured: true
classify: 'NextJs'
image: nextjs-logo.png
---


# NextJs的服务器端请求

### 服务器端请求之,请求本地文件

> 问题 : 通过测试,我发现 ServerSideProps 和 StaticProps 在根据ID请求本地文件时, 会报错500, 即使 StaticProps设置了fallback:'blocking' 也不可以
>
> 解决方案 : 在StaticProps 对应的 StaticPaths 设置要读取文件的路径提前生成,即可