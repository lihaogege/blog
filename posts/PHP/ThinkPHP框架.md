---
title: '博客项目创建指南'
date: '2022-8/15 17:56'
excerpt: 利用Nextjs,react,redux,typescript,RTK,RTKQ等技术搭建的博客项目,供大家参考指正
isFeatured: true
---

# ThinkPHP框架
上午：WUIF1912 4人、WUIF1910 10人、WUIF1911 17人  32人  WUIF1910：赵思源
下午：WUIF1912 0人、WUIF1910 0人、WUIF1911 0人
## 回顾上周知识
1. Web全栈开发介绍与总结
2. PHP课程中问题
3. MySQL课程问题
4. MVC软件架构模式
5. ThinkPHP框架
## 回顾4-13
1. 架构总览
2. 生命周期 
3. URL访问
4. 配置 
5. 控制器 C 控制器定义、控制器初始化、前置操作、跳转与重定向、资源控制器


# ThinkPHP5.0
注意：本课程主要讲解ThinkPHP5.0版本！

## ThinkPHP 简介
ThinkPHP是为了简化企业级应用开发和敏捷WEB应用开发而诞生的。

ThinkPHP是一个快速、简单的基于 **MVC设计模式** 和 **面向对象** 的轻量级PHP开发框架，遵循Apache2开源协议发布。

ThinkPHP可以支持windows/Unix/Linux等服务器环境，正式版需要PHP5.0以上版本支持，支持MySql、PgSQL、Sqlite多种数据库以及PDO扩展。

### 为什么选择ThinkPHP框架?
1. 非常流行、众多商业项目的最佳选择
2. 完全开源、免费，适合个人或商业项目开发
3. 中文文档齐全，社区活跃，开发资料丰富

### ThinkPHP版本区别
版本	    说明
核心板	仅包含框架核心库部分
完整版	除包含框架核心部分外，还包含了第三方扩展与驱动、分页、验证码等

## ThinkPHP安装
严格来说，ThinkPHP无需安装过程，这里所说的安装其实就是把ThinkPHP框架放入WEB运行环境（前提是你的WEB运行环境已经OK），可以通过下面几种方式获取和安装ThinkPHP。

集成开发环境
推荐使用集成开发环境WAMPServer、WAMP（Windows系统下集成Apache、PHP和MySQL的服务套件）

ThinkPHP5.0 的环境要求如下：
- PHP >= 5.4.0
- PDO PHP Extension
- MBstring PHP Extension
- CURL PHP Extension


安装方式：
1. 官网下载安装

获取ThinkPHP的方式很多，官方网站（ http://thinkphp.cn ） 提供了稳定版本或者带扩展完整版本的下载。

官网的下载版本不一定是最新版本，GIT版本获取的才是保持更新的版本。

2. git 安装
克隆应用目录：
方式1：
git clone https://github.com/top-think/think think_git
git checkout v5.0.24

方式2：
git clone -b v5.0.24 https://github.com/top-think/think think_git

克隆框架核心：
cd think_git 
git clone https://github.com/top-think/framework thinkphp
cd thinkphp
git checkout v5.0.24

3. composer 安装
注意：PHP的内容：composer php的包管理器。          
composer create-project topthink/think

composer create-project topthink/think=5.0.* thinkphp_composer

## 开发规范

命名方法：
1. 匈牙利命名法  user_name
2. 驼峰命名法 
   1. 大驼峰   UserName
   2. 小驼峰   userName

### 目录和文件
1. 目录不强制规范，驼峰和小写+下划线模式均支持；
2. 类库、函数文件统一以.php为后缀；
3. 类的文件名均以命名空间定义，并且命名空间的路径和类库文件所在路径一致；
4. 类名和类文件名保持一致，统一采用大驼峰法命名（首字母大写）；

### 函数和类、属性命名
1. 类的命名采用驼峰法，并且首字母大写，例如 User、UserType，默认不需要添加后缀，例如UserController应该直接命名为User；
2. 函数的命名使用小写字母和下划线（匈牙利：小写字母开头）的方式，例如 get_client_ip；
3. 方法的命名使用小驼峰法，并且首字母小写，例如 getUserName；
4. 属性的命名使用小驼峰法，并且首字母小写，例如 tableName、instance；
5. 以双下划线“__”打头的函数或方法作为魔法方法，例如 __call 和 __autoload；


### 常量和配置
1. 常量以大写字母和下划线命名，例如 APP_PATH和 THINK_PATH；
2. 配置参数以小写字母和下划线命名，例如 url_route_on 和url_convert；

### 数据表和字段
数据表和字段采用小写加下划线方式命名，并注意字段名不要以下划线开头，例如 think_user 表和 user_name字段，不建议使用驼峰和中文作为数据表字段命名。

## 目录结构
ThinkPHP5.0的目录结构如下：

