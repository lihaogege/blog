---
title: '数据库-MySql'
date: '2022-8-15'
excerpt: 数据库存储,MySQL数据库的小结
isFeatured: false
classify: 'MySql'
image:
codeDemo:
---

# 数据库

> HTML,CSS,javascript是前端的三大基石,
>
> HTML为网页添加骨架,是网页的结构层
>
> css为网页添加样式,是网页的表现层
>
> JavaScript为网页添加交互效果,获取数据使网页称为动态网页,是网页的行为层
>
> JS向服务器发送请求获取数据,服务器接收到请求后根据请求需要的数据从数据库提取出来,然后经过处理返回给JS
>
> 对于一个网站而言,网站的数据是非常重要的,所以数据的存储,数据的安全,数据获取的速度等都是至关重要的

## 数据存储

### 生活中的数据存储

- 日记 ,账本 ,大脑等
- 大量数据使用表格存储

> 表格存储使得数据更加的调理清洗,并且查看也更加方便,所以我们学习的数据库存储也是以表格的方式存储数据

### 数据库存储

- 关系型数据库存储系统

  MySQL:MySQL数据库就是将大量的数据通过表格进行存储

  - MySQL数据库存储的重要概念
    - 库:存储数据的仓库
    - 表:存储一系列具有相同特点的数据的表格
    - 链:表格与表格之间存在某种联系,这种联系称为链

- 非关系型数据库存储系统

  MongoDB

## MySQL数据库

> MySQL是运行于服务器端的最流行的关系型数据库管理系统之一
>
> MySQL数据库的关系我们可以理解成是一个又一个表格的关系

### 数据库是以表格的形式存储数据,表格中基本的概念

- 表头:表头指定了这一列是什么数据
- 行:用来描述一个完整数据,人/事物的详细信息
- 列:一系列具有相同数据类型的集合
- 值:行中的具体信息,就是单元格中的具体信息
- 键:用于区分数据的唯一标识,具有唯一性

### 数据存储文件类型

- .frm:是描述表的结构
- .MYD:存储表格的数据记录
- .MYI:存储表格的索引

## 数据库管理

### 命令行工具进行管理

#### 进入MySQL数据库

- windows系统:打开MySQL的运行文件,输入以下指令进入mysql操作中

  ```mysql
  mysql -u user -p password
  mysql -u user
  mysql -u user -p
  mysql -u user -p password --default-charactor-charset=utf8
  ```

- map

  ```mysql
  /Applications/MAMP/Library/bin/mysql -u root -p
  ```

  **默认用户名是root 密码为空**

  #### 数据库的操作命令

  | 命令                                          | 介绍                                                       |
  | --------------------------------------------- | ---------------------------------------------------------- |
  | show databases                                | 查看所有的数据库                                           |
  | create database                               | 创建一个数据库                                             |
  | use 数据库名称;                               | 进入数据库                                                 |
  | show tables;                                  | 查看数据库中的全部数据库表                                 |
  | desc 数据库表名                               | 查看表结构的详细信息                                       |
  | drop database 数据库名                        | 删除指定的数据库                                           |
  | select database()                             | 返回当前正在使用的数据库,就是使用use 数据库名 选择的数据库 |
  | select version()                              | 显示数据库版本                                             |
  | select now();                                 | 显示当前时间                                               |
  | create database 数据库名称 character set utf8 | 创建数据库时设置字符集UTF8                                 |
  | alter database 数据库名称 character set utf8; | 修改数据的字符集为UTF8                                     |

### 数据库的导入与导出

- 导出数据库

  ```mysql
  mysqldump -u 用户名 -p --default-character-charset=uft8 数据库 > 导出的数据库文件名
  mysqldump -u root -p --default-character-charset=utf8 my_database >my_database.sql;
  ```

- 导入数据库:再导入数据库时会遇到不识别汉字导致的乱码,需要在进入mysql时设置默认的字符编码

  ```mysql
  mysql -u root -p --default-character-charset=utf8;
  
  create database 数据库名;
  create database mu_database;
  
  //选择数据库
  use 数据库名;
  use mu_database;
  
  //导入数据库
  source sql文件的路径(数据库文件路径)
  source/test/my_database.sql;
  // 在导入数据库是将路径中的 \ 替换为 /
  ```

### 可视化工具进行管理

- phpmyadmin
- navicat



## 数据库操作语言

