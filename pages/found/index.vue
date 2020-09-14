<template>
	<scroll-view
		scroll-y 
		class="view-pager-con body-layout-grey" 
		@refresherrefresh="fresh" 
		refresher-enabled
		:refresher-triggered="loadStatus"
		@scrolltolower="onreachBottom"
	>
		<view class="comment-layout">
			<view>
				<view class="header" >
					<view class="header-search">
						<iconfont :icon="search"></iconfont>
						<text style="margin-left: 20rpx;">搜索掘金</text>
					</view>
				</view>
			</view>
			<banner></banner>
			<division></division>
			<modules></modules>
			<division></division>
			<view class="hot-title">
				<iconfont :icon="hotIcon" style="color: #FF4343;"></iconfont>
				<text style="flex: 1;margin-left: 20rpx;">热门推荐</text>
			</view>
			<articleList class="hotTitleMargin" :list="list"></articleList>
		</view>
	</scroll-view>
</template>

<script>
	import { postList } from '../../services/recommendApi/recommendAllFeed.js'
	import articleList from '../../common/components/articleList.vue'
	import banner from './components/banner.vue'
	import modules from './components/modules.vue'
	export default {
		name:'found',
		components:{
			articleList,
			banner,
			modules,
		},
		created() {
			this.fresh()
		},
		data(){
			return {
				list:[],
				page:'0',
				loadStatus:false,
				hotIcon:'\ue680',
				search:'\ue606',
			}
		},
		methods:{
			// scroll-view到底部加载更多
			onreachBottom() {
				console.log('加载更多')
				const list = this.list
				// 文章列表
				postList({"cursor":this.page,"limit":20,"id_type":2,"client_type":2606,"sort_type":200}).then(res=>{this.list = list.concat(res.data);this.page=res.cursor;console.log('数据',res.data)})
			},
			// 刷新
			fresh(){
				if(this.loadStatus === false){
					this.loadStatus = true
					
					console.log('下拉刷新')
					postList({"cursor":"0","limit":20,"id_type":2,"client_type":2606,"sort_type":200})
					.then(res=>{
						this.list = res.data
						this.page = res.cursor
					})
					.then(res=>{
						setTimeout(()=>{
							this.loadStatus = false
						},1000)
						
					})
				}
			},
		}
	}
</script>

<style lang="scss" scoped>
	
	.header{
		width: 100%;
		background-color: $uni-bg-color;
		display: flex;
		align-items: center;
		padding: 10rpx 20rpx;
		.header-search{
			padding: 20rpx;
			flex: 1;
			background-color: #EEEEEE;
			border-radius: 10rpx;
			font-size: 24rpx;
			color: #CCD0D4;
		}
	}
	
	.hotTitleMargin /deep/ .articleList-layout:nth-of-type(1){
		margin-top: 0rpx;
	}
	
	.hot-title{
		display: flex;
		align-items: center;
		font-size: 24rpx;
		color: $custom-font-color-des;
		padding: 20rpx;
		background-color: $uni-bg-color;
		border-bottom: 1px solid $custom-font-color-bg;
	}
</style>
