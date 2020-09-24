<template>
	<el-aside style="height:100vh; background:white">
		<el-scrollbar ><Menu v-on="$listeners"></Menu></el-scrollbar>
	</el-aside>
</template>
<script>
import Menu from '../menu';
export default {
	inheritAttrs:false,
	components: {
		Menu
	},
	mounted() {},
	data() {
		return {};
	},
	methods: {}
};
</script>
<style lang="scss" scoped>
.el-scrollbar {
	height: 100%;
	/deep/ .el-scrollbar__wrap {
		//避免底部出滚动条
		overflow-x: auto;
	}
	/deep/.el-scrollbar__thumb {
		// opacity: 0;
	}
}
</style>
