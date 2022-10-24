import $fetch from "./serve";

/**
 *  @author:Rick  @date:2022/8/24 15:14
 *  测试接口
 */

/**
 * 获取用户信息
 * @param body
 * @param context
 * @param swr
 * @param swrOptions
 */
export function userInfo ({body={},context={},swr=false,swrOptions={}}={}):Promise<any>{
    const parameter = {
        method:'get',
        url:'/wapi/user/userInfo.do',
        body,
        swr,
        swrOptions,
        context
    }
    // @ts-ignore
    return $fetch(parameter)
}

/**
 * 登录接口
 * @param body
 * @param context
 * @param swr
 * @param swrOptions
 */
export function login ({body={},context={},swr=false,swrOptions={}}={}):Promise<any>{
    const parameter = {
        method:'post',
        url:'/wapi/login/login.do',
        body,
        swr,
        swrOptions,
        context
    }
    // @ts-ignore
    return $fetch(parameter)
}

/**
 * 登录接口
 * @param body
 * @param context
 * @param swr
 * @param swrOptions
 */
export function getInfoList ({body={},context={},swr=false,swrOptions={}}={}):Promise<any>{
    const parameter = {
        method:'get',
        url:'/wapi/info/getInfoList.do',
        body,
        swr,
        swrOptions,
        context
    }
    // @ts-ignore
    return $fetch(parameter)
}