---
title: 'PHP'
date: '2022-8-15 17:56'
excerpt: 利用Nextjs,react,redux,typescript,RTK,RTKQ等技术搭建的博客项目,供大家参考指正
isFeatured: false
classify: 'PHP'
image:
codeDemo:
---

# PHP

# Web开发介绍

### Web开发体系结构

- C/S架构

  > C/S架构指的是Client/Server架构,也就是客户机/服务器 架构,将任务合理的分配在客户端和服务端,能够充分利用两端硬件的优势,用户体验效果更好,早期的项目开发都会选择这种开发体系

- B/S

  > B/S架构指的是Browser/Server 架构 也就是 浏览器 / 服务器 架构, 随着Internet发展 将C /S 架构进行了一定的改进, 用户页面通过 www浏览器进行开发,部分事物逻辑放在前台完成,大部分的事物逻辑放在后端完成
  >
  > B/S 架构 主要是利用日益强大的WWW浏览器 结合其中的脚本语言javaScript,通过浏览器就可以实现以前需要专门软件实现的复杂逻辑,极大的节约了开发成本, 是一种全新的软件系统构造技术

### 名词解释

- 服务器:提供服务的角色

  > 服务器可以是专业的服务器,也可以是一台电脑
  >
  > 服务器是可以通过特定的IP地址特定的端口去监听客户端的请求,并且根据请求的URL地址响应的数据

- 客户机:享受服务的角色

  > 客户端可以是我们常用的可视化的电脑 , 也可以是命令窗口
  >
  > 只要能够向特定的IP地址特定的端口发送请求,并且接收响应的都可以叫做客户端

## HTTP协议

> HTTP协议是超文本传输协议,是网络间通讯的一种规则,

### HTTP协议的通信过程

> 客户端与服务器通信,会经过TCP的三次握手,最终获取到服务器的响应后,会断开TCP,这个就是常听到的3次握手4次挥手

# PHP基础

## PHP变量

> 与JS相同,变量是用于存储数据的容器

## 变量的命名规范

- 严格大小写
- 变量名必须以$符开头
- 变量名必须是字母,下划线开头的
- 变量名只能是数字,字母下划线组成
- 数字不能开头,空格不能开头

### PHP不同输出语句

- echo常用的输出语句
- print() 输出语句
- printf() 格式化输出字符串
- print_r(); 输出数组
- var_dump(); 判断一个变量的类型和长度,并输出变量的数值

## 变量声明

```php
$变量名 = 值;
$num = 10;
```

## 变量的操作

- gettype(var);

  > 检测变量的类型

- isset(var);

  > 检测变量是否存在;

- unset(var);

  > 销毁变量

- empty(var);

  > 判断变量得值是否为空null

  - 如果变量创建了但是没有赋值,empty返回true.
  - 如果变量创建并赋值,但是赋得值为0,'0' "", NULL ,false   array 以及没有任何成员得对象 empty检测结果都为false
  - 如果变量创建并赋值,赋得值不包含0,'0' "", NULL ,false   array 以及没有任何成员得对象 empty检测结果都为true

### 预定义变量

| 变量名词                    | 介绍                                 |
| --------------------------- | ------------------------------------ |
| $_SERVER['SERVER_ADDR']     | 返回当前脚本所在得服务器得IP地址     |
| $_SERVER['SERVER_NAME']     | 当前脚本所在服务器得主机名称         |
| $_SERVER['SERVER_PORT']     | 服务器所使用得端口号                 |
| $_SERVER['SCRIPT_NAME']     | 返回相对路径                         |
| $_SERVER['QUERY_STRING']    | 获取相对路径                         |
| $_SERVER['REQUEST_URI']     | 获取文件得路径以及查询字符串         |
| $_SERVER['REQUEST_METHOD']  | 返回当前脚本得请求方式 GET 或POST    |
| $_SERVER['REMOTE_ADDR']     | 返回浏览当前页面得用户得IP地址       |
| $_SERVER['REMOTE_PORT']     | 返回浏览当前页面时服务器使用得端口号 |
| $_SERVER['SCRIPT_FILENAME'] | 返回当前脚本得绝对路径               |

### 可变变量

> 在PHP中,允许动态得改变变量得名称,变量得新名称由另一个变量得值来决定,这个就叫做可变变量

```php
$str = "name";
$name = "str";
echo $name; // str
echo "<br>";
echo $$name;  // name
```

### 变量得引用

> 在PHP中允许两个变量指向同一个值,当改变其中一个变量得值时,另外得一个变量得值也会发生变化,通过&来实现

```php
$a = 10;
$b = &$a;
echo $a; //10
echo "<br>";
echo $b;  //10

// 当我们改变其中一个值时
$b = 100;
echo $a;  //100
echo "<br>";
echo $b; //100
```

