export default {
	namespaced:true,
	state:{
		list:[]
	},
	mutations:{
		setTag(state,payload){
			state.list = payload
		}
	}
}