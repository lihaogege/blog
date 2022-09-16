# 搭建项目

#### 创建next的typescript模板

> NextJs提供了TypeScript的创建模板

1. create-next-app project-name --typescript  || npx create-next-app project-name --typescript

#### 引入Ant designUI

> 因为是React工程  UI首选Ant Design

1. npm add antd

#### 配置LESS

1. npm add  less less-loader next-with-less --save

2. ```js
   next.config.js中 
   
   const withLess = require("next-with-less");
   module.exports = withLess({
     reactStrictMode: true,
     swcMinify: true,
   })
   ```

#### 新增文件夹

1. store
   - 用于添加Context
   - 用于添加Redux || ReduxRTK || ReduxRTKQ

2. components
    - UI
     - 用于添加公共组件 比如卡片 提示框等等
   - 用于添加子组件

3. heplers
   - 用于封装可服用JS

4. hooks
   - 用于封装自定义钩子

