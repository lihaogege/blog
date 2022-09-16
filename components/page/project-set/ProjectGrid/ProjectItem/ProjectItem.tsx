import React from 'react';
import Image from "next/image";
import Link from "next/link";
interface PropsType{
    href:string,
    projectName:string,
    img:string
}
const ProjectItem = (props:PropsType) => {
    const {href,projectName,img} = props
    console.log(img)
    return (
        <li>
            <Link href={href}>
                {/*
                  如果 Link中的子元素不是文本的话 需要用a标签把它设置为锚链接
                  确保内容是一个锚标签
                */}
                <a style={{display:"inline-block"}} target={"_self"}>
                    <Image src={img} width={224} height={126} alt={"SEO"}/>
                    <h6>{projectName}</h6>
                </a>
            </Link>

        </li>
    );
};

export default ProjectItem;