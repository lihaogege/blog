---
title: '博客项目创建指南'
date: '2022-8/15 17:56'
excerpt: 利用Nextjs,react,redux,typescript,RTK,RTKQ等技术搭建的博客项目,供大家参考指正
isFeatured: true
---

# 扩展
## 网络应用程序架构：客户端/服务器
- C/S 客户端/服务器
  下载安装的客户端软件
  优点：速度快、用户体验好、安全、网络依赖不强
  缺点：下载安装、更新(用户控制更新)、不能跨平台
- B/S 浏览器/服务器
  软件运行在浏览器上，用户无需安装
  优点：无需下载，不占磁盘空间，更新及时(服务提供商控制)，可跨平台
  缺点：记忆|搜索，依赖网络，用户体验差

## MVC
组成：
M: 处理数据、业务逻辑
  接收控制器数据并处理、业务逻辑，将处理结果传递给控制器
V: 收集数据、展示数据
  收集用户数据给控制器、从控制器得到数据并展示
C: 处理请求、调用模型
   处理来自用户界面(V)的请求，决定调用哪个模型处理，将调用模型得到结果传递给视图

## 设计模式
设计模式（Design pattern）代表了最佳的实践，通常被有经验的面向对象的软件开发人员所采用。设计模式是软件开发人员在软件开发过程中面临的一般问题的解决方案。这些解决方案是众多软件开发人员经过相当长的一段时间的试验和错误总结出来的。

设计模式是一套被反复使用的、多数人知晓的、经过分类编目的、代码设计经验的总结。使用设计模式是为了重用代码、让代码更容易被他人理解、保证代码可靠性。 毫无疑问，设计模式于己于他人于系统都是多赢的，设计模式使代码编制真正工程化，设计模式是软件工程的基石，如同大厦的一块块砖石一样。项目中合理地运用设计模式可以完美地解决很多问题，每种模式在现实中都有相应的原理来与之对应，每种模式都描述了一个在我们周围不断重复发生的问题，以及该问题的核心解决方案，这也是设计模式能被广泛应用的原因。

23种设计模式：模式可以分为三大类：
- 创建型模式（Creational Patterns）
- 结构型模式（Structural Patterns）
- 行为型模式（Behavioral Patterns）

## URL语法格式：
protocol :// hostname[:port] / path / [;parameters][?query]#fragment
- protocol 协议 http://  https ftp file://
               协议 对应即服务  http https => Web服务
- hostname 主机 www.baidu.com
- :port    端口 http默认80  https 443
- path  访问路径
- parameters 参数
- ?query 查询字符串 ?username=xxx&password=123123
- #fragment  hash  定位网页某个部分

# ThinkPHP
注意：本课程主要讲解ThinkPHP5.0版本！
- ThinkPHP 6.0.x 最新版本
- ThinkPHP 5.1.x
- ThinkPHP 5.0.x【主讲】

ThinkPHP是一个快速、简单的基于 MVC思想 和 面向对象 的轻量级PHP开发框架，遵循Apache2开源协议发布，为WEB应用和API开发提供了强有力的支持。


- ThinkPHP可以支持windows/Unix/Linux等服务器环境
- ThinkPHP支持MySql、PgSQL、Sqlite多种数据库以及PDO扩展

使用PHP操作MySQL方式
- MySQLi extension ("i" 意为 improved)
  MySQLi 只针对 MySQL 数据库。
  连接方式：
  - 面向过程连接
  - 面向对象连接
- PDO (PHP Data Objects)  
  PDO 应用在 12 种不同数据库中
  连接方式：面向对象连接


ThinkPHP框架可以用于什么类型项目开发？
- PC网站、移动端网站、软件、系统 (MVC)
- API (应用程序接口)
  可以为以下类型的应用提供数据支持：
  1> 小程序 (微信、QQ、支付宝、百度、头条、钉钉等等)
  2> App
  3> 桌面应用
  4> 前后端分离应用

## 基础
### 安装
1. github 下载指定版本的thinkphp
2. composer
   安装最新版本TP：
   composer create-project topthink/think  文件夹名称

   安装指定版本：
   composer create-project topthink/think=5.0.* test3

