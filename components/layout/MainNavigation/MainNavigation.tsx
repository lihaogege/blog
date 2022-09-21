import React, {useEffect} from 'react';
import Link from "next/link"
import Logo from "../Logo/Logo"
import classes from './MainNavigation.module.less'

const NavList = [
    {navName: "帖子", href: "/posts"},
    {navName: "项目集", href: "/project-set"},
    {navName: "联系我", href: "/contact"},
    {navName: "搜索", href: "/contact"},
]
const MainNavigation = () => {
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


    useEffect(() => {
        window.addEventListener("scroll", handleScroll, true)
        return () => {
            window.removeEventListener("scroll", handleScroll, true)
        }
    }, [])
    return (
        <header style={headerStyles} className={classes.header}>
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
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;