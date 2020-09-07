<template>
	<view class="login-con">
		<view class="header">
			<iconfont :icon="arrow" style="color: #007FFF;font-size: 32rpx;" @click.native="goBack"></iconfont>
			<text class="header-title">登录</text>
		</view>
		<view class="logo-con">
			<image src="../../static/logo.png" mode="aspectFit"></image>
		</view>
		<view class="bottom-border"></view>
		<template>
			<view class="form-input">
				<input type="text" name="username" placeholder-class="input-placeholder" placeholder="邮箱/手机号">
			</view>
			<view class="bottom-border"></view>
			<view class="form-input password-input">
				<input :type="inputType" style="flex:1" name="username" placeholder-class="input-placeholder" placeholder="密码">
				<iconfont :icon="look" :style="{color: lookColor}" @click.native="switchInputType"></iconfont>
			</view>
		</template>
		<view class="bottom-border"></view>
		<view class="login-btn">登录</view>
	</view>
</template>

<script>
	import iconfont from '../../common/components/iconfont'
	export default {
		name:'login',
		components:{
			iconfont
		},
		data(){
			return {
				arrow:'\ue65b',
				look:'\ue60b',
				lookColor:'#DFDFDF',
				inputType:'text'
			}
		},
		methods:{
			switchInputType(){
				if(this.inputType === 'text'){
					this.inputType = 'password'
					this.lookColor = '#007FFF'
				}else{
					this.inputType = 'text'
					this.lookColor = '#DFDFDF'
				}
			},
			goBack(){
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.login-con{
		height: calc(100% - 20rpx);
		padding: 20rpx 20rpx 0 20rpx;
	}
	.header-title{
		font-weight: bold;
		font-size: 30rpx;
		margin-left: 40rpx;
	}
	.logo-con{
		text-align: center;
		padding: 40rpx;
		>image{
			width: 100rpx;
			height: 100rpx;
		}
	}
	.bottom-border{
		width: 100%;
		height: 1px;
		background-color: #EFF2F5;
	}
	.form-input{
		padding-top: 20rpx;
		padding-bottom: 20rpx;
	}
	.password-input{
		display: flex;
		align-items: center;
	}
	.input-placeholder{
		color: #D2D2D2;
		font-size: 26rpx;
	}
	.login-btn{
		background-color: #EEEEEE;
		width: 100%;
		padding-top: 20rpx;
		padding-bottom: 20rpx;
		border-radius: 6rpx;
		text-align: center;
		font-size: 30rpx;
		color: #A2A9B2;
	}
</style>
