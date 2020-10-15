<template>
	<scroll-view 
		scroll-y 
		class="view-pager-con body-layout-grey" 
		@refresherrefresh="fresh" 
		refresher-enabled
		:refresher-triggered="loadStatus"
		@scrolltolower="onreachBottom"
		@scroll="scrollAnimate"
	>
		<view>
			<division v-if="!$store.state.user.token"></division>
			<loginTip v-if="!$store.state.user.token"></loginTip>
			<division></division>
			<hotRecommend :list="hotList"></hotRecommend>
			<articleList :list="articleList"></articleList>
		</view>
	</scroll-view>
</template>

<script>
	import loginTip from './components/loginTip'
	import hotRecommend from './components/hotRecommend'
	import articleList from '../../common/components/articleList.vue'
	import scrollHeader from '../../common/minix/scrollHeader'
	import { postList } from '../../services/recommendApi/recommendAllFeed'
	export default{
		name:'recommend',
		components:{
			loginTip,
			hotRecommend,
			articleList,
		},
		mixins:[scrollHeader],
		data(){
			return {
				hotList:[],
				articleList:[],
				articlePage:0,
				loadStatus:false
			}
		},
		created() {
			this.fresh()
		},
		methods:{
			// scroll-view到底部加载更多
			onreachBottom() {
				console.log('加载更多')
				const list = this.articleList
				// 文章列表
				postList({"id_type":2,"client_type":2606,"cursor":this.articlePage,"limit":20,"sort_type":200}).then(res=>{this.articleList = list.concat(res.data);this.articlePage=res.cursor;console.log('数据',res.data)})
			},
			// 刷新
			fresh(){
				if(this.loadStatus === false){
					this.loadStatus = true
					
					console.log('下拉刷新')
					Promise.all([
						postList({"id_type":2,"client_type":2606,"sort_type":213,"cursor":"0","limit":3}).then(res=>{this.hotList = res.data}),
						postList({"id_type":2,"client_type":2606,"cursor":"0","limit":20,"sort_type":200}).then(res=>{this.articleList = res.data;this.articlePage=res.cursor})
					]).
					then(res=>{
						setTimeout(()=>{
							this.loadStatus = false
						},1000)
						
					})
				}
			},
		}
	}
</script>

<style scoped>
	.view-pager-con{
		height: 100%;
		width: 100%;
	}
</style>