### 变量得作用域

> 在PHP中使用变量时,除了需要注意变量得规则外,还需要注意变量得作用范围,如果离开了这个作用范围,那么这个变量也就失去意义了.

| 作用域         | 描述                                                         |
| -------------- | ------------------------------------------------------------ |
| local局部变量  | 定义在函数内部得变量,其作用范围只在函数内部                  |
| global全局变量 | 定义在所有函数以外得变量,在整个PHP文件中都起作用,但是如果要在一个函数内部使用全局变量,需要使用global关键字进行引用 |
| static静态变量 | 在函数内部能够保留函数上一次得结果的变量,当再一次进入到这个函数作用域中,可以在上一次的结果的基础上进行运算 |

### PHP数据类型

> PHP数据类型分为三大类,分别为标量数据类型,复合数据类型,特殊数据类型

#### 标量数据类型

> 标量数据类型是数据结构中的最基本单元,只能存储一个数据

| 数据类型 | 描述                                                        |
| -------- | ----------------------------------------------------------- |
| boolean  | 布尔型 包括 true  false                                     |
| string   | 字符串型,用引号包裹起来,单双引号均可                        |
| Integer  | 整型: 包含整数  正数  负数  10进制  8进制  16进制的表示方式 |
| float    | 浮点型 . 指带有小数部分的数字,包括一些指数类型              |

#### boolean

> 布尔值只有true  false
>
> 在PHP中   ""  0  NULL "0"  false array()空数组 没有任何成员的对象 空对象  对应的布尔值是false  其余数据均为true

#### string

> string类型使用引号包裹
>
> 单引号包裹的字符串不识别变量, 但是双引号包裹的字符串识别变量(类似于JS的模板字符串)
>
> 在PHP中使用 . 运算符进行字符串拼接
>
> strlen()函数用于返回字符串的长度,也就是字符串的字符数量

```php
$name = "张三";
$age = 18;
$str = '我叫' . $name . ',今年' . $age .'岁了' ; //字符串拼接
echo $str; // 我叫张三,今年18岁了
```

```php
$name = "张三";
$age = 18;
$str = "我叫$name,今年$age 岁了"; // 在双引号字符串中识别变量
echo $str; // 我叫张三,今年18岁了
```

#### Integer

> 整型是指没有小数的数字
>
> 整型可以使用三种方式定义:十进制 八进制(以0开头)  十六进制(以0x开头)

```php
// 十进制
$num = 10;
$num1 = -9999;

// 八进制
$num = 077;

// 十六进制
$num = 0x999;
```

#### float

> 浮点型是指具有小数位的数字,或者指数形式的数字

```php
// 普通浮点型
$num = 10.00;
$num = 10.56;

// 指数形式
$num = 2e10;
$num = 2e-10;
```

#### 复合数据类型

| 数据类型       | 简述                             |
| -------------- | -------------------------------- |
| Array    数组  | 数组可以在一个变量中存储多个数据 |
| Object    对象 | 对象, 是类的实例,使用new操作创建 |

#### 特殊数据类型

| 数据类型 | 描述                                                 |
| -------- | ---------------------------------------------------- |
| NULL     | 空,变量创建未赋值 变量赋值为null 使用unset销毁的变量 |
| resource | 资源,有特定的函数来建立和使用,由程序员进行分配       |

#### 获取数据类型

> 使用gettype(var)函数可以获取变量存储数据的数据类型

#### 数据类型转换

- 基本语法

```PHP
(type) 变量;
$num = 10;
$res = (bool)$num;
```

- type类型有哪些?

| type值                | 描述           |
| --------------------- | -------------- |
| int , integer         | 转换成整型     |
| float , double , real | 转换成浮点型   |
| bool , boolean        | 转换成布尔型   |
| string                | 转换成字符串型 |
| array                 | 转换成数组     |
| object                | 转换成对象     |

- 使用settype()函数进行数据类型转换,但是该函数会直接改变这种数据的数据类型

```php
settype(变量,数据类型)
```

- 转换成布尔值时

  > 布尔值false 空字符串"" 数字0  字符串0  空数组  没有任何成员的空对象, NULL 使用空标记生成的SimleXML对象为false 其余均为true 
  >
  > 包括resource数据类型

- 转换成整型时

  - 布尔值false转为0  true转为1
  - 浮点型会省略小数部分
  - 如果字符串第一个字符为数字,会从第一个开始直到第一个不为数字的字符结束,如果字符串第一个不为数字返回0

#### 数据类型的检测

