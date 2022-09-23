import '../styles/reset.less'   // 清除默认样式
import '../styles/globals.less' // 全局样式
import type {AppProps} from 'next/app'
import Layout from "../components/layout/layout";
import Head from "next/head";
import {Provider, useDispatch, useSelector} from "react-redux";
import store from "../store";
import {PersistGate} from 'redux-persist/integration/react'
import {persistStore} from 'redux-persist'
import {IntlProvider} from 'react-intl'
//为了兼容Safari各个版本，需要同时安装 intl，intl在大部分的『现代』浏览器中是默认自带的，但是Safari和IE11以下的版本就没有了，这里需要留个心眼。 npm install intl --save
let persistor = persistStore(store);
import {setLocale} from "../store/language/language";
import en_US from "../locale/en-US";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <Provider store={store}>
                <IntlProvider locale={"en"} messages={en_US}>
                    <PersistGate loading={null} persistor={persistor}>
                        <Layout>
                            <Head>
                                <title>{"李昊翰的博客-关注web前端技术-前端技术博客"}</title>
                                <meta name="description" content="个人博客,李昊翰的博客,分享前端前沿技术,VUE,React,NodeJs,Typescript,框架全家桶,小程序等前端知识"/>
                                <meta name="keywords" content="前端博客,个人博客,博客,李昊翰的博客,前端技术文档"/>
                            </Head>
                            <Component {...pageProps} />
                        </Layout>
                    </PersistGate>
                </IntlProvider>
            </Provider>
        </>
    )
}

export default MyApp
