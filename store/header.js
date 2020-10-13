export default {
	namespaced:true,
	state:{
		headerHeight:'0px',// 控制顶部高度
		headerOriginHeight:'0px',// 记录顶部高度，
		hideHeader:false,
	},
	mutations:{
		setHideHeader(state,payload){
			state.hideHeader = payload
		},
		setHeaderHeight(state,payload){
			state.headerHeight = payload
		},
		setHeaderOriginHeight(state,payload){
			state.headerOriginHeight = payload
		}
	}
}