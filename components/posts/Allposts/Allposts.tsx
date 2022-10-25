import React from 'react';
import classes from "./Allposts.module.less"
import PostsGrid from "../PostsGrid/PostsGrid";
import {useRouter} from "next/router";
import {BookOutlined,TagOutlined} from "@ant-design/icons";
import {FormattedMessage} from "react-intl";

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

    const randomColorHandler = () =>{
        const colorArr = [
            "#F9EBEA",
            "#F5EEF8",
            "#D5F5E3",
            "#E8F8F5",
            "#82E0AA",
            "#F8C471",
            "#D7BDE2",
            "#85C1E9",
            "#F9E79F",
            "#E8F8F5",
        ]

        const color = Math.floor(Math.random() * colorArr.length)

        return colorArr[color]
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
           <div className={"main-wrapper "}>
               <div className={`${classes["article-classification"]}`}>
                   <h2>
                       <BookOutlined style={{marginRight:"0.5rem"}}/>
                       <FormattedMessage id={"global.article_sort"} defaultMessage="文章分类"/>
                   </h2>
                   <ul className={classes["classification-list"]}>
                       {props.posts.map((item:any,index)=>
                           <li key={index}
                               style={{background:randomColorHandler()}}
                               onClick={()=>switchCategoryHandler(item.catalogueName)}
                               className={postCategoryName === item.catalogueName ? classes["is-active"] : ""}>
                               <FormattedMessage id={`sort.${item.catalogueName}`}　defaultMessage={item.catalogueName} tagName="span"/>
                               <span style={{color: "#e91e63",marginLeft:"0.2rem"}}>{item.posts.length}</span>
                           </li>)}
                   </ul>
               </div>
               <PostsGrid posts={postsDataSet}/>
           </div>
       </>
    );
};

export default Allposts;