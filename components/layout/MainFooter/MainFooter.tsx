import React, {useEffect} from 'react';
import styles from "./styles.module.less"
import Head from "next/head";
import Link from "next/link";
import {WechatOutlined,QqOutlined,MailOutlined,Html5Outlined} from "@ant-design/icons";
import {Popover} from 'antd';
import Image from "next/image";
import { FormattedMessage } from 'react-intl';
const FooterDataListSet = [
    {id:1,name: "global.aboutAuthor",href:"/author"},
    {id:2,name: "global.links"},
    {id:3,name: "global.Reward"},
]
const Links = [
    {linksName:'CSDN',linksHref:"https://www.csdn.net/"},
    {linksName:'知乎',linksHref:"https://www.zhihu.com/"},
    {linksName:'掘金',linksHref:"https://juejin.cn"}
]
const MainFooter = () => {
    const openSourcePageHandler = () =>{
        const url = location.href
        console.log(`view-source:${url.split("//")[1]}`)
        window.open(`view-source:${url}`)
    }
    useEffect(()=>{
    },[])
    return (
       <>
           <Head>
               <script async src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>
           </Head>
           <footer className={styles.footer}>
               <div className={`${styles["footer-content"]} main-wrapper`}>
                   <section className={styles["footer-content-for-us"]}>
                       <ul className={styles["footer-content-list"]}>
                           {FooterDataListSet.map((item:any) => <li key={item.name}>
                               {
                                   item.href ?
                                       <Link href={item.href}>
                                           <a>
                                               <FormattedMessage id={item.name}/>
                                           </a>
                                       </Link>
                                       :
                                       item.id === 2 ?
                                           <Popover className={styles.popverContainer} content={(
                                               <ul style={{display:"grid",gridAutoFlow:"column",gridGap:"20px"}}>
                                                   {Links.map((item:any,index)=><li key={index}>
                                                       <Link target="_blank" href={item.linksHref}>
                                                           <a target="_blank">
                                                               {item.linksName}
                                                           </a>
                                                       </Link>
                                                   </li>)}
                                               </ul>
                                           )} trigger="hover" style={{zIndex:"var(--index-2)"}}>
                                              <span/>
                                               <FormattedMessage tagName={"span"} id={item.name}/>
                                           </Popover>
                                           :
                                           item.id === 3 ?
                                           <Popover className={styles.popverContainer} content={(
                                               <ul style={{display:"grid",gridAutoFlow:"column",gridGap:"10px"}}>
                                                   <Image width={220} height={300} src={"/images/collectMoney/zhifubao.jpg"}/>
                                                   <Image width={220} height={300}  src={"/images/collectMoney/wechat.jpg"}/>
                                               </ul>
                                           )} trigger="hover" style={{zIndex:"var(--index-2)"}}>
                                               <span/>
                                               <FormattedMessage id={item.name}/>
                                           </Popover>
                                               :
                                               null
                               }
                           </li>)}
                       </ul>
                       <ul className={styles["footer-content-webInfo"]}>
                           <li className={styles.busuanzi_container_site_pv}>
                               <span id="busuanzi_container_site_pv" style={{color: "#fff",display:"none"}}><FormattedMessage id={"global.Visits"}/> <span id="busuanzi_value_site_pv"></span></span>
                           </li>
                           <li className={styles.busuanzi_container_site_uv}>
                               <span id="busuanzi_container_site_uv" style={{color: "#fff",display:"none"}}><FormattedMessage id={"global.visitors"}/> <span id="busuanzi_value_site_uv"></span></span>
                           </li>
                           <li className={styles.busuanzi_container_site_uv}>
                              <span>Copyright © 2022 李昊翰 All Rights Reserved</span>
                           </li>
                       </ul>
                   </section>
                   <section className={styles.phoneContainer}>
                       <WechatOutlined className={styles["svg-phone"]}/>
                       <QqOutlined className={styles["svg-phone"]}/>
                       <MailOutlined  className={styles["svg-phone"]}/>
                       <Html5Outlined  onClick={openSourcePageHandler} className={styles["svg-phone"]}/>
                   </section>
               </div>
           </footer>
       </>
    );
};

export default MainFooter;