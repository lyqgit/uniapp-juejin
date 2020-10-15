import { post } from '../../common/utils/request'

// 用户名和密码登录
export async function postPassportUAP(params){
	return post('/passport/user/login/?passport-sdk-version=17&os_api=22&device_type=OPPO+R11+Plus&ssmix=a&manifest_version_code=597&dpi=320&carrier=CHINA+MOBILE&uuid=866174221851658&app_name=jj_app&version_name=5.9.7&ac=wifi&update_version_code=597&channel=tengxun&build_serial=88f3dc715d9187fc&_rticket=1602747341033&device_platform=android&iid=1512536904579373&clientudid=4f437110-c085-47e7-b1ed-3cbfc8f8b3b7&version_code=597&sdk_version_code=15020351&sim_region=CN&cdid=d2e13813-5a56-4afa-aa8f-fb6164fa8f88&openudid=187fc88f3dc715d9&device_id=1283838485740237&resolution=1920x1080&os_version=5.1.1&language=zh&device_brand=OPPO&aid=2606&mcc_mnc=46007',params,{'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'})
}

// 验证码登录
export async function postPassportCap(params){
	return post('/passport/mobile/sms_login/?passport-sdk-version=17&os_api=22&device_type=OPPO+R11+Plus&ssmix=a&manifest_version_code=597&dpi=320&carrier=CHINA+MOBILE&uuid=866174221851658&app_name=jj_app&version_name=5.9.7&ac=wifi&update_version_code=597&channel=tengxun&build_serial=88f3dc715d9187fc&_rticket=1602746887043&device_platform=android&iid=1512536904579373&clientudid=4f437110-c085-47e7-b1ed-3cbfc8f8b3b7&version_code=597&sdk_version_code=15020351&sim_region=CN&cdid=d2e13813-5a56-4afa-aa8f-fb6164fa8f88&openudid=187fc88f3dc715d9&device_id=1283838485740237&resolution=1920x1080&os_version=5.1.1&language=zh&device_brand=OPPO&aid=2606&mcc_mnc=46007',params,{'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'})
}

// 获取验证码
export async function postCap(params){
	return post('/passport/mobile/send_code/v1/?passport-sdk-version=17&os_api=22&device_type=OPPO+R11+Plus&ssmix=a&manifest_version_code=597&dpi=320&carrier=CHINA+MOBILE&uuid=866174221851658&app_name=jj_app&version_name=5.9.7&ac=wifi&update_version_code=597&channel=tengxun&build_serial=88f3dc715d9187fc&_rticket=1602746208643&device_platform=android&iid=1512536904579373&clientudid=4f437110-c085-47e7-b1ed-3cbfc8f8b3b7&version_code=597&sdk_version_code=15020351&sim_region=CN&cdid=d2e13813-5a56-4afa-aa8f-fb6164fa8f88&openudid=187fc88f3dc715d9&device_id=1283838485740237&resolution=1920x1080&os_version=5.1.1&language=zh&device_brand=OPPO&aid=2606&mcc_mnc=46007',params,{'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'})
}
