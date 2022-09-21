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

interface PropsType {
    post: {
        slug: string,
        image: string,
        title: string,
        content: string
    }
}

const PostContent = (props: PropsType) => {
    let {post}:any = props;
    const [postData,setPostData] = React.useState<any>({})
    const router:any = useRouter()
    console.log(router)
    React.useEffect(()=>{
        post.posts.forEach((item:any)=>{
            if(item.slug === router.query.slug[1]){
                setPostData(item)
            }
        })
    },[])

    console.log(postData)

    const imagePath =postData.image ?  `/images/posts/${postData['slug']}/${postData.image}` : null

    type ParagraphType = {
        node: any,
        children: any
    }
    const customRenderers = {
        // image(image:{alt:string,src:string}){
        //     return <Image src={image.src} alt={image.alt} width={600} height={300}/>
        // },
        paragraph(paragraph: ParagraphType) {
            const {node} = paragraph;

            if (node.children[0].type === 'image') {
                const image = node.children[0];

                return (
                    <div className={classes.image}>
                        <Image
                            src={`/images/posts/${postData.slug}${image.url}`}
                            alt={image.alt}
                            width={600}
                            height={300}
                        />
                    </div>
                );
            }

            return <p>{paragraph.children}</p>;
        },
        code({node, inline, className, children, ...props} : {node:any,inline:any,className:string}) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
                <SyntaxHighlighter
                    children={String(children).replace(/\n$/, '')}
                    style={atomDark}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                />
            ) : (
                <code className={className} {...props}>
                    {children}
                </code>
            )
        }
    }

    return (
        <article className={classes.content}>
            <PostHeader title={postData.title} image={imagePath}/>
            <ReactMarkdown remarkPlugins={[gfm]} children={postData.content} components={customRenderers}/>
        </article>
    );
};

export default PostContent;