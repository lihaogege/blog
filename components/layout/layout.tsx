import React from 'react';
import {Fragment} from "react";
import MainNavigation from "./MainNavigation/MainNavigation";
import {NextPage} from "next";

// 定义形参的类型
type PropsType = {
    children:string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined;
}
const Layout:NextPage<PropsType> = (props) => {
    return (
        <Fragment>
            <MainNavigation/>
            <main>
                {props.children}
            </main>
        </Fragment>
    );
};

export default Layout;