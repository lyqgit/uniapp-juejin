
const passportArr = {
	'0':'35',
	'1':'34',
	'2':'37',
	'3':'36',
	'4':'31',
	'5':'30',
	'6':'33',
	'7':'32',
	'8':'3d',
	'9':'3c',
}

export function createSecretKey(mobile){
	let secretKey = ''
	if(mobile && mobile.trim().length>0){
		const arr = mobile.split('')
		arr.forEach(item=>{
			secretKey += passportArr[item]
		})
	}else{
		uni.showToast({
			title:'手机号格式不正确'
		})
	}
	return secretKey
}