> 数据库操作语言分为三大类
>
> DML:用于操作数据的语言,对数据进行增删改查的操作,占据了数据库操作语言的80%,语句分别为
>
> SELECT(查), INSERT(增) , DELETE(删) UPDATE(改)
>
> DDL:用于操作数据库表的语言,包括创建数据库表,修改数据库表的相关信息等,CREATE(创建), ALTER(修改) DDL可以在创建数据库表的时候定义列类型,定义表与表之间的联系
>
> DCL:用于操作数据库的语言.用来设置或修改数据库用户或角色权限的语句,

## DML的基本使用

### 练习前准备

- 创建数据库 my_database

  > create database my_database

- 选择数据库 my_database

  > use my_database;

- 创建数据库表 my_table

  > create table my_table(
  >
  > id int(20),
  >
  > name varchar(20),
  >
  > description varchar(255)
  >
  > );

- 查看数据库表 my_table中的数据

  > select * from my_table;

- 向数据库表my_table中添加一条数据

  > insert into my_table (id,name,description) value(1,'张三','张三今年18岁就读火星大学');

- 添加数据时会遇到中午乱码,需要修改表,数据库的字符集

  > alter database my_database character set utf8;
  >
  > alter table my_table character set utf8;
  >
  > alter table my_table convert to character set utf8;

### DML基本命令

#### INSERT

| 标题  | 语句                                                        |
| ----- | ----------------------------------------------------------- |
| 语句1 | insert into 表名 values(值1,值2,值3...);                    |
| 语句2 | insert into 表名(字段1,字段2,字段3...) value(值1,值2,值3..) |

- 语句1 :在添加数据时,值必须与数据表的字段一一对应,也就是与数据库表头中的内容一一对应

- 语句2 :可以对部分列进行数据添加,添加的值必须与前面的字段一一对应

- 添加所有列:

  ```mysql
  insert into my_table (id,name,description) values(1,'张三','学习非常认值');
  ```

- 添加部分列

  ```mysql
  insert into my_table (name,description) values('李四','学习很刻苦');
  ```

- 如果主键设置了自增,主键也就是id可以自动生成

- 添加所有列的简写

  ```mysql
  insert into my_table values(id值,name值,description值);
  insert into my_table values(2,'王五','王五非常自觉');
  ```

- 一次性添加多行数据

  ```mysql
  insert into my_table values(值1,值2,值3...),(值1,值2,值3,...)...;
  insert into my_table values(1,'李昊翰','很帅'),(2,'李昊翰2','特别的帅'),(3,'李昊翰3','超级的帅');
  ```

  **添加多行数据时,一定要保证值与字段一一对应的关系**

  **如果列类型是字符型,添加数据时必须加上引号,否则会将它识别成一个变量,引发不必要的错误**

#### SELECT

| 分类  | 语句                             |
| ----- | -------------------------------- |
| 语句1 | select * from 表名;              |
| 语句2 | select 字段1,字段2,...from 表名; |
| 语句3 | select * from 表名 \G;           |

- \G表示将查询到的结果换一种方式进行展示,可以让数据量较多较长的数据展示的更加清晰条理

- 查询全部的数据

  ```mysql
  select * from my_table;
  select id,name,description from my_table;
  ```

- 查询部分列的数据

  ```mysql
  select id,name from my_table;
  ```

#### UPDATE

> 基本语法:
>
> update 表名 set 字段1=值1,字段2=值2,字段3=值3....where 条件;
>
> **如果更新语句,不添加where条件,会将数据库表中所有的数据都进行更新**

```mysql
undate my_table set description='积极向上,勇往直前'where id=1;
```

#### DELETE

> 基本语法:
>
> delete from 表名 [where 条件];
>
> **如果删除语句不添加where条件,会将数据库表中所有的数据都删除掉**

```mysql
delete from my_table where id=3;
delete from my_table;  //删除所有数据
```

## DML查询模型(SELECT查询模型)

> 在项目开发过程中,对于数据库的查询操作是最频繁的,所以写出高效的sql查询语句是有效的数据库优化方式

### 完成的SELECT查询语句

```mysql
select 字段(*) from 表名
[where 条件]
[group by 条件]
[having 条件]
[order by 条件]
[limit 条件]
```