/                       WEB部署目录（或者子目录）
├─application           应用目录（可设置）
│  ├─common             公共模块目录（可更改）
│  ├─index              模块目录(可更改)
│  │  ├─config.php      模块配置文件
│  │  ├─common.php      模块函数文件
│  │  ├─controller      控制器目录
│  │  ├─model           模型目录
│  │  ├─view            视图目录
│  │  └─ ...            更多类库目录
│  ├─command.php        命令行工具配置文件
│  ├─common.php         应用公共（函数）文件
│  ├─config.php         应用（公共）配置文件
│  ├─database.php       数据库配置文件
│  ├─tags.php           应用行为扩展定义文件
│  └─route.php          路由配置文件
├─extend                扩展类库目录（可定义）
├─public                WEB 部署目录（对外访问目录）
│  ├─static             静态资源存放目录(css,js,image)
│  ├─index.php          应用入口文件
│  ├─router.php         快速测试文件
│  └─.htaccess          用于 apache 的重写
├─runtime               应用的运行时目录（可写，可设置）
├─vendor                第三方类库目录（Composer）
├─thinkphp              框架系统目录
│  ├─lang               语言包目录
│  ├─library            框架核心类库目录
│  │  ├─think           Think 类库包目录
│  │  └─traits          系统 Traits 目录
│  ├─tpl                系统模板目录
│  ├─.htaccess          用于 apache 的重写
│  ├─.travis.yml        CI 定义文件
│  ├─base.php           基础定义文件
│  ├─composer.json      composer 定义文件
│  ├─console.php        控制台入口文件
│  ├─convention.php     惯例配置文件
│  ├─helper.php         助手函数文件（可选）
│  ├─LICENSE.txt        授权说明文件
│  ├─phpunit.xml        单元测试配置文件
│  ├─README.md          README 文件
│  └─start.php          框架引导文件
├─build.php             自动生成定义文件（参考）
├─composer.json         composer 定义文件
├─LICENSE.txt           授权说明文件
├─README.md             README 文件
└─think                 命令行入口文件

## 架构
### 架构总览
ThinkPHP5.0应用基于MVC（模型-视图-控制器）的方式来组织。

MVC是一个设计模式，它强制性的使应用程序的输入、处理和输出分开。
使用MVC应用程序被分成三个核心部件：
模型（M）、视图（V）、控制器（C），它们各自处理自己的任务。


5.0的URL访问受路由决定，如果关闭路由或者没有匹配路由的情况下，则是基于：

http://serverName/index.php/模块/控制器/操作/[参数/值...]


1. 入口文件
用户请求的PHP文件，负责处理一个请求（注意，不一定是URL请求）的生命周期，最常见的入口文件就是index.php，有时候也会为了某些特殊的需求而增加新的入口文件，例如给后台模块单独设置的一个入口文件admin.php或者一个控制器程序入口think都属于入口文件。

2. 应用
应用在ThinkPHP中是一个管理系统架构及生命周期的对象，由系统的 \think\App类完成，应用通常在入口文件中被调用和执行，具有相同的应用目录（APP_PATH）的应用我们认为是同一个应用，但一个应用可能存在多个入口文件。

应用具有自己独立的配置文件、公共（函数）文件。


+ 应用
 - 模块A (m) 
   - 控制器  (c) 
     - Login.php 
       - action1   （a）
       - action2
       - actionN
     - Class1
     - Class2
     - ClassN
   - 模型
   - 视图
   - common.php  模块公共文件
   - config.php  模块的配置文件
   - database.php 模块的数据库配置
 - 模块B
 - 模块...
 - 模块N

 - common.php    应用公共文件
 - config.php    应用配置文件
 - database.php  应用的数据库配置

3. 模块
一个典型的应用是由多个模块组成的，这些模块通常都是应用目录下面的一个子目录，每个模块都有自己独立的配置文件、公共文件和类库文件。

4. 控制器
每个模块拥有独立的MVC类库及配置文件，一个模块下面有多个控制器负责响应请求，而每个控制器其实就是一个独立的控制器类。

控制器主要负责请求的接收，并调用相关的模型处理，并最终通过视图输出。严格来说，控制器不应该过多的介入业务逻辑处理。

5. 操作
一个控制器包含多个操作（方法），操作方法是一个URL访问的最小单元。


6. 模型
模型类通常完成实际的业务逻辑和数据封装，并返回和格式无关的数据（php 数组）。


7. 视图
控制器调用模型类后返回的数据通过视图组装成不同格式的输出。视图根据不同的需求，来决定调用模板引擎进行内容解析后输出还是直接输出。

视图通常会有一系列的模板文件对应不同的控制器和操作方法，并且支持动态设置模板目录。

### 生命周期
1. 入口文件
   注意：当整个应用都要执行的代码，可以放置在此处。
2. 引导文件
   thinkphp/start.php文件就是系统默认的一个引导文件
   start.php
   <?php
   namespace think;

	// ThinkPHP 引导文件
	// 1. 加载基础文件
	require __DIR__ . '/base.php';

	// 2. 执行应用
	App::run()->send();

   base.php
   <?php
   1. 定义常量
   2. 环境常量   IS_CLI    IS_WIN
   3. 载入Loader类 
   4. 加载环境变量配置文件

   5. 注册自动加载
   6. 注册错误和异常处理机制
   7. 加载惯例配置文件
   ?>
3. 注册自动加载         1. base.php  \think\Loader::register();
4. 注册错误和异常机制    1. base.php  \think\Error::register();
5. 应用初始化           2. start.php  App::run()->send();
6. URL访问检测         APP.php  run()          
7. 路由检测            APP.php  run()  
8. 分发请求            APP.php  run()  ->  exec()
9. 响应输出            start.php App::run()->send(); （Response类 send）     
10. 应用结束           


### URL访问
ThinkPHP5.0在没有启用路由的情况下典型的URL访问规则是：
http://serverName/index.php/模块/控制器/操作/[参数名/参数值...]

如果不支持PATHINFO的服务器可以使用兼容模式访问如下：
http://serverName/index.php?s=/模块/控制器/操作/[参数名/参数值...]


隐藏入口文件：
http://www.live.com/index/login/loginout


### 模块设计

