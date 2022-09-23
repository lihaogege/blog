import React from 'react';
import classes from "./PostItem.module.less";
import Link from "next/link";
import Image from "next/image";
import {NextPage} from "next";

type PropsType = {
    post : {
        title:'',
        image:'',
        excerpt:'',
        date:any,
        slug:'',
        projectName:''
    },
}
const PostItem:NextPage<PropsType> = (props) => {
    const { title, image, excerpt , date ,projectName } = props.post;

    var tradeDate = date.split(' ')[0];
    const imagePath =image ?  `/images/posts/${projectName}/${tradeDate}/${image}` : null
    const linkPath = `/posts/${tradeDate}/${projectName}/${title}`
    return (
        <li className={classes.post}>
            <Link href={linkPath}>
                <a target={"_blank"}>
                    <div className={classes.image}>
                        {/*
                        layout="responsive" Image组件中设置这个属性 ,它将会填充它的外部去元素
                        优先根据外部宽度高度而定
                        */}
                        {imagePath && <Image src={imagePath} alt={title} width={300} height={200} layout="responsive"/>}
                        {!imagePath && <Image src={"/images/posts/default.png"} alt={title} width={300} height={200} layout="responsive"/>}
                    </div>
                    <div className={classes.content}>
                        <h3>{title}</h3>
                        <time>{tradeDate}</time>
                    </div>
                </a>
            </Link>
        </li>
    );
};

export default PostItem;