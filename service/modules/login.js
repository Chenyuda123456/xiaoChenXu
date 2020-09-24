import {
	http
} from '@/common/js/http'
//登录 count账号登录，phone 手机验证登录
export const login = {
	count: params => http.post('/jwt/token', params),
	phone: params => http.post('/jwt/tokenBySms', params)
}
//重新获取token
export const refreshToken = () => http.get('/jwt/refresh')
