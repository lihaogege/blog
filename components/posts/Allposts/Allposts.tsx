import React from 'react';
import classes from "./Allposts.module.less"
import PostsGrid from "../PostsGrid/PostsGrid";
import {getFeaturePosts} from "../../../lib/posts-util";
import { Divider } from 'antd';
type PropsType = {
    posts : Array<object>
}
const Allposts = (props:PropsType) => {
    return (
       <>
           {props.posts.map((post:any,index)=>(
               <section id={post.catalogueName} key={index} className={classes.posts}>
                   <Divider>{post["catalogueName"]}</Divider>
                   <PostsGrid catalogueName={post["catalogueName"]} posts={post.posts}/>
               </section>
           ))}
       </>
    );
};

export default Allposts;