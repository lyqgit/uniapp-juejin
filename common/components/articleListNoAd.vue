<template>
	<view>
		<view class="articleList-layout" @click="goToDetail(item.article_info.article_id,item.author_user_info.user_id,item.tags.slice(0,2).map(itemA=>itemA.tag_id))" v-for="(item,index) in list" :key="index" >
			<view class="article-user">
				<image lazy-load :src="item.author_user_info.avatar_large" mode="aspectFit"></image>
				<text class="user-name">{{item.author_user_info.user_name}}</text>
				<text class="user-tag">{{item.tags.slice(0,2).map(item=>item.tag_name).join('/')}}</text>
			</view>
			<view class="article-content-con">
				<view class="article-content">
					<view class="title">{{item.article_info.title}}</view>
					<view class="content">{{item.article_info.brief_content}}</view>
				</view>
				<image lazy-load v-if="!!item.article_info.cover_image" :src="item.article_info.cover_image" mode="aspectFill"></image>
			</view>
			<view class="article-count">
				<view class="fabulous">
					<iconfont :icon="fabulous"></iconfont>
					<text class="count">{{item.article_info.digg_count}}</text>
				</view>
				<view class="fabulous">
					<iconfont :icon="msg"></iconfont>
					<text class="count">{{item.article_info.comment_count}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:'articleList',
		props:['list'],
		data(){
			return {
				fabulous:'\ue604',
				msg:'\ue61e',
			}
		},
		methods:{
			goToDetail(id,userId,tagId){
				const tag = tagId.join()
				uni.navigateTo({
					url:`/pages/detail/articleDetail?id=${id}&userId=${userId}&tagId=${tag}`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.articleList-layout{
		width: 100%;
		padding: 20rpx;
		background-color: $uni-bg-color;
		margin-top: 20rpx;
	}
	
	
	.article-user{
		display: flex;
		align-items: center;
		>image{
			width: 50rpx;
			height: 50rpx;
			border-radius: 25rpx;
		}
		.user-name{
			font-size: 20rpx;
			flex: 1;
			margin-left: 15rpx;
			color: $custom-font-color-username;
		}
		.user-tag{
			font-size: 20rpx;
			color: $custom-font-color-des;
		}
	}
	
	.article-content-con{
		display: flex;
		align-items: center;
		margin-top: 10rpx;
		.article-content{
			flex: 1;
			color: $custom-font-color-title;
			.title{
				font-size: 30rpx;
				font-weight: bold;
			}
			.content{
				width: 100%;
				font-size: 24rpx;
				/* #ifdef APP-PLUS */
				margin-top: 10rpx;
				/* #endif */
				/* #ifndef APP-PLUS */
				margin-top: 20rpx;
				/* #endif */
				overflow: hidden;
				text-overflow:ellipsis;
				display: -webkit-box;
				word-break: break-all;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 3;
			}
		}
		>image{
			width: 150rpx;
			height: 150rpx;
			border-radius: 6rpx;
			margin-left: 20rpx;
		}
	}
	.article-count{
		display: flex;
		margin-top: 30rpx;
		.fabulous{
			font-size: 20rpx;
			&:nth-of-type(2){
				margin-left: 50rpx;
			}
			>.count{
				margin-left: 10rpx;
				vertical-align: top;
			}
		}
	}
</style>
