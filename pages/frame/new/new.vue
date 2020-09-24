<template>
	<moon-transition class="pageClass" :mode-class="['zoom-in', 'fade']">
	  <NewItem :dataProps="dataProps"></NewItem>
	  <NewItem :dataProps="dataProps"></NewItem>
	  <NewItem :dataProps="dataProps"></NewItem>
	</moon-transition>
</template>
<script>
	import NewItem from './new-item.vue'
export default {
	inheritAttrs: false,
	name: 'user',
	props: {},
	components: {NewItem},
	watch: {},
	async onLoad() {},
	onShow() {},
	computed: {
		userInfo() {
			return this.$store.state.user.userInfo;
		}
	},
	onReady() {},
	data() {
		return {
			dataProps:{
				img:'../../../static/image/frame/home/grid/OA.png'
			}
		};
	},
	methods: {
		 onReturn() {
			 console.log('back')
		}
	}
};
</script>
<style lang="scss" scoped>
/* 列表点击颜色 */
 
.pageClass {
	 padding: 0 20rpx;
	 
}
</style>
