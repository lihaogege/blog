import React from 'react';
import styles from './styles.module.less'
import BackDrop from "../../ui/BackDrop/BackDrop";
import { Input,Tooltip } from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {setSearchFlag} from "../../../store/search";
import {SearchOutlined,InfoCircleOutlined} from "@ant-design/icons";
import {getAllPosts} from "../../../lib/posts-util";
import Link from "next/link";
const mockVal = (str: string, repeat = 1) => ({
    value: str.repeat(repeat),
});

const Search = () => {
    const [searchContent,setSearchContent] = React.useState<any[]>([])
   const {searchFlag} =  useSelector((state:any)=> state.search)
    const dispatch = useDispatch()
    const [value, setValue] = React.useState('');
    const [options, setOptions] = React.useState<{ value: string }[]>([
        {value:"12"},
        {value:"22"}
    ]);

    const onSearch = (searchText: string) => {
        setOptions(
            !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)],
        );
    };
    const onSelect = (data: string) => {
        console.log('onSelect', data);
    };
    const onChange = (data: string) => {
        setValue(data);
    };

    const searchPostsHandler = async (e:any)=>{
        const content = e.target.value
       const response =  await fetch("/api/posts")
        const data =await response.json();

       const arr:any[] = []
        console.log(data)
        data.posts.map((item:any)=>{
            item.posts.map((itemPosts:any)=>{
                arr.push(itemPosts)
            })
        })
        const searchContent = content ?  arr.filter(key=> key.title.toLowerCase().indexOf(content.toLowerCase()) !== -1) : []
        setSearchContent(searchContent)
    }
    if(!searchFlag){
        return (
            <div/>
        );
    }

    const searchFlagHandler = (flag:boolean)=>{
        dispatch(setSearchFlag(flag))
    }
    const handler = (e:Event)=>{
        e.preventDefault()
    }
    return (
        <BackDrop isOpen={searchFlagHandler}>
            <div onClick={e => e.stopPropagation()} className={styles.searchModal}>
                <div className={styles.searchBar}>
                    <Input
                        onChange={searchPostsHandler}
                        placeholder="搜索文章"
                        prefix={<SearchOutlined className="site-form-item-icon" />}
                        suffix={
                            <Tooltip title="搜索文章">
                                <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                            </Tooltip>
                        }
                    />
                </div>
                <div className={styles.searchContainer}>
                    {/*{true*/}
                    {/*    ?*/}
                    {/*    (<p className={styles.noSearch}>*/}
                    {/*        没有最近的搜索*/}
                    {/*    </p>)*/}
                    {/*    :*/}
                    {/*    (<div>*/}
                    {/*        <h2>历史搜索</h2>*/}
                    {/*        <ul>*/}
                    {/*            <li>1</li>*/}
                    {/*            <li>2</li>*/}
                    {/*            <li>3</li>*/}
                    {/*        </ul>*/}
                    {/*    </div>)*/}
                    {/*}*/}
                    <div className={styles.documentContent}>
                        <h2>文章</h2>
                        <ul className={styles.documentList}>
                            {searchContent.map((item:any,index)=> <li key={index}>
                                <Link href={`/posts/${item.date.split(" ")[0]}/${item.projectName}/${item.title}`}>
                                    <a target="_blank">
                                        {item.title}
                                    </a>
                                </Link>
                            </li>)}
                        </ul>
                    </div>

                </div>
            </div>
        </BackDrop>
    );
};

export default Search;