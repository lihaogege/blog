import React, {useEffect} from 'react';
import ReactMarkdown from "react-markdown"; // markdown包
import fs from 'fs';    // 文件模块
import path from "path";
import gfm from "remark-gfm";
import matter from "gray-matter";
type PropsTypes = {
    content:any
}
const Index:React.FC<PropsTypes> = ({content}) => {
    return (
        <div>
            <ReactMarkdown  remarkPlugins={[gfm]}>
                {content}
            </ReactMarkdown>
        </div>
    );
};

export const getStaticProps = ()=>{
    const filePath = path.join(process.cwd(),"data","Author.md")
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const {data, content} = matter(fileContent)
    return {
        props:{
            content:content
        }
    }
}

export default Index;