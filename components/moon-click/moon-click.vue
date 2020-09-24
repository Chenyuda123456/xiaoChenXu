<template>
	<view>
		<view class="moon-click" @click.stop.prevent="onClick"><slot :lock="lock"></slot></view>
	</view>
</template>
<script>
export default {
	inheritAttrs: false,
	name: 'moonClick',
	props: {
		duration: {
			type: Number,
			default: 500
		},
		type: {}
	},
	components: {},
	watch: {
		lock(val) {
			//只有当lock为true，开始计时恢复
			if (val)
				setTimeout(() => {
					this.lock = false;
				}, this.duration);
		}
	},
	computed: {},
	mounted() {},
	data() {
		return {
			lock: false
		};
	},
	methods: {
		onClick() {
			if (!this.lock) {
				this.lock = true;
				this.$emit('click');
			}
		}
	}
};
</script>
<style lang="scss" scoped>
.moon-click {
	width: 100%;
}
</style>
