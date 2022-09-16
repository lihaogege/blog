---
title: '博客项目创建指南'
date: '2022-8/15 17:56'
excerpt: 利用Nextjs,react,redux,typescript,RTK,RTKQ等技术搭建的博客项目,供大家参考指正
isFeatured: true
---

## 网络应用程序架构

* C/S  客户端/服务器
  - 下载安装的客户端软件
  - 优点
    - 速度快
    - 用户体验好
    - 安全
    - 网络依赖性不强
  - 缺点
    - 下载安装
    - 更新（用户控制更新）
    - 不能跨平台开发，不同的操作系统需要开发不同的版本
* B/S  浏览器/服务器
  - 软件运行在浏览器，用户无需安装
  - 优点
    - 无需下载，不占磁盘空间
    - 更新及时（服务提供商控制）
    - 可跨平台开发
  - 缺点
    - 用户体验不好，需要记忆网址、搜索
    - 依赖网络

## MVC

* M(模型)：处理数据、业务逻辑

  接收控制器数据并处理、业务逻辑、将处理结果发回给控制器

* V(视图)：收集数据、展示数据

  收集用户数据发给控制器，并接受控制器传回的数据以做展示

* C(控制器)：处理请求、调用模型

  处理来自视图的请求，选择合适的模型来处理数据

  将调用模型得到的数据处理结果返回给对应的视图

## 设计模式

* 创建型模式
* 结构型模式
* 行为型模式
* J2EE模式

## 入口文件

### index.php  入口文件是什么？

> 我们所做的程序项目或者是系统被访问请求的时候,第一个被访问到的文件,所有的指令功能都是从这文件分发出去,再找相对应的模块进行处理,一些初始化的工作也在这里进行,这个文件可以根据不同的请求去调用框架不同的模块,这里甚至可以设定一些参数,方便以后的开发和维护

### 为什么要使用单入口文件？

> 安全、方便处理请求、HTTP请求的唯一入口文件，进行初始化等操作
>
> 例如：thinkPHP框架的入口文件在public/index.php。

### 单入口文件如何完成多种操作（访问同一个入口文件，返回不同的结果）？

* 通过给URL添加参数的方式：
  - 方式1：http://www.baidu.com/index.php/admin/login/index
  - 方式2：http://www.baidu.com/index.php?s=admin

### 模块/控制器/方法

> 通过以上三个参数，来访问某个模块下的某个控制器下的某个方法

* 模块：就是一个文件夹（admin模块、index模块、login模块）
* 控制器：某个模块下的一个PHP类文件
* 方法：某个控制器下的某个方法

### URL语法格式：

* 协议：http://
* 主机：www.baidu.com
* 端口：http默认80  HTTPS默认443
* 访问路径：/index.php
* 查询字符串：?s=admin

## thinkPHP

* thinkPHP是一个快速的、简单的基于MVC思想和面向对象的一种轻量级PHP开发框架，遵循Apache2开源协议发布，为WEB应用和API开发提供了强有力的支持
* ThinkPHP可以支持windows/Unix/Linux等服务器环境，支持MySql、PgSQL、Sqlite多种数据库以及PDO扩展，ThinkPHP框架本身没有什么特别模块要求，具体的应用系统运行环境要求视开发所涉及的模块。

## 使用 PHP操作MySQL方式

* MySQLi 

  只针对  MySQL  数据库

  * 连接方式
    - 面向过程链接
    - 面向对象链接（主要使用）

* PDO 

  针对12种数据库

  - 连接方式
    - 面向过程链接
    - 面向对象链接（主要使用）

## 框架

>  框架是指为规范开发流程、降低开发难度、提高开发效率而制定的一整套供大家使用的功能模块及编程约定。

### 为什么选择ThinkPHP框架?

* 非常流行、众多商业项目的最佳选择
* 完全开源、免费，适合个人或商业项目开发
* 中文文档齐全，社区活跃，开发资料丰富

### ThinkPHP框架可以用于什么类型的项目开发

