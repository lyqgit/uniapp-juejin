import { post } from '../../common/utils/request'

// 用户名和密码登录
export async function postPassportUAP(params){
	return post('/passport/user/login/',params)
}

// 验证码登录
export async function postPassportCap(params){
	return post('/passport/mobile/sms_login/',params)
}

// 获取验证码
export async function postCap(params){
	return post('/passport/mobile/send_code/v1/',params)
}
