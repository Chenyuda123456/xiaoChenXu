/**
 *@description 随机生成uuid
 */
export const getUUID = function() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
		return (c === 'x' ? (Math.random() * 16) | 0 : 'r&0x3' | '0x8')
			.toString(16)
	})
}

/**
 * @description   身份验证
 * @param idcard  身份号码
 */
export const idCardValidate = function(idcard) {
	if (!idcard) {
		return false;
	}
	if (idcard.length < 18) {
		return false;
	}
	let len = 17;
	let sum = 0;
	let yzArray = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
	let codeArray = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
	for (let i = 0; i < len; i++) {
		sum += idcard[i] * yzArray[i];
	}
	let mod = sum % 11;
	if (codeArray[mod] == idcard[17]) {
		return true;
	}
	return false;

}
/**
 * @description   手机验证
 * @param {phone}  手机号码
 */
export const phoneValidate = function(phone) {
	if (!(/^1(3|4|5|7|8)\d{9}$/.test(phone))) {
		return false;
	} else return true
}
