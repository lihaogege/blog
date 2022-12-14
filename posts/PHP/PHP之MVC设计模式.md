---
title: 'PHP之MVC设计模式'
date: '2022-8-15'
excerpt: MVC核心思想是将软件用户界面和业务逻辑分离以使代码可扩展性、可复用性、可维护性、灵活性加强。
isFeatured: false
classify: 'PHP'
image:
codeDemo:
---

# MVC设计模式
大部分的Web后端开发框架基于MVC软件架构模式。

MVC核心思想是将软件用户界面和业务逻辑分离以使代码可扩展性、可复用性、可维护性、灵活性加强。


good.php
<?php 
	$con = mysqli();
	$result = $con->query("select * from goods");
	$goods = $result->fetch_all();
?>
<ul>
	<?php foreach($goods as $val){ ?>
	<li>
		<img src="<?php echo $val['image']?>" alt="">
		<h2><?php echo $val['title']?></h2>
	</li>
	<?php } ?>
</ul>

MVC：
index.php
<?php 
	$con = mysqli();
	$result = $con->query("select * from goods");
	$goods = $result->fetch_all();
?>

index.html
<ul>
	<?php foreach($goods as $val){ ?>
	<li>
		<img src="<?php echo $val['image']?>" alt="">
		<h2><?php echo $val['title']?></h2>
	</li>
	<?php } ?>
</ul>



## MVC
MVC在上世纪80年代发明一款软件架构模式，主要用于桌面端应用开发。后来Web开发引入了MVC软件架构模式。


MVC 这种软件架构模式，目前几乎所有的Web开发框架都建立在 MVC 模式之上。


MVC 模式（Model-View-Controller）是一种软件架构模式，它实现了视图模块与功能模块的分离。提高了程序的可维护性、可移植性、可扩展性与可重用性，降低了程序的开发难度。

### MVC组成
MVC它将应用程序分为三个部分：
1. 模型   model ：业务逻辑(实现功能的一段代码)处理 、 数据处理
   程序应用功能逻辑的实现。负责处理数据和业务逻辑。它只负责接受数据并处理，然后返回一个结果。
2. 视图   view ：呈现结果，收集数据
   负责从用户获取输入数据并传递给控制器，由控制器负责调用模型。控制器将模型返回的结果传递给视图显示给用户。  
3. 控制器 controller：调度、组织
   负责接收来自视图请求，对请求处理。它接收视图层传递数据，然后选择某个模型进行处理，并接收模型处理后返回的结果并选择某个视图来显示结果。
   

### MVC工作流程

注意：
Model 业务逻辑，处理数据    【重点】复用程度最高，从全局考虑一下模型如何设计
Controller  组织、调度，代码能少则少
View 界面，呈现与收集

### 为什么要使用MVC设计模式？
1. 提高代码复用率
2. 提高程序的可维护性
3. 有利于团队开发
   明确分工：将试图分离 => 网页设计师，前端工程师 、将逻辑分离 后端工程师
   将合适的人做自己擅长的工作

### MVC依赖设计模式
设计模式是什么：
设计模式（Design pattern）代表了最佳的实践，通常被有经验的面向对象的软件开发人员所采用。

设计模式是软件开发人员在软件开发过程中面临的一般问题的解决方案。这些解决方案是众多软件开发人员经过相当长的一段时间的试验和错误总结出来的。

为什么使用设计模式：
设计模式是一套被反复使用的、多数人知晓的、经过分类编目的、代码设计经验的总结。使用设计模式是为了重用代码、让代码更容易被他人理解、保证代码可靠性。
毫无疑问，设计模式于己于他人于系统都是多赢的，设计模式使代码编写真正工程化，设计模式是软件工程的基石，如同大厦的一块块砖石一样。项目中合理地运用设计模式可以完美地解决很多问题，每种模式在现实中都有相应的原理来与之对应，每种模式都描述了一个在我们周围不断重复发生的问题，以及该问题的核心解决方案，这也是设计模式能被广泛应用的原因。

MVC它是一种软件开发架构模式，它包含了很多的设计模式，最为密切是以下三种：
- Observer (观察者模式)
- Composite（组合模式）
- Strategy（策略模式）  
所以说MVC模式又称复合模式。

总结一下，关于MVC各层之间关系所对应的设计模式
- View层，单独实现了组合模式
- Model层和View层，实现了观察者模式
- View层和Controller层，实现了策咯模式


### 设计MVC考虑问题
设计MVC框架需要考虑的问题：
传统PHP开发存在问题，入口太多，不安全。login.php    reg.php   goods.php  news.php

1. 单入口文件 index.php

2. 重定向：.htaccess文件
将其他的请求都重定向到 index.php

概述来说，htaccess文件是Apache服务器中的一个配置文件，它负责相关目录下的网页配置。通过htaccess文件，可以帮我们实现：网页301重定向、自定义404错误页面、改变文件扩展名、允许/阻止特定的用户或者目录的访问、禁止目录列表、配置默认文档等功能。

3. 设计URL：
phpinfo 写法：index.php/index/login/loginout
查询字符串写法：index.php?m=index&c=login&a=loginout

m 访问的模块
c 访问的控制器
a 访问的控制器的操作 

class xxx {
    //操作 action
	function aaa(){
		xxxx
		// 模型
		// 视图
    }
}
















