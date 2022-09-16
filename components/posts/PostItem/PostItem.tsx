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
        date:'',
        slug:''
    },
    catalogueName:string
}
const PostItem:NextPage<PropsType> = (props) => {
    const {catalogueName} = props;
    const { title, image, excerpt , date , slug } = props.post;

    const formattedDate = new Date(date).toLocaleDateString('zh-cn',{
        day:'numeric',
        month:'long',
        year:'numeric'
    });

    const imagePath =image ?  `/images/posts/${catalogueName}/${slug}/${image}` : null
    const linkPath = `/posts/${slug}`
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
                        <time>{formattedDate}</time>
                    </div>
                </a>
            </Link>
        </li>
    );
};

export default PostItem;