- PC网站、移动端网站、软件、系统（MVC）
- API（应用程序接口）：可以为以下类型的应用提供数据支持
  - 小程序（微信、QQ、钉钉等等）
  - APP
  - 桌面应用
  - 前后端分离应用

## 安装thinkPHP

* 1、GitHub 下载指定版本的thinkphp

* 2、composer 

  - 安装最新版本TP，输入以下命令

    第一条命令就是从国内获取文件，第二条命令是获取文件，=5.0.*（文件版本）如不写这个属性则会获取到最新版本的文件

    ```bash
    composer config -g repo.packagist composer https://packagist.phpcomposer.com
    ```

    composer create-project topthink/think=5.0.* 创建项目名称

## 开发规范

* 小写字母+下划线：目录、函数、表名、字段名
* 大驼峰：控制体、模型、类名
* 小驼峰：类的属性、方法
* 大写字母+下划线：定义常量

## 架构

### 架构总览

> ThinkPHP5.0 应用基于 MVC （模型-视图-控制器）的方式来组织。

#### 访问TP的URL

> http://serverName/index.php（或者其它应用入口文件）/模块/控制器/操作/参数/值...

#### 入口文件

> 用户请求的PHP文件，负责处理一个请求（注意，不一定是URL请求）的生命周期，最常见的入口文件就是
> index.php ，有时候也会为了某些特殊的需求而增加新的入口文件，例如给后台模块单独设置的一个入口
> 文件 admin.php 或者一个控制器程序入口 think 都属于入口文件。

#### 应用

> 应用在 ThinkPHP 中是一个管理系统架构及生命周期的对象，由系统的 \think\App 类完成，应用通常在
> 入口文件中被调用和执行，具有相同的应用目录（ APP_PATH ）的应用我们认为是同一个应用，但一个应用
> 可能存在多个入口文件。
> 应用具有自己独立的配置文件、公共（函数）文件。

#### 模块

> 一个典型的应用是由多个模块组成的，这些模块通常都是应用目录下面的一个子目录，每个模块都有自己独
> 立的配置文件、公共文件和类库文件。

##### 模块组成

* 控制器

  > 每个模块拥有独立的 MVC 类库及配置文件，一个模块下面有多个控制器负责响应请求，而每个控制器其实就是一个独立的控制器类。

  > 控制器主要负责请求的接收，并调用相关的模型处理，并最终通过视图输出。严格来说，控制器不应该过多的介入业务逻辑处理。

  - 操作（方法）

    > 一个控制器包含多个操作（方法），操作方法是一个URL访问的最小单元。

* 模型

  > 模型类通常完成实际的业务逻辑和数据封装，并返回和格式无关的数据。

* 视图

  > 控制器调用模型类后返回的数据通过视图组装成不同格式的输出。视图根据不同的需求，来决定调用模板引擎进行内容解析后输出还是直接输出。

  > 视图通常会有一系列的模板文件对应不同的控制器和操作方法，并且支持动态设置模板目录。

* 其他

  - 配置文件
  - 公共文件
  - 类库文件

### 生命周期

> 整体执行流程。

* 入口文件
* 引导文件
* 注册自动加载
* 注册错误和异常机制
* 应用初始化
* URL访问检测
* 路由检测
* 分发请求
* 响应输出
* 应用结束

### 入口文件

> ThinkPHP采用单一入口模式进行项目部署和访问，无论完成什么功能，一个应用都有一个统一（但不一定是
> 唯一）的入口。应该说，所有应用都是从入口文件开始的，并且不同应用的入口文件是类似的。

#### 入口文件定义

> 入口文件位置的设计是为了让应用部署更安全， public 目录为web可访问目录，其他的文件都可以放到
> 非WEB访问目录下面。

##### 入口文件主要完成：

* 定义框架路径、项目路径（可选）
* 定义系统相关常量（可选）
* 载入框架入口文件（必须）

### URL设计

> http://serverName/index.php（或者其它应用入口文件）/模块/控制器/操作/[参数名/参数值...]

