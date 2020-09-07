<template>
	<scroll-view scroll-y class="view-pager-con body-layout-grey" @scrolltolower="onreachBottom">
		<view>
			<division></division>
			<loginTip></loginTip>
			<division></division>
			<hotRecommend :list="hotList"></hotRecommend>
			123456
		</view>
	</scroll-view>
</template>

<script>
	import loginTip from './components/loginTip'
	import hotRecommend from './components/hotRecommend'
	import { postList } from '../../services/recommendApi/recommendAllFeed'
	export default{
		name:'recommend',
		components:{
			loginTip,
			hotRecommend,
		},
		data(){
			return {
				hotList:[]
			}
		},
		created() {
			console.log(process.env.NODE_ENV === 'development')
			// 热榜
			postList({"id_type":2,"client_type":2606,"sort_type":213,"cursor":"0","limit":3}).then(res=>{this.hotList = res.data;console.log('数据',res.data)})
			// 文章列表
			// postList({"id_type":2,"client_type":2606,"cursor":"0","limit":20,"sort_type":200}).then(res=>console.log(res))
		},
		methods:{
			// scroll-view到底部加载更多
			onreachBottom() {
				console.log('加载更多')
			}
		}
	}
</script>

<style scoped>
	.view-pager-con{
		height: 100%;
		width: 100%;
	}
</style>
