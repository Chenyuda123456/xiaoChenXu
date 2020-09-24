import Vue from 'vue'
import {
	Scrollbar,
	Menu,
	Submenu,
	MenuItem,
	Container,
	Main,
	Aside
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//重写修改Scrollbar位置
Scrollbar.computed.wrap = function() {
	this.$refs.wrap.style.cssText =
		"margin-bottom: -17px; margin-right: -20px;";
	return this.$refs.wrap;
}
Vue.use(Scrollbar);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(Container);
Vue.use(Main);
Vue.use(Aside);