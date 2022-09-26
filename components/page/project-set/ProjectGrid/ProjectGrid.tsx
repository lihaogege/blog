import React from 'react';
import classes from './styles.module.less'
import {usePeojectListDataset} from "../../../../hooks/usePeojectListDataset";
import ProjectItem from "./ProjectItem/ProjectItem";
import Card from "../../../animation/Card/Card";
import CardsStack from "../../../animation/CardsStack/CardsStack";
const ProjectGrid = () => {
    const {projectDataSet} = usePeojectListDataset()
    React.useEffect(()=>{

    },[])
    return (
        <ul className={classes["project-grid"]}>
            {Object.keys(projectDataSet).map((item:any,index:number)=><CardsStack key={index} classify={item} projectSet={projectDataSet[item]}/>)}
            {/*{projectDataSet.map((item:any,index)=><ProjectItem key={index} href={item.href} projectName={item.projectName} img={item.img} />)}*/}
        </ul>
    );
};

export default ProjectGrid;