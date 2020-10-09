export default {
	namespaced:true,
	state:{
		headerHeight:'0px',// 控制顶部高度
		headerOriginHeight:'0px',// 记录顶部高度
	},
	mutations:{
		setHeaderHeight(state,payload){
			state.headerHeight = payload
		},
		setHeaderOriginHeight(state,payload){
			state.headerOriginHeight = payload
		}
	}
}