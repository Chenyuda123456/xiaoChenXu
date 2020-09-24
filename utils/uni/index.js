let qs = require('qs');
/**
 * @description 封装showToast 统一应用showToast风格,错误信息延时2s同时不显示图标，且App错误信息在底部显示
 * @author 闰月飞鸟
 * @method success ,error 
 * @param {title} toast内容
 */
function showToast(title = "", method = "success") {
	//新版 showToast 与showLoading用的是同一套，会互相覆盖。
	uni.setStorageSync('showLoading', false)
	return new Promise(resolve => {
		let duration = method == 'success' ? 1000 : 2000
		let config = {
			title: title,
			icon: method == 'success' ? "success" : "none", //成功显示图标，错误不显示
			duration,
			complete: () => {
				setTimeout(() => {
					resolve(true)
				}, duration + 100)
			}
		}
		//App错误信息在底部显示
		//#ifdef APP-PLUS
		if (method == 'error') {
			config.position = 'bottom'
		}
		//#endif
		uni.showToast(config)
	})
}
export const toast = {
	success: (title) => showToast(title, "success"),
	error: (title) => showToast(title, "error")
}

/**
 * @description 封装showLoading mask统一为true，同时更新storage 用于hideLoading判断当前状态
 * @author 闰月飞鸟
 * @param {title} showLoading内容
 */
export function showLoading(title = "") {
	//关闭
	hideLoading()
	//开启showLoading并将localstorage中的showLoading状态置为true
	uni.setStorageSync('showLoading', true)
	uni.showLoading({
		title,
		mask: true
	});
}

/**
 * @description 封装hideLoading。
 * @description 判断当前localstorage中的showLoading状态，若为true 则执行关闭，若为false则不执行
 * @author 闰月飞鸟
 */
export function hideLoading() {
	//判断当前localstorage中的showLoading状态，若为true 则执行关闭，若为false则不执行
	let flag = uni.getStorageSync('showLoading');
	if (flag) {
		uni.hideLoading()
		uni.setStorageSync('showLoading', false)
	}
}
/* 
 * @description 封装uni路由跳转。
 * @author 闰月飞鸟
 * @return Promise navigateTo方式 resolve返回下个页面对象
 */
function router(method = "navigateTo", url, params = {}) {
	if (!url) {
		toast.error('url不能为空')
		return
	}
	if (Object.prototype.toString.call(params) != '[object Object]') {
		toast.error('url参数必须是一个对象')
		return
	}
	return new Promise((resolve, reject) => {
		let beforeSize = getCurrentPages()
			.length
		let qsParams = qs.stringify(params)
		//有参数的时候才加?。
		let addParam = qsParams ? "?" + qsParams : ""
		uni[method]({
			url: url + addParam,
			success() {
				if (method === "navigateTo") {
					function timedCount() {
						let afterSize = getCurrentPages()
							.length
						if (afterSize > beforeSize) {
							resolve(getCurrentPages()[afterSize - 1])
						} else {
							setTimeout(timedCount, 0);
						}
					}
					setTimeout(timedCount, 0);
				} else resolve(true)
			}
		});
	})
}
/**
 * @description 封装navigateTo, 为避免因拼接参数导致意料之外的错误,返回跳转后的页面对象。
 * @author 闰月飞鸟
 * @param {url}   跳转url
 * @param {params} 所带参数对象。类型Object
 * @返回一个 Promise对象 resolve出跳转后的页面对象。
 */
export function navigateTo(url, params = {}) {
	return router("navigateTo", url, params)

}
/**
 * @description 封装redirectTo, 为避免因拼接参数导致意料之外的错误。
 * @author 闰月飞鸟
 * @param {url}   跳转url
 * @param {params} 所带参数对象。类型Object
 */
export function redirectTo(url, params = {}) {
	return router("redirectTo", url, params)

}
/**
 * @description 封装reLaunch, 为避免因拼接参数导致意料之外的错误。
 * @author 闰月飞鸟
 * @param {url}   跳转url
 * @param {params} 所带参数对象。类型Object
 */
export function reLaunch(url, params = {}) {
	return router("reLaunch", url, params)
}

/**
 * @description  打开一个新的webview页面。
 * @author 闰月飞鸟
 */
export function navigateToWebView() {
	return navigateTo('/pages/common/open-webview/open-webview');
}