| 函数                           | 描述                                   |
| ------------------------------ | -------------------------------------- |
| is_bool(var)                   | 检测变量是否为布尔值                   |
| is_string(var)                 | 检测变量是否为字符串型                 |
| is_float(var) , is_double(var) | 检测变量是否为浮点型                   |
| is_integer(var) , is_int(var)  | 检测变量是否为整型                     |
| is_array(var)                  | 检测变量是否为数组                     |
| is_object(var)                 | 检测变量是否为对象                     |
| is_null(var)                   | 检测变量是否为空                       |
| is_numeric(var)                | 检测变量是否为数字或由数字组成的字符串 |

## php常量

> 常量可以理解为保存得值不可更改得变量
>
> 常量一经定义,不可进行修改和取消定义

### 常量的特性

- 常量默认区分大小写,常量在定义时可以选择是否区分大小写
- 常量默认是全局作用域,可以在当前脚本的任何地方都可以访问
- 新定义的常量命名与已经存在的常量命名不能相同(命名不能冲突)
- 命名的时候尽量使用大写, 便于区分
- 命名开头不能用$ 因为$是变量 
- 常量的值只能是特定的数据类型,包括整型,浮点型,字符串型,布尔型

### 常量的定义

- define()函数定义常量

```php
define($name $value [,$case]);
$name:是一个字符串,表示常量的名称
$value:常用对应的值
$case:可选参数,是一个布尔值,如果为true表示不区分大小写,false为严格区分大小写 默认是false
    define("MY_NUM",1000,false);
	echo MY_NUM;
```

- const定义常量
- 区别
  - const可以在类中定义常量,但是define()不可以在类中定义常量,只可以定义全局的常量,const用于类中,define不能再类中使用
  - const定义常量严格区分大小写,但是define函数可以根据第三个参数来设置是否区分大小写
  - const不能再条件语句中定义常量,但是define函数可以

#### 常量的作用域

> 常用默认具有全局作用域,再函数内部也可以直接使用常量,不需要向全局变量一样需要global注册

```php
define("BAIDU","HTTPS:WWW.baidu.COM");

function a(){
    echo BAIDU;
}
a();  // https:www.baidu.com
```

#### 检测常量的名称是否已经被定义

```php
defined($name);
$name 常量的名称
    返回值是布尔值,true是已经被定义 false表示未定义
```

#### 获取全部已定义的常量

```php
get_defined_constants();  // 可以获取到PHP所有的亿定义的常量,包括用户自己定义的和PHP内置的 
// 获取用户的已定义的常量
get_defined_constants(true)['user'];
```

#### 预定义常量

| 常量        | 描述                      |
| ----------- | ------------------------- |
| \__FILE__   | 获取php文件名             |
| \__DIR__    | 获取PHP脚本所在的目录     |
| \__LINE__   | 获取PHP脚本程序           |
| PHP_VERSION | PHP程序的版本             |
| PHP_OS      | 执行PHP解析器操作系统名称 |

## PHP运算符

#### 算数运算符

| 运算符 | 描述                   |
| ------ | ---------------------- |
| +      | 算数加法               |
| -      | 算数减法               |
| *      | 算数乘法               |
| /      | 算数除法               |
| %      | 取余                   |
| -      | 取反                   |
| .      | 并置,用于字符串的拼接, |

#### 赋值运算符

| 运算符 | 描述     |
| ------ | -------- |
| +=     | 加法运算 |
| -=     | 减法运算 |
| *=     | 乘法运算 |
| /=     | 除法运算 |
| %=     | 取余运算 |
| .=     | 并置运算 |
| =      | 赋值     |

#### 递增递减运算符

| 运算符 | 描述                                     |
| ------ | ---------------------------------------- |
| ++x    | 自增运算符, ++在前先自增 ,在参加其他运算 |
| --x    | 自减运算符 --在前先自减后参与其他运算    |
| x++    | 自增运算符  ++ 在后先参与其他运算后自增  |
| x--    | 自减运算符  --在后先参与其他运算后自减   |

#### 关系运算符

| 运算符 | 描述                        |
| ------ | --------------------------- |
| ==     | 相等,值相等                 |
| ===    | 恒等,值和数据类型都相等     |
| !=     | 不相等,值不相等             |
| <>     | 不相等,值不相等             |
| !==    | 不恒等,值和数据类型都不相等 |
| >      | 大于                        |
| >=     | 大于等于                    |
| <      | 小于                        |
| <=     | 小于等于                    |

#### 三元运算符

```php
$var = $a > $b ?  $a : $b;
表达式 ? 成立的值  : 不成立的值
```

#### 逻辑运算符

| 运算符 | 描述                                    |
| ------ | --------------------------------------- |
| &&     | 并且,逻辑与                             |
| \|\|   | 或者,逻辑或                             |
| !      | 非.取反                                 |
| and    | 与                                      |
| or     | 或                                      |
| xor    | 异或,运算符两侧有且仅有一个为真返回true |

#### 数组运算符

