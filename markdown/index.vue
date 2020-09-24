<template>
	<div class="pageClass">
		<el-container class="content">
			<el-container style="height:100vh;">
				<Aside style="width:300px;height:100vh;" @clickItem="onClickItem"></Aside>
				<el-scrollbar style="width:100%;">
					<el-main style="height:100%; background:white"><component style="background:white" class="markdown" :is="componentName"></component></el-main>
				</el-scrollbar>
			</el-container>
		</el-container>
	</div>
</template>
<script module="element" lang="renderjs">
export default {
	mounted() {
		let script = document.createElement('script');
					script.src = 'https://unpkg.com/vue/dist/vue.js';
					document.head.appendChild(script);
			 script = document.createElement('script');
			script.src = 'https://unpkg.com/element-ui/lib/index.js';
			document.head.appendChild(script);


	},
	methods: {
		init() { },
		updateProp(newValue, oldValue, ownerInstance, instance) { }
	}
};
</script>

<script>
import Aside from './aside';
import list from './index.js';

export default {
	inheritAttrs: false,
	name: '',
	props: {},
	components: { Aside },
	watch: {},
	onLoad() {},
	onShow() {},
	computed: {},
	onReady() {},
	data() {
		return {
			list,
			componentName: ''
		};
	},
	methods: {
		onClickItem(componentName) {
			this.componentName = componentName;
		}
	}
};
</script>
<style lang="scss" scoped>
@import './styles/style2.scss';
@import './styles/default.scss';
body,
uni-page-body {
	background-color: rgb(222, 225, 230);
	height: 100%;
	font-size: 71px;
	margin: 0;
	padding: 0;
	line-height: 1.8rem;
	display: flex;
	justify-content: center;
}
/deep/ .el-scrollbar {
	height: 100%;
	/deep/ .el-scrollbar__wrap {
		//避免底部出滚动条
		overflow-x: auto;
		background-color: white;
	}
	/deep/.el-scrollbar__thumb {
		// opacity: 0;
	}
}
.pageClass {
	font-size: 1rem;
	display: flex;
	flex-direction: row;
	justify-content: center;
	background-color: #c0c0c0;

	@media (max-width: 1920px) {
		width: 80%;
	}
	@media (max-width: 1400px) {
		width: 100%;
	}
	.content {
		font-size: 1rem;
		display: flex;
		flex-direction: row;
		.menu {
			margin-right: 1rem;
		}
		.markdown {
			user-select: text;
			font-size: 16px;
			line-height: 0.5rem;
			margin-left: 5%;
			flex: 1;
			background: white;
		}
	}
}
</style>
