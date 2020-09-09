<template>
	<view class="center-layout">
		<view class="notLogin-layout">
			<image src="../../static/account_circle.png" mode="aspectFit"></image>
			<view class="des">登录后可以查看关注动态</view>
			<view class="btn" @click="goToLogin">
				<text>登录/注册</text>
			</view>
		</view>
	</view>
	
</template>

<script>
	export default {
		name:'notLogin',
		methods:{
			goToLogin(){
				uni.navigateTo({
					url:'/pages/login/index'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.center-layout{
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
	}
	.notLogin-layout{
		width: 100%;
		text-align: center;
		>image{
			width: 150rpx;
			height: 150rpx;
		}
		.des{
			color: #A2A9B2;
			padding-top: 20rpx;
			padding-bottom: 20rpx;
		}
		.btn{
			color: #A2A9B2;
			>text{
				display: inline-block;
				padding: 10rpx 60rpx;
				border: 1px solid #0F86FE;
				color: #0F86FE;
				border-radius: 6rpx;
				font-size: 20rpx;
			}
		}
	}
</style>