| 运算符 | 描述                                                 |
| ------ | ---------------------------------------------------- |
| +      | 数组连接,将两个数组进行连接但是不会覆盖重复的键      |
| ==     | 判断两个数组相等,两个数组具有相同的数值对即可        |
| ===    | 两个数组完全相等,具有相同的键值对,并且数据类型也相同 |
| !=     | 不相等                                               |
| <>     | 不相等                                               |
| !==    | 不全等                                               |

#### 错误控制符

> 当程序中的部分错误不会影响整个程序的正常运算,我们可以使用错误控制符@忽略这个错误

```php
$a = 10;
$b = 0;
echo $a / $b;	//INF 会报错
echo @($a/$b);  // INF 不报错
```

### PHP流程控制

#### 分支结构/选择结构

```php
if(条件){
    条件满足的代码
}

if(条件){
    条件满足的代码
}else{
    条件不满足的代码
}

if(条件1){
    条件1满足的代码
}else if(条件2){
    条件2满足的代码
}else if(条件3){
    条件3满足的代码
}else {
    条件都不满足的代码
}

if(条件){
    if(条件2){
        条件1满足条件2满足的代码
    }else if(条件3){
        条件1满足, 条件2不满足,条件3满足的代码
    }...
        else {
            条件1满足,其他条件不满足的代码
        }
}

switch($NUM){
    case 条件1:代码;break;
         case 条件1:代码;break;
         case 条件2:代码;break;
         case 条件3:代码;break;
        ...
        default 代码; break;
}
```

循环结构

- for

  ```php
  for (初始值; 终止值 ; 步进值){
      // 循环体
  }
  for ($num = 0 ; num < 10 ; num++){
      echo $i;
      echo "<br>"
  }
  ```

- foreach

  ```php
  foreach($arr as $value){
      eacho $value; //数组中的数据
  }
  foreach($arr as $key=>$value){
      eacho $key; //数组中的键
      eacho $value; //数组中的值
  }
  ```

- do-while

  ```php
  do{
      // 循环体
  }while(条件);
  ```

### PHP数组

> 数组可以让一个变量存储多个数据

#### 数组的创建

- 索引数组

```php
$arr = array('a','b','c'...);
// 索引数组是指数组中的键从0开始依次递增0 1 2 3 4 5 6 7 8 9....
```

​	索引数组的遍历

```php
for($i = 0 ; $i < count($arr) ; $i++){
    echo $arr[$i];
    echo "<br>";
}
/ /a b c d
    
    foreach($arr as $value){
        echo $value; // abcd
    }

foreach($arr as $key=>$value){
    echo $key; //数组中的键
    echo $value; //数组中的值
}
```

- 关联数组

> 在一个数组中,数组的键名是根据项目需求有我们指定一些键,键与值之间通过箭头连接

```php
&arr = array("key" => "value", "key1" => "value1" , "name" => "张三");
```

​	关联数组的遍历

```php
foreach($arr as $key => $value){
    echo $key . "=>" . $value . "<br>";
}
// key => value
//	key1 => value

//$key表示的是数组的键,也就是数组的索引
// $value表示数组的值
```

#### 数组排序

> 我们可以根据数组中的键或值进行排序,PHP为我们提供了很多的函数来解决问题

| 函数         | 描述                         |
| ------------ | ---------------------------- |
| sort($arr)   | 对数组进行升序排列           |
| rsort($arr)  | 对数组进行降序排列           |
| asort($arr)  | 根据关联数组的值进行升序排列 |
| ksort($arr)  | 根据关联数组的键进行升序排列 |
| krsort($arr) | 根据关联数组的键进行降序排列 |
| arsort($arr) | 根据关联数组的值进行降序排列 |

#### 获取数组的长度

> 使用count函数获取数组的长度

```php
$arr = array(1,2,3,4,5,6,7)
  echo  count($arr);  //7
```

### PHP函数

> 在PHP中提供了1000多个函数,我们可以根据这些函数快速的进行项目开发

#### 函数的创建与调用

- function关键字创建与调用

  ```php
  function fn($a,$b,$c){
      //函数体
  }
  fn(1,2,3)
  ```

- 匿名函数创建

  ```php
  $Name = function($a,$b,$c){
      // 函数体
  }
  fn(1,2,3)
  ```

#### 函数的作用域

> 函数与类都具备全局作用域,在当前脚本的任何地方都可以进行访问,即便一个函数创建另一个函数环境,我们依旧可以在外部进行访问

**注意:PHP不支持函数重载,也不可以取消定义或者重新定义函数**

**注意:PHP函数不区分大小写,但是我们需要养成良好习惯,在调用函数时大小写应该与定义时一致**

#### 函数的参数

- 普通的传递参数

  ```php
  function fn($a,$b){
      return $a+$b;  //设置返回值
  }
  ```

