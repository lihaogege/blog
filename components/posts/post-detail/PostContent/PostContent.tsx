import React from 'react';
import classes from "./PostContent.module.less";
import PostHeader from "../PostHeader/PostHeader";
import ReactMarkdown from "react-markdown"; // markdown包
import Image from "next/image";
import {useRouter} from "next/router";
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
        code(code: any):any {
            const {language, value} = code;
            // eslint-disable-next-line react/no-children-prop
            return <SyntaxHighlighter style={atomDark} language={language} children={value}/>
        }
    }

    return (
        <article className={classes.content}>
            <PostHeader title={postData.title} image={imagePath}/>
            <ReactMarkdown renderers={customRenderers}>
                {postData.content}
            </ReactMarkdown>
        </article>
    );
};

export default PostContent;