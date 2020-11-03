<template>
	<view class="collapseHeader-layout">
		<view class="navigation transparent">
			<view class="fl">
				<iconfont style="font-size: 20px;color: #FFFFFF;" :icon="icon.leftArrow"></iconfont>
			</view>
			<view class="fc"></view>
			<view class="fr">
				<iconfont style="font-size: 20px;color: #FFFFFF;" :icon="icon.statistics"></iconfont>
				<iconfont style="font-size: 20px;color: #FFFFFF;margin-left: 30rpx;" :icon="icon.share"></iconfont>
			</view>
		</view>
		<view class="user-layout">
			<view class="header-bg"></view>
			<view class="avatar-layout">
				<image src="https://sf3-ttcdn-tos.pstatp.com/img/mosaic-legacy/3795/3033762272~120x256.image" mode="aspectFill"></image>
			</view>
			<view class="user-info-layout">
				<view class="edit">
					<view>
						<text class="user-name">123</text>
						<smallFont color="#8CDBF4" style="vertical-align:middle;margin-left: 10rpx;font-size: 16rpx;" :text="'Lv'+1"></smallFont>
					</view>
					<view class="edit-btn">编辑</view>
				</view>
				<view class="statistics">
					<view class="module-statistics-layout">
						<view class="module-val">111</view>
						<view class="module-name">111</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import smallFont from '@/common/components/smallFont.vue'
	export default {
		name:'collapseHeader',
		components:{
			smallFont
		},
		data(){
			return {
				icon:{
					leftArrow:'\ue65b',
					statistics:'\ue61b',
					share:'\ue6a5'
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.navigation{
		position: fixed;
		left: 0;
		top: 0;
		display: flex;
		align-items: center;
		padding-left: 20rpx;
		padding-right: 20rpx;
		width: 100%;
		height: 120rpx;
		.fc{
			flex: 1;
		}
	}
	
	.transparent{
		background-color: transparent;
	}
	
	.user-layout{
		position: relative;
		.header-bg{
			height: 220rpx;
			background-color: #0265C7;
		}
		.avatar-layout{
			width: 100%;
			position: absolute;
			left: 0;
			top: 170rpx;
			>image{
				width: 100rpx;
				height: 100rpx;
				border-radius: 100rpx;
				margin-left: 20rpx;
				border: 2px solid #FFFFFF;
				box-shadow: 0px 6px 16px -6px #000;
			}
		}
		.user-info-layout{
			margin-top: 80rpx;
			.edit{
				padding-left: 20rpx;
				padding-right: 20rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.user-name{
					@include title;
					vertical-align: middle;
				}
				.edit-btn{
					color: #8EB6F8;
					font-size: 20rpx;
					border: 1px solid #8EB6F8;
					padding: 10rpx 30rpx;
					border-radius: 10rpx;
				}
			}
			
			.statistics{
				display: flex;
				margin-top: 60rpx;
				.module-statistics-layout{
					margin-left: 20rpx;
					.module-val{
						@include title;
					};
					.module-name{
						@include description;
					}
				}
				
			}
			
		}	
		
	}
</style>
