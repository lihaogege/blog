import React from 'react';
import styles from "./styles.module.less";
const SideToolbar = () => {
    const btnSet = [
        {icon:"",name:"返回顶部",functionName:"",isEnable:true},
        {icon:"",name:"更换主题",functionName:"",isEnable:true},
        {icon:"",name:"打赏",functionName:"",isEnable:true},
        {icon:"",name:"客服",functionName:"",isEnable:false},
    ]
    return (
        <ul className={styles.sideToolbar}>
            {btnSet.map((item:any,index:number)=> <li key={index}>{item.name}</li>)}
        </ul>
    );
};

export default SideToolbar;