## 配置
### 配置目录
系统默认的配置文件目录就是应用目录（APP_PATH），也就是默认的application下面，并分为应用配置（整个应用有效）和模块配置（仅针对该模块有效）。

应用配置（整个应用有效）
├─application         应用目录
│  ├─config.php       应用配置文件
│  ├─database.php     数据库配置文件
│  ├─route.php        路由配置文件

模块配置（仅针对该模块有效）
├─application         应用目录
│  ├─moduleA          moduleA模块配置文件目录
│  │  ├─config.php    index模块配置文件
│  │  └─database.php  index模块数据库配置文件
│  ├─moduleB          moduleB模块配置文件目录
│  │  ├─config.php    index模块配置文件
│  │  └─database.php  index模块数据库配置文件

### 配置格式
ThinkPHP支持多种格式的配置格式，但最终都是解析为PHP数组的方式。

PHP数组定义
config.php
```
<?php
return [
	
];
```
配置参数名不区分大小写（因为无论大小写定义都会转换成小写），新版的建议是使用小写定义配置参数的规范。


其他配置格式支持
1. 入口文件定义相关格式
// 更改配置格式为ini格式
define('CONF_EXT', '.ini');
配置后，会自动解析支持的配置类型，包括.ini、.xml、.json 和 .php 在内的格式支持。

2. 其他类型配置格式
ini格式配置示例：
default_module=Index ;    默认模块
default_controller=index ;默认控制器
default_action=index ;    默认操作

xml格式配置示例：
<config>
<default_module>Index</default_module>
<default_controller>index</default_controller>
<default_action>index</default_action>
</config>

json格式配置示例：
{
	"default_module":"Index",
	"default_controller":"index",
	"default_action":"index"
}

### 配置加载
在ThinkPHP中，一般来说应用的配置文件是自动加载的，加载的顺序是：
  惯例配置->应用配置->扩展配置->场景配置->模块配置->动态配置
----------------------------------------------------->
低                                                   高

以上是配置文件的加载顺序，因为后面的配置会覆盖之前的同名配置（在没有生效的前提下），所以配置的优先顺序从右到左。

应用配置   name => app
场景配置   name => app_sencie
模块配置   name => app_module_a
动态配置   name => app_active



#### 场景配置
每个应用都可以在不同的情况下设置自己的状态（或者称之为应用场景），并且加载不同的配置文件。

applicaiton/config.php 
app_status = > ''

举个例子，你需要在公司和家里分别设置不同的数据库测试环境。那么可以这样处理，在公司环境中，我们在应用配置文件中配置：
```
'app_status'=>'office'
```
那么就会自动加载该状态对应的配置文件（默认位于application/office.php）。

如果我们回家后，我们修改定义为：

'app_status'=>'home'
那么就会自动加载该状态对应的配置文件（位于application/home.php）。

> 状态配置文件是可选的

### 读取配置
操作配置，有两种方式：
1. Config 类  (需加载)
   use think\Config;
   Config::get()
2. config 助手函数  (不用加载，拿来即用)
   config()

读取配置参数:
Config::get('配置参数1');
config('配置参数1');

获取所有配置：
Config::get()
config()

或者你需要判断是否存在某个设置参数：
Config::has('配置参数2');
config('?配置参数2');

访问二级配置：
echo Config::get('配置参数.二级参数');
echo config('配置参数.二级参数');

return [
 	template => [
	    ext => ".html"
 	]
]
Config::get("template.ext")
config("template.ext")


### 设置配置参数
使用set方法动态设置参数，例如：
Config::set('配置参数','配置值');
// 或者使用助手函数
config('配置参数','配置值');


批量配置：
Config::set([
    '配置参数1'=>'配置值',
    '配置参数2'=>'配置值'
]);

或者使用助手函数
config([
    '配置参数1'=>'配置值',
    '配置参数2'=>'配置值'
]);


Config::set('template', [
	'ext' => '.html'
]);


数据库配置：

database.php
return [
    // 数据库类型
    'type'        => 'mysql',
    // 服务器地址
    'hostname'    => '127.0.0.1',
    // 数据库名
    'database'    => 'thinkphp',
    // 数据库用户名
    'username'    => 'root',
    // 数据库密码
    'password'    => '',
    // 数据库连接端口
    'hostport'    => '',
    // 数据库连接参数
    'params'      => [],
    // 数据库编码默认采用utf8
    'charset'     => 'utf8',
    // 数据库表前缀
    'prefix'      => '',
    // 数据库调试模式
    'debug'       => false,
],

config("database.hostname")


### 控制器
1. 控制器定义
ThinkPHP V5.0的控制器定义比较灵活，可以无需继承任何的基础类，也可以继承官方封装的\think\Controller类或者其他的控制器类。

一个典型的控制器类定义如下：
<?php 
//1. 命名空间
namespace app\index\controller;
//2. 定义控制器类
class Index 
{
	//操作
    public function index()
    {
        return 'index';
    }
}

控制器类文件的实际位置是
   应用      模块   控制器文件夹 控制器文件
----------- ----  ----------  --------
application\index\controller\Index.php

渲染模板

View类渲染模板输出：
use think\View;
class Index {
	function index(){
		$view =new View();
		return $view->fetch('index');
	}
}

view助手函数渲染模板输出：
class Index {
	function index(){
		return view('index');
	}
}

如果继承了think\Controller类的话，可以直接调用think\View及think\Request类的方法，例如：

use think\Controller;
class Index extends Controller
{
    public function index()
    {
        // 获取包含域名的完整URL地址
        $this->assign('domain',$this->request->url(true));
        return $this->fetch('index');
    }
}
继承Controller类后：
$this->request;
$this->fetch()
$this->display()
$this->assgin()
$this->validate()

