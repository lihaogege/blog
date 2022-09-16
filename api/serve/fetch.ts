import QS from 'qs'
import {message} from "antd";
// @ts-ignore
import env from "/env"
import {useCookie} from "next-cookie"

let baseUrl: string
let Data: any
let headers: any

export default async function fetcher(url: string, method: string, body: any, context: any) {
    if (global.window) {
        baseUrl = "" + url
    } else {
        baseUrl = env[process.env.APP_ENV].ENV_API + url
    }

    method = method.toUpperCase();

    (()=>{
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const cookie = useCookie(context) // 客户端为空即可
        const token = cookie.get("LOGIN_UNIQUE_TOKEN")
        if (token) {
            headers = {
                'Authorization': `Bearer ${token}`
            }
        }else{
            headers = {
                "Content-Type":'application/x-www-form-urlencoded;charset=UTF-8'
            }
        }
    })()

    switch (method) {
        case "GET" :{
            if (body && url.search(/\?/) === -1) {
                url = `${url}?${QS.stringify(body)}`;
                Data = null
            }
            break;
        }
        case "POST" :{
            headers["Content-Type"] = 'application/x-www-form-urlencoded;charset=UTF-8'
            Data =  QS.stringify(body)
            break;
        }
        default:{
            break;
        }
    }

    const response = await fetch(baseUrl, {
        method,
        headers,
        body: Data,
    })
    const data = await response.json();

    switch (String(data.code)) {
        case "401": {
            message.warning(data.message);
            break;
        }
        case "00001": {
            message.warning("token失效,退出登录,请重新登录");
            break;
        }
        case "000": {
            message.warning(data.message)
            break;
        }
    }
    return data
}

