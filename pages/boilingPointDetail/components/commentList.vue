<template>
	<view>
		<view class="comment-layout">
			<view class="header">
				<image lazy-load :src=".avatar_large" alt="用户头像" mode="aspectFill"></image>
				<view class="user-info">
					<view class="user-name">{{user_name}}</view>
					<view class="user-des">{{job_title}} @ {{company}}</view>
				</view>
			</view>
			<view style="margin-top: 30rpx;">
				<view class="content">{{content}}</view>
				<view class="content-img" v-if="pic_list.length>0">
					<image style="margin-right: 20rpx;" lazy-load :src="itemA" :key="itemA" mode="aspectFill" v-for="itemA in pic_list"></image>
				</view>
			</view>
			
			<view class="tag" v-if="!!title">{{title}}</view>
			<view class="footer">
				<view class="btn">
					<iconfont :icon="icon.fabulous"></iconfont>
					<text>点赞</text>
				</view>
				<view class="btn">
					<iconfont :icon="icon.msg"></iconfont>
					<text>{{comment_count}}</text>
				</view>
				<view class="btn">
					<iconfont :icon="icon.share"></iconfont>
					<text>分享</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	
	export default {
		name:'commentList',
		props:['user_name','job_title','company','content','pic_list','title','comment_count'],
		data(){
			return {
				icon:{
					 fabulous:'\ue604',
					 msg:'\ue61e',
					 share:'\ue608'
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.comment-layout{
		background-color: $uni-bg-color;
		padding: 20rpx;
	}
	.header{
		display: flex;
		align-items: center;
		>image{
			width: 80rpx;
			height: 80rpx;
			border-radius: 40rpx;
		}
	}
	
	.user-info{
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin-left: 20rpx;
		.user-name{
			@include title(28rpx);
		}
		.user-des{
			@include description;
		}
	}
	.content{
		@include title(30rpx);
		@include sl
	}
	.content-img{
		margin-top: 20rpx;
		>image{
			width: 200rpx;
			height: 200rpx;
		}
	}
	.tag{
		margin-top: 20rpx;
		@include contentTag(20rpx);
	}
	.footer{
		margin-top: 40rpx;
		display: flex;
		justify-content: space-between;
		.btn{
			font-size: 24rpx;
			color: $custom-font-color-des;
			line-height: 1.5;
			>text{
				margin-left: 15rpx;
				vertical-align: middle;
				font-size: inherit;
			}
		}
	}
</style>