class Controller {
	protected $request;
	//常用
	function fetch(){}
	function display(){}
	function assign(){}
	function validate(){}
	//不常用
	function engine(){}
}

控制器一般不需要任何输出，直接return即可。

return $this->fetch()
return view()
$view = new View()
return $view->fetch()

return "";
return []   config: default_return_type:html    default_ajax_return:json 
注意：return [] 不一定非要 json([]),   ajax  return []  正确，转换
     测试：直接在浏览器访问 认为不是ajax，因此  return [] 报错，不转换

输出转换
默认情况下，控制器的返回输出不会做任何的数据处理，但可以设置输出格式，并进行自动的数据转换处理，前提是控制器的输出数据必须采用return的方式返回。


2. 控制器初始化
   如果你的控制器类继承了\think\Controller类的话，可以定义控制器初始化方法_initialize，在该控制器的方法调用之前首先执行。

   class Index extends Controller {
   		//1. 在该控制器的方法调用之前首先执行
		function _initialize(){}
		//2. 构造函数
		function __construct(Request $request = null)
	    {
	        parent::__construct($request);
	        echo "构造函数";
	    }

		function index(){}
	}

3. 前置操作
   1. 可以前置 多个方法
   2. 可以控制 那个操作之前执行

   可以为某个或者某些操作指定前置执行的操作方法，设置 beforeActionList属性可以指定某个方法为其他方法的前置操作，数组键名为需要调用的前置方法名，无值的话为当前控制器下所有方法的前置方法。

   ['except' => '方法名,方法名']
   ['only' => '方法名,方法名']

	protected $beforeActionList = [
        'first',
        'second' =>  ['except'=>'hello'],
        'three'  =>  ['only'=>'hello,data'],
    ];

4. 跳转和重定向
   继承 Controller 类

   跳转:跳转
   $this->success('新增成功', 'User/list');
   $this->error('新增失败');

   login > 提示模板(3s 自动跳转到)  > index
   login > 提示模板(3s 自动跳转到)
         <

   重定向:跳转
   login > index

   $this->redirect('index')

5. 资源控制器 (restFulAPI接口设计规范)
   前后台分离项目：开发接口
   
   1. 命令行生成资源控制器：
   php think make:controller index/Blog
   
   2. 然后你只需要为资源控制器注册一个资源路由：
   Route::resource('blog','index/Blog');
   
   GET POST PUT DELETE www.live.com/blog

   请求类型	生成路由规则	对应操作方法
	GET	blog	index              常用
	GET	blog/create	create
	POST	blog	save           常用
	GET	blog/:id	read           常用
	GET	blog/:id/edit	edit
	PUT	blog/:id	update         常用
	DELETE	blog/:id	delete     常用


### 请求信息
- 请求信息
- 输入变量【获取请求信息】
- 更改变量
- 请求类型 请求类型判断
- HTTP头信息
- 伪静态 【SEO优化】
- 方法注入 【使用较少】
- 属性注入 【使用较多】
- 参数绑定

用户请求  >  控制器   获取用户的请求信息

1. 如何获取请求对象
   $this->request
   request()
   Request::instance()

2. 通过请求对象，我可以得到什么信息
【重点】获取请求参数：
index/index/login/100
                  ----
                  URL参数
$request->param()  URL传参， get | post | put 请求参数
$request->input()  获取 get | post | put 请求参数
$request->get()    获取get请求参数
$request->post()   获取post请求参数
$request->put()    获取put请求参数
$request->file()   获取上传文件 


在控制器获取请求：
class Index extends Controller{
  function index(){
    
    $this->request

    request()
    // Request类， 设计模式：单例模式   new 
    /*
    class Request(){
      $instance = null;
        
      function instance(){
        if(empty($instance)){
          $this->instance = new self
       }
       return $this-instance;
      }
    }

    $r1 = new Request()
    $r2 = new Request()
    //只需要一个 实例  instance方法 创建实例
    $r = Request::instance()
    $r = Request::instance()
     $r = $r
    */
   
    $request1 = Request::instance()
  }
}


登录，在用户表 记录 用户最后一次登录的ip地址。
$request->ip()
$request->isAjax()

域名             domain()
获取当前入口文件   baseFile()
获取当前URL地址 不含域名  
获取包含域名的完整URL地址

$request = Request::instance();
echo '请求方法：' . $request->method() . '<br/>';
echo '资源类型：' . $request->type() . '<br/>';
echo '访问地址：' . $request->ip() . '<br/>';
echo '是否AJax请求：' . var_export($request->isAjax(), true) . '<br/>';
echo '请求参数：';
dump($request->param());
echo '请求参数：仅包含name';
dump($request->only(['name']));
echo '请求参数：排除name';
dump($request->except(['name']));

request->url()

class Request{
  protected $method = '';

  function method(){
    return $this->method;
  }
}

$request->method()


#### 更改变量

设置默认值
$this->request->get('fav',9999);

修改值
$this->request->get(['fav'=> 9999]);


#### 属性注入 【使用较多】
// 动态绑定属性
Request::instance()->bind('user',new User);
// 或者使用
Request::instance()->user = new User;

#### 参数绑定
> 当我们在控制器方法中绑定参数，参数如果没有设置默认值，参数是必传，不传就报错。

index 模块
class Index extends Controller{
  function aaa(){

  }
  //
  function getName($id){}
  function getInfo($name,$id){}
}

