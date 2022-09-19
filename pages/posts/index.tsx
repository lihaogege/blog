import React from 'react';
import {NextPage} from "next";
import Allposts from "../../components/posts/Allposts/Allposts";
import Head from "next/head";
import {getAllPosts} from "../../lib/posts-util";
import { Anchor } from 'antd';
const { Link } = Anchor;
import classes from "/styles/page/posts/posts_index.module.less"
// 声明对象数组
interface PostsType {
    slug: string,
    title: string,
    image: string,
    excerpt: string,
    date: string
}
const AllPostsPage = (props: { posts: [],test:[] }) => {
    console.log(props.posts)
    return (
        <>
            <Head>
                <title>{"所有帖子"}</title>
                <meta name="description" content="All blog"/>
            </Head>
            <Anchor affix={false} showInkInFixed={true} className={classes.Anchor}>
                {props.posts.map((item:any,index)=> <Link key={index} href={"#"+item.catalogueName} title={item.catalogueName} />)}
            </Anchor>
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