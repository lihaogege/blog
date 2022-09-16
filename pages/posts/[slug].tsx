import {NextPage} from "next";
import PostContent from "../../components/posts/post-detail/PostContent/PostContent";
import {getPostData} from "../../lib/posts-util";
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

    const postData = getPostData(slug)
    return{
        props:{
            post:postData
        },
        revalidate:600
    }
}

export function getStaticPaths(){
    // const postFilenames = getPostsFiles()
    // const slugs = postFilenames.map(fileName => fileName.replace(/\.md$/, ''))
    // slugs.map(slug => {params :{slug:slug}})
    return{
        paths:[],
        fallback:'blocking'
    }
}
export default PostDetailPage;