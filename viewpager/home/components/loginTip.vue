<template>
	<view class="loginTip-layout" @click="login">
		<view class="left">
			<view class="title">登录账号</view>
			<view class="des">收藏文章，同步阅读记录，数据永不丢失</view>
		</view>
		<view class="right">登录</view>
	</view>
</template>

<script>
	export default {
		name:'loginTip',
		methods:{
			login(){
				uni.navigateTo({
					url:'/pages/login/index'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.loginTip-layout{
		display: flex;
		align-items: center;
		padding: 20rpx;
		background-color: $uni-bg-color;
		.left{
			flex: 1;
			.title{
				font-weight: bold;
				font-size: 30rpx;
			}
			.des{
				margin-top: 15rpx;
				font-size: 16rpx;
				color: $custom-font-color-des;
			}
		}
		>.right{
			color: $custom-font-color-blue;
			font-weight: bold;
		}
	}
</style>
