<template>
	<view v-if="!!detail.author_user_info" class="detail-layout">
		<web-view :webview-styles="webviewStyles" :src="detail.article_info.content" class="content"></web-view>
		<!-- <view class="header">
			<view class="left" @click="goBack">
				<iconfont :icon="icon.leftArrow" style="color: #007FFF;"></iconfont>
			</view>
			<view class="content">
				<view class="user-des move-down" >
					<view style="flex:1;">
						<image class="user-avatar" :src="detail.author_user_info.avatar_large" mode="aspectFill"></image>
						<text class="user-name">{{detail.author_user_info.user_name}}</text>
						<smallFont style="padding: 0;margin-left: 10rpx;vertical-align: text-bottom;" :text="'Lv'+detail.author_user_info.level" color="orange"></smallFont>
					</view>
					<view class="follow-btn">
						<iconfont :icon="icon.plus" style="font-size: 20rpx;"></iconfont>
						<text style="margin-left: 20rpx;">关注</text>
					</view>
				</view>
				<view class="article-title move-down">标题</view>
			</view>
			<view class="right">···</view>
		</view>
		<scroll-view scroll-y="true" class="info">
			<view>
				<view class="user-detail"></view>
				<articleDetailTag></articleDetailTag>
				<view class="article-count"></view>
				<view class="relative-article"></view>
				<view class="comment-list"></view>
			</view>
		</scroll-view>
		<articleDetailFooter :diggCount="detail.article_info.digg_count" :commentCount="detail.article_info.comment_count"></articleDetailFooter> -->
	</view>
</template>

<script>
	import { postArticleDetail } from '../../services/contentApi'
	
	import { postRelativeList } from '../../services/recommendApi/recommendAllFeed.js'
	import smallFont from '../../common/components/smallFont.vue'
	import articleDetailTag from './components/tags.vue'
	export default {
		name:'articleDetail',
		components:{
			smallFont,
			articleDetailTag
		},
		data(){
			return {
				icon:{
					leftArrow:'\ue65b',
					plus:'\ue626',
					dianzan:'\ue604',
					msg:'\ue61e',
				},
				webviewStyles: {
						 progress: {
								color: '#FF3333'
						}
				},
				detail:{},
				relativeList:[],
				showComment:false,
				routeParams:{}
			}
		},
		onLoad(option) {
			const id = option.id
			
			if(!id){
				uni.switchTab({
					url:'/pages/index/index'
				})
				return
			}
			const userId = option.userId
			const tagId = option.tagId.split(',')
			
			console.log(id)
			console.log(userId)
			console.log(tagId)
			this.routeParams = {
				id,
				userId,
				tagId
			}
			this.loadArticleDetail(id)
			this.loadRelativeList(id,userId,tagId)
		},
		methods:{
			goBack(){
				uni.navigateBack()
			},
			loadArticleDetail(articleId){
				// 获取文章详情
				postArticleDetail({"article_id":articleId,"client_type":2606})
				.then(res=>this.detail = res.data)
			},
			loadRelativeList(articleId,userId,tagId){
				// 获取评论列表
				postRelativeList({"id_type":2,"client_type":2606,"cursor":"0","limit":20,"user_id":userId,"item_id":articleId,"tag_ids":tagId})
				.then(res=>this.relativeList = res.data)
			},
			// 点击原生导航栏
			onNavigationBarButtonTap(e){
				if(e.index == 0){
					// 评论
					this.showComment = true
					uni.navigateTo({
						url:`/pages/comment/index?id=${this.routeParams.id}&digg_count=${this.detail.article_info.digg_count}&comment_count=${this.detail.article_info.comment_count}`
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	
	.detail-layout{
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	
	.header{
		overflow: hidden;
		display: flex;
		align-items: center;
		height: 80rpx;
		padding: 20rpx;
		border-bottom: 2px solid $custom-font-color-bg;
		.content{
			flex: 1;
			margin-left: 40rpx;
			margin-right: 40rpx;
			.user-des{
				display: flex;
				align-items: center;
				height: 80rpx;
				.user-avatar{
					width: 50rpx;
					height: 50rpx;
					vertical-align: middle;
				}
				.user-name{
					margin-left: 10rpx;
					vertical-align: middle;
					@include title(26rpx)
				}
				.follow-btn{
					display: inline-block;
					padding: 10rpx 20rpx;
					border: 1px solid #37C700;
					color: #37C700;
					font-size: 20rpx;
					border-radius: 6rpx;
				}
			}
			.article-title{
				height: 80rpx;
				line-height: 80rpx;
				@include title
				
			}
		}
	}
	
	.info{
		flex:1;
		flex-direction: column;
	}
	
	.move-top{
		transform: translateY(-50%);
	}
	
	.move-down{
		transform: translateY(50%);
	}
</style>