- 通过引用传递参数

  ```php
  function fn(&$string){
      $string .= "今年18岁";
  }
  $str = "我时张三";
  fn($str);
  echo $str; //我是张三,今年18岁
  // 类似于变量的引用,将$str引用给形参$string  $string形参与$str变量指向同一个值,改变其中任意一个,另外一个也会发生变化
  ```

#### 可变函数

```php
//与可变变量类似,函数的名称可能会发生变化
function foo(){
    echo "我是foo函数";
}
$str = "foo";
$str();  //我是foo函数
// 当我们给一个变量加上小括号时,PHP会自动根据变量保存的值去寻找相对应的函数然后去执行,如果函数不存在将会报错
```

#### 函数内部访问外部变量

- 访问函数外部的全局变量:需要使用global引入全局变量,如下

```php
$num = 10;
function fn(){
    global $num;
    echo $num;
}
fn() //10
```

**在PHP中将所有的全局变量都放在了$GLOBALS数组中,我们可以在函数内部通过这个全局变量的索引来访问全局变量**

```php
$a = 100;
$b = 200;
function fn(){
    echo $GLOBALS['a'];  //100
    echo $GLOBALS['B']; //200
}
fn();
```

- 继承父作用域的变量

```php
$father = "我是父作用域的变量";
$myFn = function() use($father){
    echo $father;
}
$myFn();  //我是父作用域的变量
```

#### static作用域

> 在函数执行结束以后,函数内部创建的局部变量都会被删除,在下一次调用函数的时候,内部的变量会重新创建赋值,所以不会保存下来上一次函数调用的变量结果
>
> 如果我们需要保存某些变量的运算结果,我们需要使用静态变量

```php
function sum(){
    static $a = 10;
    $a++;
    echo $a;
}
sum();  //11	
sum();	//12
sum();	//13
//通过static修饰符创建的变量, 会在每次函数结束时保存下来本次变量的运算结果,下一次再调用函数时变量会从上一次的结果开始进行新的运算
```

**注意:再函数内部被static修饰的变量依旧是局部变量,再函数外部是无法访问的**

#### static的应用

- static放在函数内部修饰变量
- static放在类里修饰属性，或方法
- static放在类的方法里修饰变量
- static修饰在全局作用域的变量

### PHP面向对象

#### 对象的创建

```php
class Animal{
    function run(){
        echo "奔跑";
    }
    function sing(){
        echo "我在唱歌";
    }
}
$obj = new Animal();
$obj->run();	//访问对象的run方法
$obj->sing();	//访问对象的sing方法
```

#### 类的创建

```php
class Classname{
    var $num; 	//在类的内部声明变量
    var $a = 10;	//声明变量的同时进行赋值
    
    function run(){		 //定义类中的方法
        // 如果需要访问类的变量,需要使用$this这个变量
        echo $this->a;
    }
}
```

#### 构造函数

> 构造函数是类中的一个特殊方法,用于对象初始化时,进行对象中属性的赋值,构造函数可以接收参数,在实例化时括号内传递的参数就会被构造函数接收

```php
class Person{
    function __construct($name,$age){
        $this->name = $name;
        $this->age = $age;
    }
}
$obj = new Person("张三",18);
var_dump($obj);
/*

*/
```

#### 析构函数

> 析构函数与构造函数相反,析构函数在对象的生命周期结束(对象中的属性方法都调用完毕以后)执行

```php
function __destruct(){
    
}
```

#### 继承

> 与JS相同,类的继承使用extends

```php
function 子类 extends 父类{
    
}
```

#### 访问控制

> 在项目开发过程中,类中有一些属性或方法可以进行公共的使用,但是有一些只能由对象本身或子对象进行使用,这时可以使用PHP访问控制来定义这些属性或方法
>
> PHP访问控制通过public    protected   private 来实现

- public:公有的,共有的类成员可以在任何地方被访问
- protected : 受保护的,受保护的类成员,只能由类以及子类和他的父类进行访问
- private : 私有的,  私有的类只能由类本身进行访问. 子类无法访问

#### 类常量

```php
class Person {
    const rules = "常量值";
    
    //在类成员中访问类常量
    public function say(){
        echo self::rules;
    }
};
$lisi = new Person();
$lisi->say();  //常量值;
echo $lisi::rules;	//常量值;
```

#### final关键字

> 被final关键字修饰的类成员无法被	子类中相同的类成员覆盖,如果一个类被final关键字修饰,这个类无法被继承

```php
class Person {
    final public function say(){
        echo "我是被final修饰的say方法"
    }
}
class Zhangsan extends Person{
    public function say(){  //报错,,父类的say方法用final修饰,子类不能有say方法
        echo "我是子类的say方法";
    }
}

```

#### interface

