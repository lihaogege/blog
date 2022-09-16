// @ts-ignore
import useSWR from "swr";
import fetcher from "./fetch";

type parameterProps = {
    url: string,
    method: string,
    body: any,
    swr: boolean,
    context:any,
    swrOptions: {
        revalidateIfStale: boolean  // 即使存在陈旧数据，也自动重新验证 当你重新聚焦一个页面或在标签页之间切换时，SWR 会自动重新请求数据。
        revalidateOnFocus: boolean  // 窗口聚焦时自动重新验证 同上
        revalidateOnReconnect: boolean // 浏览器恢复网络连接时自动重新验证
        refreshInterval: number        // 轮询间隔（以毫秒为单位）
        refreshWhenHidden: boolean     // 窗口不可见时进行轮询（如果启用了 refreshInterval
        refreshWhenOffline: boolean    // 浏览器离线时轮询（由 navigator.onLine 确定）
        shouldRetryOnError: boolean    // fetcher 有错误时重试
        dedupingInterval: number       // 删除一段时间内相同 key 的重复请求（以毫秒为单位）
        focusThrottleInterval: number  //  在一段时间内只重新验证一次（以毫秒为单位）
        loadingTimeout: number         //  超时触发 onLoadingSlow 事件（以毫秒为单位）
        errorRetryInterval: number     //  错误重试的时间间隔（以毫秒为单位）
        /*
         errorRetryCount: 错误重试的最大次数
         fallback: 多个回退数据的 key-value 对象（示例）
         fallbackData: 此 hook 需要返回的初始数据
         onLoadingSlow(key, config): 请求加载时间过长时的回调函数（参考 loadingTimeout）
         onSuccess(data, key, config): 请求成功完成时的回调函数
         onError(err, key, config): 请求返回错误时的回调函数
         onErrorRetry(err, key, config, revalidate, revalidateOps): 错误重试的处理函数
         compare(a, b): 比较函数，用来检测返回的数据何时已更改，以防止伪造的重新渲染。默认情况下使用 stable-hash。
         isPaused(): 用于暂停所有数据请求，如果返回值为 true，请求的数据和错误都会被忽略。默认返回值为 false。
         */
    }
}

export default function $fetch(parameter: parameterProps) {
    if (parameter.swr) {
        const options = {
            revalidateIfStale: parameter.swrOptions.hasOwnProperty("revalidateIfStale") ? parameter.swrOptions.revalidateIfStale : true,
            revalidateOnFocus: parameter.swrOptions.hasOwnProperty("revalidateOnFocus") ? parameter.swrOptions.revalidateOnFocus : true,
            revalidateOnReconnect: parameter.swrOptions.hasOwnProperty("revalidateOnReconnect") ? parameter.swrOptions.revalidateOnReconnect : true,
            refreshInterval: parameter.swrOptions.hasOwnProperty("refreshInterval") ? parameter.swrOptions.refreshInterval : 0,
            refreshWhenHidden: parameter.swrOptions.hasOwnProperty("refreshWhenHidden") ? parameter.swrOptions.refreshWhenHidden : false,
            refreshWhenOffline: parameter.swrOptions.hasOwnProperty("refreshWhenOffline") ? parameter.swrOptions.refreshWhenOffline : false,
            shouldRetryOnError: parameter.swrOptions.hasOwnProperty("shouldRetryOnError") ? parameter.swrOptions.shouldRetryOnError : true,
            dedupingInterval: parameter.swrOptions.hasOwnProperty("dedupingInterval") ? parameter.swrOptions.dedupingInterval : 2000,
            focusThrottleInterval: parameter.swrOptions.hasOwnProperty("focusThrottleInterval") ? parameter.swrOptions.focusThrottleInterval : 5000,
            loadingTimeout: parameter.swrOptions.hasOwnProperty("loadingTimeout") ? parameter.swrOptions.loadingTimeout : 3000,
            errorRetryInterval: parameter.swrOptions.hasOwnProperty("errorRetryInterval") ? parameter.swrOptions.errorRetryInterval : 5000
        }
        // eslint-disable-next-line react-hooks/rules-of-hooks
        return useSWR([parameter.url, parameter.method, parameter.body,parameter.context], fetcher, options)
    }
    return fetcher(parameter.url, parameter.method, parameter.body,parameter.context)
}
