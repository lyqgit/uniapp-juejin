<template>
	<scroll-view
		scroll-y 
		class="view-pager-con body-layout-white" 
		@refresherrefresh="fresh" 
		refresher-enabled
		:refresher-triggered="loadStatus"
		@scrolltolower="onreachBottom"
	>
		<view>
			<tagFollowItem 
			v-for="item in list" 
			:key="item.tag_id"
			:tagId="item.tag_id"
			:img="item.tag.icon"
			:title="item.tag.tag_name"
			:postArticleCount="item.tag.post_article_count"
			:concernUserCount="item.tag.concern_user_count"
			>
			</tagFollowItem>
		</view>
	</scroll-view>
</template>

<script>
	
	import { postQueryTagList } from '@/services/tagApi'
	import tagFollowItem from '@/common/components/tagFollowItem'
	
	export default {
		name:'allTag',
		components:{
			tagFollowItem
		},
		data(){
			return {
				list:[],
				page:'0',
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
				const list = this.list
				// 文章列表
				postQueryTagList({"sort_type":1,"cursor":this.page,"limit":20}).then(res=>{this.list = list.concat(res.data);this.page=res.cursor;console.log('数据',res.data)})
			},
			// 刷新
			fresh(){
				if(this.loadStatus === false){
					this.loadStatus = true
					
					console.log('下拉刷新')
					postQueryTagList({"sort_type":1,"cursor":"0","limit":20})
					.then(res=>{
						this.list = res.data;
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
	.booklet-list{
		background-color: $uni-bg-color;
		padding: 20rpx;
		display: flex;
		.left-img{
			width: 100rpx;
			height: 200rpx;
			border-radius: 10rpx;
		}
		
		.content-layout{
			flex: 1;
			.title{
				color: $custom-font-color-title;
				font-weight: bold;
				font-size: 32rpx;
			}
			.user-info{
				font-size: 20rpx;
				margin-top: 20rpx;
			}
			.des{
				font-size: 20rpx;
				margin-top: 20rpx;
				.pre{
					color: #FF7C0B;
				}
				.buy{
					color: #8A9AA9;
				}
			}
		}
		
		.price-layout{
			display: flex;
			align-items: center;
			.price{
				
				color: #007FFF;
				font-size: 20rpx;
				padding: 10rpx 20rpx;
				border-radius: 30rpx;
				background-color: #F1F7FF;
			}
		}
		
	}
</style>