| 序号 | 条件 | 语句     | 描述                                                         |
| ---- | ---- | -------- | ------------------------------------------------------------ |
| 1    | 条件 | where    | 只要where后面的条件为真,就会返回当前这一条数据<br>where后面的条件语句:<br/>1.关系运e算符: = !=  <  <=  >  >=  <br>2.逻辑运算符 and(与)  or(或) <br>3.模糊查询: like  not like  (%可以匹配任意多个字符,_可以匹配任意的一个字符) in   not in  ,  between and<br>4.是否为空:  is null   is  not null |
| 2    | 分组 | group by | 根据条件对数据进行分组处理,一般会结合5个聚合函数使用,max   ,min   ,avg ,  sum ,count |
| 3    | 筛选 | having   | 根据前面select查询出来得数据再次进行筛选,不会对数据库中得数据直接进行筛选操作 |
| 4    | 排序 | order by | 根据条件将数据进行升序(asc)或降序(desc)排序                  |
| 5    | 限制 | limit    | 根据条件将数据分批次进行获取,比如可以限制一次只能拿5条数据,常用作分页 |

#### where条件查询

```mysql
select 字段(*) from tablename where 条件;
```

> 在查询过程中,很多时候需要借助函数来将数据进行修改等操作
>
> MySQL中得函数
>
> | 函数                        | 介绍                                                         |
> | --------------------------- | ------------------------------------------------------------ |
> | substring(str,start,length) | 字符串截取,str是被截取得字符串,start是截取开始得位置,length是指截取得字符串长度 |
> | concat(str1,str2,str3...)   | 字符串拼接,将多个字符串拼接到一起                            |

```mysql
主键为32的商品
select * from goods where goods_id=32;
不属于第3个栏目的所有商品
select * from goods where cat_id!=3;
本店价格高于3000的商品
select * from goods where shop_price>3000;
本店价格低于或等于100的商品
select goods_id,goods_name,shop_price, from goods where shop_price<=100;
取出第4个栏目或第11个栏目
select goods_id,goods_name,cat_id from goods where cat_id=3 or cat_id=11;
取出100<=价格<=500的商品 shop_price>=100 and shop_price<=500

select goods_name,cat_id,shop_price from goods where shop_price>=100 and shop_price<=500;
between 100 and 500

select goods_name,cat_id,shop_price from goods where shop_price between 100 and 500;
取出不属于第3个栏目，且不属于第11个栏目的商品(and 或 not in 分别实现)

select goods_name,cat_id from goods where catid!=3 and cat_id!=11;
select goods_name,cat_id from goods where cat_id not in (3,11);
取出第3个栏目下价格<1000或>3000并且点击量>5的商品
select goods_name,cat_id,goods_id,shop_price,click_count from goods where cat_id=3 and (shop_price<1000 or shop_price>3000) and click_count>5;
取出价格大于100且小于300,或大于4000且小于5000的商品
select goods_name,cat_id,goods_id,shop_price from goods (shop_price>100 and shop_price<300) or (shop_price>4000 and shop_price<5000);
取出名字以‘诺基亚’开头的商品
select goods_id,goods_name from goods where goods_name like "诺基亚%";
取出名字为“诺基亚Nxx”的手机
select goods_id,goods_name from goods where goods_name like "诺基亚N__";
取出名字不以‘诺基亚’开头的商品
select goods_name from goods where goods_name not like "诺基亚%";
取出第3个栏目下面价格在1000到3000之间，并且点击量>5"诺基亚"开头商品
select goods_name,shop_price,click_count from goods where cat_id=3 and click_count>5 and goods_name like "诺基亚%";
把goods表中的商品名为"诺基亚xxx"的商品改为"HTCxxx" 提示：把列看成变量，参与运算，甚至调用函数来处理
select goods_name from goods where goods_name like "诺基亚%";
select concat('HTC',substring(goods_name,4)) from goods where goods_name like "诺基亚%";
```



#### GROUP BY

- MySQL的聚合函数

  | 函数       | 介绍                            |
  | ---------- | ------------------------------- |
  | max(col)   | 获取col这一列中数据的最大值     |
  | min(col)   | 获取col这一列中数据的最小值     |
  | avg(col)   | 获取col这一列中数据的平均值     |
  | sum(col)   | 获取col这一列中数据的和         |
  | count(col) | 获取col这一列的数据条数(数据量) |

