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
		<template v-if="type==0">
			<view class="form-input">
				<input type="text" name="username" placeholder-class="input-placeholder" v-model="username" placeholder="邮箱/手机号">
			</view>
			<view class="bottom-border"></view>
			<view class="form-input password-input">
				<input :type="inputType" style="flex:1;border: none;font-size: 26rpx;outline: none;" name="password" v-model="password" placeholder-class="input-placeholder" placeholder="密码">
				<iconfont :icon="look" :style="{color: lookColor}" @click.native="switchInputType"></iconfont>
			</view>
			<view class="bottom-border" style="margin-bottom: 20rpx;"></view>
			<view :class="[loginBg?'login-btn login-btn-active':'login-btn login-btn-unactive']">登录</view>
		</template>
		<template v-if="type==1">
			<view class="form-input">
				<input type="text" name="mobile" placeholder-class="input-placeholder" v-model="mobile" placeholder="手机号">
			</view>
			<view class="bottom-border"></view>
			<view class="form-input password-input">
				<input :type="inputType" style="flex:1;border: none;font-size: 26rpx;outline: none;" name="yzm" v-model="yzm" placeholder-class="input-placeholder" placeholder="输入验证码">
				<text :style="{color: lookColor,fontSize:'26rpx'}" @click.native="switchInputType">获取验证码</text>
			</view>
			<view class="bottom-border" style="margin-bottom: 20rpx;"></view>
			<view :class="[loginBg?'login-btn login-btn-active':'login-btn login-btn-unactive']">登录</view>
		</template>
		<view class="other-login" @click="switchLogin">其他登录方式</view>
	</view>
</template>

<script>
	export default {
		name:'login',
		data(){
			return {
				arrow:'\ue65b',
				look:'\ue60b',
				lookColor:'#DFDFDF',
				inputType:'text',
				username:'',
				password:'',
				mobile:'',
				yzm:'',
				type:1,
			}
		},
		computed:{
			loginBg(){
				if(this.username && this.password){
					return true
				}
				return false
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
			},
			switchLogin(){
				if(this.type == 1){
					this.type = 0
				}else if(this.type == 0){
					this.type = 1
				}
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
		width: 100%;
		padding-top: 20rpx;
		padding-bottom: 20rpx;
		border-radius: 6rpx;
		text-align: center;
		font-size: 30rpx;
		color: #A2A9B2;
	}
	
	.login-btn-unactive{
		background-color: #EEEEEE;
	}
	.login-btn-active{
		background-color: $custom-font-color-blue;
	}
	
	.other-login{
		text-align: center;
		margin-top: 20rpx;
		color: $custom-font-color-blue;
		font-weight: bold;
		font-size: 26rpx;
	}
</style>