### 模块设计

> ├─application 应用目录（可设置）
> │ ├─common 公共模块目录（可选）
> │ ├─common.php 公共函数文件
> │ ├─route.php 路由配置文件
> │ ├─database.php 数据库配置文件
> │ ├─config.php 应用配置文件
> │ ├─module1 模块1目录
> │ │ ├─config.php 模块配置文件
> │ │ ├─common.php 模块函数文件
> │ │ ├─controller 控制器目录
> │ │ ├─model 模型目录（可选）
> │ │ ├─view 视图目录（可选）
> │ │ └─ ... 更多类库目录
> │ │
> │ ├─module2 模块2目录
> │ │ ├─config.php 模块配置文件
> │ │ ├─common.php 模块函数文件
> │ │ ├─controller 控制器目录
> │ │ ├─model 模型目录（可选）
> │ │ ├─view 视图目录（可选）
> │ │ └─ ... 更多类库目录

### 命名空间

> 采用命名空间方式定义和自动加载类库文件，有效的解决了多模块和 Composer 类库之间的命
> 名空间冲突问题，并且实现了更加高效的类库自动加载机制。

> 一般为所在路径

## 配置

### 配置目录

> 系统默认的配置文件目录就是应用目录（ APP_PATH ），也就是默认的 application 下面，并分为应用配置（整个应用有效）和模块配置（仅针对该模块有效）。
>
> ├─application 应用目录
> │ ├─config.php 应用配置文件
> │ ├─database.php 数据库配置文件
> │ ├─route.php 路由配置文件
> │ ├─index index模块配置文件目录
> │ │ ├─config.php index模块配置文件
> │ │ └─database.php index模块数据库配置文件

### 配置格式

> ThinkPHP支持多种格式的配置格式，但最终都是解析为PHP数组的方式。

*  .ini
* .xml
* .json
* .php(默认)

### 配置加载

> 在ThinkPHP中，一般来说应用的配置文件是自动加载的，加载的顺序是：
>
> 惯例配置->应用配置->扩展配置->场景配置->模块配置->动态配置
>
> 常用的配置：应用配置、场景配置、模块配置、动态配置

### 读取配置

#### 获取配置方式

* Config类

  > 需要加载config                                  use think\config

  > 输出一个：Config::get('配置参数1');
  >
  > 输出所有：Config::get();
  >
  > 判断是否存在某个设置参数：Config::has('配置参数2');
  >
  > 读取二级配置：Config::get('配置参数.二级参数');

* config助手函数

  > 全局，无需加载config

  > 输出一个：config('配置参数1');
  >
  > 输出所有：config();
  >
  > 判断是否存在某个设置参数：config('?配置参数2');
  >
  > 读取二级配置：config('配置参数.二级参数');

### 动态配置

> 使用 set 方法动态设置参数

* Config类

  > 需要加载config                                  use think\config

  > 设置一个：Config::set('配置参数1'=>'配置值');
  >
  > 批量设置：Config::set(['配置参数1'=>'配置值','配置参数2'=>'配置值']);

* config助手函数

  > 全局，无需加载config

  > 设置一个：config('配置参数','配置值');
  >
  > 批量设置：config(['配置参数1'=>'配置值','配置参数2'=>'配置值']);

### 独立配置

> 使用独立配置文件,在config.php中添加配置：
>
> 'extra_config_list' => ['database']

## 控制器（C）

> ThinkPHP V5.0的控制器定义较灵活，可以无需继承任何的基础类，也可以继承官方封装\think\Controller 类或者其他的控制器类。

### 控制器如何定义

> application(应用)\index(模块)\controller(控制器)\Index.php(操作/方法)

> namespace app\index\controller;
> class Index{
> 	public function index(){
> 		return 'index';
> 	}
> }

### 控制器继承-----extends Controller

> 如果继承了 think\Controller 类的话，可以直接调用 think\View 及 think\Request 类的方法

> namespace app\index\controller;
> class Index extends Controller{
> 	public function index(){
> 		return 'index';
> 	}
> }

