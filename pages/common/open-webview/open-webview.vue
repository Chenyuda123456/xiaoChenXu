<template>
	<view><web-view :src="url" @message="onPostMessage"></web-view></view>
</template>
<script>
import qs from 'qs';
export default {
	inheritAttrs: false,
	name: 'open-webview',
	props: {},
	components: {},
	watch: {},
	onLoad(e) {},
	onShow() {},
	computed: {},
	onReady() {},
	data() {
		let pages = getCurrentPages();
		this.currentPage = pages[pages.length - 1];
		return {
			url: '',
			vm: null
		};
	},
	methods: {
		//当触发回退按钮时(V3模式下即使传递),将网页传递过来的数据，传递到上个页面中。上个页面中通过getWebViewMessage方法接收数据
		onPostMessage(event) {
			console.log('onPostMessage：' + JSON.stringify(event.detail.data[0]));
			if (this.vm && this.vm.getWebViewMessage) this.vm.getWebViewMessage(event.detail.data[0]);
		},
		//接收url 为跳转地址 ， params加载url后面参数，title只从params中获取，postData通过setStyle对象传递。， vm 触发打开页面的vue实例，用于接收返回数据
		setData({ url = '', params = {}, postData = {}, vm = null }) {
			if (!url) return;
			// #ifndef APP-PLUS
			if (url.trim().indexOf('/hybrid') == 0) {
				console.error('非App模式下，webview只能使用外部链接的方式跳转，/hybrid只能用在App上')
				return;
			}
			// #endif
			let arr = url.split('?');
			if (arr.length == 2) {
				params = { ...params, ...qs.parse(arr[1]) };
			}
			this.url = arr[0] + '?' + qs.stringify(params);
			this.vm = vm;
			uni.setNavigationBarTitle({
				title: params.title || ''
			});
			// #ifdef APP-PLUS
			let currentWebview = this.$scope.$getAppWebview();
			currentWebview.setStyle({ postData });
			// #endif
		},
		sendData() {}
	}
};
</script>
