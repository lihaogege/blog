import React from 'react';
import Allposts from "../../components/posts/Allposts/Allposts";
import HeaderBg from "../../components/page/posts/HeaderBg/HeaderBg"
import Head from "next/head";
import {getAllPosts} from "../../lib/posts-util";
import styles from "/styles/page/posts/posts_index.module.less"
// 声明对象数组
interface PostsType {
    slug: string,
    title: string,
    image: string,
    excerpt: string,
    date: string
}
const AllPostsPage = (props: { posts: [],test:[] }) => {
    React.useEffect(()=>{
        const header:any = document.querySelector("header")
        header.style.background = "rgba(0,0,0,0)"
        header.style.backdropFilter = "none"
        header.style.borderBottom = "none"
    },[])
    return (
        <>
            <Head>
                <title>{"博客文章列表"}</title>
                <meta name="description" content="个人博客,李昊翰的博客,分享前端前沿技术,VUE,React,NodeJs,Typescript,框架全家桶,小程序等前端知识"/>
                <meta name="keywords" content="前端博客,个人博客,博客,李昊翰的博客,前端技术文档"/>
            </Head>
            <HeaderBg/>
            <Allposts posts={props.posts}/>
        </>
    );
};


export const getStaticProps = () => {
    const AllPosts = getAllPosts()
    return {
        props: {
            posts: AllPosts,
        },

    }
}

export default AllPostsPage;