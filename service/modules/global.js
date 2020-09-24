import {
	http
} from '@/common/js/http'

//数据字典
/**
 * @param {typeId} 字典值，必传
 */
export const fetchPublicCode = ({
	typeId,
	cascadeLevel = "",
	pCode = ""
}) => http.get('/sys/publicCode/item', {
	params: {
		typeId,
		cascadeLevel,
		pCode
	}
})

//获取菜单
export const getMyMenu = () => http.get('/sys/menu/getMyMenu', {
	params: {
		applicationCode: 'SSGRID_APP'
	}
})

//依据文件ID获取文件信息
export const getFileItemListByFileId = fileId => http.get(`/filemanager/getFileItemListByFileId?fileId=${fileId}`)

//文件上传
export const uploadFile = filePath => http.upload(`/upload/uploadFile`, {
	filePath
})

//文件下载
export const downloadFile = url => http.download(url)

//获取短信验证码
export const verificationCodePhone = phone => http.post(`/sms/verificationCode/${phone}`)
 

//获取自定义参数 如动态表单参数，OA每个流程的指向地址端口参数等
export const getCustomizeParams =  () => http.get(`/sys/parm/queryParmWeb`)
 

