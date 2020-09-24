import {
	http
} from '@/common/js/http'
//获取用户信息
export const getInfor = () => http.get('/sys/user/info')
//获取用户所属部门
export const getDept = params => http.get(`/sys/unit/selectUnitById/${params}`)
//获取登录日志，默认取前5个
export const getLoginLog = params => http.get('/sys/log/loginList', {
	params: {
		page: 1,
		limit: 5
	}
})
//更新用户信息
export const update = params => http.post('/sys/user/update', params)
//更新用户登录密码
export const updatePassWord = params => http.post('/sys/user/updatePassword', params)
