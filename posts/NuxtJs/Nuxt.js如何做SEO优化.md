---
title: 'Nuxt.js如何做SEO优化'
date: '2022-10-8'
excerpt: Nuxt.js如何做SEO优化? Nuxt.js的坑有哪些?
isFeatured: false
classify: 'NuxtJs'
image:
codeDemo:
---

# Nuxt.js如何做SEO?

## 全局配置

在nuxt.config.js配置文件中,有个head属性可以设置全局的title,content和keywords等属性

```js
  head: {
    title: '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1.0,minimum-scale=1,maximum-scale=1,user-scalable=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

```

## 局部配置

设置某个单独页面的title和关键字等,首先要找到这个页面的JS代码有一个head()方法,同样可以进行一些类似的设置:

```js
head () {
      return {
        title: this.curTitle,
        titleTemplate: '%s - 墨天轮精品课',
        meta: [
          { vmid: 'keywords', name: 'keywords', content: curTitle },
          { vmid: 'description', name: 'description', content: descShort }
        ]
      }
    },

```

### 需要注意的点

1. keywords关键词数量

   - head标签中的keywords关键词数量不能过多，一两个最好。

2. 标题含关键词

   - head标签中的网页标题包含一两个keywords里面的关键词不能过多

3. 正文含关键词

   - 网页正文也需要包含keywords里面的关键词，比例在7%-8%

4. content含关键词

   - head标签中的description中包含关键词，与正文内容相关，文字不要超过200字

5. 正文和标题吻合

   - 网页正文要与head标签中的网页标题的主题高度吻合，否则会导致当前文章被搜索引擎屏蔽。

6. img标签加alt做关键词优化

   - 蜘蛛不能直接识别图片。所以可以使用alt属性，因为alt属性不仅能帮助蜘蛛来识别图片，同时也是蜘蛛识别咱们网页图片的唯一方法。同时合理的使用alt属性，也能提高一下咱们关键词在页面的比例

7. 在a标签加title做关键词优化

   - ```js
     <a hrer=”#” title="xx">
     ```

   - 在后面要加上 title 标签，里面内容是你所要优化的关键字，img 标签中加入描述，可以适当添加关键字