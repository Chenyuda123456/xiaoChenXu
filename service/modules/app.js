import {
	http
} from '@/common/js/http'

//App端id为SSGRID_APP,获取应用信息
export const getInfor = (id='SSGRID_APP') => http.get(`/sys/application/getOne/${id}`)