#### 控制器继承后可使用的方法

* $this->view()     视图实例
* $this->request()     请求
* $this->beforeActionList = []    前置操作     
* $this->fetch()    加载模板输出
* $this->display()    渲染内容输出
* $this->assign();       模板变量赋值
* $this->validate()   验证数据
* $this->success()   操作成功跳转的快捷方法
* $this->error()   操作失败跳转的快捷方法
* $this->redirect()      重定向

### 渲染模板

#### 如继承了控制器如何渲染模板

> namespace app\index\controller;
>
> class Index extends Controller{
> 	public function index(){
>
> ​		return $this->fetch();
>
> ​	}
> }

#### 如未继承控制器如何在控制器里渲染模板

* 需要使用视图View类  view();加载think\view

  > namespace app\index\controller;
  >
  > use think\view;
  >
  > class Index{
  > 	public function index(){
  > 		$view = new View();
  >
  > ​		return $view->fetch();
  >
  > ​	}
  > }

* 如使用view助手函数，则不用加载think\view

  > namespace app\index\controller;
  >
  > class Index{
  > 	public function index(){
  >
  > ​		return view();
  >
  > ​	}
  > }

### 渲染输出

> 控制器一般不需要任何输出，直接return即可。

> namespace app\index\controller;
> class Index{
> 	public function hello(){
> 		return 'hello,world!';
> 	}
> 	public function json(){
> 		return json_encode($data);
> 	}
> 	public function read(){
> 		return view();
> 	}
> }

### 输出转换

> 默认情况下，控制器的返回输出不会做任何的数据处理，但可以设置输出格式，并进行自动的数据转换处理，前提是控制器的输出数据必须采用 return 的方式返回。

* 当我们设置输出数据格式为html：

  > // 默认输出类型
  > 'default_return_type' => 'html',

* 可以在config.php里修改default_return_type，需要输出什么数据格式就改成什么数据格式，比如json

### 控制器初始化

> 如果你的控制器类继承了 \think\Controller 类的话，可以定义控制器初始化方法 _initialize ，在
> 该控制器的方法调用之前首先执行。

<div style="color:red">在初始化方法中可以放置每一个控制器都要进行的操作。</div>

### 前置操作

> 可以为某个或者某些操作指定前置执行的操作方法，设置 beforeActionList 属性可以指定某个方法为其
> 他方法的前置操作，数组键名为需要调用的前置方法名，无值的话为当前控制器下所有方法的前置方法。

* 格式

  - ['except' => '方法名,方法名']

    > 表示这些方法不使用前置方法，

  - ['only' => '方法名,方法名']

    > 表示只有这些方法使用前置方法。

### 跳转和重定向

#### 跳转

> 在应用开发中，经常会遇到一些带有提示信息的跳转页面，例如操作成功或者操作错误页面，并且自动跳转
> 到另外一个目标页面。系统的 \think\Controller 类内置了两个跳转方法 success 和 error ，用于页
> 面跳转提示。

<div style="color:red">跳转地址是可选的。</div>

* success方法的默认跳转地址是 $_SERVER["HTTP_REFERER"] ，

  > $this->success('新增成功', 'User/list');

* error方法的默认跳转地址是 javascript:history.back(-1); 。

  > $this->error('新增失败');

> 我们可以改变默认的模板：

* 默认错误跳转对应的模板文件

  > 'dispatch_error_tmpl' => APP_PATH . 'tpl/dispatch_jump.tpl',

* 默认成功跳转对应的模板文件

  > 'dispatch_success_tmpl' => APP_PATH . 'tpl/dispatch_jump.tpl'

> 可以使用项目内部的模板文件

* 默认错误跳转对应的模板文件

  > 'dispatch_error_tmpl' => 'public/error'

* 默认成功跳转对应的模板文件

  > 'dispatch_success_tmpl' => 'public/success'

> 跳转参数

* $data 要返回的数据
* $msg 页面提示信息
* $code 返回的code
* $wait 跳转等待时间 单位为秒
* $url 跳转页面地址

