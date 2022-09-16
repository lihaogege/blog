import React, {useEffect, useState} from 'react';
import ProjectGrid from "../../components/page/project-set/ProjectGrid/ProjectGrid";
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
            console.log("清理函数")
        }
    },[])
    return (
        <div>
            <ProjectGrid/>
        </div>
    );
};

export default Index;