> PHP中提供了interface接口方式,可以定义统一的类,统一的开发标准,通过接口创建的类都必须具备接口中所有的方法,

```php
//使用接口（interface），可以指定某个类必须实现哪些方法
interface myface {
    public function index();
    public function run();
    public function say();
    public function play();
}
//// 类实现接口
class Myclass implements myface{
    public function index() {
        echo "我是index方法";
    }
    public function run() {
        echo "我是run方法";
    }
    public function say() {
        echo "我是say方法";
    }
    public function play() {
        echo "我是play方法";
    }
}
```

### 命名空间

#### 使用命名空间的必要性

> 在项目开发过程中,会有很多的文件之间互相联系,组成一个项目,在一个文件中就有可能引入很多的外部文件,这时就可以会造成函数, 类, 常量等的命名冲突,导致项目无法进行正常运行,为了解决这个问题在PHP5.3引入了命名空间

#### 命名空间解决的问题

- 用户编写的代码与php内置的类/函数/常量/第三方类的命名冲突
- 为很长的标识符名称取一个别名,提高源代码的可读性

#### 命名空间分类

- 全局空间:不在namespace声明的空间内的代码都在全局空间中

- 命名空间:如果需要在命名空间内使用全局空间的类,函数,常量,我们需要\来引入

  > `namespace Think`;
  > namespace Think\Controller;

### PHP日期时间

- date()函数可以将时间戳转换成更容易辨识的时间

```php
date(时间规则,被转换的时间戳);
//时间规则
//Y:表示年;
//m:表示月;
//d:表示日;
//h:小数
//i:分钟
//s:秒钟
date("Y-m-d h:i:s");  //2020-3-16 11:24:33
```

- dete函数的时间戳默认是格林威治时间,如果需要改为北京时间我们需要用**date_default_timezone_set()** 设置默认时区

  ```php
  date_default_timezone_set(PRC);  # 把时间调到北京时间
  date_default_timezone_set('Asia/Shanghai');	# 把时间调到上海时间
  ```

### PHP文件引入★

- require("文件路径");如果不存在会先报一个警告级别的错误,然后再报一个致命错误,然后终止程序执行
- include("文件路径");如果引入文件不存在,会先报一个警告错误,然后再报一个警告级别的错误,然后继续执行程序

### PHP表单操作

- $_GET是预定义变量,用于获取前台使用get方式请求的参数
- $_POST是预定义变量,用于前台使用POST方式请求的参数
- $_REQUEST是预定义变量,用于获取前台GET或POST请求的参数
- $_FILES变量,用于接收前台上传的文件

### PHP常用的函数

- exit()直接终止程序的运行
- die(string)遇到错误时终止程序运行,同时输出提示信息
- md5(string,row)计算字符串的md5散列,常用于加密
- json_encode()对变量进行json编码,编码成JSON格式的数据
- json_decode()对JSON格式的字符串进行解码,解码成PHP的变量
- substr(str,start,length)对字符串进行截取, str是被截取的字符串,start是截取开始的位置,  length是截取字符串的长度
- mb_substr(str,start,length,char)对字符串进行截取,str被截取的字符串,,start是截取开始的位置,  length是截取字符串的长度,char指的是字符串的字符集,防止因为字符编码不同出现乱码
- mail(to,subject,message,headers,parameters)通过PHP脚本发送邮件

| 参数       | 描述                      |
| ---------- | ------------------------- |
| to         | 接收邮件的对象,必填项     |
| subject    | 邮件的主题,必填项         |
| message    | 发送邮件的主要内容,必填项 |
| headers    | 邮件附加的标题,选填项     |
| parameters | 邮件发送的额外参数,选填项 |

### PHP文件操作

#### 获取文件名

```php
basename(path,suffix);
// path:是文件的路径,必填项
// suffix:规定文件的扩展名,选填项.如果传入的路径中文件有扩展名就不会显示这个参数
// 返回值是文件的名称包含它的扩展名
```

#### 获取文件的路径

```php
dirname(path);
// path : 文件的路径
// 返回值是除了文件名外 前面的路径
```

#### 创建文件夹

```php
mkdir(path);
// 创建路径为path的文件夹,返回值是布尔值,true成功 false失败,不能重复的创建同一个文件,所以我们一般会先判断这个文件夹是否存在再进行创建
```

#### 删除文件

```php
unlink(filename);
// 删除文件名为filename的文件,返回值是布尔值,true成功 false失败
```

#### 移动上传文件

```php
move_uploaded_file(files,newlocation);
// 将上传的文件移动到指定的目录下面
// files是上传文件的路径,newlocation是指定的目录
// 返回值是布尔值, true成功  false失败
```

#### 打开文件

```php
fopen(filename,参数2);
// filename: 被打开的文件
// 参数2:打开文件的模式
fopen("1.txt",'r');
```

