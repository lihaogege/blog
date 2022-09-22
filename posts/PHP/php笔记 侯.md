---
title: 'ThinkPHP框架'
date: '2022-8/15 17:56'
excerpt: ThinkPHP框架可以用于什么类型得项目开发?
isFeatured: false
classify: 'PHP'
---

## ThinkPHP框架可以用于什么类型得项目开发

- PC网站  移动端网站 软件 系统
- 微信 QQ 支付宝 百度 头条 钉钉 等等 提供API接口
- APP
- 桌面应用

## 架构总览

- URL访问
- 入口文件
- 应用
- 模块
- 控制器
- 操作
- 模型
- 视图

> 入口文件
>
> URL访问
>
> 命名空间
>
> 生命周期

## 开发规则

小写字母 + 下划线 : 目录 , 函数 , 字段名

大驼峰	: 控制器   模型  类名称

小驼峰	: 类的属性 和 方法

大写字母 + 下划线	: 常量

## 目录结构

## 配置加载
- 在tp中 一般来说应用的配置文件是自动加载的, 加载的顺序是

function index (){
$this -> request 请求
$this -> view 视图实例
$this -> beforeActionList = []  前置操作
$this -> fetch($template,$cars,$replace,)
}