### 开发规范
小写字母+下划线：目录、函数、表名、字段名
大驼峰：控制器、模型、类名称
小驼峰：类的属性、方法
大写字符+下划线：常量

### 目录结构
project/
|- application/
|    |- 模块A/
|    |   |- controller/
|    |   |- model/
|    |   |- view/
|    |   |- common.php
|    |   |- config.php
|    |   |- database.php
|    |   |- validate/
|    |   |- ...
|    |- 模块B/
|    |   |- controller/
|    |   |- model/
|    |   |- view/
|    |   |- common.php
|    |   |- config.php
|    |   |- database.php
|    |   |- validate/
|    |   |- ...
|    |- config.php
|    |- database.php
|    |- common.php
|    |- route.php
|    |- common.php
|    |- ...
|- public/
|    |- index.php
|    |- static/
│    ├─router.php         快速测试文件
|    └─ .htaccess          用于 apache 的重写
|- thinkphp/             框架核心
├─ vendor/               第三方类库目录（Composer）

## 架构
### 架构总览
- URL访问
- 入口文件
- 应用
- 模块
- 控制器
- 操作
- 模型
- 视图

### 生命周期
### 入口文件
### URL访问
### 模块设计
### 命名空间

## 配置
### 配置目录
├─application         应用目录
│  ├─config.php       应用配置文件
│  ├─database.php     数据库配置文件
│  ├─route.php        路由配置文件
│  ├─index            index模块配置文件目录
│  │  ├─config.php    index模块配置文件
│  │  └─database.php  index模块数据库配置文件


### 配置格式
ThinkPHP支持多种格式的配置格式，但最终都是解析为PHP数组的方式。

PHP数组定义
返回PHP数组的方式是默认的配置定义格式，例如：

//项目配置文件
return [
    // 默认模块名
    'default_module'        => 'index',
    // 默认控制器名
    'default_controller'    => 'Index',
    // 默认操作名
    'default_action'        => 'index',
    //更多配置参数
    //...
];

### 配置加载
在ThinkPHP中，一般来说应用的配置文件是自动加载的，加载的顺序是：
惯例配置->应用配置->扩展配置->场景配置->模块配置->动态配置

常用配置：
- 应用配置
- 场景配置
- 模块配置
- 动态配置

### 读取配置
获取配置方式：
1. Config类
   Index.php
   <?php
   use think\Config;
   class Index {
	  	function test(){
	  		Config::get()
	  	} 
	}
2. config助手函数
   <?php
   class Index {
	  	function test(){
	  		config()
	  	} 
	}

读取配置：
Config::get()   获取所有配置  config.php  database.php
Config::get("属性")
Config::get("属性.二级属性")

config()
config("属性")
config("属性.二级属性")

判断是否有某个属性：
bool = Config::has("属性")
bool = Config::has("属性.二级属性")

bool = config("?属性")
bool = config("?属性.二级属性")

### 设置配置
// 使用Config类配置
Config::set('配置参数','配置值');

// 或者使用助手函数
config('配置参数','配置值');

Config::set([
    '配置参数1'=>'配置值',
    '配置参数2'=>'配置值'
]);
// 或者使用助手函数
config([
    '配置参数1'=>'配置值',
    '配置参数2'=>'配置值'
]);

## 控制器(C)

### 控制器定义
ThinkPHP V5.0的控制器定义比较灵活，可以无需继承任何的基础类，也可以继承官方封装的\think\Controller类或者其他的控制器类。

控制器定义：
applocation/模块/controller/Index.php

<?php
namespace app\模块\controller;
class Index {
	function index(){

	}
}

控制器定义 继承Controller：
applocation/模块/controller/Index.php

