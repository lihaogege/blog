import React from 'react';
import classes from './styles.module.less'
import {usePeojectListDataset} from "../../../../hooks/usePeojectListDataset";
import ProjectItem from "./ProjectItem/ProjectItem";
import Card from "../../../animation/Card/Card";
import CardsStack from "../../../animation/CardsStack/CardsStack";
const ProjectGrid = () => {
    const {projectDataSet} = usePeojectListDataset()
    React.useEffect(()=>{

    },[projectDataSet])
    return (
        <ul className={classes["project-grid"]}>
            {projectDataSet.map((item,index)=><CardsStack key={index}></CardsStack>)}
            {/*{projectDataSet.map((item:any,index)=><ProjectItem key={index} href={item.href} projectName={item.projectName} img={item.img} />)}*/}
        </ul>
    );
};

export default ProjectGrid;