import React from 'react';
import classes from "./PostHeader.module.less";
import Image from "next/image";
interface PropsType {
    title:string,
    image:string | null
}
const PostHeader = (props:PropsType) => {
    const {title,image} = props
    return (
        <header className={classes.header}>
            <h1>{title}</h1>
            {image && <Image src={image} alt={"error"} width={200} height={150}/>}
        </header>
    );
};

export default PostHeader;