<?php
namespace app\模块\controller;
use think\Controller;
class Index extends Controller{
	function index(){
		$this->view  视图实例
		$this->request 请求
		$this->beforeActionList = []  前置操作
		$this->fetch($template, $vars, $replace, $config); 加载模板输出
		$this->display($content, $vars, $replace, $config);  渲染内容输出
		$this->assign($name, $value = '')  模板变量赋值
		$this->validate($data, $validate, $message = [], $batch = false, $callback = null) 验证数据
		$this->success($msg = '', $url = null, $data = '', $wait = 3, array $header = [])  操作成功跳转的快捷方法 
		$this->error($msg = '', $url = null, $data = '', $wait = 3, array $header = [])  操作错误跳转的快捷方法
		$this->redirect($url, $params = [], $code = 302, $with = [])  URL 重定向
	}
}

没有继承在控制器里面渲染模板：
要渲染模板需使用视图 View类 view()

$view->fetch();
$view->display();
$view->assign();

使用View类渲染：
<?php
namespace app\index\controller;
use think\View;
class Index {
	function index(){
		$view = new View();
		return $view->fetch("index")
	}
}
使用助手函数view：
<?php
namespace app\index\controller;
class Index {
	function index(){	
		return view("index")
	}
}
继承Controller类渲染：
<?php
namespace app\index\controller;
use think\Controller;
class Index extends Controller{
	function index(){
		return $this->fetch("index")
	}
}

渲染输出
namespace app\index\controller;
class Index 
{
    public function hello()
    {
        return 'hello,world!';
    }
    public function json()
    {
    	//PHP [] => JS {}
        return json_encode($data);
    }
    public function read()
    {
        return view();
    }
}
控制器一般不需要任何输出，直接return即可。


当我们设置输出数据格式为JSON：

输出转换
默认情况下，控制器的返回输出不会做任何的数据处理，但可以设置输出格式，并进行自动的数据转换处理，前提是控制器的输出数据必须采用return的方式返回。

config.php
// 默认输出类型
'default_return_type'   => 'json',

### 控制器初始化
如果你的控制器类继承了\think\Controller类的话，可以定义控制器初始化方法_initialize，在该控制器的方法调用之前首先执行。

namespace app\index\controller;
use think\Controller;
class Index extends Controller
{
    public function _initialize()
    {
    	// 在初始化方法中，可以放置 每个操作调用前 必须要执行的操作
        echo 'init<br/>';
    }
    // index/index/hello  先执行 _initialize() 再调用 hello()
    public function hello()
    {
        return 'hello';
    }

    // index/index/data  先执行 _initialize() 再调用 data()
    public function data()
    {
        return 'data';
    }
}

### 前置操作
可以为某个或者某些操作指定前置执行的操作方法，设置 beforeActionList属性可以指定某个方法为其他方法的前置操作，数组键名为需要调用的前置方法名，无值的话为当前控制器下所有方法的前置方法。

- ['except' => '方法名,方法名']  表示这些方法不使用前置方法，
- ['only' => '方法名,方法名']    表示只有这些方法使用前置方法。

namespace app\index\controller;
use think\Controller;
class Index extends Controller
{
    protected $beforeActionList = [
        'first',
        'second' =>  ['except'=>'hello'],
        'three'  =>  ['only'=>'hello,data'],
    ];
    protected function first()
    {
        echo 'first<br/>';
    }
    protected function second()
    {
        echo 'second<br/>';
    }
    protected function three()
    {
        echo 'three<br/>';
    }
    public function hello()
    {
        return 'hello';
    }
    public function data()
    {
        return 'data';
    }
}


### 跳转和重定向
跳转 跳转到提示页，等待3秒，跳转目标页
重定向 直接跳转至目标页

#### 页面跳转
在应用开发中，经常会遇到一些带有提示信息的跳转页面，例如操作成功或者操作错误页面，并且自动跳转到另外一个目标页面。系统的\think\Controller类内置了两个跳转方法success和error，用于页面跳转提示。

$this->success('新增成功', 'User/list') 
$this->error('新增失败')
$this->error('新增失败','User/list')

提示页面模板：
success和error方法都可以对应的模板，默认的设置是两个方法对应的模板都是：
THINK_PATH . 'tpl/dispatch_jump.tpl'

我们可以改变默认的模板：
//默认错误跳转对应的模板文件
'dispatch_error_tmpl' => APP_PATH . 'tpl/dispatch_jump.tpl',
//默认成功跳转对应的模板文件
'dispatch_success_tmpl' => APP_PATH . 'tpl/dispatch_jump.tpl',

