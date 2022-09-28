import React, {useEffect, useState} from 'react';
import ProjectGrid from "../../components/page/project-set/ProjectGrid/ProjectGrid";
import Head from "next/head";
import styles from "/styles/page/project-set/index.module.less"
import HeaderBg from "../../components/page/posts/HeaderBg/HeaderBg";
const projectList = [
    {
        next:[
            {id:1,projectName:'钩子函数DOM'}
        ],
        react:[
            {id:1,projectName:'功能实现'}
        ]
    }
]
const Index = () => {
    const [data,setData] = useState('')
    useEffect(()=>{
        return ()=>{

        }
    },[])
    return (
        <div>
            <Head>
                <title>{"博客项目列表"}</title>
                <meta name="description" content="个人博客,李昊翰的博客,分享前端前沿技术,VUE,React,NodeJs,Typescript,框架全家桶,小程序等前端知识"/>
                <meta name="keywords" content="前端博客,个人博客,博客,李昊翰的博客,前端技术文档"/>
            </Head>
            <div className={"main-wrapper"}>
                <div className={styles.projectContainer}>
                    <ProjectGrid/>
                </div>
            </div>
        </div>
    );
};

export default Index;