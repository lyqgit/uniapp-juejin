<template>
	<view class="navigation-layout">
		<iconfont :icon="arrow" style="color: #007FFF;font-size: 32rpx;" @click.native="goBack"></iconfont>
		<view class="switch-layout">
			<view class="move-layout" :class="[moveUp?'move-top':'']">
				<view class="switch-item" style="line-height: 90rpx;">
					<text class="switch-title">沸点详情</text>
				</view>
				<view class="switch-item">
					<view style="flex:1;">
						<image class="user-avatar" :src="avatarLarge" mode="aspectFill"></image>
						<text class="user-name">{{username}}</text>
					</view>
					<view class="follow-btn">
						<iconfont :icon="plus" style="font-size: 20rpx;"></iconfont>
						<text style="margin-left: 20rpx;">关注</text>
					</view>
				</view>
			</view>
		</view>
		<text style="font-weight: bold;">···</text>
	</view>
</template>

<script>
	import back from '@/common/minix/back'
	
	export default {
		name:'boilingPointDetailNavigation',
		mixins:[back],
		props:{
			avatarLarge:{
				type:String,
				default:''
			},
			username:{
				type:String,
				default:''
			},
			moveUp:{
				type:Boolean,
				default:false
			}
		},
		data:function(){
			return {
				arrow:'\ue65b',
				plus:'\ue626',
			}
		}
	}
</script>

<style lang="scss" scoped>
	.navigation-layout{
		padding:0 20rpx;
		height: 90rpx;
		display: flex;
		align-items: center;
		border-bottom: 1px solid #000000;
		.switch-layout{
			flex: 1;
			height: 90rpx;
			overflow: hidden;
			margin-left: 40rpx;
			margin-right: 20rpx;
			.move-layout{
				height: 100%;
				transition: all .5s ease;
				.switch-item{
					width: 100%;
					height: 90rpx;
				}
				.switch-item:nth-of-type(2){
					display: flex;
					align-items: center;
				}
			}
			
		}
	}
	
	.move-top{
		transform: translateY(-100%);
	}
	
	.switch-title{
		@include title
	}
	
	.user-avatar{
		width: 50rpx;
		height: 50rpx;
		vertical-align: middle;
		border-radius: 50rpx;
	}
	.user-name{
		margin-left: 10rpx;
		vertical-align: middle;
		@include title(26rpx)
	}
	.follow-btn{
		display: inline-block;
		padding: 10rpx 20rpx;
		border: 1px solid #37C700;
		color: #37C700;
		font-size: 20rpx;
		border-radius: 6rpx;
	}
</style>
