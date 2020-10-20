export default {
	namespaced:true,
	state:{
		userInfo:uni.getStorageSync('userInfo')?JSON.parse(uni.getStorageSync('userInfo')):{}
	},
	mutations:{
		setUserInfo(state,payload){
			state.userInfo = payload
		},
	}
}