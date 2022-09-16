---
title: '博客项目创建指南'
date: '2022-8/15 17:56'
excerpt: 利用Nextjs,react,redux,typescript,RTK,RTKQ等技术搭建的博客项目,供大家参考指正
isFeatured: true
---

# Nodejs

> 应用

1. 前端工程化:基于Nodejs开发各种命令行工具, 包    @vue/cli   create_react-app    less sass  webpack  

   u-reset.css   element-ui   iview

   模拟数据服务器

2. 服务器端开发:  可以通过Web开发框架结合数据库

   - 基础:   express    koa        非常底层  路由+中间件
   - 企业级  
     - 企业级应用  egg.js(koa2  阿里)   thinkjs(koa2  360)
     - 爬虫

#### 1.什么是nodejs?

> Nodejs是一个javascript的运行平台 , 可以让jacascript 运行在浏览器之外

#### 2.NodeJS特性

- 单线程     在操作系统中有进程,线程
- 异步I/O /非阻塞      (事件驱动)
- 跨平台    windows  MacOSX  Linux
- 运行速度快(依赖于Chrome V8引擎)



## Node js模块系统规范实现基于CommonJS

1. Javascript模块化

   - 浏览器端  AMD   CMD  ES   module
   - 服务器端 CommonJS
   - 统一模块化  UMD

2. 什么是模块

   > 模块是Node.js 应用程序的基本组成部分，文件和模块是一一对应的。 在Nodejs中每个模块都拥有自己独立的作用域

3. 模块分类

   - 原生模块(nodejs自带,亲生)  nodejs启动时已加载

   - 文件模块(开发者写的 别人生的)

     - 获取模块     自己开发,其他地方下载
     - 加载模块     require(模块路径)

     模块分类

     - .js
     - .node
     - .json

4. 模块操作

   > 在编写每个模块时，都有require、exports、module三个预先定义好的变量可供使用。

   - 定义模块

     > exports = {}

   - 加载模块

     > require('模块路径')

   require方法接受以下几种参数的传递:

   - http、fs、path等，原生模块。
   - ./mod或../mod，相对路径的文件模块。
   - /pathtomodule/mod，绝对路径的文件模块。
   - mod，非原生模块的文件模块



# 内容总结

1. nodejs介绍

2. 下载与安装, 运行方式

3. 模块系统

4. 包

5. NPM    下载包 卸载包 发布包等等

6. global

7. buffer

8. console

9. 事件循环

10. 核心模块 fs   操作文件

11. path   处理路径

12. url  处理网址   queryString  处理查询字符串

13. os

14. crypt   加密模块

15. 事件  on 

16. 流,    fs.createReadStream()     f.createWriteStream()

17. http   用来创建服务器的

    > const http = require('http')
    >
    > http.createServer(function(req,res){
    >
    > ​        req 请求   可读流   
    >
    > ​		req.on('data',function(){}
    >
    > ​		req.on('end',function(){})
    >
    > ​		req.pipe()
    >
    > ​		req.url
    >
    > ​		req.headers
    >
    > ​	res  响应   可写流
    >
    > ​		res.write()
    >
    > ​		res.end()
    >
    > ​		res.statusCode
    >
    > ​		res.setHeader()
    >
    > }).listen(8080)

## Express

> Express 是一个基于 Node.js 平台的极简、灵活的 web 应用开发框架，它提供一系列强大的特性，帮助你创建各种 Web 和移动设备应用。
>
> Express 本质是将http进行了封装
>
>  Express 模拟数据  Webpack 内置express  基于express 开发静态资源服务器

#### 基本使用

1. 创建项目目录

   mkdir  webapp1

   cd webapp1

   npm init -y

2. 安装express

   npm i express -S

3. 基本使用

   const express =  require('express')

   const app = express();



​	//app.METHOD(PATH,HANDLER)

​	app.get('/',function(req,res)(){

​	res.query

​	res.send()       // res.send = res.write()   + res.end()

}).listen(8080)