也可以使用项目内部的模板文件
//默认错误跳转对应的模板文件
'dispatch_error_tmpl' => 'public/error',
//默认成功跳转对应的模板文件
'dispatch_success_tmpl' => 'public/success',

#### 重定向
\think\Controller类的redirect方法可以实现页面的重定向功能。

redirect方法的参数用法和Url::build方法的用法一致（参考URL生成部分），例如：

//重定向到News模块的Category操作
$this->redirect('News/category', ['cate_id' => 2]);
上面的用法是跳转到News模块的category操作，重定向后会改变当前的URL地址。

或者直接重定向到一个指定的外部URL地址，例如：

//重定向到指定的URL地址 并且使用302
$this->redirect('http://thinkphp.cn/blog/2',302);


## 请求
Web应用  使用协议HTTP  
HTTP = 请求模型 + 响应模型

             请求
客户端 -------------------> 服务器

             响应
客户端 <------------------- 服务器

### 请求信息
如果要获取当前的请求信息，可以使用\think\Request类，
- $request = Request::instance();  //单例模式
- $request = request();
- 在控制器方法，控制器继承Controller
  $this->request

请求信息有哪些？
1. 获取URL信息
2. 设置/获取 模块/控制器/操作名称    Path_info
   获取：
   $request = Request::instance();
	echo "当前模块名称是" . $request->module();
	echo "当前控制器名称是" . $request->controller();
	echo "当前操作名称是" . $request->action();
   设置：设置模块名称值需要像module方法中传入名称即可，同样使用于设置控制器名称和操作名称
	Request::instance()->module('module_name');

3. 获取请求参数
$request = Request::instance();
echo '请求方法：' . $request->method() . '<br/>';
echo '资源类型：' . $request->type() . '<br/>';
echo '客户端IP地址：' . $request->ip() . '<br/>';
echo '是否AJax请求：' . var_export($request->isAjax(), true) . '<br/>';
echo '请求参数：';
dump($request->param());
echo '请求参数：仅包含name';
dump($request->only(['name']));
echo '请求参数：排除name';
dump($request->except(['name']));

### 输入变量
             请求
客户端 -------------------> 服务器

客户端发给服务器的数据：$_GET|$_POST|REQUEST|$_FILES

-----------
可以通过Request对象完成全局输入变量的检测、获取和安全过滤，支持包括$_GET、$_POST、$_REQUEST、$_SERVER、$_SESSION、$_COOKIE、$_ENV等系统变量，以及文件上传信息。

注意：永远不要相信客户端发来的数据，不过不检查客户端数据，会造成《注入漏洞》。
注入漏洞，操作：
hello <?php echo mysql_query("select * form admin")  ?>
hello <script>while(true){document.write("")}</script>

#### 检测变量是否设置
可以使用has方法来检测一个变量参数是否设置，如下：
Request::instance()->has('id','get');
Request::instance()->has('name','post');

或者使用助手函数
input('?get.id');
input('?post.name');
变量检测可以支持所有支持的系统变量。

#### 变量获取

post index?username=123   请求体：{id:100}  
     使用post获取   {id:100} 
     -------------
     $this->param() => [ id => 100, username => 123 ]

param	获取当前请求的变量
get	获取 $_GET 变量
post	获取 $_POST 变量
put	获取 PUT 变量
delete	获取 DELETE 变量
session	获取 $_SESSION 变量
cookie	获取 $_COOKIE 变量
request	获取 $_REQUEST 变量
server	获取 $_SERVER 变量
env	获取 $_ENV 变量
route	获取 路由（包括PATHINFO） 变量
file	获取 $_FILES 变量


$request->param()
$request->get()
$request->server()
$request->file()
#### 变量过滤
配置过滤：
1. 通过配置文件设置全局过滤规则
	框架默认没有设置任何过滤规则，你可以是配置文件中设置全局的过滤规则：
	config.php
	// 默认全局过滤方法 用逗号分隔多个
	'default_filter'         => 'htmlspecialchars',
