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
                <title>{"博客文章"}</title>
                <meta name="description" content="All blog"/>
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