import Request from './request'
import utils from '@/utils'
const http = new Request()
http.setConfig((config) => { /* 设置全局配置 */
	config.baseUrl = $globalConfig.baseUrl /* 根域名不同 */
	config.header = {
		...config.header
	}
	return config
})
/**
 * 自定义验证器，如果返回true 则进入响应拦截器的响应成功函数(resolve)，否则进入响应拦截器的响应错误函数(reject)
 * @param { Number } statusCode - 请求响应体statusCode（只读）
 * @return { Boolean } 如果为true,则 resolve, 否则 reject
 */
http.validateStatus = (statusCode) => {
	return statusCode === 200
}

http.interceptor.request((config, cancel) => { /* 请求之前拦截器 */
	//将token 写入header中
	config.header = {
		...config.header,
		Authorization: uni.getStorageSync('token') ? uni.getStorageSync('token') : '',
		//用于后端校验验证码
		encCode: uni.getStorageSync('encCode') ? uni.getStorageSync('encCode') : ""
	}
	//去掉参数中对象值中的首位空格
	if (!!config.data) {
		let str = JSON.stringify(config.data);
		str = str.replace(/\s*\"\s*/g, "\"")
		config.data = JSON.parse(str)
	}
	return config
})
/* 请求之后拦截器 */
http.interceptor.response((response) => {
	let {
		data
	} = response
	try {
		if (typeof data === 'string') data = JSON.parse(data)
	} catch (e) {
		console.warn('返回数据非JSON格式字符串！')
	}
	/* 服务端返回的状态码不等于200，则调用错误处理函数requestComFail，并reject中断后续请求 */
	if (data.code != 200) {
		http.requestComFail(response)
		return Promise.reject(response)
	}
	return data
}, (response) => {
	//关闭当前showLoading组件
	utils.uni.hideLoading();
	/* 打印出错误日志 */
	console.error(JSON.stringify(response));
	// 请求错误statusCode != 200 或者，手动返回Promise.reject(response)  
	switch (response.statusCode) {
		//服务器链接成功，但返回数据错误
		case 200:
			if (response.data.code === 40002 || response.data.code == 40003) {
				var pages = getCurrentPages();
				var page = pages[pages.length - 1];
				if (page.route != 'pages/frame/login/login')
					utils.uni.reLaunch('/pages/frame/login/login').then(() => utils.uni.toast.error(response.data.msg))
			} else
				utils.uni.toast.error(response.data.msg);
			break;
			/* 没有网络 */
		case undefined:
			if (response.errMsg.includes('request:fail'))
				utils.uni.toast.error('服务器链接失败，请检查网络');
			break;
		case 401:
			utils.uni.toast.error('请求被拒绝');
			break;
		case 401:
			utils.uni.toast.error('请求被拒绝');
			break;
		case 404:
			utils.uni.toast.error('服务器故障');
			break;
		case 405:
			utils.uni.toast.error('错误的请求');
			break;
		case 500:
			utils.uni.toast.error('服务器故障');
			break;
		default:
			utils.uni.toast.error(response.errMsg)
	}
	return response
})

export {
	http
}
