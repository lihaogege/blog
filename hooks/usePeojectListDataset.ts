/**
 *  @author:Rick  @date:2022/9/16 11:29
 *  获取项目数据列表数据
 */
import React from "react";
const ProjectListDataSet = require("/data/project-dataset.json")
export function usePeojectListDataset(){
    const [projectDataSet,setProjectDataSet] = React.useState([])
    React.useEffect(()=>{
        setProjectDataSet(ProjectListDataSet)
    },[])
    return{
        projectDataSet
    }
}