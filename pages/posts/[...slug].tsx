import {NextPage} from "next";
import PostContent from "../../components/posts/post-detail/PostContent/PostContent";
import { getPostDetail} from "../../lib/posts-util";
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
export const getServerSideProps = (context: { params: any; }) => {
    const {params} = context;
    const {slug} = params;
    console.log(slug)
    const postData = getPostDetail(slug[1],slug[2])
    console.log(postData)

    return{
        props:{
            post:postData
        },
    }
}

export default PostDetailPage;