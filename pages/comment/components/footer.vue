<template>
	<view class="comment-layout-footer">
		<input class="input" type="text" placeholder="绑定手机号发表评论" placeholder-class="input-holder"/>
		<view class="bottom-btn">
			<iconfont :icon="icon.dianzan"></iconfont>
			<text class="count">{{diggCount}}</text>
		</view>
		<view class="bottom-btn">
			<iconfont :icon="icon.msg"></iconfont>
			<text class="count">{{commentCount}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		name:'articleDetailFooter',
		props:['diggCount','commentCount'],
		data(){
			return {
				icon:{
					dianzan:'\ue604',
					msg:'\ue61e',
				}
			}
		},
	}
</script>

<style lang="scss" scoped>
	.comment-layout-footer{
		display: flex;
		align-items: center;
		padding: 10rpx 20rpx;
		.input{
			flex: 1;
			height: 60rpx;
			background-color: $custom-font-color-bg;
			border-radius: 30rpx;
			padding:10rpx 30rpx;
			box-sizing: border-box;
			font-size: 20rpx;
		}
		.bottom-btn{
			margin-left: 40rpx;
			&:nth-of-type(2){
				margin-right: 20rpx;
			}
			.count{
				margin-left: 5rpx;
				@include description
			}
		}
	}
	
	.input-holder{
		@include description
	}
</style>
