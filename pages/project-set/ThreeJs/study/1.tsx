import React from 'react';
import styles from "./styles.module.less"
// @ts-ignore
import * as THREE from 'three'
import {OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const Page = () => {
    const init = () =>{
        /**
         * 创建场景对象Scene
         */
        var scene = new THREE.Scene();
        /**
         * 创建网格模型
         */
        var geometry1 = new THREE.BoxGeometry(100, 100, 100);   // 长方体
        var geometry2 = new THREE.SphereGeometry(60, 40, 40); // 球体
        var geometry3 = new THREE.CylinderGeometry( 50, 50, 100, 25 ); // 圆柱体
        var geometry4 = new THREE.OctahedronGeometry(50);   // 正八面
        var geometry5 = new THREE.DodecahedronGeometry(50); // 正十二面
        var geometry6 = new THREE.IcosahedronGeometry(50);  // 正二十面

        var material = new THREE.MeshLambertMaterial({
            color: 0x00ff00
        }); //材质对象Material

        var material2 = new THREE.MeshLambertMaterial({
            color:0xff0000,
            opacity:0.7,
            transparent:true
        }); //材质对象Material

        var material3 = new THREE.MeshLambertMaterial({
            color:0xff0000,
            opacity:0.7,
            wireframe:true,
            transparent:true
        }); //材质对象Material

        var material4 = new THREE.MeshPhongMaterial({
            color:0x0000ff,
            specular:0x4488ee,
            shininess:12
        }); //材质对象Material

        var material5 = new THREE.MeshLambertMaterial({
            color:0xff0000,
            opacity:0.7,
            wireframe:true,
            transparent:true
        }); //材质对象Material

        var mesh = new THREE.Mesh(geometry1, material); //网格模型对象Mesh
        var mesh2 = new THREE.Mesh(geometry2, material2); //网格模型对象Mesh
        var mesh3 = new THREE.Mesh(geometry3, material3); //网格模型对象Mesh
        var mesh4 = new THREE.Mesh(geometry4, material4); //网格模型对象Mesh
        var mesh5 = new THREE.Mesh(geometry5, material); //网格模型对象Mesh
        var mesh6 = new THREE.Mesh(geometry6, material); //网格模型对象Mesh

        scene.add(mesh); //网格模型添加到场景中
        scene.add(mesh2); //网格模型添加到场景中
        scene.add(mesh3); //网格模型添加到场景中
        scene.add(mesh4); //网格模型添加到场景中
        scene.add(mesh5); //网格模型添加到场景中
        scene.add(mesh6); //网格模型添加到场景中

        mesh2.translateX(-100); //球体网格模型沿Y轴正方向平移120
        mesh3.translateX(-200); //球体网格模型沿Y轴正方向平移120
        mesh4.translateX(-300); //球体网格模型沿Y轴正方向平移120
        mesh5.translateX(-400); //球体网格模型沿Y轴正方向平移120
        mesh6.translateX(-500); //球体网格模型沿Y轴正方向平移120


        /**
         * 光源设置
         */
        //点光源
        var point = new THREE.PointLight(0xffffff);
        point.position.set(400, 200, 300); //点光源位置
        scene.add(point); //点光源添加到场景中

        //环境光
        var ambient = new THREE.AmbientLight(0x444444);
        scene.add(ambient);

        // 点光源2  位置和point关于原点对称
        var point2 = new THREE.PointLight(0xffffff);
        point2.position.set(-400, -200, -300); //点光源位置
        scene.add(point2); //点光源添加到场景中

        // console.log(scene)
        // console.log(scene.children)
        /**
         * 相机设置
         */
        var width = window.innerWidth; //窗口宽度
        var height = window.innerHeight; //窗口高度
        var k = width / height; //窗口宽高比
        var s = 500; //三维场景显示范围控制系数，系数越大，显示的范围越大
        //创建相机对象
        var camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);
        camera.position.set(100, 100, 200); //设置相机位置
        camera.lookAt(scene.position); //设置相机方向(指向的场景对象)

        /**
         * 创建渲染器对象
         */
        var renderer = new THREE.WebGLRenderer();


        renderer.setSize(width, height);//设置渲染区域尺寸
        renderer.setClearColor(0xb9d3ff, 1); //设置背景颜色
        // @ts-ignore
        document.getElementById("container").appendChild(renderer.domElement); //body元素中插入canvas对象

        const axisHelper = new THREE.AxesHelper(2)
        scene.add(axisHelper)//插入辅助线长度为2的坐标系
        //执行渲染操作   指定场景、相机作为参数
        // renderer.render(scene, camera);

        let T0 = new Date();//上次时间
        function render() {
            let T1 = new Date();//本次时间
            let t = T1-T0;//时间差
            T0 = T1;//把本次时间赋值给上次时间
            requestAnimationFrame(render);
            renderer.render(scene,camera);//执行渲染操作
            mesh.rotateY(0.001*t);//旋转角速度0.001弧度每毫秒
            mesh2.rotateY(0.001*t);//旋转角速度0.001弧度每毫秒
            mesh3.rotateY(0.001*t);//旋转角速度0.001弧度每毫秒
            mesh4.rotateY(0.001*t);//旋转角速度0.001弧度每毫秒
            mesh5.rotateY(0.001*t);//旋转角速度0.001弧度每毫秒
            mesh6.rotateY(0.001*t);//旋转角速度0.001弧度每毫秒
        }
        render();

        // const axisHelper = new THREE.AxisHelper(2)
        // scene.add(axisHelper)//插入辅助线长度为2的坐标系

        const orbitControls = new OrbitControls(camera, renderer.domElement);
    }

    React.useEffect(()=>{
        init()
    },[])

    return (
            <div id="container" className={styles.container}/>
    );
};

export default Page;