URL: index/index/aaa
URL: index/index/getname/id/100
URL: index/index/getinfo/name/zhangsan/id/10

### 数据库
原生PHP操作数据库方式：   php 与 mysql 
- mysqli  php扩展，仅限于操作mysql
- pdo     php扩展，PDO可操作12种不同数据库

> mysqli,pdo 都属于php的扩展，需要安装才能使用。
- 参考：https://www.runoob.com/php/php-mysql-connect.html

ThinkPHP可以支持多种数据库的操作，底层基于PDO扩展。采用PDO方式，目前包含了Mysql、SqlServer、PgSQL、Sqlite等数据库的支持。

Db 对pdo进行了封装，使用Db类去操作数据库。


1. 连接数据库
   1> 配置方式连接  []
   2> 方法配置  Db::connect()
2. 基本使用  Db::query()   Db::execute()
3. 查询构造器
   ThinkPHP操作数据库
   - Db类
   - db助手函数
   
  条件查询方法: where()  whereOr()
  获取表信息: Db::getTableInfo('think_user');
  查询数据: 单个 []|null = find()
           数据集 [] = select()
  值和列查询:  值 value()  列 column()
  更新数据: update()
  聚合查询：sum() avg() max() min() count()
  删除数据: 条数|0 = delete()
  视图查询: view()
  时间查询: whereTime()
  添加数据： insert()  insertAll()

  链式操作：
    alias() field() group()  
    join()  limit()  order() page()  
    table() union()  where()
    不常用：
    having() partition()
4. 事务操作 【事务不清楚，需要讲解】
   自动控制事务处理
   Db::transaction(function(){
    Db::table('think_user')->find(1);
    Db::table('think_user')->delete(1);
   });

   手动控制事务
   // 启动事务
  Db::startTrans();
  try{
      Db::table('think_user')->find(1);
      Db::table('think_user')->delete(1);
      // 提交事务
      Db::commit();    
  } catch (\Exception $e) {
      // 回滚事务
      Db::rollback();
  }

#### 连接数据库
如果应用需要使用数据库，必须配置数据库连接信息，数据库的配置文件有多种定义方式。

return [
    // 数据库类型
    'type'        => 'mysql',
    // 数据库连接DSN配置
    'dsn'         => '',
    // 服务器地址
    'hostname'    => '127.0.0.1',
    // 数据库名
    'database'    => 'thinkphp',
    // 数据库用户名
    'username'    => 'root',
    // 数据库密码
    'password'    => '',
    // 数据库连接端口
    'hostport'    => '',
    // 数据库连接参数
    'params'      => [],
    // 数据库编码默认采用utf8
    'charset'     => 'utf8',
    // 数据库表前缀
    'prefix'      => 'think_',
    // 数据库调试模式
    'debug'       => false,
    // 数据库部署方式:0 集中式(单一服务器),1 分布式(主从服务器)
    'deploy'      => 0,
    // 数据库读写是否分离 主从式有效
    'rw_separate' => false,
    // 读写分离后 主服务器数量
    'master_num'  => 1,
    // 指定从服务器序号
    'slave_no'    => '',
    // 是否严格检查字段是否存在
    'fields_strict'  => true,    
];

方法配置 （动态配置）
Db::connect(数据库配置信息 [])

Db::connect([
    // 数据库类型
    'type'        => 'mysql',
    // 数据库连接DSN配置
    'dsn'         => '',
    // 服务器地址
    'hostname'    => '127.0.0.1',
    // 数据库名
    'database'    => 'thinkphp',
    // 数据库用户名
    'username'    => 'root',
    // 数据库密码
    'password'    => '',
    // 数据库连接端口
    'hostport'    => '',
    // 数据库连接参数
    'params'      => [],
    // 数据库编码默认采用utf8
    'charset'     => 'utf8',
    // 数据库表前缀
    'prefix'      => 'think_',
])

或者使用字符串方式：

Db::connect('mysql://root:1234@127.0.0.1:3306/thinkphp#utf8');
字符串连接的定义格式为：

数据库类型://用户名:密码@数据库地址:数据库端口/数据库名#字符集

注意：字符串方式可能无法定义某些参数，例如前缀和连接参数。
#### ThinkPHP操作数据库
- Db类
- db助手函数

#### 基本使用
支持query（查询操作）和execute（写入操作）方法

Db::query('select * from think_user where id=?',[8]);

Db::execute('insert into think_user (id, name) values (?, ?)',[8,'thinkphp']);
#### 查询构造器
支持链式调用
$().attr().css().filter().animate().click()

Db::table()->filed()->where()->where()->find()
Db::table()->where()->select()


条件查询方法: where()  whereOr()
获取表信息: Db::getTableInfo('think_user');
查询数据:  单个 []|null = find()
         数据集 [] = select()
值和列查询:  值 value()  列 column()
 值 result|null=Db::table('u')->where('id',1)->value('name');
 列 []=Db::table('user')->where('status',1)->column('name');
更新数据: update()
 Db::table('user')->where('id', 1)->update(['name' => 'thinkphp']);
 Db::table('think_user')->update(['name' => 'thinkphp','id'=>1]);
update 方法返回影响数据的条数，没修改任何数据返回 0，出错 false
聚合查询：sum() avg() max() min() count()
删除数据: 条数|0 = delete()
视图查询: view()
添加数据: 
  一条：Db::name('user')->insert($data);
  多条：Db::name('user')->insertAll($data);


db('user')->where('id',1)->find();
Db::table('user')->where('id',1)->find()

### 模型：业务逻辑、数据处理
1. 模型定义

