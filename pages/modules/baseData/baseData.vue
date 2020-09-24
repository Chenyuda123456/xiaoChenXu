<template>
	<view class="">
		
	</view>
</template>
<script>
export default {
	inheritAttrs: false,
	name: '',
	props: {},
	components: {},
	watch: {},
	onLoad() {},
	onShow() {},
	computed: {},
	onReady() {},
	data() {
		return {};
	},
	methods: {
		onGridItemClick(item) {
			// this.$utils.uni.navigateTo('/pages/modules/b/b');
			this.$utils.uni.navigateTo(item.url);
		}
	}
};
</script>
<style lang="scss" scoped>
.pageClass {
	// padding-top: 30rpx;
}
</style>
