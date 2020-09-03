<template>
	<view class="con">
		<view class="header">我</view>
		<view class="login-info" @click="goToLogin">
			<image src="../../static/account_circle.png" mode="aspectFit"></image>
			<view class="user-info">登录/注册</view>
			<text class="iconfont">&#xe655;</text>
		</view>
		<view class="user-module">
			<myInfo title="消息中心">
				<text class="iconfont" style="color:#0076FF;">&#xe6da;</text>
			</myInfo>
			<myInfo title="我赞过的">
				<text class="iconfont" style="color:#6CBD45;">&#xe672;</text>
			</myInfo>
			<myInfo title="收藏集">
				<text class="iconfont" style="color:#FFC347;">&#xe615;</text>
			</myInfo>
			<myInfo title="已购">
				<text class="iconfont" style="color:#FFC347;">&#xe65c;</text>
			</myInfo>
			<myInfo title="阅读过的文章">
				<text class="iconfont" style="color:#ABB4BF;">&#xe60b;</text>
			</myInfo>
			<myInfo title="标签管理">
				<text class="iconfont" style="color:#ABB4BF;">&#xe68c;</text>
			</myInfo>
		</view>
		<view class="user-module">
			<myInfo title="意见反馈">
				<text class="iconfont" style="color:#ABB4BF;">&#xe689;</text>
			</myInfo>
			<myInfo title="设置">
				<text class="iconfont" style="color:#ABB4BF;">&#xe611;</text>
			</myInfo>
		</view>
	</view>
</template>

<script>
	import myInfo from './components/myInfo'
	export default {
		name:'my',
		components:{
			myInfo
		},
		methods:{
			goToLogin(){
				uni.navigateTo({
				    url: '/pages/login/index'
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.con{
		width: 100%;
		height: 100%;
		background-color: #EFF2F5;
	}
	.header{
		padding-top: 20rpx;
		padding-bottom: 20rpx;
		background-color: $uni-bg-color;
		text-align: center;
		font-size: 26rpx;
		font-weight: bold;
	}
	.login-info{
		margin-top: 15rpx;
		background-color: $uni-bg-color;
		padding: 40rpx;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		>image{
			width: 90rpx;
			height: 90rpx;
		}
		.user-info{
			flex: 1;
			font-weight: bold;
			font-size: 30rpx;
			padding-left: 40rpx;
		}
	}
	.user-module{
		margin-top: 15rpx;
	}
	
</style>