app/
|- common/
|- module/
|   |- controller/
|   |- model/
|   |- view/

<?php
namespace app\index\model;
use think\Model;

use traits\model\SoftDelete;

class User extends Model{
  // 可以设置主键
  protected $pk = 'uid';
  // 设置当前模型对应的完整数据表名称
  protected $table = 'user';
  // 设置当前模型的数据库连接
  protected $connection = [];

  // 自动写入创建和更新的时间戳字段
  protected $autoWriteTimestamp = true;

  // 定义时间戳字段名
  protected $createTime = 'create_at';
  protected $updateTime = 'update_at';

  // 只读字段
  protected $readonly = ['name','email'];

  // 软删除
  use SoftDelete;
  protected $deleteTime = 'delete_time';

  // 支持给字段设置类型自动转换
  protected $type = []

  //自定义初始化
  protected function initialize()
  {
      //需要调用`Model`的`initialize`方法
      parent::initialize();
      //TODO:自定义的初始化
  }
  //自定义初始化
  protected static function init()
  {
      //TODO:自定义的初始化
  }

}

模型调用
模型类可以使用静态调用或者实例化调用两种方式，例如：

// 静态调用
$user = User::get(1);
$user->name = 'thinkphp';
$user->save();
// 实例化模型
$user = new User;
$user->name= 'thinkphp';
$user->save();

// 使用 Loader 类实例化（单例）
$user = Loader::model('User');

// 或者使用助手函数`model`
$user = model('User');
$user->name= 'thinkphp';
$user->save();

2. 初始化  initialize()   static init()

3. 新增
添加一条数据
第一种是实例化模型对象后赋值并保存：
$user           = new User;
$user->name     = 'thinkphp';
$user->email    = 'thinkphp@qq.com';
$user->save();

也可以使用data方法批量赋值：
$user = new User;
$user->data([
    'name'  =>  'thinkphp',
    'email' =>  'thinkphp@qq.com'
]);
$user->save();

或者直接在实例化的时候传入数据
$user = new User([
    'name'  =>  'thinkphp',
    'email' =>  'thinkphp@qq.com'
]);
$user->save();


注意：如果需要过滤非数据表字段的数据，可以使用：
$user = new User($_POST);
// 过滤post数组中的非数据表字段数据
$user->allowField(true)->save();

希望指定某些字段写入，可以使用：
$user = new User($_POST);
// post数组中只有name和email字段会写入
$user->allowField(['name','email'])->save();


获取自增ID

添加多条数据

支持批量新增，可以使用：
$user = new User;
$list = [
    ['name'=>'thinkphp','email'=>'thinkphp@qq.com'],
    ['name'=>'onethink','email'=>'onethink@qq.com']
];
$user->saveAll($list);

更新：
查找并更新：在取出数据后，更改字段内容后更新数据。
$user = User::get(1);
$user->name     = 'thinkphp';
$user->email    = 'thinkphp@qq.com';
$user->save();

直接更新数据：也可以直接带更新条件来更新数据
$user = new User;
// save方法第二个参数为更新条件
$user->save([
    'name'  => 'thinkphp',
    'email' => 'thinkphp@qq.com'
],['id' => 1]);


需要过滤非数据表字段的数据，可以使用：
$user = new User();
// 过滤post数组中的非数据表字段数据
$user->allowField(true)->save($_POST,['id' => 1]);

指定某些字段写入，可以使用：
$user = new User();
// post数组中只有name和email字段会写入
$user->allowField(['name','email'])->save($_POST, ['id' => 1]);


批量更新数据：可以使用saveAll方法批量更新数据，例如：
$user = new User;
$list = [
    ['id'=>1, 'name'=>'thinkphp', 'email'=>'thinkphp@qq.com'],
    ['id'=>2, 'name'=>'onethink', 'email'=>'onethink@qq.com']
];
$user->saveAll($list);
注意：更新时候需要主键。

通过数据库类更新数据
必要的时候，你也可以使用数据库对象来直接更新数据，但这样就无法使用模型的事件功能。
$user = new User;
$user->where('id', 1)
    ->update(['name' => 'thinkphp']);
或者使用：
$user = new User;
$user->update(['id' => 1, 'name' => 'thinkphp']);

静态方法
模型支持静态方法直接更新数据，例如：
User::where('id', 1)
    ->update(['name' => 'thinkphp']);
或者使用：
User::update(['id' => 1, 'name' => 'thinkphp']);


自动识别
我们已经看到，模型的新增和更新方法都是save方法，系统有一套默认的规则来识别当前的数据需要更新还是新增。

- 实例化模型后调用save方法表示新增；
- 查询数据后调用save方法表示更新；
- 调用模型的save方法后表示更新；
- 如果你的数据操作比较复杂，可以显式的指定当前调用save方法是新增操作还是更新操作。

显式更新数据：
// 实例化模型
$user = new User;
// 显式指定更新数据操作
$user->isUpdate(true)
    ->save(['id' => 1, 'name' => 'thinkphp']);

显式新增数据：
$user = User::get(1);
$user->name = 'thinkphp';
// 显式指定当前操作为新增操作
$user->isUpdate(false)->save()

删除
删除当前模型：删除模型数据，可以在实例化后调用delete方法。
$user = User::get(1);
$user->delete();

根据主键删除：或者直接调用静态方法
User::destroy(1);
// 支持批量删除多个数据
User::destroy('1,2,3');
// 或者
User::destroy([1,2,3]);

条件删除
使用数组进行条件删除，例如：
// 删除状态为0的数据
User::destroy(['status' => 0]);

