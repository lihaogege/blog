import React from 'react';
import classes from "./PostHeader.module.less";
import Image from "next/image";
interface PropsType {
    title:string,
    image:string | null
}
const PostHeader = (props:PropsType) => {
    console.log(props)
    const {title,image} = props
    return (
        <header className={classes.header}>
            <h1>{title}</h1>
            {image && <Image src={image} alt={"error"} width={400} height={170}/>}
        </header>
    );
};

export default PostHeader;