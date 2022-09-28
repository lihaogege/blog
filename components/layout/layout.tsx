import React, {useEffect} from 'react';
import {Fragment} from "react";
import MainNavigation from "./MainNavigation/MainNavigation";
import MainFooter from "./MainFooter/MainFooter";
import {NextPage} from "next";
import styles from "./layout.module.less"
import SideToolbar from "./SideToolbar/SideToolbar";
import {persistStore} from 'redux-persist'
import {IntlProvider} from 'react-intl'
//为了兼容Safari各个版本，需要同时安装 intl，intl在大部分的『现代』浏览器中是默认自带的，但是Safari和IE11以下的版本就没有了，这里需要留个心眼。 npm install intl --save
import en_US from "../../locale/en-US";
import {useSelector} from "react-redux";

// 定义形参的类型
type PropsType = {
    children:string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined;
}
const Layout:NextPage<PropsType> = (props) => {
    const {locale,messages} = useSelector((state:any) => state.language)
    return (
        <Fragment>
            <IntlProvider locale={locale} messages={messages}>
                    <MainNavigation/>
                    <main className={styles.main}>
                        {props.children}
                    </main>
                    <MainFooter/>
                    <SideToolbar/>
            </IntlProvider>
        </Fragment>
    );
};

export default Layout;