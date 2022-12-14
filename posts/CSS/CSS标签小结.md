---
title: 'CSS标签小结'
date: '2022-9-22'
excerpt: form表单,表格标签
isFeatured: true
classify: 'CSS'
image: css.jpg
codeDemo: 
---

# 表格标签

```html
<table>
    <thead>
        <tr>
            <th>姓名</th>
            <th>性别</th>
            <th>班级</th>
         </tr>
    </thead>
    
    <tbody>
         <tr>
            <td>张三</td>
            <td>男</td>
            <td>1910</td>
         </tr>
    </tbody>
</table>
```

| 标签  | 描述                                |
| ----- | ----------------------------------- |
| table | 表示一个表格元素                    |
| thead | 表格的头部信息部分,包含表头         |
| tbody | 表格的主要内容部分,包含有单元格     |
| tr    | 表示表格中的一行,限制内部的内容位置 |
| th    | 表头的单元格                        |
| td    | 表格内容的单元格                    |

## form表单

### 表单控件

```html
<input type="text"/>    /*文本输入框*/
<input type="password"/>	/*密码输入框*/
<input type="submit"/>		/*提交按钮*/
<input type="radio"/>		/*单选框*/
<input type="checkbox"/>	/*多选框*/
<input type="range"/>		/*进度滑块*/
<input type="image"/>		/*引入图片资源*/
<input type="email"/>		/*邮箱输入框*/
<input type="url"/>			/*地址输入框*/
<input type="color"/>		/*颜色选择*/
<input type="date"/>		/*日期选择*/
<input type="number"/>		/*数字输入框*/

<select>			/*下拉选框*/
    <option>1</option>
    <option>2</option>
    <option>3</option>
</select>
```

**placeholder :给input输入框设置一个提示信息**

**value属性:每一个表单控件都有value属性,它所对应的值是需要form表单提交的值**

**name属性:用于表示当前表单控件所表示的内容**