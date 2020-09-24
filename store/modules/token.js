import service from '@/service'
import {
	setStoreValue
} from '@/store'
export default {
	namespaced: true,
	state: {
		tokenObj: {
			token: "",
			expireDate: 0
		},
		tokenTimer: null
	},
	getters: {},
	actions: {
		async refreshToken({
			state,
			commit,
			dispatch
		}, payload) {
			let res = await service.login.refreshToken();
			if (res.code === 200) {
				dispatch('saveToken', {
					token: res.token,
					expireDate: res.expireDate
				})
			}
		},
		saveToken({
			state,
			commit
		}, {
			token,
			expireDate
		}) {
			//保存到storage中，每次http请求添加到header中，
			uni.setStorageSync('token', token);
			setStoreValue('token', 'tokenObj', {
				token,
				expireDate
			})
		},
		setTokenTimer({
			state,
			commit,
			dispatch
		}) {
			console.log('timerBegin')
			let timeout = parseInt(state.tokenObj.expireDate);
			// 需要提前获取
			let tokenTimer = setTimeout(() => dispatch('refreshToken'), timeout - 1000 * 60);
			setStoreValue('token', 'tokenTimer', tokenTimer)
		},
		//单独定义一个方法，用于login页面中关闭定时器
		clearTokenTimer({
			state
		}) {
			clearTimeout(state.tokenTimer);
			console.log('timerClose')
		},
		//清空重置token
		clearToken({
			state
		}) {
			setStoreValue('token', 'tokenObj', {
				token: "",
				expireDate: 0
			})
			uni.setStorageSync('token', '');
		}
	},
	mutations: {}
}