- GROUP BY基本语法

  ```mysql
  select 字段(*) from 表名 group by 条件;
  ```

  ```mysql
  //查询所有商品的平均价格
   select avg(shop_price) from goods;
   //查询最贵的商品
   select  max(shop_price) from goods;
   //查询最便宜的商品
  select  min(shop_price) from goods;
  //查询商品的总价格
  select sum(shop_price) from goods;
  //查询本店积压的商品总货款
   select sum(goods_number*shop_price) from goods;
  //统计每个栏目下商品的平均价格
  select cat_id,avg(shop_price) from goods group by cat_id;
  //查询每个栏目下有多少种商品
  select cat_id,count(*)as num from goods group by cat_id;
  //查询每个栏目下最贵的商品
   select cat_id,max(shop_price),goods_name from goods group by cat_id;
   //查询每个栏目下商品库存量
  select sum(goods_number),cat_id from goods group by cat_id;
  ```

#### HAVAING 筛选

> 对where和group by查询到的结果进行筛选.having筛选不会直接对磁盘进行操作,只会对查询到的数据进行操作

```mysql
select 字段(*) from 表名 where 条件 group by 条件 having 条件
```

```mysql
1.查询比市场价格省钱200以上的商品及该商品所省的钱(where having)
select goods_id,goods_name,market_price-shop_price as sheng from goods where market_price-shop_price>200;
/
select goods_id,goods_name,market_price-shop_price as sheng from goods having sheng>200;
```

**注意:如果上面的指令中where条件也使用别名sheng,会报错,因为where是直接对磁盘中存储的数据进行条件设置筛选,而sheng是我们模拟出来的一个字段,它本身不存在数据库中**

**having筛选本身就是对已经查到的数据集合进行筛选,所以它能够使用我们虚拟出来的字段sheng,不会直接操作磁盘**

#### ORDER BY 排序

> order by 排序 分为两种asc升序 desc 降序

- 基本语法

  ```mysql
  select 字段(*) from 表名 order by 条件 asc; //升序
  select 字段(*) from 表名 order by 条件 desc; // 降序
  ```

  

练习题

```mysql
1.按照价格进行排序
 select goods_id,goods_name,shop_price from goods order by shop_price asc;
2.按照栏目进行排序
 select goods_id,goods_name,cat_id from goods order by cat_id asc;
3.按照栏目升序排列后，在每个栏目中按照价格降序排列
select goods_name,cat_id,shop_price from goods order by cat_id,shop_price desc;
```

#### LIMIT

> 可以限制我们一次取出的数据的条数 ,一般配合order by使用 功能更加强大

- 基本语法

  ```mysql
  select 字段(*) from 表名 order by 条件 limit num; 
  在排序后拿到前面num条数据
  select 字段(*) from 表名 order by 条件 limit offsetNum,num;  //在排序后 跳过offsetNum条数据再拿num条数据
  ```

- 练习题

  ```mysql
  //取出价格最高的前三名商品
  select goods_name,shop_price from goods order by shop_price desc limit 0,3;
  ```

- 拓展

  > 结合limit的基本用法,可以实现分页功能,根据前台传递的页面和每页展示的条数可以按需要获取相应的数据
  >
  > 页码 pageNum
  >
  > 每页展示的数据条数 pageSize
  >
  > limit (pageNum-1)*pageSize,pageSize 公式可以实现前台的分页功能

### 子句查询

> 将一个查询的结果集作为另一个查询的条件来使用,这个就是子句查询

- **where型子句查询**

```mysql
select 字段(*) from 表名 where (select 字段(*) from 表名);
```

```mysql
//查询每个栏目下最新的商品
select goods_id,goods_name from goods where goods_id=(
select max(goods_id) from goods);
//查询每个栏目下最新的商品
select goods_id,goods_name
```



- **from型子句查询**

## 多表联合查询

> 再实际的业务中,我们很多时候不会只操作一张表,我们会将很多信息分表存储,进行查询,需要的时候进行多表联合查询,那么联合查询的核心其实就是表连接

### 表连接的分类

- 内连接

| 标题   | 分类       | 描述/语法                                                    |
| ------ | ---------- | ------------------------------------------------------------ |
| 内连接 |            | 取得两个或多个表之间的联系的数据.                            |
|        | 显示内连接 | 在查询语句中有inner join语句,得到的结果是两个表之间的笛卡尔积 |
|        | 隐式内连接 | 在查询语句中没有inner join语句  得到的结果是两个表之间的笛卡尔积 |

- 外连接

