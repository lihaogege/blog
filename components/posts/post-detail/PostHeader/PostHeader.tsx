import React from 'react';
import classes from "./PostHeader.module.less";
import Image from "next/image";
import {inspect} from "util";
import {useRouter} from "next/router";
interface PropsType {
    title:string,
    image:string | null
}
const PostHeader = (props:PropsType) => {
    const router:any = useRouter()
    const {title,image} = props
    console.log(image)
    return (
        <header className={classes.header}>
            <div className={classes.headerTitle}>
                <h1>{title}</h1>
                <div className={classes.postDetails}>
                    <span>于{router.query.slug[0]}发布</span>
                    <span id="busuanzi_container_page_pv" style={{display:"none"}}>浏览量: <span id="busuanzi_value_page_pv"></span>次</span>
                </div>
            </div>
            {image && <Image src={image} alt={"error"} width={360} height={160}/>}

        </header>
    );
};

export default PostHeader;