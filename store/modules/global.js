import service from '@/service'
import {
	setStoreValue
} from '@/store'
import preCodeList from '@/common/js/preFetchPublicCode.js'
import utils from '@/utils'
export default {
	namespaced: true,
	state: {
		//后台自定义参数，如具体业务的请求域名，动态表单的key等
		customizeParams: {}
	},
	getters: {},
	actions: {
		//预加载字典值
		async preFetchPublicCode({
			dispatch
		}) {
			await Promise.all(preCodeList.map(params => dispatch('fetchPublicCode', params)))
		},
		//获取数据字典值。先从state中获取，若没有则调用接口返回，并将返回值存入state中。
		async fetchPublicCode({
			state,
			commit
		}, {
			typeId,
			cascadeLevel = "",
			pCode = ""
		}) {
			if (state[typeId]) return state[typeId]
			else {
				let {
					items
				} = await service.global.fetchPublicCode({
					typeId,
					cascadeLevel,
					pCode
				})
				setStoreValue('global', typeId, items);
				return items
			}

		},
		//获取菜单树
		async getMenuTree() {
			//获取首页菜单
			let {
				menuList
			} = await service.global.getMyMenu();
			let menuTree = utils.moon.getTreeData(menuList, {
				id: 'id',
				parentId: 'pId',
				children: 'children'
			});
			//以每个页面的url作为属性，对应每个页面的菜单
			//构建规则，页面url不能为空，且拥有子菜单。
			//页面中获取菜单，通过当前页面路由查找即可
			function iterator(arr) {
				return arr.reduce((obj, item) => {
					if (!!item.url && item.children && item.children.length > 0) {
						obj[item.url] = item.children
						obj = { ...obj,
							...iterator(item.children)
						}
					}
					return obj
				}, {})
			}
			let menuObject = iterator(menuTree)
			Object.keys(menuObject)
				.forEach(routePath => {
					setStoreValue('global', routePath, menuObject[routePath]);
				})

		},
		//获取后台自定义参数
		async getCustomizeParams({
			state
		}, payload) {
			let res = await service.global.getCustomizeParams(payload)
			setStoreValue('global', 'customizeParams',JSON.parse(res.jsonParam));
		},
	},
	mutations: {}
}
