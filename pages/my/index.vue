<template>
	<view class="con">
		<view class="header">我</view>
		<view v-if="!isLogin" class="login-info" @click="goToLogin">
			<image src="../../static/account_circle.png" mode="aspectFit"></image>
			<view class="user-info">登录/注册</view>
			<text class="iconfont">&#xe655;</text>
		</view>
		<view v-if="isLogin" class="login-info" @click="goToMyInfo">
			<image :src="myInfo.avatar_large" mode="aspectFit"></image>
			<view class="user-info">{{myInfo.user_name}}</view>
			<text class="iconfont">&#xe655;</text>
		</view>
		<view class="user-module">
			<myInfo title="消息中心" >
				<text class="iconfont" style="color:#0076FF;">&#xe6da;</text>
			</myInfo>
			<myInfo title="我赞过的" :count="myInfo.digg_article_count?myInfo.digg_article_count+'篇':''">
				<text class="iconfont" style="color:#6CBD45;">&#xe672;</text>
			</myInfo>
			<myInfo title="收藏集" :count="myInfo.collect_set_count?myInfo.collect_set_count+'个':''">
				<text class="iconfont" style="color:#FFC347;">&#xe615;</text>
			</myInfo>
			<myInfo title="已购" :count="myInfo.booklet_count?myInfo.booklet_count+'本':''">
				<text class="iconfont" style="color:#FFC347;">&#xe65c;</text>
			</myInfo>
			<myInfo title="阅读过的文章" :count="myInfo.view_article_count?myInfo.view_article_count+'篇':''">
				<text class="iconfont" style="color:#ABB4BF;">&#xe60b;</text>
			</myInfo>
			<myInfo title="标签管理" :count="myInfo.subscribe_tag_count?myInfo.subscribe_tag_count+'个':''">
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
	import { getUserInfo } from '@/services/userApi'
	
	export default {
		name:'my',
		components:{
			myInfo
		},
		data:function(){
			return {
				myInfo:{}
			}
		},
		methods:{
			goToLogin(){
				uni.navigateTo({
				    url: '/pages/login/index'
				});
			},
			goToMyInfo(){
				console.log('跳转到个人信息主页')
			},
			fresh(){
				// 登录后再获取信息
				getUserInfo({
					user_id:this.$store.state.user.userInfo.user_id
				}).then(res=>this.myInfo = res.data)
				
			}
		},
		computed:{
			isLogin:function(){
				if(this.$store.state.user.isLogin){
					this.fresh()
				}
				return this.$store.state.user.isLogin
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
			border-radius: 45rpx;
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
