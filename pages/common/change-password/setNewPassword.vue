<template>
	<view>
		<moon-form ref="formRef" :model="entity" :rules="rules" :label-style="{ width: '5rem', marginLeft: '10px' }">
			<moon-form-item v-if="old" label="旧密码:" prop="oldPassword">
				<moon-input style="margin-right: 15px;" v-model="entity.oldPassword" password></moon-input>
			</moon-form-item>
			<moon-form-item label="新密码:" prop="newPassword"><moon-input style="margin-right: 15px;" v-model="entity.newPassword" password></moon-input></moon-form-item>
			<moon-form-item label="确认密码:" prop="again"><moon-input style="margin-right: 15px;" v-model="entity.again" password  ></moon-input></moon-form-item>
		</moon-form>
		<button v-if="!old" style="margin-top: 1rem;" type="primary" @click="onConfirm">确定</button>
	</view>
</template>

<script>
export default {
	props: {
		/* 依据旧密码修改成新密码 */
		old: {
			type: Boolean,
			default: false
		}
	},
	components: {},
	data() {
		return {
			rules: {
				oldPassword: [
					{
						required: true,
						message: '请输入旧密码'
					}
				],
				newPassword: [
					{
						required: true,
						message: '请输入新密码'
					}
				],
				again: [
					{
						required: true,
						message: '请输入确认密码'
					},
					{
						validator: (rule, value, callback) => {
							// 注意这里如果用的是methods里的isMobilePhone将不生效
							if (this.entity.newPassword == this.entity.again) {
								callback();
							} else {
								callback(new Error('确认密码和新密码不一致'));
							}
						}
					}
				]
			},
			entity: {
				oldPassword: '',
				newPassword: '',
				again: ''
			}
		};
	},
	methods: {
		/* 旧密码改新密码，通过ref调用，此方法校验 */
		validate() {
			return this.$refs.formRef.validate();
		},
		//还需要接口根据手机号获取用户信息
		onConfirm() {
			this.validate();
		},
		onBack() {
			uni.redirectTo({
				url: '../login'
			});
		}
	}
};
</script>
