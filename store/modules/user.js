import service from '@/service'
import {
	setStoreValue
} from '@/store'
export default {
	namespaced: true,
	state: {
		userInfo: {
			"id": "",
			"loginName": "",
			"password": "",
			"name": "",
			"mobile": "",
			"unitId": "",
			/* 新增属性，用于接收通过photoId获取的文件url */
			"photoUrl": "/static/image/frame/user/defaultHeadImg.png",
			"sysAccount": {
				"email": "",
				"photoId": "",
			},
			/* 新增属性，用于接收通过unitId获取的部门对象信息 */
			"sysUnit": {
				"name": "",
			}
		}
	},
	getters: {},
	actions: {
		async getUserInfo({
			state
		}) {
			//获取 用户信息
			let res = await service.user.getInfor();
			let user = res.user;
			try {
				//获取用户所在部门
				let {
					sysUnit
				} = await service.user.getDept(user.unitId);
				//将部门信息存入用户信息对象中
				user.sysUnit = sysUnit;
				//依据头像id，获取头像图片信息,并将图片url存入 用户对象中
				if (user.sysAccount.photoId) {
					let {
						data
					} = await service.global.getFileItemListByFileId(user.sysAccount.photoId);
					//依据头像图片url下载到本地，避免多次调用不断请求服务
					if (data.url) {
						res = await service.global.downloadFile(data.url)
						if (res) user.photoUrl = res.tempFilePath;
					}
				}
			} catch (e) {
				console.error(e)
			}
			//将user存入store。
			setStoreValue('user', 'userInfo', user);
		}
	},
	mutations: {}
}
