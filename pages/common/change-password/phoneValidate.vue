<template>
	<view>
		<moon-form ref="formRef" :model="entity" :rules="rules" :label-style="{ width: '5rem', marginLeft: '10px' }">
			<moon-form-item label="手机号码:" prop="phoneItem"><moon-input v-model="entity.phoneItem"></moon-input></moon-form-item>
			<moon-form-item label="短信验证码:" prop="messageItem">
				<moon-input v-model="entity.messageItem">
					<text class="validate-code-btn" @click="getValidate" :class="{ waiting: disabled }">{{ getValidateText }}</text>
				</moon-input>
			</moon-form-item>
		</moon-form>
		<navigator url="setNewPassword"><button type="primary">下一步</button></navigator>
	</view>
</template>

<script>
export default {
	components: {},
	data() {
		return {
			disabled: false,
			getValidateText: '获取验证码',
			countTime: 59,
			interval: '',
			rules: {
				phoneItem: [
					{
						required: true,
						message: '请输入手机号'
					}
				],
				messageItem: [
					{
						required: true,
						message: '请输入短信验证码'
					}
				]
			},
			entity: {
				phoneItem: '',
				messageItem: ''
			}
		};
	},
	watch: {
		countTime(val) {
			if (val <= 0) {
				clearInterval(this.interval);
				this.getValidateText = '获取验证码';
				this.disabled = false;
				this.countTime = 59;
			}
		}
	},
	methods: {
		getValidate() {
			this.disabled = true;
			let $this = this;
			this.interval = setInterval(() => {
				$this.getValidateText = `重新获取(${$this.countTime})`;
				$this.countTime--;
			}, 1000);
		}
	}
};
</script>

<style  lang="scss" scoped>
.validate-code-btn {
	white-space: nowrap;
	border: 1px solid #c0c0c0;
	border-radius: 1rem 1rem;
	padding-left: 20rpx;
	padding-right: 20rpx;
	margin-right: 4rpx;
	&.waiting {
		color: #ccc;
		border: 1px solid #ccc;
	}
}
</style>
