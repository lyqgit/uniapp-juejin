<script>
	import { postTagList } from './services/tagApi'
	export default {
		onLaunch: function() {
			console.log('App Launch')
			postTagList()
			.then(res=>{
				console.log(this.$store)
				this.$store.commit('tag/setTag',res.data)
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import './common/css/iconfont.css';
	@import "uview-ui/index.scss";
	page{
		width: 100%;
		height: 100%;
	}
	.body-layout{
		width: 100%;
		height: 100%;
	}
	
	.body-layout-grey{
		background-color: #EFF2F5;
	}
</style>
