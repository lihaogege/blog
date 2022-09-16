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
                                <meta name="viewport" content="width=device-width, initial-scale=1"/>
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
