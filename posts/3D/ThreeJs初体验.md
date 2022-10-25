---
title: 'ThreeJs初体验'
date: '2022-10-25'
excerpt: Three.js是基于原生WebGL封装运行的三维引擎，在所有WebGL引擎中，Three.js是国内文资料最多、使用最广泛的三维引擎。
isFeatured: true
classify: '3D'
image: threeJs.jpg
---

# 了解Three.js

Three.js是基于原生WebGL封装运行的三维引擎，在所有WebGL引擎中，Three.js是国内文资料最多、使用最广泛的三维引擎。

入门上手还是非常简单的

### react中引入three.js

> npm install --save three
>
> 其用法完全一致 非常牛

# *创建场景对象Scene*

```js
var scene = new THREE.Scene();
```

# 创建网格模型

## 几何体Geometry

### 创建立方体几何图形

```js
var geometry = new THREE.BoxGeometry(100, 200, 100)
```

### 创建圆体几何图形

### SphereGeometry构造函数

> SphereGeometry(radius, widthSegments, heightSegments)
>
> 第一个参数是球的大小
>
> 参数`widthSegments`、`heightSegments`约束的是球面的精度

```js
var geometry = new THREE.SphereGeometry(60, 40, 40)
```

#### 更多几何体

> threejs除了立方体、球体还提供了很多的常见几何体的API，这里不再过多讲解，具体可以查看[threejs文档](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/geometries/CylinderGeometry)，你可以在案例源码中测试下面的几何体代码。

```js
//长方体 参数：长，宽，高
var geometry = new THREE.BoxGeometry(100, 100, 100);
// 球体 参数：半径60  经纬度细分数40,40
var geometry = new THREE.SphereGeometry(60, 40, 40);
// 圆柱  参数：圆柱面顶部、底部直径50,50   高度100  圆周分段数
var geometry = new THREE.CylinderGeometry( 50, 50, 100, 25 );
// 正八面体
var geometry = new THREE.OctahedronGeometry(50);
// 正十二面体
var geometry = new THREE.DodecahedronGeometry(50);
// 正二十面体
var geometry = new THREE.IcosahedronGeometry(50);
```



## 材质Material

```js
var material = new THREE.MeshLambertMaterial({
            color: 0x00ff00
}); //材质对象Material

//  构造函数的参数是一个对象，对象包含了颜色、透明度等属性，
//  本案例中只定义了颜色color，
//  颜色属性值0x0000ff表示蓝色，可以把颜色值改为0x00ff00，可以看到是绿色的立方体效果， 这里使用的颜色值表示方法是16进制RGB三原色模型。使用过渲染类软件、设计过网页或者学习过图形学应该能知道RGB三原色模型，这里就不再详述。
```

## 网格模型对象mesh

> `new THREE.Mesh(box,material);`使用构造函数`Mesh()`创建了一个网格模型对象，该对象把上面两行含有顶点位置信息的几何体对象和含有颜色信息的材质对象作为参数，网格模型创建好之后， 需要使用场景对象的方法`.add()`把三维场景的子对象添加到场景中

```js
var mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
scene.add(mesh); //网格模型添加到场景中
```

## 光源Light

> 代码`var point=new THREE.PointLight(0xffffff);`通过构造函数[THREE.PointLight()](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/lights/PointLight)创建了一个点光源对象，参数`0xffffff`定义的是光照强度， 你可以尝试把参数更改为为`0x444444`，刷新浏览器你会看到立方体的表面颜色变暗，这很好理解，实际生活中灯光强度变低了，周围的景物自然暗淡，three.js引擎对WebGL光照模型算法都进行了封装，不需要你了解计算机图形学， 可以直接使用调用three.js光源相关API直接创建一个光源对象，就像你使用普通的三维建模渲染软件一样，只是这里多了一个Javascript编程语言而已。

> `new THREE.PointLight(0xffffff);`、`new THREE.AmbientLight(0x444444);`定义了两个点光源、环境光对象，然后作为场景的子对象插入场景中

```js
var point = new THREE.PointLight(0xffffff);
point.position.set(400, 200, 300); //点光源位置
scene.add(point); //点光源添加到场景中

// 环境光
var ambient = new THREE.AmbientLight(0x444444);
scene.add(ambient);
```

## 相机Camera

> `camera.position.set(200, 300, 200);`和`camera.lookAt(scene.position);`定义的是相机的位置和拍照方向
>
> 这就像你生活中拍照人是同一个人，但是你拍照的位置角度不同，显示的效果肯定不同。这些具体的参数细节可以不用管， 至少你知道相机可以缩放显示三维场景、对三维场景的不同角度进行取景显示。

