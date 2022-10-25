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



        var geometry = new THREE.BoxGeometry(100, 100, 100); //创建一个立方体几何对象Geometry
// 点渲染模式
        var material = new THREE.PointsMaterial({
            color: 0xff0000,
            size: 5.0 //点对象像素尺寸
        }); //材质对象
        var points = new THREE.Points(geometry, material); //点模型对象

        scene.add(points)

        // console.log(scene)
        // console.log(scene.children)
        /**
         * 相机设置
         */
        var width = window.innerWidth; //窗口宽度
        var height = window.innerHeight; //窗口高度
        var k = width / height; //窗口宽高比
        var s = 10; //三维场景显示范围控制系数，系数越大，显示的范围越大
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

        // const axisHelper = new THREE.AxesHelper(2)
        // scene.add(axisHelper)//插入辅助线长度为2的坐标系

        //执行渲染操作   指定场景、相机作为参数
        // renderer.render(scene, camera);

        let T0 = new Date();//上次时间
        function render() {
            let T1 = new Date();//本次时间
            let t = T1-T0;//时间差
            T0 = T1;//把本次时间赋值给上次时间
            requestAnimationFrame(render);
            renderer.render(scene,camera);//执行渲染操作
            // mesh.rotateY(0.001*t);//旋转角速度0.001弧度每毫秒
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