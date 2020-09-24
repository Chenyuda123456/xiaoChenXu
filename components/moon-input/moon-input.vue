<template>
	<view>
		<view class="moon-input " @click.stop="onClick">
			<!-- v-bind="$attrs" -->
			<textarea
				v-if="mode === 'textarea'"
				:value="value"
				:placeholder="placeholder"
				placeholderClass="placeholderClass"
				:disabled="disabled"
				:maxlength="-1"
				:auto-height="autoHeight"
				:fixed="fixed"
				@input="onInput"
				@confirm="onConfirm"
			/>
			<input
				v-else
				:value="value"
				:style="{ fontSize: inner_password ? '10px' : 'inherit' }"
				:password="inner_password"
				:placeholder="placeholder"
				placeholderClass="placeholderClass"
				:disabled="disabled"
				@input="onInput"
				@confirm="onConfirm"
			/>
			<slot />
			<uni-icons v-if="password" style="margin-left: 10rpx;" :size="22" type="eye" :color="inner_password ? '' : '#007aff'" @click="onIconClick" />
		</view>
	</view>
</template>
<script>
export default {
	inheritAttrs: false,
	name: 'moonInput',
	props: {
		/* 公共 */
		mode: {
			type: String,
			default: 'input'
		},
		value: {
			type: String,
			required: true
		},
		disabled: {
			type: Boolean,
			default: false
		},
		placeholder: {
			type: String,
			default: ''
		},
		/* input */
		password: {
			type: Boolean,
			default: false
		},
		/* textarea */
		autoHeight: {
			type: Boolean,
			default: false
		},
		fixed: {
			type: Boolean,
			default: false
		}
	},
	components: {},
	watch: {},
	created() {},
	computed: {},
	mounted() {},
	data() {
		return {
			inner_password: this.password
		};
	},
	methods: {
		onClick() {
			console.log(JSON.stringify(this._props));
			setTimeout(() => {}, 500);
			this.$emit('click');
		},
		onInput(e) {
			this.$emit('input', e.detail.value.trim());
		},
		onConfirm() {
			this.$emit('confirm');
		},
		onIconClick() {
			this.inner_password = !this.inner_password;
		}
	}
};
</script>
<style lang="scss" scoped>
.moon-input {
	display: flex;
	flex-direction: row;
	align-items: center;
	// 当组件被包围在moonform组件中时 padding为0
	padding: 11px 0px;
	line-height: 1.4rem;
	height: 100%;
	width: 100%;
	background-color: white;
	input {
		height: 100%;
		flex: 1;
	}
	textarea {
		flex: 1;
	}
}
.placeholderClass {
	font-size: 0.8rem;
}
</style>
