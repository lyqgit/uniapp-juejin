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
				<input type="text" name="email" placeholder-class="input-placeholder" v-model="email" placeholder="邮箱/手机号">
			</view>
			<view class="bottom-border"></view>
			<view class="form-input password-input">
				<input :type="inputType" style="flex:1;border: none;font-size: 26rpx;outline: none;" name="password" v-model="password" placeholder-class="input-placeholder" placeholder="密码">
				<iconfont :icon="look" :style="{color: lookColor}" @click.native="switchInputType"></iconfont>
			</view>
			<view class="bottom-border" style="margin-bottom: 20rpx;"></view>
			<view :class="[loginBg?'login-btn login-btn-active':'login-btn login-btn-unactive']" @click="login">登录</view>
		</template>
		<template v-if="type==1">
			<view class="form-input">
				<input type="text" name="mobile" placeholder-class="input-placeholder" v-model="mobile" placeholder="手机号">
			</view>
			<view class="bottom-border"></view>
			<view class="form-input password-input">
				<input :type="inputType" style="flex:1;border: none;font-size: 26rpx;outline: none;" name="yzm" v-model="yzm" placeholder-class="input-placeholder" placeholder="输入验证码">
				<text :style="{color: lookColor,fontSize:'26rpx'}" @click="getYZM">获取验证码</text>
			</view>
			<view class="bottom-border" style="margin-bottom: 20rpx;"></view>
			<view :class="[loginBg?'login-btn login-btn-active':'login-btn login-btn-unactive']" @click="login">登录</view>
		</template>
		<view class="other-login" @click="switchLogin">其他登录方式</view>
	</view>
</template>

<script>
	
	import { createSecretKey } from '@/common/utils/passport'
	import cookieJs from '@/common/utils/js.cookie-2.2.1.min'
	import { postPassportUAP,postPassportCap,postCap } from '@/services/passportApi'
	import router from '@/common/minix/router'
	
	export default {
		name:'login',
		mixins:[router],
		data(){
			return {
				arrow:'\ue65b',
				look:'\ue60b',
				lookColor:'#DFDFDF',
				inputType:'password',
				email:'',
				password:'',
				mobile:'',
				yzm:'',
				type:1,
			}
		},
		computed:{
			loginBg(){
				if((this.email && this.password && this.type == 0) || (this.mobile && this.yzm && this.type == 1)){
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
			},
			login(){	//登录
				switch(this.type){
					case 0://用户名密码登录
						postPassportUAP({
							account_sdk_source:'app',
							mobile:createSecretKey(this.email),
							password:createSecretKey(this.password),
							account_sdk_source:'app',
							auto_read:0,
							mix_mode:1,
							multi_login:1,
							type:3731,
							unbind_exist:35,
							language:'zh',
							os_api:'22',
							build_serial:'88f3dc715d9187fc',
							carrier:'CHINA MOBILE',
							iid:1512536904579373,
						})
						.then(res=>{
							uni.showToast({
								title:res.message
							})
							
							uni.setStorageSync('userInfo',JSON.stringify(res.data));
							uni.setStorageSync('token',res.data.session_key);
							this.$store.commit('user/setUserInfo',res.data)
							this.$store.commit('user/setUserStatus',true)
							cookieJs.set('passport_csrf_token',res.data.session_key)
							cookieJs.set('sessionid',res.data.session_key)
							cookieJs.set('sessionid_ss',res.data.session_key)
							this.switchToTab('/pages/my/index')
						})
					break;
					case 1:
						postPassportCap({account_sdk_source:'app',mobile:createSecretKey(this.mobile),code:createSecretKey(this.yzm)})
						.then(res=>uni.showToast({
							title:res.data.description
						}))
					break;
				}
			},
			getYZM(){	// 获取验证码
				postCap({
					account_sdk_source:'app',
					mobile:createSecretKey(this.mobile),
					auto_read:0,
					mix_mode:1,
					multi_login:1,
					type:3731,
					unbind_exist:35,
					language:'zh',
					os_api:'22',
					build_serial:'88f3dc715d9187fc',
					carrier:'CHINA MOBILE',
					iid:1512536904579373,
				})
				.then(res=>uni.showToast({
					title:res.data.description
				}))
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
		color: #FFFFFF;
	}
	
	.other-login{
		text-align: center;
		margin-top: 20rpx;
		color: $custom-font-color-blue;
		font-weight: bold;
		font-size: 26rpx;
	}
</style>
