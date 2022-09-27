---
title: 'NextJs配置多语言-react-intl组件'
date: '2022-9-27'
excerpt: react-intl配置nextjs项目的多语言,中英文切换
isFeatured: true
classify: 'NextJs'
image: nextjs-logo.png
---

# 【react-intl组件】系统国际化——react-intl用法

经过多方面的考察，决定选择较为成熟的库[react](https://so.csdn.net/so/search?q=react&spm=1001.2101.3001.7020)-intl来实现系统多语言配置。

##### 使用步骤

## **1.安装react-intl**

```js
npm install react-intl --save
```

**注意：** 为了兼容Safari各个版本，需要同时安装 intl，intl在大部分的『现代』浏览器中是默认自带的，但是Safari和IE11以下的版本就没有了，这里需要留个心眼。

安装intl需要在终端中输入以下指令：

## **2.配置locale文件**

> 在src下新建一个locales文件夹，放置`en_US.js`和`zh_TW.js`文件，分别为英文和中文的配置包。

```js
const enUS = {
  help: "Help",
  personalCenter: "Personal center",
  logout: "Sign out",
};
export default enUS;
```

```js
const zhTW = {
  help: "幫助",
  personalCenter: "個人中心",
  logout: "退出登錄",
};
export default zhTW;
```

## **3.引入react-intl**

由于`IntlProvider`包裹一次即可生效，把它包裹在系统根组件最外层即可。
`locale`用于国际化数字、日期等，默认为`en`，这里设置成浏览器语言；
`messages`接受的是一个对象，即引入的语言包。

```js
import { IntlProvider } from "react-intl";
import zhTW from "../locales/zh_TW";
import enJS from "../locales/en_US";

handleMessages = lang => {
    let res = null;
    switch (lang) {
      case "zhTW":
        res = zhTW;
        break;
      case "enUS":
        res = enJS;
        break;
      default:
        res = zhTW;
    }
    return res;
  };
  //...
 <div className={styles.root}>
        <IntlProvider
          locale={navigator.language}
          messages={this.handleMessages(lang)}
        >
            <Layout>
           // ...
            </Layout>
        </IntlProvider>
      </div>
```

## **4.配置多语言字符串**

> 在需要国际化的地方引入`FormattedMessage`，传入对应的id：

```js
import { FormattedMessage } from "react-intl";
//...
<div>
        {/* 幫助 */}
        <FormattedMessage id="help" />
      </div>
```

`FormattedMessage`也可以传入参数，写法如下：

```js
<FormattedMessage
    id='superHello'
    description='say hello to Howard.'
    defaultMessage='Hello, {someone}'
	tagName="h1" // DOM元素节点名称
    values={
        someone:this.props.name,
    }
    />
```

同时locale配置：

```js
superHello:"你好，{ someone } !"	
```

更多用法可以参考[官网](https://github.com/formatjs/react-intl)。

> **PS：** antd pro使用的是umi 插件 [umi-plugin-locale](https://github.com/umijs/umi-plugin-locale) ，封装了react-intl, api 与 react-intl 基本相同，并做了封装使用起来更加方便。
> 可以参考：https://pro.ant.design/docs/i18n-cn