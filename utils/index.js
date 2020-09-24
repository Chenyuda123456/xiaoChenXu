import Vue from 'vue'
import * as uni from './uni/index.js'
import * as moon from './moon/index.js'
import * as extra from './extra/index.js'
const utils = {
	uni,
	moon,
	extra
}
Vue.prototype.$utils = utils
export default utils
