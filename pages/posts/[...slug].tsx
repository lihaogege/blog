import {NextPage} from "next";
import PostContent from "../../components/posts/post-detail/PostContent/PostContent";
import {getPostData} from "../../lib/posts-util";
import Head from "next/head";
import React from "react";

const PostDetailPage = (props:{post:any})=>{
    console.log(props)
    return (
        <>
            <Head>
                <title>{props.post.title}</title>
                <meta name="description" content={props.post.excerpt}/>
            </Head>
            <PostContent post={props.post}/>
        </>
    )
}
export const getStaticProps = (context: { params: any; }) => {
    const {params} = context;
    const {slug} = params;

    const postData = getPostData(slug[0])
    console.log(postData)
    return{
        props:{
            post:postData
        },
        revalidate:600
    }
}

export function getStaticPaths(context:{params:any}){
    return{
        paths:[],
        fallback:'blocking'
    }
}
export default PostDetailPage;