| 打开模式 | 描述                                                       |
| -------- | ---------------------------------------------------------- |
| r        | 只读,从第一行开始                                          |
| r+       | 读/写 从第一行开始                                         |
| w        | 只写,打开并清空文件内容,如果文件不存在就会创建文件         |
| w+       | 读/写 打开并清空文件内容,如果文件不存在就会创建文件        |
| a        | 追加,打开并在文件的最后添加内容,如果文件不存在就会创建文件 |
| a+       | 读/追加 通过文件的最后添加内容,来保持文件的内容            |
| x        | 只写, 创建新文件,如果文件已经存在,会返回false以及一个错误  |
| x+       | 读写 ,创建新文件,如果文件已经存在,会返回false以及一个错误  |

#### 关闭文件

```php
fclose(filename);
```

#### 检查文件的末尾

```php
feof(filename);
// 检查当前文件是否已经查询到末尾
```

#### 逐行读取文件

```php
fgets(filename);
//逐行读取文件
```

### PHP画图

> 利用PHP中的GD库可以进行图像的操作或生成

- 创建一个空白的图像区域(空白画布)

```php
//创建一个空白画布, w表示画布的宽度, h表示画布的高度
imagecreatetruecolor(x,w);
```

- 给空白的画布填充背景颜色

```php
//生成一个随机的颜色,会使用随机数函数 rand(start,end): rand(0,10) 会得到0-10的随机数
//这个颜色是通过红绿蓝进行配色的
// img参数是在哪一个画布上生成这种颜色
$color = imagecolorallocate(img ,red,green,blue);
imagefill(img,x,y,color);
// img:被填充颜色的画布
// x: 颜色填充的起始横坐标
// y: 颜色填充的起始纵坐标
// color :填充的颜色
```

- 给画布添加一些妨碍视线的点或线

```php
// 生成随机出的rand()
imagesetpixel(img,x,y,color);  // 生成在画布中添加一些点
// img 画布
// x :点的横坐标
// Y: 点的纵坐标
// color :点的颜色
imageline(img,x1,y1,x2,y2m,color); //在画布中画一条线
// img 画布
// x1 线起始的横坐标
// y1 线起始的纵坐标
// x2 线结束位置的横坐标
// y2 线结束位置的纵坐标
```

- 给画布中添加一些文本内容

```php
imagestring(img,font,x,y,color);
// 在画布中添加一个字符
// img: 画布
// font: 字体 1-5 默认字体
// x 文字的横坐标
// y 文字的纵坐标
// color 文字的颜色
```

- 将画布生成为一张图片

```php
// 在生成图片时需要设置文件的格式
header('content-type:image/jpeg');
// 生成图片
imagepng(img) // 生成png格式的图片
imagejpeg(img) // 生成jpeg格式的图片
imagegif(img) // 生成gif格式的图片
imagewbmp(img) // 生成wbmp格式的图片
```

- 将图片资源释放,节省内存空间

```php
imagedestroy(img);
```

# ajax

> ajax是一门用于快速创建动态网页的技术,它向服务器发送请求,刷新页面,可以进行网页的局部刷新,在请求数据时不会触发整个网页的刷新,如果不使用ajax,那么我们需要使用form表单的方式向服务器发送请求,表单方式在发送请求后需要等待服务器响应成功后才能继续操作网页

## 什么是ajax

> ajax是一门创建快速动态网页的技术,它可以通过请求与后台进行少量的数据交互,对网页进行局部刷新,可以在不刷新整个网页的前提下对网页进行刷新.

## 如何使用ajax

> ajax是利用JS中的XML HttpRequest对象实现与服务器的数据交互

- 实例化XMLHttpRequest对象

```PHP
var xml = new XMLHttpRuquest();
```

- 与服务器建立连接

```js
xml.open(var1,var2,var3);
//var1:请求方式, GET 或者 POST
//var2:请求地址
//var3:是否支持异步,是布尔值 true表示异步  false表示同步
```

- 发送请求

```js
xml.send(var1);
// var1 如果是GET请求,可以不传参数
// var1 如果是POST请求,需要在这里传递请求参数,并且需要设置请求头
```

- 监听onredystatechange事件,确保请求和服务器都响应成功,我们才能获取到数据进行操作

```js
xml.onredystatechange = function (){
    // xml.redyState表示请求的状态, 为4时请求发送成功
    // xml.status表示响应的状态,为200时服务器响应成功
    if(xml.redyState === 4 && xml.status === 200){
       //请求响应都成功 ,可以进行数据操作
       }
}
```

## ajax的作用

> 作用 :  接收数据, 发送数据

**ajax通过异步的javaScript和XML向服务器发送请求或接收数据,并且ajax能够发送或接收json, xml ,  html以及文本等多种类型的数据**