2. Request对象进行全局变量的获取过滤
也支持使用Request对象进行全局变量的获取过滤，过滤方式包括函数、方法过滤，以及PHP内置的Types of filters，我们可以设置全局变量过滤方法，例如：
Request::instance()->filter('htmlspecialchars');
3. 支持设置多个过滤方法，例如：
Request::instance()->filter(['strip_tags','htmlspecialchars']),

4. 也可以在获取变量的时候添加过滤方法，例如：
Request::instance()->get('name','','htmlspecialchars'); // 获取get变量 并用htmlspecialchars函数过滤
Request::instance()->param('username','','strip_tags'); // 获取param变量 并用strip_tags函数过滤
Request::instance()->post('name','','org\Filter::safeHtml');

#### 获取部分变量
如果你只需要获取当前请求的部分参数，可以使用：

// 只获取当前请求的id和name变量
Request::instance()->only('id,name');
或者使用数组方式

// 只获取当前请求的id和name变量
Request::instance()->only(['id','name']);
默认获取的是当前请求参数，如果需要获取其它类型的参数，可以使用第二个参数，例如：

// 只获取GET请求的id和name变量
Request::instance()->only(['id','name'],'get');
// 只获取POST请求的id和name变量
Request::instance()->only(['id','name'],'post');

#### 排除部分变量
也支持排除某些变量获取，例如

// 排除id和name变量
Request::instance()->except('id,name');
或者使用数组方式

// 排除id和name变量
Request::instance()->except(['id','name']);
同样支持指定变量类型获取：

// 排除GET请求的id和name变量
Request::instance()->except(['id','name'],'get');
// 排除POST请求的id和name变量
Request::instance()->except(['id','name'],'post');

### 更改变量
如果需要更改请求变量的值，可以通过下面的方式：
// 更改GET变量
Request::instance()->get(['id'=>10]);
// 更改POST变量
Request::instance()->post(['name'=>'thinkphp']);
### 请求类型
在很多情况下面，我们需要判断当前操作的请求类型是GET、POST、PUT、DELETE或者HEAD，一方面可以针对请求类型作出不同的逻辑处理，另外一方面有些情况下面需要验证安全性，过滤不安全的请求。

### HTTP头信息
### 方法注入
### 属性注入
可以动态注入当前Request对象的属性，方法：

// 动态绑定属性
Request::instance()->bind('user',new User);
// 或者使用
Request::instance()->user = new User;
获取绑定的属性使用下面的方式：

Request::instance()->user;
### 参数绑定
方法参数绑定是把URL地址（或者路由地址）中的变量作为操作方法的参数直接传入。

按名称绑定
参数绑定方式默认是按照变量名进行绑定，例如，我们给Blog控制器定义了两个操作方法read和archive方法，由于read操作需要指定一个id参数，archive方法需要指定年份（year）和月份（month）两个参数，那么我们可以如下定义：

namespace app\index\Controller;
class Blog 
{
    public function read($id)
    {
        return 'id='.$id;
    }
    public function archive($year='2016',$month='01')
    {
        return 'year='.$year.'&month='.$month;
    }
}

URL的访问地址分别是：
http://serverName/index.php/index/blog/read/id/5
http://serverName/index.php/index/blog/archive/year/2016/month/06

## 数据库 (Db类)
ThinkPHP内置了抽象数据库访问层，把不同的数据库操作封装起来，我们只需要使用公共的Db类进行操作，而无需针对不同的数据库写不同的代码和底层实现，Db类会自动调用相应的数据库驱动来处理。采用PDO方式，目前包含了Mysql、SqlServer、PgSQL、Sqlite等数据库的支持。
### 连接数据库

如果应用需要使用数据库，必须配置数据库连接信息，数据库的配置文件有多种定义方式。
1. 配置文件定义
application/database.php
application/模块/database.php

return [
    // 数据库类型【必要】
    'type'        => 'mysql',
    // 数据库连接DSN配置
    'dsn'         => '',
    // 服务器地址【必要】
    'hostname'    => '127.0.0.1',
    // 数据库名【必要】
    'database'    => 'thinkphp',
    // 数据库用户名【必要】
    'username'    => 'root',
    // 数据库密码【必要】
    'password'    => '',
    // 数据库连接端口 【必要】
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

2. 方法配置
我们可以在调用Db类的时候动态定义连接信息，例如：
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
]);

