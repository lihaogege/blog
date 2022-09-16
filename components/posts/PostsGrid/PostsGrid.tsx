import React from 'react';
import classes from "./PostsGrid.module.less"
import {NextPage} from "next";
import PostItem from "../PostItem/PostItem";

type PropsType = {
    posts: Array<object>
    catalogueName:string
}
const PostsGrid: NextPage<PropsType> = (props) => {
    const {posts,catalogueName} = props;
    return (
        <ul className={classes.grid}>
            {posts.map((post:any,index:number) => <PostItem key={index} post={post} catalogueName={catalogueName}/>)}
        </ul>
    );
};

export default PostsGrid;