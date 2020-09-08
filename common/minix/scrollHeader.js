export default {
	data(){
		return {
			canScroll:true,
			scrollHeaderLayout:null,
			originHeight:'0px'
		}
	},
	mounted(){
		this.scrollHeaderLayout = document.querySelector('#home-header')
		console.log('加载完成',this.scrollHeaderLayout)
		this.originHeight = window.getComputedStyle(this.scrollHeaderLayout,null).height
	},
	methods:{
		scrollAnimate(event){
			console.log(this.scrollHeaderLayout)
			if(event.detail.deltaY < 0 && this.canScroll){
				this.scrollHeaderLayout.style.height = '0px'
				this.scrollHeaderLayout.style.padding = '0px'
			}else if(event.detail.deltaY > 0 && this.canScroll){
				this.scrollHeaderLayout.style.height = this.originHeight
				this.scrollHeaderLayout.style.padding = 'auto'
			}
			this.canScroll = false
			setTimeout(()=>{
				this.canScroll = true
			},500)
			
		},
	}
}