```js
				// 相机设置
        var width = window.innerWidth; //窗口宽度
        var height = window.innerHeight; //窗口高度
        var k = width / height; //窗口宽高比
        var s = 300; //三维场景显示范围控制系数，系数越大，显示的范围越大

        //创建相机对象
        var camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);
        camera.position.set(200, 300, 200); //设置相机位置
        camera.lookAt(scene.position); //设置相机方向(指向的场景对象)
```

## 创建渲染器对象

```js
var renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);//设置渲染区域尺寸
renderer.setClearColor(0xb9d3ff, 1); //设置背景颜色

 document.getElementById("container").appendChild(renderer.domElement); //素中插入canvas对象
```



## 同时绘制多个几何体

```js
// 立方体网格模型
var geometry1 = new THREE.BoxGeometry(100, 100, 100);
var material1 = new THREE.MeshLambertMaterial({
  color: 0x0000ff
}); //材质对象Material
var mesh1 = new THREE.Mesh(geometry1, material1); //网格模型对象Mesh
scene.add(mesh1); //网格模型添加到场景中

// 球体网格模型
var geometry2 = new THREE.SphereGeometry(60, 40, 40);
var material2 = new THREE.MeshLambertMaterial({
  color: 0xff00ff
});
var mesh2 = new THREE.Mesh(geometry2, material2); //网格模型对象Mesh
mesh2.translateY(120); //球体网格模型沿Y轴正方向平移120
scene.add(mesh2);

// 圆柱网格模型
var geometry3 = new THREE.CylinderGeometry(50, 50, 100, 25);
var material3 = new THREE.MeshLambertMaterial({
  color: 0xffff00
});
var mesh3 = new THREE.Mesh(geometry3, material3); //网格模型对象Mesh
// mesh3.translateX(120); //球体网格模型沿Y轴正方向平移120
mesh3.position.set(120,0,0);//设置mesh3模型对象的xyz坐标为120,0,0
scene.add(mesh3); //
```



# 材质效果

### 半透明效果

```js
var sphereMaterial=new THREE.MeshLambertMaterial({
    color:0xff0000,
    opacity:0.7,
    transparent:true  // transparent表示是否开启透明度效果， 默认是false表示透明度设置不起作用，值设置为true，网格模型就会呈现透明的效果
});//材质对象
```

### 材质常见属性

| 材质属性    | 简介                                       |
| :---------- | :----------------------------------------- |
| color       | 材质颜色，比如蓝色0x0000ff                 |
| wireframe   | 将几何图形渲染为线框。 默认值为false       |
| opacity     | 透明度设置，0表示完全透明，1表示完全不透明 |
| transparent | 是否开启透明，默认false                    |

### 材质类型

threejs提供了很多常用的材质效果，这些效果本质上都是对WebGL着色器的封装，对于开发者来说直接使用就可以,这里不再做过多介绍，大家现有一个印象即可。

| 材质类型                                                     | 功能                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [MeshBasicMaterial](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/materials/MeshBasicMaterial) | 基础网格材质，不受光照影响的材质                             |
| [MeshLambertMaterial](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/materials/MeshLambertMaterial) | Lambert网格材质，与光照有反应，漫反射                        |
| [MeshPhongMaterial](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/materials/MeshPhongMaterial) | 高光Phong材质,与光照有反应                                   |
| [MeshStandardMaterial](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/materials/MeshStandardMaterial) | PBR物理材质，相比较高光Phong材质可以更好的模拟金属、玻璃等效果 |

# threejs光源

> 为了更好的渲染场景，threejs提供了生活中常见的一些光源的API。
>
> 你可以测试前面几节课案例中的光源代码，比如全部删除所有的光源代码，你会发现场景中的物体是黑色的，就像生活中一样没有光，物体是黑色的。

### 常见光源类型

本节课不会对threejs各类光源进行深入介绍，主要是简单展示下，对于初学者有一个印象就可以。

| 光源                                                         | 简介               |
| :----------------------------------------------------------- | :----------------- |
| [AmbientLight](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/lights/AmbientLight) | 环境光             |
| [PointLight](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/lights/PointLight) | 点光源             |
| [DirectionalLight](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/lights/DirectionalLight) | 平行光，比如太阳光 |
| [SpotLight](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/lights/SpotLight) | 聚光源             |
