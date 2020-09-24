<template>
	<view class="">
		<uni-transition :mode-class="modeClass" :show="transition" :duration="duration"><slot></slot></uni-transition>
	</view>
</template>
<script>
export default {
	inheritAttrs: false,
	name: 'moonTransition',
	props: {
		modeClass: {
			type: Array,
			default: function() {
				return ['fade'];
			}
		},
		duration: {
			type: Number,
			default: 300
		}
	},
	components: {},
	watch: {},
	computed: {},
	mounted() {
		clearTimeout(this.begin);
		this.begin = setTimeout(() => {
			this.transition = true;
			this.$emit('begin');
			this.end = setTimeout(() => {
				this.$emit('end');
			}, this.duration);
		}, 0);
	},
	data() {
		return { transition: false, begin: null, end: null };
	},
	methods: {}
};
</script>
<style lang="scss" scoped>
/* 列表点击颜色 */
.uni-transition {
	width: 100%;
	height: 100%;
}
</style>
