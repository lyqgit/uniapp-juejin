<template>
	<view class="loginTip-layout">
		<view class="left">
			<view class="title">登录账号</view>
			<view class="des">收藏文章，同步阅读记录，数据永不丢失</view>
		</view>
		<view class="right">登录</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.loginTip-layout{
		display: flex;
		align-items: center;
		padding: 20rpx;
		.left{
			flex: 1;
			.title{
				font-weight: bold;
				font-size: 30rpx;
			}
			.des{
				margin-top: 15rpx;
				font-size: 20rpx;
				color: $custom-font-color-des;
			}
		}
		>.right{
			color: $custom-font-color-blue;
			font-weight: bold;
		}
	}
</style>
