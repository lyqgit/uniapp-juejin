export default {
	namespaced:true,
	state:{
		headerHeight:'0px'
	},
	mutations:{
		setHeaderHeight(state,payload){
			state.headerHeight = payload
		}
	}
}