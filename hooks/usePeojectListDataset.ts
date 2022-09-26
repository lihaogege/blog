/**
 *  @author:Rick  @date:2022/9/16 11:29
 *  获取项目数据列表数据
 */
import React from "react";
const ProjectListDataSet = require("/data/project-dataset.json")
export function usePeojectListDataset(){
    const [projectDataSet,setProjectDataSet] = React.useState<any>([])

    function groupBy(objectArray:any, property:string) {
        let data = []
        for(var i = 0; i < objectArray.length; i++) {
            if(!data[objectArray[i][property]]) {
                var arr = [];
                arr.push(objectArray[i]);
                data[objectArray[i][property]] = arr;
            }else {
                data[objectArray[i][property]].push(objectArray[i])
            }
        }

        return data
    }

    React.useEffect(()=>{
        const groupedPeople = groupBy(ProjectListDataSet,"classify")
        setProjectDataSet(groupedPeople)
    },[])
    return{
        projectDataSet
    }
}