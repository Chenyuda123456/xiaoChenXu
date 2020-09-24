<template>
	<el-menu class="contents" :default-active="defaultActive"><NavMenu :navMenus="list" @click="onClick"></NavMenu></el-menu>
</template>
<script>
import { list } from '../index.js';
import NavMenu from './NavMenu.vue';
export default {
	components: { NavMenu },
	mounted() {
		// 设置默认显示第一个开发规范
		this.$emit('clickItem', list[0].entity.componentName);
		this.defaultActive = list[0].entity.name;
	},
	data() {
		return {
			list,
			defaultActive: ''
		};
	},
	watch: {
		//监听当前路由，判断是否是页面菜单路由，只有在为页面菜单路由时才设置defaultActive值
	},
	computed: {},
	methods: {
		onClick(item) {
			this.$emit('clickItem', item.componentName);
		}
	}
};
</script>
<style lang="scss" scoped>
.contents {
	font-size: 20px;
	font-weight: bold;
}
.context {
	font-size: 20px;
}
</style>
