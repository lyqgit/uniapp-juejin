<template>
	<view class="msgItem-layout">
		<view class="container-layout">
			<image lazy-load class="lf" :src="userAvatar" mode="aspectFit"></image>
			<view class="rf">
				<view class="title-layout" v-if="msgType==4&&idType==1">
					<!-- 系统消息 -->
					您在掘金社区已升级至Lv1，查看等级规则：
					<text class="link-font" @click="msgItemRouter(linkHref)">juejin.im</text>
				</view>
				<view class="title-layout" v-if="msgType==4&&idType==2">
					<!-- 系统消息 -->
					您的文章
					<text class="link-font" @click="msgItemRouter(linkHref)">{{linkStr}}</text>
					已被推荐到首页
				</view>
				<view class="ctime">{{diffTime(ctime)}}</view>
			</view>
		</view>
		<view class="bottom-border"></view>
	</view>
</template>

<script>
	import moment from '@/common/utils/moment.js'
	import pageRouter from '@/common/minix/router'
	
	export default{
		name:'msgItem',
		mixins:[pageRouter],
		props:{
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
			msgType:{
				type:Number,
				default:0
			},
			idType:{
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
			msgItemRouter(linkHref){
				if(this.msgType == 4&&this.idType == 1){
					// 单独载入网页的地址
					this.goToPage()
				}
				if(this.msgType == 4&&this.idType == 2){
					// 文章详情
					this.goToPage('/pages/detail/articleDetail?id='+this.itemId)
				}
				
			},
			diffTime(ctime){
				const currentTime = moment()
				const commentTime = moment.unix(ctime)
				const hour = currentTime.diff(commentTime,'hour')
				const day = currentTime.diff(commentTime,'day')
				const week = currentTime.diff(commentTime,'week')
				const month = currentTime.diff(commentTime,'month')
				const year = currentTime.diff(commentTime,'year')
				if(year > 0){
					return year+'年前'
				}
				if(month > 0){
					return month+'月前'
				}
				if(week > 0){
					return week+'周前'
				}
				if(day > 0){
					return week+'天前'
				}
				if(day > 0){
					return week+'小时前'
				}
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
		align-items: center;
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
	
	
	.bottom-border{
		width: 100%;
		height: 1px;
		background-color: #EFF2F5;
	}
</style>
