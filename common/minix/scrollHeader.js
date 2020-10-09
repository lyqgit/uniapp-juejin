export default {
	data(){
		return {
			canScroll:true,
		}
	},
	methods:{
		scrollAnimate(event){
			
			if(event.detail.deltaY < 0 && this.canScroll){
				this.$store.commit('header/setHeaderHeight','0px') 
			}else if(event.detail.deltaY > 0 && this.canScroll){
				this.$store.commit('header/setHeaderHeight',this.$store.state.header.headerOriginHeight) 
			}
			this.canScroll = false
			setTimeout(()=>{
				this.canScroll = true
				// console.log('延时修改')
			},500)
			// console.log(event.detail.deltaY)
			// console.log(this.$store.state.header.headerOriginHeight)
			// console.log(this.canScroll)
		},
	}
}