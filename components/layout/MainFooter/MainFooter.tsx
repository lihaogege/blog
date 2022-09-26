import React, {useEffect} from 'react';
import styles from "./styles.module.less"
import Head from "next/head";
import Link from "next/link";

const FooterDataListSet = [
    {name: "作者信息",href:"/author"},
    {name: "打赏",href:"/author"},
    {name: "友情链接",href:"/author"},
    {name: "宣语-6",href:"/author"},
]
const Links = [
    {linksName:''}
]
const MainFooter = () => {
    useEffect(()=>{
    },[])
    return (
       <>
           <Head>
               <script async src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>
           </Head>
           <footer className={styles.footer}>
               <div className={styles["footer-content"]}>
                   <section className={styles["footer-content-for-us"]}>
                       <ul className={styles["footer-content-list"]}>
                           {FooterDataListSet.map((item:any) => <li key={item.name}>
                               <Link href={item.href}>{item.name}</Link>
                           </li>)}
                       </ul>
                       <ul className={styles["footer-content-webInfo"]}>
                           <li className={styles.busuanzi_container_site_pv}>
                               <span id="busuanzi_container_site_pv" style={{color: "#fff",display:"none"}}>访问量: <span id="busuanzi_value_site_pv"></span></span>
                           </li>
                           <li className={styles.busuanzi_container_site_uv}>
                               <span id="busuanzi_container_site_uv" style={{color: "#fff",display:"none"}}>访客数: <span id="busuanzi_value_site_uv"></span></span>
                           </li>
                       </ul>
                   </section>
               </div>
           </footer>
       </>
    );
};

export default MainFooter;