或者通过数据库类(Db)的查询条件删除
User::where('id','>',10)->delete();

查询
获取单个数据:
  取出主键为1的数据
  $user = User::get(1);
  echo $user->name;

  // 使用数组查询
  $user = User::get(['name' => 'thinkphp']);

  或者在实例化模型后调用查询方法
  $user = new User();
  // 查询单个数据
  $user->where('name', 'thinkphp')
      ->find();
获取多个数据:
// 根据主键获取多个数据
$list = User::all('1,2,3');

// 或者使用数组
$list = User::all([1,2,3]);

// 使用数组查询
$list = User::all(['status'=>1]);

或者在实例化模型后调用查询方法
$user = new User();
// 查询数据集
$user->where('name', 'thinkphp')
    ->limit(10)
    ->order('id', 'desc')
    ->select();

聚合:
静态调用：
User::count();
User::where('status','>',0)->count();
User::where('status',1)->avg('score');
User::max('score');

动态调用：
$user = new User;
$user->count();
$user->where('status','>',0)->count();
$user->where('status',1)->avg('score');
$user->max('score');

时间戳: 在表中 数据的创建时间、数据的修改时间
系统支持自动写入创建和更新的时间戳字段，有两种方式配置支持

字段名默认创建时间字段为create_time，更新时间字段为update_time，支持的字段类型包括timestamp/datetime/int。


user:
id
name 
age
create_time   int 
update_time   datetime

第一种方式，是在数据库配置 database.php 文件中添加全局设置：
// 开启自动写入时间戳字段  
'auto_timestamp' => true,

第二种是直接在单独的模型类里面设置：
class Login extend Model{
   //对当前模型进行配置
   protected $autoWriteTimestamp = true;
}


默认识别为整型int类型，如果你的时间字段不是int类型的话，例如使用datetime类型的话，可以这样设置：
// 开启自动写入时间戳字段
'auto_timestamp' => 'datetime',


数据库 创建时间、修改时间字段名 不是 create_time,update_time
如果你的数据表字段不是默认值的话，可以按照下面的方式定义：

class User extends Model 
{
    // 定义时间戳字段名
    protected $createTime = 'create_at';
    protected $updateTime = 'update_at';
}

只读字段
namespace app\index\model;
use think\Model;
class User extends Model
{
    protected $readonly = ['name','email'];
}

软删除
Db::query("delete from user where id=10");  彻底没了

user   「is_del 软删除的属性  is_del 1 删除，0 未删除 」
id  name age address is_del

Db::query("select * from user where id_del=0");

类型转换


### 视图(View)
视图功能由\think\View类配合视图驱动（模板引擎）类一起完成，目前的内置模板引擎包含PHP原生模板和Think模板引擎。

内置：Think模板引擎、PHP原生模板。


PHP模板引擎：
template:
<div>
   <h2><?php echo $title ?></h2>
   <p><?php echo $desc ?></p>
</div>

data:
[
    title: "MVC之视图"，
    desc: "视图功能由\think\View类配合视图驱动（模板引擎）类一起完成，目前的内置模板引擎包含PHP原生模板和Think模板引擎"
]

   ||
  PHP
   ||
html:
<div>
   <h2>MVC之视图</h2>
   <p>视图功能由\think\View类配合视图驱动（模板引擎）类一起完成，目前的内置模板引擎包含PHP原生模板和Think模板引擎</p>
</div>


View Think模板引擎：
template:
<div>
   <h2>{$title}</h2>
   <p>{$desc}</p>
</div>

data:
[
    title: "MVC之视图"，
    desc: "视图功能由\think\View类配合视图驱动（模板引擎）类一起完成，目前的内置模板引擎包含PHP原生模板和Think模板引擎"
]

    ||
  模板引擎
    ||

html:
<div>
   <h2>MVC之视图</h2>
   <p>视图功能由\think\View类配合视图驱动（模板引擎）类一起完成，目前的内置模板引擎包含PHP原生模板和Think模板引擎</p>
</div>


继承\think\Controller类:
class Index extends Controller {
  function index(){

     // 给模板变量赋值
     $this->assign(name,value);
     // 可以渲染模板输出
     return $this->fetch("模板名字",[模板传递数据]);

     // 可以输出html片段，可以使用模板
     return $this->display(content:string,vars:[])
  }
}

// 可以输出html片段，可以使用模板
return $this->display(content:string,vars:[])
return $this->display('<h1>{$title}</h1><p>{$desc}</p>',$data);

助手函数
如果你只是需要渲染模板输出的话，可以使用系统提供的助手函数view，可以完成相同的功能：
return view("模板名字",[模板传递数据]);
return view('hello',['name'=>'thinkphp']);

模板引擎:
1. 配置文件 config.php
在应用配置文件中配置template参数即可，例如：
'template'               => [
    // 模板引擎类型 支持 php think 支持扩展
    'type'         => 'Think',
    // 模板路径
    'view_path'    => './template/',
    // 模板后缀
    'view_suffix'  => 'html',
    // 模板文件名分隔符
    'view_depr'    => DS,
    // 模板引擎普通标签开始标记
    'tpl_begin'    => '{',
    // 模板引擎普通标签结束标记
    'tpl_end'      => '}',
    // 标签库标签开始标记
    'taglib_begin' => '{',
    // 标签库标签结束标记
    'taglib_end'   => '}',
],

// 模板引擎普通标签开始标记
'tpl_begin'    => '{',
// 模板引擎普通标签结束标记
'tpl_end'      => '}',
<h1>{$title}</h1>

