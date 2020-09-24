import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex)
/* 
 * @athor 闰月飞鸟
 * @description 自动化导入store模块
 */
const files = require.context('./modules', true, /\.js/)
const modules = files.keys()
	.reduce((obj, item) => {
		obj[item.match(/[^\./]+(?=\.js)/g)[0]] = files(item)
			.default
		return obj
	}, {})

const store = new Vuex.Store({
	plugins: [store => {
			/*
			 * @athor 闰月飞鸟
			 * @description  store所有默认值存入本地localstorage中，用于resetStoreValue恢复默认值。
			 * @care 必须放在持久化之前。
			 */
			uni.setStorageSync('defaultState', store.state)
		},
		createPersistedState({
			storage: {
				getItem: key => uni.getStorageSync(key),
				setItem: (key, value) => uni.setStorageSync(key, value),
				removeItem: key => uni.removeStorageSync(key)
			}
		})
	],
	modules,
	mutations: {
		/*
		 * @athor 闰月飞鸟
		 * @description  给指定模块的state中的属性赋值。 
		 * @param  modules 具体模块名，为falsely时，视为根模块
		 * @param  key 具体模块state中的属性
		 * @param  value  待赋值
		 * @param  merge  赋值方式，默认为true，当merge为true，且赋值对象和所赋都为Object时为合并赋值， 否则都为替换赋值。
		 */
		setKeyValue(state, {
			modules,
			key,
			value,
			merge = true
		}) {
			//modules为falsely时，视为根模块
			let _state = modules ? state[modules] : state
			if (!_state) {
				console.error('没有找到${modules}模块');
				return
			}
			let flag = (Object.prototype.toString.call(_state[key])) === '[object Object]'
			let flag2 = (Object.prototype.toString.call(value)) === '[object Object]'
			if (flag && flag2 && merge) {
				_state[key] = { ..._state[key],
					...value
				}
			} else _state[key] = value
		}

	},
	actions: {
		/*
		 * @athor 闰月飞鸟
		 * @description  重置指定模块的state中的属性值。 
		 * @param  modules 具体模块名，为falsely时，视为根模块
		 * @param  key 具体模块state中的属性  
		 */
		resetKeyValue({
			state,
			commit
		}, {
			modules,
			key
		}) {
			let defaultState = uni.getStorageSync('defaultState')
			//modules为falsely时，视为根模块
			let _state = modules ? defaultState[modules] : defaultState;
			let value = _state[key]
			commit('setKeyValue', {
				modules,
				key,
				value,
				merge: false
			})

		}
	}
})
/*
 * @athor 闰月飞鸟
 * @description  给指定模块的state中的属性赋值。 
 * @param  modules 具体模块名，为falsely时，视为根模块
 * @param  key 具体模块state中的属性
 * @param  value  待赋值
 * @param  merge  赋值方式，默认为true， 当merge为true，且赋值对象和所赋都为Object时为合并赋值， 否则都为替换赋值。
 */
export const setStoreValue = (modules, key, value, merge = true) => {
	store.commit('setKeyValue', {
		modules,
		key,
		value,
		merge
	})
}

/*
 * @athor 闰月飞鸟
 * @description  重置指定模块的state中的属性值。 modules,key都为falsely时，还原所有模块
 * @param  modules 具体模块名，为falsely时，视为根模块
 * @param  key 具体模块state中的属性，为falsely时，视为还原当前根模块所有属性
 */
export const resetStoreValue = (modules, key) => {
	//modules,key都为falsely时，还原所有模块
	if (!modules && !key) {
		let defaultState = uni.getStorageSync('defaultState')
		Object.keys(store.state)
			.forEach(m => {
				store.state[m] = defaultState[m]
			})
		return
	}
	//key都为falsely时，还原模块中所有属性
	if (!!modules && !key) {
		let defaultState = uni.getStorageSync('defaultState')
		store.state[m] = defaultState[m]
		return
	}
	store.dispatch('resetKeyValue', {
		modules,
		key
	})
}
// 将setStoreValue resetStoreValue注入到Vue实例上
Vue.prototype.$setStoreValue = setStoreValue;
Vue.prototype.$resetStoreValue = resetStoreValue
export default store
