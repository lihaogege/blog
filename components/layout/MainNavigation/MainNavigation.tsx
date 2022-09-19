import React from 'react';
import Link from "next/link"
import Logo from "../Logo/Logo"
import classes from './MainNavigation.module.less'

const NavList = [
    {navName: "帖子", href: "/posts"},
    {navName: "项目集", href: "/project-set"},
    {navName: "联系我", href: "/contact"},
]
const MainNavigation = () => {
    return (
        <header className={classes.header}>
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
                    {NavList.map((item:any,index)=>(
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