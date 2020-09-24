<template>
	<div class="navMenu">
		<template v-for="navMenu in navMenus">
			<!-- 最后一级菜单 -->
			<el-menu-item v-if="navMenu.childs.length == 0 && navMenu.entity" :key="navMenu.entity.id" :index="navMenu.entity.name" @click="onClick(navMenu.entity)">
				<i :class="navMenu.entity.icon"></i>
				<span slot="title">{{ navMenu.entity.alias }}</span>
			</el-menu-item>

			<!-- 此菜单下还有子菜单 -->
			<el-submenu v-if="navMenu.childs.length > 0 && navMenu.entity" :key="navMenu.entity.id" :index="navMenu.entity.name">
				<template slot="title">
					<div @click.stop="onClick(navMenu.entity)">
						<i :class="navMenu.entity.icon"></i>
						<span>{{ navMenu.entity.alias }}</span>
					</div>
				</template>
				<!-- 递归 -->
				<NavMenu :navMenus="navMenu.childs" @click="onClick"></NavMenu>
			</el-submenu>
		</template>
	</div>
</template>
<script>
/*  结构
	[
		 {
		          //一级
		          entity: {
		            id: 0,
		            name: "aa",
		            icon: "el-icon-message",
					componentName: :'',
		            alias: "一级菜单"
		          },
				    childs: [
				              {
				                entity: {
				                  id: 3,
				                  name: "authManage",
				                  icon: "el-icon-loading",
								  componentName: :'',
				                  alias: "echarts折线图-图例过滤"
				                },
								childs:[]
				              }]
		        }
	] 
	 
	 */
export default {
	name: 'NavMenu',
	props: ['navMenus'],
	data() {
		return {};
	},
	methods: {
		onClick(item) {
			this.$emit('click', item);
		}
	}
};
</script>

<style></style>
