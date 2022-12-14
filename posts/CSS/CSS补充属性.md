---
title: 'CSS补充属性'
date: '2022-9-22'
excerpt: CSS属性知识
isFeatured: true
image: css.jpg
classify: 'CSS'
codeDemo: html-css3 
---

# 盒子撑大问题的解决方法

> 边框和内填充会撑大盒子,导致盒子占据的空间变大

- 解决方法

  - 给元素的width  height  减少相应的值

  - 给元素设置属性

    > box-sizing:border-box;



# dispaly属性

- display:none;隐藏元素
- display:block;显示元素/讲元素转换为块元素

## 文本相关属性

- 单行文本超出部分省略号显示

  ```css
  选择器 {
      overflow:hidden;    // 超出隐藏
      text-overflow:ellipsis;   // 超出显示省略号
      white-space:nowrap;  // 不换行
  }
  ```

- 属性

  - word-break:normal   |  break-all  |  keep-all

    > norml表示使用浏览器默认的换行;  break表示允许单词内换行;  keep-all表示只能在半角空连字符处换行

  - word-wrap:normal  |  break-word

- 多行文本超出部分省略号显示

  ```css
  选择器{
      display:-webkit-box;
      -webkit-box-orient:vertical;
      -webkit-line-clamp:3; /*固定显示3行,超过3行省略号显示*/
      overflow:hiddenl
  }
  ```

- 自定义字体

  ```css
  @font-face{
      font-family:字体名称;
      src:url("字体文件路径") url("字体文件路径") 
  }
  div{
      font-family:字体名称   /*即可使用*/
  }
  ```

  