---
title: '博客项目创建指南'
date: '2022-8/15 17:56'
excerpt: 利用Nextjs,react,redux,typescript,RTK,RTKQ等技术搭建的博客项目,供大家参考指正
isFeatured: true
---

# Vuex

> Vuex 是适用于 Vue.js 应用的状态管理库，为应用中的所有组件提供集中式的状态存储与操作，保证了所有状态以可预测的方式进行修改。

- 所有组件提供集中式的状态存储与操作



## 什么时候使用?

- 同一个页面，不同组件使用同一数据，并操作：
- 不同页面，使用同一数据源：
- 来自后端的数据被不同页面使用：
- ........



## 框架的核心流程

1. Vue组件从store中获取状态state
2. 触发commit提交mutation 修改state 触发更新, 自动修改使用state的组件
3. 触发dispath 提交actions 通过 commit 提交miutation 修改state 触发更新,自动修改使用state的组件
4. 在组件中触发dispath 或 commit