| 标题   | 分类     | 描述/语法                                                    |
| ------ | -------- | ------------------------------------------------------------ |
| 外连接 |          | 是指将外部的表数据连接到自己的表中                           |
|        | 左外连接 | 将左侧表中的数据提取出来连接到右侧表中去查找数据,如果没有使用null补充 |
|        | 右外连接 | 将右侧表中的数据提取出来连接到左侧表中查找数据,如果没有使用null补充 |

### 表连接的应用

#### 内连接

- 基本语法

| 分类       | 语法                                           |
| ---------- | ---------------------------------------------- |
| 显示内连接 | select 字段(*) from 表1 inner join 表2 on 条件 |
| 隐式内连接 | select 字段(*) from 表1,表2... where 条件 ;    |

#### 外连接

- 基本语法

| 分类     | 语法                                         |
| -------- | -------------------------------------------- |
| 左外连接 | select 字段 from 表1 left join 表n on 条件;  |
| 右外连接 | select 字段 from 表1 right join 表n on 条件; |

### UNION连接查询

> UNION查询用于将两个SELECT查询结果集合并成一个结果集
>
> 在UNION查询的SELECT语句中签后的结果集必须拥有相同数量的列,以及相似的列数据类型
>
> 前后两个SELETE查询语句的列数量和顺序必须一致

#### 基本语法

```mysql
select查询1 union select查询2;
select查询2 union all select查询2;
```

**union连接查询,会将完全相同的数据进行合并,所以union连接查询会一一比较数据是否完全相同,这样的执行效率比较低**

**一般使用union all 进行查询,只将前后的查询进行合并,无需判断是否相同**

### DDL基本使用

#### 创建数据库表

> 指的是根据业务需求分析表的字段,进行数据库表创建
>
> 比如创建一个学生信息表需要的字段可能有 sid sname ssex  sage  sphone  saddress

```mysql
create table 表名(
	字段1 列类型 [列属性] [列属性],
    字段2 列类型 [列属性] [列属性],
    字段3 列类型 [列属性] [列属性],
    ...
)ENGINE=InnoDB default charset=utf8;
```

> ENGINE用于定义数据表库的存储引擎
>
> charset 用于设置数据库表的字符集
>
> default表示默认

- 创建一个学生信息记录表

```mysql
create table students(
	sid int(10) not null primary key auto_increment,
    
)
```

- 一些常用的列属性
  - not null 列不能为空
  - primary key 列为主键
  - auto_increment 自增属性
  - default 设置默认值

### 列类型

> 列类型大概分为三类;
>
> - 数值型: 整型 浮点型
> - 字符型
> - 日期时间类型

#### 数值型

##### 整型

| 类型      | 字节 | 最小值         | 最大值           |
| --------- | ---- | -------------- | ---------------- |
| tinyint   | 1    | 带符号 -128    | 带符号127        |
|           | 1    | 无符号 0       | 无符号 255       |
| smallint  | 2    | 带符号 -2^16/2 | 带符号 2^16/2-1  |
|           | 2    | 无符号 0       | 无符号 2^16-1    |
| mediumint | 3    | 带符号 -2^24/2 | 带符号 2^24/2-1  |
|           | 3    | 无符号         | 无符号 2^24-1    |
| int       | 4    | 带符号 -2^32/2 | 带符号  2^32/2-1 |
|           | 4    | 无符号 0       | 无符号 2^32-1    |
| bigint    | 8    | 带符号 -2^67/2 | 带符号 2^61/2-1  |
|           | 8    | 无符号 0       | 无符号 2^64-1    |

**对于人类的年龄而言,我们使用tinyint的无符号类型即可**

##### 浮点型

- float:浮点型

- double:

- decimal:定点型

  **浮点型存储小数时的精确度没有定点型高**

​	float(M,D) :M指的是存储数据的精度,总位数 D:指的是标度,是小数点后的位数

​	double,decimal 用法和float一致,只是double的存储数据范围会更广, decimal存储小数的精确度高

#### 字符型

> char varchar text/blob  enum

- char: 定长型的字符

  > char:存储数据是定长的,设置占据10个字符的位置,那么即便添加的字符长度不足10个,这个数据依旧会占据10个字符的位置,就像吃自助餐一样

- varchar  :不定长字符

  > varchar:存储的数据是变长的,会根据我们实际添加的字符长度去占据相应的位置,利用率100%,就像在饭店吃饭
  >
  > varchar能够存储的是0-65535之间的任何值

