import Vue from 'vue'
import App from './App'
import uView from "uview-ui";
console.log(uView);
import '@/utils'
import '@/service'
import store from '@/store'
Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$store = store

//#ifdef H5
import '@/markdown'
//#endif
const app = new Vue({
	...App,
	store,
	watch: {
		tokenObj: {
			handler(newValue, oldValue) {
				//当tokenObj发生变化时，关闭定时器
				this.$store.dispatch('token/clearTokenTimer')
				//当token有值时，开启定时器， 
				if (newValue.token)
					this.$store.dispatch('token/setTokenTimer')

			},
			deep: true
		}
	},
	computed: {
		tokenObj() {
			return this.$store.state.token.tokenObj
		}
	},
})
app.$mount()
