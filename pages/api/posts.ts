// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {getAllPosts} from "../../lib/posts-util";

type Data = {
  name:string,
  posts: any
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if(req.method === "GET"){
    const posts = getAllPosts()
    res.status(200).json({ name:"接口获取成功" ,posts: posts })
  }

  res.status(400).json({ name: '接口报错' ,posts:[] })
}
