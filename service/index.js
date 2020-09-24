import Vue from 'vue'
const service = {}
/* 
//自动扫描引入方式，配置方便
const files = require.context('./modules', true, /\.js/)
const modules = files.keys().reduce((obj, item) => {
	obj[item.match(/[^\./]+(?=\.js)/g)[0]] = files(item)
	return obj
}, {})
Vue.prototype.$service = modules 
 */
/* 直接impot 然后手动赋值后，开发过程中通过模糊匹配提示输入来的方便,这里用gulp自动依据modules构建*/
import * as app from './modules/app.js'
				service.app=app
				

				import * as enterprise from './modules/enterprise.js'
				service.enterprise=enterprise
				

				import * as global from './modules/global.js'
				service.global=global
				

				import * as login from './modules/login.js'
				service.login=login
				

				import * as user from './modules/user.js'
				service.user=user

Vue.prototype.$service = service
export default service