- text  文本

  > text能够存储的内容更大,但是搜索速度慢,所以一般情况下,如果条件允许使用varchar char来代替

#### 日期时间类型

- 类型

| 类型      | 示例                                | 范围                                       |
| --------- | ----------------------------------- | ------------------------------------------ |
| year      | 年  2020                            | [1901-2155]                                |
| Date      | 日期  2020-3-11                     | 1000/01/01~9999/12/31                      |
| time      | 时间  09:10:30                      | -838:59:59~838:59:59                       |
| datetime  | 日期时间  2020-3-11 09:10:30        | 1000/01/01 00:00:00 -> 9999:12:31 23:59:59 |
| timestamp | 是 1970-01-01 00:00:00 到当前的秒数 | 1539227150                                 |

#### 列的默认值

> 如果我们没有给列添加值,他会有默认值 ,默认值为NULL
>
> 如果需要设置字段不能为空	not null

- 设置列不为空,并且添加默认值不为null ,因为null会导致搜索效率变低

```mysql
create table a(
	id int(10) not null default 0
)
```

#### 列的删除修改添加

- 添加列

```mysql
alter table 表名 add 列名 数据类型 [列属性] [列属性] ...; //默认,添加在数据库表的最后
alter table 表名 add 列名 数据类型 [列属性] [列属性] ... after 列名  // 添加在数据库表的某一列后面
alter table 表名 add 列名 数据类型 [列属性] [列属性] ... first; // 添加的列成为数据库表的第一列
```

- 修改列的名称

```mysql
alter table 表名 change 旧列名 新列名 新数据类型 [新属性] [新属性] ...;
```

- 修改列属性

```mysql
alter table 表名 modify 列名 [新数据类型] [新属性] [新属性] ...;
```

- 删除列

```mysql
alter table 表名 drop column 列名;
```

- 添加主键

```mysql
alter table 表名 add primary key 列名;
```

- 修改表的默认字符集

```mysql
alter table 表名 default character set utf8;
```

#### 删除或清空表

- 删除表

```mysql
drop table 表名;
```

- 清空表数据

```mysql
truncate 表名;   //与delete不同的是,这个清空以后所有的数据主键都会重置,新的数据主键从1开始,而delete是假删除,它的主键不会清空,新的数据的主键会从之前最大的主键开始进行自增
```

#### 修改数据库表的名称

```mysql
alter table 旧表名 rename 新表名;
```

## 主键与自增

> **主键是用于区分数据的唯一标识,通过主键搜索数据会提高搜索的效率**
>
> 注意:一张表只能有一个主键

### 主键的设置原则

- 主键应该是对用户没有意义的
- 主键应该是单列的,提高连接和搜索的效率
- 主键不可更改
- 主键不应该包含动态变化的值,比如时间戳等
- 主键应该由计算机自动生成,我们一般使用自增

#### 主键的设置a'l

- 创建表的同时设置主键

```mysql
create table 表名(
	id int(20) not null primary key auto_increment
)
```

- 创建后添加主键

```mysql
alter table 表名 add primary key 列名;
```

- 自增是auto_increment  由计算机自动递增,自动生成主键

### 唯一约束

> 在存储数据的时候,需要确保数据的唯一性,比如注册时的邮箱,手机号码
>
> 通过添加唯一性约束,来确保除了主键外的其他字段的唯一性

```mysql
create table 表名(
	id int(20) not null primary key auto_increment,
    name varchar(20) not null default '',
    phone int(10) not null unique 
)
```

```mysql
alter table 表 modify 列 [新属性] unique
```

```mysql
alter table 表 add unique 列名;
```

- 删除唯一性约束

  ```mysql
  alter table 表名 drop index 列名;
  ```

## 视图

### 什么是视图

> 视图是虚拟表或者逻辑表,它将SELECT查询的结果集作为一张虚拟的表进行存储,我们在访问结果集时可以直接访问这个视图

### 视图的优缺点

- 优点
  - 简化复杂的查询
  - 限制数据对特定用户的访问权限
  - 提供额外的安全层
  - 启用了计算列
  - 实现向后兼容
- 缺点
  - 性能:视图查询数据的效率很低
  - 表的依赖关系:因为是依托于原始表进行的创建,所以当原始表的数据发生变化时,视图也会发生变化

### 视图的基本用法s

