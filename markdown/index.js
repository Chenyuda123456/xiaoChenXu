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
Vue.component('README',()=>import('@/README.md')) 
Vue.component('devRules',()=>import('@/开发规范.md')) 
Vue.component('contents',()=>import('@/目录结构.md')) 
Vue.component('config',()=>import('@/config/Readme.md')) 
Vue.component('markdown',()=>import('@/markdown/Readme.md')) 
Vue.component('service',()=>import('@/service/Readme.md')) 
Vue.component('store',()=>import('@/store/Readme.md')) 
Vue.component('common',()=>import('@/common/Readme.md')) 
Vue.component('utils',()=>import('@/utils/Readme.md')) 
Vue.component('components--moon-click',()=>import('@/components/moon-click/readme.md')) 
Vue.component('components--moon-input',()=>import('@/components/moon-input/Readme.md')) 
Vue.component('components--moon-transition',()=>import('@/components/moon-transition/readme.md')) 
Vue.component('pages--common',()=>import('@/pages/common/Readme.md')) 
Vue.component('pages--frame',()=>import('@/pages/frame/Readme.md')) 
Vue.component('pages--modules',()=>import('@/pages/modules/Readme.md')) 
Vue.component('utils--extra',()=>import('@/utils/extra/readme.md')) 
Vue.component('utils--moon',()=>import('@/utils/moon/readme.md')) 
Vue.component('utils--uni',()=>import('@/utils/uni/readme.md')) 
Vue.component('pages--common--change-password',()=>import('@/pages/common/change-password/readme.md')) 
Vue.component('pages--common--open-webview',()=>import('@/pages/common/open-webview/readme.md')) 
Vue.component('common--js--http',()=>import('@/common/js/http/Readme.md')) 
Vue.component('common--js--http--request',()=>import('@/common/js/http/request.md')) 
export const list =[{"entity":{"id":"a3e15013-ed55-41e5-8a8e-9f0dfaf68530","name":"README","componentName":"README","icon":"el-icon-location","alias":"README"},"childs":[]},{"entity":{"id":"963a91f5-0ac7-476b-8821-1312b4be32d8","name":"devRules","componentName":"devRules","icon":"el-icon-location","alias":"开发规范"},"childs":[]},{"entity":{"id":"c63ba108-c637-428d-8c69-293e666255f9","name":"contents","componentName":"contents","icon":"el-icon-location","alias":"目录结构"},"childs":[]},{"entity":{"id":"51a680fb-7af4-4018-80dc-425981dcdb67","name":"config","componentName":"config","icon":"el-icon-location","alias":"config"},"childs":[]},{"entity":{"id":"3f64d962-2444-4265-84dc-55c2e9caef98","name":"markdown","componentName":"markdown","icon":"el-icon-location","alias":"markdown"},"childs":[]},{"entity":{"id":"ee39afe2-eb87-4cba-88e8-7e6c4b9c1170","name":"service","componentName":"service","icon":"el-icon-location","alias":"service"},"childs":[]},{"entity":{"id":"c656af71-274a-4958-8c4d-50ef9592c3a4","name":"store","componentName":"store","icon":"el-icon-location","alias":"store"},"childs":[]},{"entity":{"id":"bcbda39c-f92c-4a69-8689-99f2da02c1e7","name":"common","componentName":"common","icon":"el-icon-location","alias":"common"},"childs":[{"entity":{"id":"a094ebaa-cf79-43ed-8c25-0b4821ec1220","name":"js","componentName":"","icon":"el-icon-location","alias":"js"},"childs":[{"entity":{"id":"70e485b2-3573-4fa0-8712-39396c14e69c","name":"http","componentName":"common--js--http","icon":"el-icon-location","alias":"http"},"childs":[{"entity":{"id":"0be5df60-827a-435f-8e7d-3a359a49fbd7","name":"request","componentName":"common--js--http--request","icon":"el-icon-location","alias":"request"},"childs":[]}]}]}]},{"entity":{"id":"e6a4d28c-c3cb-4db3-88e6-d28adb5fadae","name":"utils","componentName":"utils","icon":"el-icon-location","alias":"utils"},"childs":[{"entity":{"id":"51e8b2aa-4daf-4121-838c-a9d5820ebe50","name":"extra","componentName":"utils--extra","icon":"el-icon-location","alias":"extra"},"childs":[]},{"entity":{"id":"2f7e6081-b790-44ed-8f83-6eee803bb623","name":"moon","componentName":"utils--moon","icon":"el-icon-location","alias":"moon"},"childs":[]},{"entity":{"id":"ec1dee25-f348-405e-8f26-2adf13e52571","name":"uni","componentName":"utils--uni","icon":"el-icon-location","alias":"uni"},"childs":[]}]},{"entity":{"id":"a83f60fc-6b94-47d4-884f-8cf39df8da30","name":"components","componentName":"","icon":"el-icon-location","alias":"components"},"childs":[{"entity":{"id":"4024774d-1754-463a-8d5d-45ffcc602adc","name":"moon-click","componentName":"components--moon-click","icon":"el-icon-location","alias":"moon-click"},"childs":[]},{"entity":{"id":"8dee1413-ef6d-4689-8ebe-7f4d81012924","name":"moon-input","componentName":"components--moon-input","icon":"el-icon-location","alias":"moon-input"},"childs":[]},{"entity":{"id":"fbfdff66-b84b-407d-89fb-c0ac1a8495c1","name":"moon-transition","componentName":"components--moon-transition","icon":"el-icon-location","alias":"moon-transition"},"childs":[]}]},{"entity":{"id":"aa339a19-7a79-4743-8d31-6bf1b4512ef4","name":"pages","componentName":"","icon":"el-icon-location","alias":"pages"},"childs":[{"entity":{"id":"06eb6cad-f88c-4677-83e0-425c104df70a","name":"common","componentName":"pages--common","icon":"el-icon-location","alias":"common"},"childs":[{"entity":{"id":"812e0dc2-d88f-4d3a-84f9-a086cbc0d1dc","name":"change-password","componentName":"pages--common--change-password","icon":"el-icon-location","alias":"change-password"},"childs":[]},{"entity":{"id":"75b84b62-1c70-4816-8af0-b17263c2542f","name":"open-webview","componentName":"pages--common--open-webview","icon":"el-icon-location","alias":"open-webview"},"childs":[]}]},{"entity":{"id":"5fd9d977-0961-4287-81cb-bfb261b32ab6","name":"frame","componentName":"pages--frame","icon":"el-icon-location","alias":"frame"},"childs":[]},{"entity":{"id":"edd7fbc9-4705-4fe0-8ec2-0bdf435109da","name":"modules","componentName":"pages--modules","icon":"el-icon-location","alias":"modules"},"childs":[]}]}]