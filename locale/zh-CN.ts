import posts from "./global/zh.json"
import ui from "./ui/zh.json"
import articleSort from './sort/zh.json'

console.log(articleSort)
const zh_CN = Object.assign(posts,articleSort);

console.log(zh_CN)
export default zh_CN;