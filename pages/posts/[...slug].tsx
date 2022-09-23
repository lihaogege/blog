import {NextPage} from "next";
import PostContent from "../../components/posts/post-detail/PostContent/PostContent";
import { getPostDetail} from "../../lib/posts-util";
import Head from "next/head";
import React from "react";
const PostDetailPage = (props:{post:any})=>{
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
    console.log(slug)
    const postData = getPostDetail(slug[1],slug[2])
    console.log(postData)

    return{
        props:{
            post:[]
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