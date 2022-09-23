import React from 'react';
import classes from "./PostContent.module.less";
import PostHeader from "../PostHeader/PostHeader";
import ReactMarkdown from "react-markdown"; // markdown包
import Image from "next/image";
import {useRouter} from "next/router";
import gfm from 'remark-gfm'
// @ts-ignore
import {PrismLight as SyntaxHighlighter} from "react-syntax-highlighter" // 代码高亮包
// @ts-ignore
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import PostDemoButton from "../PostDemoButton/PostDemoButton";
import { Anchor,Affix } from 'antd';
const { Link } = Anchor;
interface PropsType {
    post: {
        slug: string,
        image: string,
        title: string,
        content: string
    }
}

const PostContent = (props: PropsType) => {

    const [catalogue,setCatalogue] = React.useState('')

    React.useEffect(()=>{
        const h1:any = document.querySelectorAll("h1")
        const h2 = document.querySelectorAll("h2")
        const h3 = document.querySelectorAll("h3")
        let array = []
        for(let i = 0 ; i < h1.length ; i++){
            array.push(h1[i].innerText)

        }
    },[])
    let {title,date,excerpt,isFeatured,image,projectName,content,codeDemo}:any = props.post;
    const imagePath =image ?  `/images/posts/${projectName}/${date}/${image}` : null
    const codeDemoUrl = codeDemo ?  `/posts/code-demo/${projectName}/${codeDemo}` : ""
    type ParagraphType = {
        node: any,
        children: any
    }
    const customRenderers = {
        paragraph(paragraph: ParagraphType) {
            const {node} = paragraph;

            if (node.children[0].type === 'image') {
                const image = node.children[0];

                return (
                    <div className={classes.image}>
                        <Image
                            src={`/images/posts/${projectName}${date}/${image}`}
                            alt={image.alt}
                            width={600}
                            height={300}
                        />
                    </div>
                );
            }

            return <p>{paragraph.children}</p>;
        },
        code({node, inline, className, children, ...props} : {node:any,inline:any,className:string,children:any}) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
                <SyntaxHighlighter
                    style={atomDark}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                >
                    {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
            ) : (
                <code className={className} {...props}>
                    {children}
                </code>
            )
        },
        h1:({level,children }:{children:any,level:any})=>{
           return (
               <h1 id={`h1-${children}`}>
                   <a href={"#h1-"+children}>
                       <b>一 , {children}</b>
                   </a>
               </h1>
           )
        },
        h2:({level,children }:{children:any,level:any})=>{
            return (
                <h2 id={`h2-${children}`}>
                    <a href={"#h2-"+children}>
                        <b>二 , {children}</b>
                    </a>
                </h2>
            )
        },
        h3:({level,children }:{children:any,level:any})=>{
            return (
                <h3 id={`h3-${children}`}>
                    <a href={"#h3-"+children}>
                        <b>三 , {children}</b>
                    </a>
                </h3>
            )
        }
    }


    return (
        <>
            <div className={classes.container}>
                <section className={classes["container-left"]}>
                    <article className={classes.content}>
                        <PostHeader title={title} image={imagePath}/>
                        {/*// @ts-ignore*/}
                        <ReactMarkdown remarkPlugins={[gfm]} components={customRenderers}>{content}</ReactMarkdown>
                    </article>
                </section>
                <section className={classes["container-right"]}>
                    <section>
                        <Affix offsetTop={88}>
                            <PostDemoButton codeDemoUrl={codeDemoUrl}/>
                        </Affix>
                    </section>
                   <section className={classes["container-right-bookmark"]}>
                           <Anchor offsetTop={250}>
                               <Link href="#components-anchor-demo-basic" title="Basic demo" />
                               <Link href="#components-anchor-demo-static" title="Static demo" />
                               <Link href="#API" title="API">
                                   <Link href="#Anchor-Props" title="Anchor Props" />
                                   <Link href="#Link-Props" title="Link Props" />
                               </Link>
                           </Anchor>
                   </section>
                </section>
            </div>
        </>
    );
};

export default PostContent;