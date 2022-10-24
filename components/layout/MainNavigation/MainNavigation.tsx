import React, {useEffect} from 'react';
import Link from "next/link"
import Logo from "../Logo/Logo"
import classes from './styles.module.less'
import {setSearchFlag} from "../../../store/search";
import {useDispatch, useSelector} from "react-redux";
import {SearchOutlined} from "@ant-design/icons";
import { Select } from 'antd';
import {useRouter} from "next/router";
const { Option } = Select;
import {setLocale} from "../../../store/language/language";
import { FormattedMessage } from 'react-intl';
const NavList = [
    {navName: "global.posts", href: "/posts",isEnable:true},
    {navName: "global.demo", href: "/project-set",isEnable:true},
    {navName: "global.contact", href: "/contact",isEnable:false},
]
const MainNavigation = () => {
    const router = useRouter()
    const {locale}  = useSelector((state:any)=>state.language)
    const {searchFlag} = useSelector((state:any)=>state.search)
    const dispatch  = useDispatch()
    const toggleSearchHandler = () =>{
        dispatch(setSearchFlag(!searchFlag))
    }
    let scrollTopValue = 0
    const [headerStyles, setheaderStyles] = React.useState({})

    const handleScroll = (event: any) => {
        const footerBox: any = document.querySelector("footer")
        // 滚动的高度
        const scrollTop = (event.srcElement ? event.srcElement.scrollTop : false)
            || window.pageYOffset
            || (event.srcElement ? event.srcElement.scrollTop : 0);
        if (scrollTopValue <= scrollTop) {
            footerBox ? footerBox.style.transform = "translateY(0%)" : null
            setheaderStyles({
                transform: "translateY(-100%)"
            })
        } else {
            footerBox ? footerBox.style = "transform:translateY(100%)" : null

            setheaderStyles({
                transform: "none"
            })
        }
        scrollTopValue = scrollTop
        return scrollTop;
    }
    const handleChange = (value: string) => {
        dispatch(setLocale(value))
    };

    useEffect(() => {
        const header:any = document.querySelector("header")
        const TOP:any = document.getElementById("TOP")
        const BOTTOM:any = document.getElementById("BOTTOM")
        const handleRouteChange = (url:string) => {

            // if(url.indexOf("/posts") !== -1){
            //     header.style.background = "none"
            //     header.style.backdropFilter = "none"
            //
            // }else{
            //     header.style.background = "rgba(0,0,0,0.8)"
            //     header.style.backdropFilter = "saturate(50%) blur(4px)"
            //
            // }
            // if(url === "/"){
            //     TOP.style.display = "none"
            //     BOTTOM.style.display = "none"
            // }else{
            //     TOP.style.display = "block"
            //     BOTTOM.style.display = "block"
            // }
        }
        router.events.on('routeChangeStart', handleRouteChange)
        // window.addEventListener("scroll", handleScroll, true)
        return () => {
            router.events.off('routeChangeStart', handleRouteChange)
            // window.removeEventListener("scroll", handleScroll, true)
        }
    }, [])
    return (
        <header style={headerStyles} className={`${classes.header}`}>
            <div className={`main-wrapper ${classes["header-container"]}`}>
                <Link href={"/"}>
                    {/*
                  如果 Link中的子元素不是文本的话 需要用a标签把它设置为锚链接
                  确保内容是一个锚标签
                */}
                    <a target={"_self"}>
                        <Logo/>
                    </a>
                </Link>
                <nav>
                    <ul>
                        {NavList.map((item: any, index) => (
                            item.isEnable
                                ?
                                (
                                    <li key={index}>
                                        <Link href={item.href}>
                                            <a>
                                                <FormattedMessage id={item.navName}　defaultMessage={'hello'} />
                                            </a>
                                        </Link>
                                    </li>
                                )
                                :
                                null
                        ))}
                        <li onClick={toggleSearchHandler}>
                            <SearchOutlined/>
                        </li>
                        <li>
                            <Select dropdownStyle={{zIndex:"var(--index-1)"}} defaultValue={locale} style={{ width: "5rem" }} onChange={handleChange}>
                                <Option value="zh">中文</Option>
                                <Option value="en">English</Option>
                            </Select>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default MainNavigation;