<template>
	<view class="hotRecommend-layout">
		<view class="hot-title">
			<iconfont :icon="hotIcon" style="color: #FF4343;"></iconfont>
			<text style="flex: 1;margin-left: 20rpx;">热门推荐</text>
			<view>
				<text>文章榜</text>
				<iconfont :icon="rightArrow" style="vertical-align: middle;" ></iconfont>
			</view>	
		</view>
		<division height="1px" style="background-color:#EFF2F5 ;"></division>
		<view v-for="item in list" :key="item.item_info.article_info.article_id">
			<view class="list-layout">
				<view style="flex: 1;overflow: hidden; text-overflow: ellipsis;white-space: nowrap; ">
					<view class="list-title">{{item.item_info.article_info.title}}</view>
					<view class="list-des">{{item.item_info.article_info.comment_count}}评论·{{item.item_info.article_info.digg_count}}赞·{{item.item_info.author_user_info.user_name}}</view>
				</view>
				<image v-if="!!item.item_info.article_info.cover_image" :src="item.item_info.article_info.cover_image" mode="aspectFill"></image>
			</view>
			<division height="1px" style="background-color:#EFF2F5 ;"></division>
		</view>
	</view>
</template>

<script>
	export default{
		name:'hotRecommend',
		props:['list'],
		data(){
			return {
				hotIcon:'\ue680',
				rightArrow:'\ue655'
			}
		}
	}
</script>

<style lang="scss" scoped>
	.hotRecommend-layout{
		background-color: $uni-bg-color;
	}
	.hot-title{
		display: flex;
		align-items: center;
		font-size: 24rpx;
		color: $custom-font-color-des;
		padding: 20rpx;
	}
	.list-layout{
		display: flex;
		align-items: center;
		padding: 30rpx 20rpx;
		>image{
			width: 100rpx;
			height: 100rpx;
			border-radius: 6rpx;
			margin-left: 20rpx;
		}
	}
	.list-title{
		font-size: 30rpx;
		font-weight: bold;
	}
	.list-des{
		font-size: 16rpx;
		color: $custom-font-color-des;
		margin-top: 10rpx;
	}
</style>
