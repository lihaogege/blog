import React from 'react';
import classes from "./Allposts.module.less"
import PostsGrid from "../PostsGrid/PostsGrid";
import {useRouter} from "next/router";
type PropsType = {
    posts : Array<object>
}
const Allposts = (props:PropsType) => {
    const route = useRouter()
    const [postsDataSet,setPostsDataSet] =React.useState([])
    const [postCategoryName,setPostCategoryName] = React.useState("")
    const getPostGridDataSet = () =>{
        let dataList:[] = []
        props.posts.map((item:any)=>{
            if(postCategoryName === item.catalogueName){
                dataList = item.posts
            }
        })
        return (
            dataList
        )
    }
    const switchCategoryHandler = (name:string)=>{
        setPostCategoryName(name)
        route.push({pathname:route.pathname,query:{category:name}})
        getPostGridDataSet()
    }

    React.useEffect(()=>{
        // @ts-ignore
        const firstCatalogueName = props.posts[0].catalogueName
        if(!route.query.category){
            setPostCategoryName(firstCatalogueName)
            route.push({pathname:route.pathname,query:{category:firstCatalogueName}})
        }
        const data = getPostGridDataSet()
        setPostsDataSet(data)
    },[postCategoryName])
    return (
       <>
           <div className={classes["article-classification"]}>
               <h2>文章分类</h2>
               <ul className={classes["classification-list"]}>
                   {props.posts.map((item:any,index)=> <li key={index} onClick={()=>switchCategoryHandler(item.catalogueName)} className={postCategoryName === item.catalogueName ? classes["is-active"] : ""}>{item.catalogueName}</li>)}
               </ul>
           </div>
           <PostsGrid posts={postsDataSet}/>
       </>
    );
};

export default Allposts;