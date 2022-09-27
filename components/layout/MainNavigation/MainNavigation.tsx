import React, {useEffect} from 'react';
import Link from "next/link"
import Logo from "../Logo/Logo"
import classes from './styles.module.less'
import {setSearchFlag} from "../../../store/search";
import {useDispatch, useSelector} from "react-redux";
import {SearchOutlined} from "@ant-design/icons";
import { Select } from 'antd';
const { Option } = Select;
const NavList = [
    {navName: "帖子", href: "/posts"},
    {navName: "实例", href: "/project-set"},
    {navName: "联系我", href: "/contact"},
]
const MainNavigation = () => {

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
        console.log(`selected ${value}`);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, true)
        return () => {
            window.removeEventListener("scroll", handleScroll, true)
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
                            <li key={index}>
                                <Link href={item.href}>
                                    {item.navName}
                                </Link>
                            </li>
                        ))}
                        <li onClick={toggleSearchHandler}>
                            <SearchOutlined/>
                        </li>
                        <li>
                            <Select dropdownStyle={{zIndex:"var(--index-1)"}} defaultValue="中文" style={{ width: "5rem" }} onChange={handleChange}>
                                <Option value="中文">中文</Option>
                                <Option value="English">English</Option>
                            </Select>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default MainNavigation;