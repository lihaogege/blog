import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import classes from '../styles/Home.module.less'
import Hero from "../components/page/home-page/Hero/Hero";
import FeaturedPosts from "../components/page/home-page/FeaturedPosts/FeaturedPosts";
import {getFeaturePosts} from "../lib/posts-util";
import {userInfo} from "../api/api";
import {useEffect} from "react";
import {useCookie} from "next-cookie";

/**
 * 页面组件的焦点相对较小, 不要在页面组件中放太多的内容
 */


// 声明对象数组
interface PostsType {
    slug:string,
    title:string,
    image:string,
    excerpt:string,
    date:string
}
const DUMMY_POSTS:PostsType[] = [
    {slug : 'getting-started-with-nextjs',title:'文章一',image:'getting-started-nextjs.png',excerpt:'nextJs SSR',date:'2022-02-10'},
    {slug : 'getting-started-with-nextjs',title:'文章二',image:'nextjs-file-based-routing.png',excerpt:'nextJs SSR',date:'2022-02-10'}
]

const Home: NextPage = (props:any) => {

   useEffect(()=>{
       useCookie().set("LOGIN_UNIQUE_TOKEN","eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1NDQ1MyIsImlhdCI6MTY0NjcyMDk0M30._tIpCArxOJ8YqiAryzYpx9T5NYDUkd3DwctyISf1_ec")
       userInfo().then(res=>{
           console.log(res)
       })
   },[])
  return (
   <> {/* Fragment 在碎片中可以有多个节点*/}
       <Head>
           <title>{"Rick's "}</title>
           <meta name="description" content="blog"/>
       </Head>
     <Hero/><FeaturedPosts posts={props.posts}/>
   </>
  )
}

export const getStaticProps  = () =>{
    const featuredPosts = DUMMY_POSTS

    const test = getFeaturePosts()
    return{
        props:{
            posts:featuredPosts
        },

    }
}

export default Home
