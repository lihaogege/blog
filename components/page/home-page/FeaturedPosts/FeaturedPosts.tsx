import React from 'react';
import classes from  './FeaturedPosts.module.less'
import PostsGrid from "../../../posts/PostsGrid/PostsGrid";

type PropsType = {
    posts:Array<object>
}
const FeaturedPosts = (props:PropsType) => {
    return (
       <section className={classes.latest}>
           <h2>Featured Posts</h2>
           <PostsGrid posts={props.posts}/>
       </section>
    );
};

export default FeaturedPosts;