---
title: 'PHP-TP框架'
date: '2022-8-15 17:56'
excerpt: 利用Nextjs,react,redux,typescript,RTK,RTKQ等技术搭建的博客项目,供大家参考指正
isFeatured: false
classify: 'PHP'
image:
codeDemo:
---

# 回顾和总结

1. TP框架
2. 介绍面向对象与MVC
3. 安装 git  composer
4. 架构
5. 开发规范
6. 目录结构
7. 配置
8. 控制器   初始化 前置  重定向
9. 请求   Request   request
10. 数据库   Db  配置文件    各种操作
11. 模型   定义配置
12. 视图
13. 模板

- 扩展   安全,   软件开发流程  layUI
- 项目
  1. git  仓库  创建开发环境
  2. 安装TP
  3. 配置虚拟主机域名
  4. 功能模块开发



## 登录模块

- 登录  退出登录  登录权限 密码加密

- 登录流程

  -  前台  表单  ---ajax---> Login控制器   -----> Login模型   checkLogin验证

    ​		----->成功后   :: 跳转到主页

    ​		------>失败后  ::   Login控制器 ---> 前台 用户提示

  - 退出登录:

    1. 清理登录状态  Session::clear()   Session::destory()
    2. 跳转至登录页

  - 访问权限

    1. 登录成功    Session::set('isLogin',true)

    2. 需要登录页面, 进行权限判断

       if(!Session::get('isLogin')){

       ​	return   $this->error('没有登录权限','URL')

       }

## 网站信息

- 从数据库中 查询 网站信息    修改网站信息
- 查询 ::    模型  --->控制器   ---->  获取数据挂载到视图  -->视图渲染

- 修改 :: 控制器(接收数据)   -----> 模型(处理数据并返回结果) -->  成功/失败

- 上传文件 :: 
  - 原生  ajax 上传文件   (jquery  ajax  上传文件有问题)
  - layui  upload模块

## 导航管理

> 功能 .   展示导航  添加导航   删除导航 编辑导航

## 案例管理

>  案例分类   增删改查
>
>  案例项目 增删改查

## 资讯管理

> 功能  :  增删改查

## 留言管理

> 功能 : 增删改查