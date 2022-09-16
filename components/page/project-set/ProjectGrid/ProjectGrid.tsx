import React from 'react';
import classes from './styles.module.less'
import {usePeojectListDataset} from "../../../../hooks/usePeojectListDataset";
import ProjectItem from "./ProjectItem/ProjectItem";
const ProjectGrid = () => {
    const {projectDataSet} = usePeojectListDataset()
    React.useEffect(()=>{
        console.log(projectDataSet)
    },[projectDataSet])
    return (
        <ul className={classes["project-grid"]}>
            {projectDataSet.map((item:any,index)=><ProjectItem key={index} href={item.href} projectName={item.projectName} img={item.img} />)}
        </ul>
    );
};

export default ProjectGrid;