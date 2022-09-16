import {NextApiRequest, NextApiResponse} from "next";
import fs from "fs"
import path from 'path'
const handler = (req:NextApiRequest,res:NextApiResponse)=>{
    if(req.method === "POST"){
        const {email , name , message } = req.body;

        if(
            !email ||
            ! email.includes("@") ||
            ! name ||
            name.trim() === '' ||
            !message ||
            message.trim() === ''
        ){
            res.status(422).json({message:'无效输入'})
            return;
        }


        // store it in database
        const newMessage = {
            email,
            name,
            message
        }

        const filePath = path.join(process.cwd(),'data','contacts-storage.json')
        const fileData = fs.readFileSync(filePath)
        const data = JSON.parse(fileData.toString())
        data.push(newMessage)
        fs.writeFileSync(filePath, JSON.stringify(data))
        res.status(201).json({message:"成功存储信息",messageData:newMessage})
    }
    res.status(201).json({message:"contact接口"})
}

export default handler;