或者使用字符串方式：
Db::connect('mysql://root:1234@127.0.0.1:3306/thinkphp#utf8');

字符串连接的定义格式为：
数据库类型://用户名:密码@数据库地址:数据库端口/数据库名#字符集

3. 模型类定义
如果在某个模型类里面定义了connection属性的话，则该模型操作的时候会自动连接给定的数据库连接，而不是配置文件中设置的默认连接信息，通常用于某些数据表位于当前数据库连接之外的其它数据库，例如：
//在模型里单独设置数据库连接信息
namespace app\index\model;
use think\Model;
class User extends Model
{
    protected $connection = [
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
    ];
}

### 基本使用
配置了数据库连接信息后，我们就可以直接使用数据库运行原生SQL操作了，支持query（查询操作）和execute（写入操作）方法，并且支持参数绑定。

Db::query('select * from think_user where id=8');

Db::query('select * from think_user where id=?',[8]);
=> 'select * from think_user where id=8'

Db::execute('insert into think_user (id, name) values (?, ?)',[8,'thinkphp']);
### 查询构造器
   表         条件
---------    ------
Db::table()->where()
Db::name()
查
Db::table()->find();
Db::table()->select();
增
Db::table()->insert();
Db::table()->insertAll();
删
Db::table()->delete();
改
Db::table()->update();

### 条件 where()
### 分组 group()
### having()
### 排序 order()
### limit()
### 连接 join()
### union()
### page()
### 字段 field()
### 表别名 alias()

## 模型(M)
数据处理、业务逻辑
### 定义
模型会自动对应数据表，模型类的命名规则是除去表前缀的数据表名称，采用驼峰法命名，并且首字母大写，例如：

模型名	    约定对应数据表（假设数据库的前缀定义是 think_）
User	    think_user
UserType	think_user_type

模型的基本使用：
1. 定义 
2. 调用 (在控制器中调用模型)

application\模块\model\XXX.php;
<?php
namespace app\index\model;
use think\Model;
class User extends Model
{
	// 设置表名  模型：User = 表：user
	protected $table=""; 

	// 设置当前模型的数据库连接
	protected $connection = []
	
	// 数据表主键 复合主键使用数组定义 不设置则自动获取 【一般不写】
	protected $pk="";
	
	// 是否需要自动写入时间戳 如果设置为字符串 则表示时间字段的类型
	protected $autoWriteTimestamp;
	// 创建时间字段
	protected $createTime = 'create_time';
	// 更新时间字段
	protected $updateTime = 'update_time';
	
	// 时间字段取出后的默认时间格式
	protected $dateFormat;
	
	function xxxx(){
		$this->data()
	    $this->save()
	    $this->saveAll()
	    $this->allowField()  设置允许写入字段
	    $this->isUpdate()    是否为更新数据
	    $this->delete()      删除记录
	    $this->destroy($data) 删除记录
	    $this->create()      写入数据
	    $this->update()      更新数据
	    $this->get()         查询单条记录
	    $this->all()         查询全部记录
	}
}

$user = new User();
$user->data()
$user->save()
$user->saveAll()
$user->allowField()  设置允许写入字段
$user->isUpdate()    是否为更新数据
$user->delete()      删除记录
$user->destroy($data) 删除记录
$user->create()      写入数据
$user->update()      更新数据
$user->get()         查询单条记录
$user->all()         查询全部记录

User::get(1)   {}
User::all()    [{},{}]

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

设置数据表
如果你想指定数据表甚至数据库连接的话，可以使用：
class User extends \think\Model
{
    // 设置当前模型对应的完整数据表名称
    protected $table = 'think_user';

    // 设置当前模型的数据库连接
    protected $connection = [
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
        // 数据库编码默认采用utf8
        'charset'     => 'utf8',
        // 数据库表前缀
        'prefix'      => 'think_',
        // 数据库调试模式
        'debug'       => false,
    ];


}

## 视图(V)



## 模板