- 创建视图

  ```mysql
  create view 视图名 as (select 语句....);
  ```

  **因为视图是依托于基础表创建的,所以基础表更新后视图也会更新**

### 视图的应用场景

#### 权限控制

#### 简化复杂查询

### 可更新视图

>  我们在创建可更新的视图时,SELECT查询语句中不能出现以下的语句

- 聚合函数 如 max  min   sum   avg   count 等
- DISTINCT 子句
- GROUP BY 子句
- HAVING 子句
- UNION   UNION ALL子句
- 左外连接或右外连接
- SELECT子句中的子查询或引用该表的WHERE子句中的子查询出现在FROM子句中。
- 引用FROM子句中的不可更新视图
- 仅引用文字值
- 对基表的任何列的多次引用

### 视图的操作语句

```mysql
show tables;   //查看表或视图
desc 表名/视图名  // 查看表或视图的具体字段信息
show create table 表名;  // 查看表的创建过程
show create view 视图名;  // 查看视图的创建过程
create view 视图名 as select ...; 创建视图
alter view 视图名 as select ...;   //修改视图
drop view 视图名;   // 删除视图
drop table 表名    // 删除表
drop database 数据库名; 删除数据库
```

## 存储引擎

> 存储引擎是用于将数据存储在内存中的一门技术

> 查看当前服务器支持的存储引擎
>
> ```mysql
> show engines;
> ```

### 常用的存储引擎

| 存储引擎 | 描述                        |
| -------- | --------------------------- |
| MylSAM   | 存储效率很高的一种存储引擎  |
| InnoDB   | 支持写入,事物的一种存储引擎 |

**MySQL5以后,InnoDB称为默认的存储引擎**

### 不常用的存储引擎

| 存储引擎 | 描述                                     |
| -------- | ---------------------------------------- |
| Archive  | 归档引擎,压缩比例高达1:10 常用于数据归档 |
| NDB      | 主要用于集群服务中                       |

#### MylSAM

> 不支持事务,表锁,支持全文索引操作速度非常快,常用于读取多的业务

#### InnoDB

- 支持事物,主要面向在线事物处理(OLTP)方面的应用
- 行锁设计,支持外键,默认情况下读取不加锁

#### 相关概念

- 并发控制

  > 当有多个连接对记录进行修改时,保证数据的一致和准确性

- 锁

  - 共享锁(读锁),在同一时间内多个用户可以同时访问读取同一数据,在读取过程中不会发生数据的修改
  - 排它锁(写锁),在同一时间内,只能有一个用户写入资源,当这个用户在写入资源时会阻塞其他的读取或写入的操作

- 表锁:同一时间内只能有一个用户操作这张数据表

- 行锁:同一时间内只能有一个用户操作这一行数据 

- 事物:同时操作多个数据,如果其中一个数据操作失败,会回滚到操作之前,常用于银行等交易系统中

## 主键, 索引 , 外键

| 一   | 主键                                 | 外键                         | 索引                                |
| ---- | ------------------------------------ | ---------------------------- | ----------------------------------- |
| 定义 | 一条数据的唯一标识,不能重复,不能为空 | 外键中存储的是另一张表的主键 | 用于提高查询搜索速度的字段,可以为空 |
| 作用 | 确保数据完整性                       | 与其他表建立联系             | 提高搜索的速度                      |
| 数量 | 只能有一个主键                       | 可以有多个外键               | 一个表可以具有多个唯一性索引        |

## 外键

> 将表A的主键中的值添加到表B中的一个字段,表A和表B之间有了联系,那么这个B中字段就被称为外键

### 使用外键的要求

- 主从表(父子表)必须使用相同的存储引擎,禁止使用临时表
- 数据表的存储引擎只能是InnoDB
- 外键列与参照列必须拥有相似的数据类型
- 外键列与参照列必须创建索引,如果外键列没有索引,MySQL会自动创建索引

### 外键的添加

```mysql
create table father (
	fid int(10) not null primary key auto_increment,
    fname varchar(20) not null default ''
)ENGINE=InnoDB default charset=utf8;
```

```mysql
create table son (
	sid int(10) not null primary key auto_increment,
    sname varchar(20) not null default '',
    pid int(10),
    foreign key pid references father(fid)
)ENGINE=InnoDB default charset=utf8;
```

添加外键

```mysql
alter table 表名 add foreign key 外键字段 references 父表主键;
```