// 模板引擎普通标签开始标记
'tpl_begin'    => '<%',
// 模板引擎普通标签结束标记
'tpl_end'      => '%>',
<h2><% $title %></h2>


模板赋值
1. assign()

// 模板变量赋值
$this->assign('name','ThinkPHP');
$this->assign('email','thinkphp@qq.com');
// 或者批量赋值
$this->assign([
    'name'  => 'ThinkPHP',
    'email' => 'thinkphp@qq.com'
]);

2. fetch() / display()
return $this->fetch('index', [
    'name'  => 'ThinkPHP',
    'email' => 'thinkphp@qq.com'
]);

$content = '{$name}-{$email}';
return $this->display($content, [
    'name'  => 'ThinkPHP',
    'email' => 'thinkphp@qq.com'
]);

助手函数模板赋值：
return view('index', [
    'name'  => 'ThinkPHP',
    'email' => 'thinkphp@qq.com'
]);

模板渲染：
fetch('[模板文件]'[,'模板变量（数组）'])

模板文件的写法支持下面几种：
- 不带任何参数  自动定位当前操作的模板文件  index  => index.html
- [模块@][控制器/][操作] 常用写法，支持跨模块  index@login/login
- 完整的模板文件名  直接使用完整的模板文件名（包括模板后缀） 
  index.html
  index@login/login.html


return $view->fetch();
表示系统会按照默认规则自动定位模板文件，其规则是：
当前模块/view/当前控制器（小写）/当前操作（小写）.html

return $view->fetch('public/menu');

### 模板(View)  学习thinkphp模板引擎

#### 定位

模板文件定义
每个模块的模板文件是独立的，为了对模板文件更加有效的管理，ThinkPHP对模板文件进行目录划分，默认的模板文件定义规则是：

视图目录/控制器名（小写）/操作名（小写）+模板后缀

index模块下        模板名称
                  -----
|- view / index / lists.html
   ---    -----   -----
 视图目录   控制器  操作名称

               模块@控制器/操作
$this->fetch('index@index/lists')


#### 模板标签
普通标签用于变量输出和模板注释，普通模板标签默认以{ 和 } 作为开始和结束标识，并且在开始标记紧跟标签的定义，如果之间有空格或者换行则被视为非模板标签直接输出。 
例如：{$name} 、{$vo.name} 、{$vo['name']|strtoupper} 都属于正确的标签，而{ $name} 、{ $vo.name}则不属于。

标签库标签
标签库标签可以用于模板变量输出、文件包含、条件控制、循环输出等功能，而且完全可以自己扩展功能。

{eq name="name" value="value"}
  相等
{else/}
  不相等
{/eq}

#### 变量输出
在模板中输出变量的方法很简单，例如，在控制器中我们给模板变量赋值：

变量：
$this->assign("title","hello world!");
html:
{$title}

然后就可以在模板中使用：
Hello,{$title}！
模板编译后的结果就是：
Hello,<?php echo($title);?>！

注意模板标签的{和$之间不能有任何的空格，否则标签无效。所以，下面的标签
Hello,{ $name}！    错误！！！！！！

数组：
$view->assign('data',[
    "name" => "张三",
    "email" => "zhangsan@qq.com"
]);
那么，在模板中我们可以用下面的方式输出：
Name：{$data.name}
Email：{$data.email}
或者用下面的方式也是有效：
Name：{$data['name']}
Email：{$data['email']}

对象：
如果data变量是一个对象（并且包含有name和email两个属性），那么可以用下面的方式输出：
Name：{$data:name}
Email：{$data:email}
或者
Name：{$data->name}
Email：{$data->email}

#### 系统变量
系统变量输出
普通的模板变量需要首先赋值后才能在模板中输出，但是系统变量则不需要，可以直接在模板中输出，系统变量的输出通常以{$Think 打头，例如：
```
{$Think.server.script_name} // 输出$_SERVER['SCRIPT_NAME']变量
{$Think.session.user_id} // 输出$_SESSION['user_id']变量
{$Think.get.pageNumber} // 输出$_GET['pageNumber']变量
{$Think.cookie.name}  // 输出$_COOKIE['name']变量
```
> 支持输出 `$_SERVER、$_ENV、 $_POST、 $_GET、 $_REQUEST、$_SESSION和 $_COOKIE`变量。


#### 请求参数

{$Request.ip}


#### 使用函数

{var |fun}


{$data.name|md5} 

{$time|date="Y-m-d",###}

{$arr|dump}

#### 使用默认值
我们可以给变量输出提供默认值，例如：
{$user.nickname|default="这家伙很懒，什么也没留下"}


#### 使用运算符
#### 三元运算
模板可以支持三元运算符，例如：
{$status? '正常' : '错误'}
{$info['status']? $info['msg'] : $info['error']}
{$info.status? $info.msg : $info.error }

#### 注释
单行注释
{/* 注释内容 */ } 或 {// 注释内容 } 

多行注释

{/* 
  注释内容 
  */}


#### 包含文件

include  include_once
  
require  require_once

在当前模版文件中包含其他的模版文件使用include标签，标签用法：
{include file='模版文件1,模版文件2,...' /}


传入参数
无论你使用什么方式包含外部模板，Include标签支持在包含文件的同时传入参数，例如，下面的例子我们在包含header模板的时候传入了title和keywords参数：

{include file="Public/header" title="$title" keywords="开源WEB开发框架" /}
就可以在包含的header.html文件里面使用title和keywords变量，如下：

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>[title]</title>
<meta name="keywords" content="[keywords]" />
</head>





















