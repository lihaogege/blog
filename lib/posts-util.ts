import fs from 'fs';    // 文件模块
import path from "path";

import matter from "gray-matter";
// 进入文件目录
// process.cwd() 指向整个项目文件夹
export function getDirectory(fileName:string){
    return path.join(process.cwd(), fileName)
}

export function getPostsCatalogue(){
  return fs.readdirSync(getDirectory('posts')) // 获取所有路径
}

export const getPostDetail = (catalogueName:string,postName:string) =>{
    console.log(catalogueName,postName)

    const filePath = path.join(getDirectory("posts/"+catalogueName), `${postName}.md`)

    const fileContent = fs.readFileSync(filePath, 'utf-8')
    console.log(filePath,fileContent)
    return {}
    // matter 这个模块 可以分开 哪些是md文件的变量 哪些是内容
    const {data, content} = matter(fileContent)
    return {
        ...data,
        content
    }
}

export const getPostData = (CatalogueName: string) => {
    // 读取文件
    const postCatalogue = fs.readdirSync(getDirectory("posts/"+CatalogueName))
    let postData:any= {}
    let postDataArray:any = []
    postCatalogue.length > 0 ? postCatalogue.map(fileName=>{
        const postSlug = fileName.replace(/\.md$/, ''); // 删除此文件扩展名
        const filePath = path.join(getDirectory("posts/"+CatalogueName), `${postSlug}.md`)
        const fileContent = fs.readFileSync(filePath, 'utf-8')

        // matter 这个模块 可以分开 哪些是md文件的变量 哪些是内容
        const {data, content} = matter(fileContent)
        postDataArray.push({
            ...data,
            content,
            projectName:CatalogueName
        })

    }) : null
    postData.catalogueName = CatalogueName
    postData.posts = postDataArray
    return postData;
}

export const getAllPosts = () => {
    // 读取文件
    const postCatalogue: any = getPostsCatalogue()
    const allPosts = postCatalogue.map((CatalogueFile: string) => {
        return getPostData(CatalogueFile)
    })

    const sortedPosts = allPosts.sort((postA: { date: number; }, postB: { date: number; }) => postA.date > postB.date ? -1 : 1)

    return allPosts
}

// 筛选是否精选
export const getFeaturePosts = ()=>{
    const allPosts = getAllPosts();
    // const featurePosts = allPosts.filter((post: { isFeatured: boolean; }) => post.isFeatured)
    return allPosts
}

// export const getPostsDetails = () =>{
//     const posts = getPostData(fileName)
// }