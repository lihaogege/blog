import React from 'react';
import {Fragment} from "react";
import MainNavigation from "./MainNavigation/MainNavigation";
import MainFooter from "./MainFooter/MainFooter";
import {NextPage} from "next";
import styles from "./layout.module.less"
import SideToolbar from "./SideToolbar/SideToolbar";
// 定义形参的类型
type PropsType = {
    children:string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined;
}
const Layout:NextPage<PropsType> = (props) => {
    return (
        <Fragment>
            <MainNavigation/>
            <main className={styles.main}>
                {props.children}
            </main>
            <MainFooter/>
            <SideToolbar/>
        </Fragment>
    );
};

export default Layout;