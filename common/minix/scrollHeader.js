export default {
	data(){
		return {
			canScroll:true,
			originHeight:'0px'
		}
	},
	mounted(){
		this.originHeight = this.$store.state.header.headerHeight
	},
	methods:{
		scrollAnimate(event){
			if(event.detail.deltaY < 0 && this.canScroll){
				this.$store.commit('header/setHeaderHeight','0px') 
			}else if(event.detail.deltaY > 0 && this.canScroll){
				this.$store.commit('header/setHeaderHeight',this.originHeight) 
			}
			this.canScroll = false
			setTimeout(()=>{
				this.canScroll = true
			},500)
			
		},
	}
}