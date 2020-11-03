<template>
	<view class="msgItem-layout">
		<view class="container-layout">
			<image lazy-load class="lf" :src="userAvatar" mode="aspectFit"></image>
			<view class="rf">
				<view class="title-layout" v-if="msgType==4&&idType==1">
					<!-- 系统消息 -->
					您在掘金社区已升级至Lv1，查看等级规则：
					<text class="link-font" @click="pageToWeb(linkHref)">juejin.im</text>
				</view>
				<view class="title-layout" v-if="msgType==4&&idType==2">
					<!-- 系统消息 -->
					您的文章
					<text class="link-font" style="margin-right: 10rpx;margin-left: 10rpx;"  @click="pageToDetail">{{linkStr}}</text>
					已被推荐到首页
				</view>
				<view class="title-layout" v-if="msgType==4&&idType==4">
					<!-- 系统消息 -->
					您的
					<text class="link-font" style="margin-right: 10rpx;margin-left: 10rpx;" @click="pageToDetail">沸点</text>
					已被推荐
				</view>
				<view class="dz-title-layout" v-if="msgType==1&&idType==2">
					<!-- 点赞消息 -->
					<text class="link-font" style="margin-right: 10rpx;">{{dzUser}}</text>
					赞了你的文章
					<text class="link-font"  style="margin-left: 10rpx;" @click="pageToDetail">{{linkStr}}</text>
				</view>
				<view class="dz-title-layout" v-if="msgType==1&&idType==4">
					<!-- 点赞消息 -->
					<text class="link-font" style="margin-right: 10rpx;">{{dzUser}}</text>
					赞了你的
					<text class="link-font"  style="margin-left: 10rpx;" @click="pageToDetail">沸点</text>
				</view>
				<view class="follow-title-layout" v-if="msgType==2">
					<!-- 关注消息 -->
					<text class="link-font" style="margin-right: 10rpx;">{{dzUser}}</text>
					关注了你
				</view>
				<view class="dz-title-layout" v-if="msgType==3">
					<!-- 评论消息 -->
					<text class="link-font" style="margin-right: 10rpx;">{{dzUser}}</text>
					评论了你的文章
					<text class="link-font" style="margin-left: 10rpx;" @click="pageToDetail">{{linkStr}}</text>
				</view>
				<view class="title" v-if="msgType==3">{{msg}}</view>
				<view class="ctime">{{diffTime(ctime)}}</view>
			</view>
			<image class="link-img" v-if="idType==4&&linkImg" :src="linkImg" mode="aspectFit"></image>
			<view class="link-detail" v-if="(parentIdType==4 || idType==4)&&msg&&!linkImg">{{msg}}</view>
		</view>
		<view class="bottom-border"></view>
	</view>
</template>

<script>
	
	import pageRouter from '@/common/minix/router'
	import diffTime from '@/common/minix/diffTime.js'
	
	export default{
		name:'msgItem',
		mixins:[pageRouter,diffTime],
		props:{
			dzUser:{
				type:String,
				default:''
			},
			avatar:{
				type:String,
				default:''
			},
			msg:{
				type:String,
				default:''
			},
			ctime:{
				type:Number,
				default:0
			},
			linkStr:{
				type:String,
				default:''
			},
			linkHref:{
				type:String,
				default:''
			},
			linkImg:{
				type:String,
				default:''
			},
			msgType:{
				type:Number,
				default:0
			},
			idType:{
				type:Number,
				default:0
			},
			parentIdType:{
				type:Number,
				default:0
			},
			itemId:{
				type:String,
				default:0
			},
		},
		computed:{
			// 判断是否使用用户头像
			userAvatar:function(){
				return this.msgType==4?'../../static/logo.png':this.avatar
			}
		},
		methods:{
			pageToWeb(linkHref){
				// 单独载入网页的地址
				this.goToPage('/pages/webIframe/index?url='+linkHref)
			},
			pageToDetail(){
				// 文章详情
				this.goToPage('/pages/detail/articleDetail?id='+this.itemId)
			}
		}
	}
</script>

<style lang="scss" scoped>
	
	.msgItem-layout{
		width: 100%;
		background-color: $uni-bg-color;
	}
	
	.container-layout{
		padding: 35rpx 20rpx;
		display: flex;
		.lf{
			width: 60rpx;
			height: 60rpx;
			border-radius: 30rpx;
		}
		.rf{
			margin-left: 10rpx;
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.ctime{
				@include description
			}
		}
	}
	
	.title-layout{
		@include title(26rpx)
		.link-font{
			font-size: 26rpx;
			color: $custom-font-color-blue;
			font-weight: bold;
		}
	}
	
	.dz-title-layout{
		@include description(26rpx)
		.link-font{
			font-size: 26rpx;
			color: $custom-font-color-blue;
			font-weight: bold;
		}
	}
	
	.follow-title-layout{
		@include description(26rpx)
		.link-font{
			font-size: 26rpx;
			color: #0A5C90;
			font-weight: bold;
		}
	}
	
	.link-img{
		width: 60rpx;
		height: 60rpx;
	}
	
	.link-detail{
		width: 100rpx;
		height: 100rpx;
		@include description;
		@include sl;
		background-color: #F4F4F4;
		padding: 10rpx;
		box-sizing: border-box;
		margin-left: 20rpx;
	}
	
	.title{
		@include title(26rpx)
		margin-top:10rpx;
		margin-bottom:10rpx;
	}
	
	.bottom-border{
		width: 100%;
		height: 1px;
		background-color: #EFF2F5;
	}
</style>