> ajax其实就相当于在客户端与服务器之间添加一个中间层(ajax)客户端发送的请求并不是全部要发送给服务器的,比如一些基本的验证,基本的数据处理都交给ajax引擎,只有确定需要从服务器端获取数据的时候ajax引擎会代为发送本次请求,等待服务器的响应,在服务器的响应后,由ajax接收并处理响应,最后再将处理结果返回给客户端用于数据渲染等操作
>
> ajax异步,ajax再发送请求时,告诉浏览器需要发送一次http请求.浏览器为ajax开通一个新的线程处理本次请求,等请求成功以后浏览器再通知ajax,ajax再通过回调函数来处理成功后的操作,再本次线程成功执行完成之前,客户端可以继续做其他的操作,无需等待本次请求成功,

## ajax工作中的知识点整理

### 初始化XMLHttpRequest对象

```js
var xml = new XMLHttpRequest();
// 使用xml.abord取消ajax请求
```

### 与服务器建立连接

```js
xml.open(method,url,async,username,password);
```

| 参数     | 描述                                                         |
| -------- | ------------------------------------------------------------ |
| method   | 请求的类型,GET或者POST                                       |
| url      | 请求的服务器的地址                                           |
| async    | 是一个布尔值,表示是否支持异步,true支持,false不支持(同步)默认是true |
| username | 如果需要进行身份验证,可以在这输入用户名,这个是可选参数,没有默认值 |
| password | 如果需要进行密码验证,在这里输入密码,这个是可选参数,没有默认值 |

### 发送请求

```js
xml.send();
```

- GET请求

  > GET请求的参数可以之间跟在url路径后面,所以这里可以不用写参数,或者参数写为null

  ```js
  xml.open('GET',url + '?username=zhangsan&password=123456',true);
  xml.send(null);
  xml.send();
  ```

- POST请求

  > POST请求必须设置请求头信息,请求参数必须写在send方法的参数中

  ```js
  xml.open('POST',url,true);
  xml.setRequestHeader('Content-type','application/x-www-form-urlencoded');
  xml.send('username=zhangsan&password=123456');
  ```

### 监听请求和响应的状态

```js
xml.onreadystatechange = function (){
    // 请求状态保存在readyState状态中
    // 响应状态保存在status属性中
    // 响应内容保存在response responseText  responseXML 中 根据请求的内容不同会保存在不同的属性中
}
```

#### readyState的状态

| 状态 | 描述                                                  |
| ---- | ----------------------------------------------------- |
| 0    | 还没有进行初始化,调用open之前                         |
| 1    | 请求已经初始化,还没调用send方法进行发送               |
| 2    | 请求已经send发送,服务器接收到了请求                   |
| 3    | 请求已经被服务器接收并解析完成,但是响应数据还未准备好 |
| 4    | 请求成功,服务器的响应数据也已返回                     |

#### status的状态

| 状态 | 描述                                                         |
| ---- | ------------------------------------------------------------ |
| 200  | 响应成功                                                     |
| 304  | 客户端有缓存文档,发送了一个条件性的请求,服务器告诉客户端你的缓存文档可以继续使用 |
| 404  | 找不到指定位置的资源                                         |
| 5xx  | 服务器错误                                                   |

# 美容健康项目

## 需求项目

> 随着人们消费的提升,生活质量的提高,对皮肤的健康越来越重视,开发本项目为想要了解皮肤的

## 架构分析

> 本项目使用B/S架构,

## 技术选型

### 前台

- 布局 HTML CSS JS完成 前端页面的基本布局和交互效果
- swiper, bootstrap 等插件和框架
- jqery

### 后端

- PHP
- bootstrap完成后台管理界面的搭建

### 数据库

- MySQL数据库

  > 关系型数据库,查询效率更高,

## 项目功能分析

### 导航管理

### 分类管理

### 商品管理

### 留言管理

## 项目流程分析

## 进行项目开发

## 项目总结

- 项目分档
- 总结经验
- 找到不足进行修改



# 项目目录

> |--project
>
> |----admin		admin文件夹用于存放后台业务逻辑的相关文件
>
> |----index		index文件夹用于存放前台业务逻辑的相关文件
>
> |----common		common文件夹用于存放业务中一些公用的函数等
>
> |----lib			lib文件夹用于存放业务中的一些公共文件,比如连接数据库的操作等
>
> |----static		static文件夹用于存放业务中用的静态资源,比如页面的css  js 文件, 页面中的一些图片
>
> |----view		用于存放业务逻辑的一些页面
>
> |--------admin		用于存放后台业务逻辑相关的页面
>
> |--------index		用于存放前台页面
>
> |----admin.php	后台业务的入口文件
>
> |----index.php	前台业务的入口文件