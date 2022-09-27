import React from 'react';
import styles from "./styles.module.less";
import {VerticalAlignTopOutlined,AlertOutlined,MoneyCollectOutlined,VerticalAlignBottomOutlined} from "@ant-design/icons";
import {Popover} from 'antd';
import Image from "next/image";
const SideToolbar = () => {
    const btnSet = [
        {icon:"",name:"返回顶部",functionName:"",isEnable:true},
        {icon:"",name:"更换主题",functionName:"",isEnable:true},
        {icon:"",name:"打赏",functionName:"",isEnable:true},
        {icon:"",name:"客服",functionName:"",isEnable:false},
    ]
    const backTopHandler = () =>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    const backBottomHandler = () =>{
        window.scrollTo({
            top: document.body.offsetHeight,
            behavior: "smooth"
        })
    }
    return (
        <ul className={styles.sideToolbar}>
            <li onClick={backTopHandler} id="TOP">
                <div className={styles.liContainer}>
                    <VerticalAlignTopOutlined className={styles.icons}/>
                </div>
            </li>
            <li>
                <div className={styles.liContainer}>
                    <AlertOutlined  className={styles.icons}/>
                </div>
            </li>
            <li>
                <div className={styles.liContainer}>
                    <Popover  placement="right"  content={(
                        <ul style={{display:"grid",gridAutoFlow:"column",gridGap:"10px"}}>
                            <Image width={146.7} height={200} src={"/images/collectMoney/zhifubao.jpg"}/>
                            <Image width={146.7} height={200}  src={"/images/collectMoney/wechat.jpg"}/>
                        </ul>
                    )} trigger="hover" style={{zIndex:"var(--index-2)"}}>
                        <MoneyCollectOutlined  className={styles.icons}/>
                    </Popover>
                </div>
            </li>
            <li onClick={backBottomHandler} id="BOTTOM">
               <div className={styles.liContainer}>
                   <VerticalAlignBottomOutlined  className={styles.icons}/>
               </div>
            </li>
        </ul>
    );
};

export default SideToolbar;