#### 重定向

> \think\Controller 类的 redirect 方法可以实现页面的重定向功能。

> redirect方法的参数用法和 Url::build 方法的用法一致

<div style="color:red">重定向后会改变当前的URL地址。</div>

* 跳转到某模块的某方法

  > $this->redirect('index/index', ['cate_id' => 2]);

* 直接重定向到一个指定的外部URL地址

  > $this->redirect('http://thinkphp.cn/blog/2',302);

## 请求

> web应用   使用协议：HTTP
>
> HTTP = 请求模型 + 响应模型
>
> 客户端--------------请求-------------->服务器
>
> 服务器--------------响应-------------->客户端

### 请求信息

#### 获取请求

> 如果要获取当前的请求信息，可以使用 \think\Request 类
>
> use  think\

* $request = Request::instance();     //单例模式
* $request = request();

> 在控制器方法中，继承控制器          $this->request;

#### 获取URL

> $request = Request::instance();
>
> // 获取当前域名                                                                         echo 'domain: ' . $request->domain() ;
> // 获取当前入口文件                                                                 echo 'file: ' . $request->baseFile();
> // 获取当前URL地址 不含域名                                                 echo 'url: ' . $request->url() ;
> // 获取包含域名的完整URL地址                                              echo 'url with domain: ' . $request->url(true);
> // 获取当前URL地址 不含QUERY_STRING                             echo 'url without query: ' . $request->baseUrl();
> // 获取URL访问的ROOT地址                                                   echo 'root:' . $request->root();
> // 获取URL访问的ROOT地址                                                   echo 'root with domain: ' . $request->root(true);
> // 获取URL地址中的PATH_INFO信息                                      echo 'pathinfo: ' . $request->pathinfo();
> // 获取URL地址中的PATH_INFO信息 不含后缀                     echo 'pathinfo: ' . $request->path();
> // 获取URL地址中的后缀信息                                                   echo 'ext: ' . $request->ext();

#### 获取请求参数

> $request = Request::instance();
> echo '请求方法：' . $request->method();
> echo '资源类型：' . $request->type();
> echo '访问地址：' . $request->ip();
> echo '是否AJax请求：' . var_export($request->isAjax(), true);
> echo '请求参数：';
> dump($request->param());
> echo '请求参数：仅包含name';
> dump($request->only(['name']));
> echo '请求参数：排除name';
> dump($request->except(['name']));

#### 设置/获取 模块/控制器/操作名称

> $request = Request::instance();
> echo "当前模块名称是" . $request->module();
> echo "当前控制器名称是" . $request->controller();
> echo "当前操作名称是" . $request->action();

#### 设置请求信息

> 如果某些环境下面获取的请求信息有误，可以手动设置这些信息参数

> $request = Request::instance();
> $request->root('index.php');
> $request->pathinfo('index/index/hello');

### 输入变量

> 可以通过 Request 对象完成全局输入变量的检测、获取和安全过滤，支持包括 $_GET 、 $_POST 、
> $_REQUEST 、 $_SERVER 、 $_SESSION 、 $_COOKIE 、 $_ENV 等系统变量，以及文件上传信息。

<b style="color:red">注意：永远不要轻信客户端发来的数据,如果不检查客户端数据，则会造成《注入漏洞》</b>

* 注入漏洞：操作

  ```php
  hello <?php echo mysql_query("select * form admin"?>
  
  hello <script>while(true){document.write("")}</script>
  ```

* 注入漏洞：解决

  > 将敏感词汇替换成不敏感词汇或替换为空

* 检测变量是否设置

  > 可以使用 has 方法来检测一个变量参数是否设置

  <div style="color:red">变量检测可以支持所有支持的系统变量。</div>

  * 原生方式

    > Request::instance()->has('id','get');
    > Request::instance()->has('name','post');

  * 助手函数

    > input('?get.id');
    > input('?post.name');

* 

## 数据库

## 模型（M）

## 视图（V）

## 模板













 





