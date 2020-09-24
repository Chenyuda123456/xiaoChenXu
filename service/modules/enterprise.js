import {
	http
} from '@/common/js/http'

export const getList = (params) => {
	return http.get('/corp/base/list', {
		params
	})
}

export const getInfo = (id) => {
	return http.get('/corp/base/selectById/' + id)
}
export const deleteCorp = (id) => {
	return http.post('/corp/base/delete/' + id)
}

export const saveBase = (params) => {
	return http.post('/corp/base/save', params)
}
export const updateBase = (params) => {
	return http.post('/corp/base/update', params)
}


export const getDivisionList = (corpId) => {
	return http.get('/corp/branch/selectBranchByCorpId/' + corpId)
}

export const saveDivision = (params) => {
	return http.post('/corp/branch/saveBranch', params)
}
export const updateDivision = (params) => {
	return http.post('/corp/branch/updateBranch', params)
}
export const deleteDivision = (id) => {
	return http.post('/corp/branch/deleteBranch/' + id)
}
