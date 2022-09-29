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

const   PostContent = (props: PropsType) => {
    const [catalogueData,setCatalogue] = React.useState<any[]>([])
    React.useEffect(()=>{
       setTimeout(()=>{
           const catalogue:any = document.querySelectorAll(".catalogue")
           let array:any = []
           for(let i = 0 ; i < catalogue.length ; i++){
               if(catalogue[i].getAttribute("id").indexOf("h1") !== -1){
                   array.push({title:catalogue[i].innerText,type:"h1",id:catalogue[i].getAttribute("id"),children:[]})
               }
               if(catalogue[i].getAttribute("id").indexOf("h2") !== -1){
                   if(array[array.length-1]){
                       array[array.length-1].children.push({title:catalogue[i].innerText,type:"h2",id:catalogue[i].getAttribute("id"),children:[]})
                   }else{
                       array.push({title:catalogue[i].innerText,type:"h2",id:catalogue[i].getAttribute("id"),children:[]})
                   }
               }
               if(catalogue[i].getAttribute("id").indexOf("h3") !== -1){
                   if(array[array.length-1] && array[array.length-1].children[array[array.length-1].children.length-1]){
                       array[array.length-1].children[array[array.length-1].children.length-1].children.push({title:catalogue[i].innerText,type:"h2",id:catalogue[i].getAttribute("id"),children:[]})
                   }else{
                       array.push({title:catalogue[i].innerText,type:"h3",id:catalogue[i].getAttribute("id"),children:[]})
                   }

                   // array[array.length-1].children.children.push({title:catalogue[i].innerText,type:"h2",id:catalogue[i].getAttribute("id"),children:[]})
               }


           }
           setCatalogue(array)
       },0)

    },[])
    let {title,date,excerpt,isFeatured,image,projectName,content,codeDemo}:any = props.post;
    const DATE = date.split(" ")[0]
    const imagePath =image ?  `/images/posts/${projectName}/${DATE}/${image}` : null
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
               <h1 id={`h1-${children}`} className={"catalogue"}>
                   <a href={"#h1-"+children}>
                       <b>一 , {children}</b>
                   </a>
               </h1>
           )
        },
        h2:({level,children }:{children:any,level:any})=>{
            return (
                <h2 id={`h2-${children}`} className={"catalogue"}>
                    <a href={"#h2-"+children}>
                        <b>二 , {children}</b>
                    </a>
                </h2>
            )
        },
        h3:({level,children }:{children:any,level:any})=>{
            return (
                <h3 id={`h3-${children}`} className={"catalogue"}>
                    <a href={"#h3-"+children}>
                        <b>三 , {children}</b>
                    </a>
                </h3>
            )
        }
    }


    return (
        <>
            <div className="main-wrapper">
                <div className={classes.container}>
                    <section className={classes["container-left"]}>
                        <article className={classes.content}>
                            <PostHeader title={title} image={imagePath}/>
                            {/*// @ts-ignore*/}
                            <ReactMarkdown remarkPlugins={[gfm]} components={customRenderers}>{content}</ReactMarkdown>
                        </article>
                    </section>
                    <section className={classes["container-right"]}>
                        <section className={classes["container-right-bookmark"]}>
                                <Anchor offsetTop={88} showInkInFixed={true} className={classes.anchor}>
                                    <h1>文章目录</h1>
                                    {catalogueData.map((item:any,index)=> <Link key={index} href={`#${item.id}`} title={item.title}>
                                        {item.children.map((itemChildren:any,indexx:number)=>
                                            <Link key={itemChildren.id} href={`#${itemChildren.id}`} title={itemChildren.title}>
                                                {itemChildren.children.map((itemH3Children:any)=>
                                                    <Link key={itemH3Children.id} href={`#${itemH3Children.id}`} title={itemH3Children.title}/>
                                                )}
                                            </Link>
                                        )}
                                    </Link>)}
                                    {codeDemoUrl && <PostDemoButton codeDemoUrl={codeDemoUrl}/>}
                                </Anchor>
                        </section>
                        <section>
                        </section>
                    </section>
                </div>
            </div>
        </>
    );
};

export default PostContent;