import React from 'react';
import CodeDemoContent from "../../../../../components/page/posts/CodeDemoContent/CodeDemoContent";
import {getInfoList} from "../../../../../api/api";
import {GetServerSideProps, GetStaticProps} from "next";

const SeoTest = ({data : propsData} : {data:any}) => {
    // console.log(__NEXT_DATA__)
    console.log(propsData)
    const [data,setData] = React.useState()
    React.useEffect(()=>{
        getInfoList({
            body:{
                pageNo:1,
                pageSize:5
            },
        }).then(res=>{
            setData(res.list.map((item:any)=>{
                return <li style={{background:"green"}} key={item.infoId}>{item.infoTitle}</li>
            }))
        })
    },[])

    const staticPropsGetDataHandler = () =>{
        return propsData ? propsData.map((item:any)=>{
            return  <li style={{background:"red"}}  key={item.infoId}>{item.infoTitle}</li>
        }) : []
    }

    const getInfoDataHandler = async ()=>{
        let res = []
        const data = await getInfoList({
            body:{
                pageNo:1,
                pageSize:30
            }
        })
       return await data.list.map((item:any)=>{
           return  <li key={item.infoId}>{item.infoTitle}</li>
        })
    }
    return (
        <div>
            <CodeDemoContent code="" response={(
                <div>
                    {data}
                    <hr/>
                    {staticPropsGetDataHandler()}
                </div>
            )}/>
        </div>
    );
};

export async function getStaticProps(){
   const data = await getInfoList({
        body:{
            pageNo:2,
            pageSize:5
        },
    })
    return {
        props:{
            data:data.list
        },
    }
}

export default SeoTest;