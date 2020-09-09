<template>
	<view>
		<view style="padding-top: 20rpx;" v-for="item in list" :key="item.booklet_id">
			<view class="booklet-list">
				<image lazy-load :src="item.base_info.cover_img" mode="aspectFill" class="left-img"></image>
				<view class="content-layout">
					<view class="title">{{item.base_info.title}}</view>
					<view class="user-info">{{item.user_info.user_name}}<text style="background-color: #00ffff;color: #FFFFFF;border-radius: 10rpx;">lv{{item.user_info.level}}</text></view>
					<view class="des">
						<text class="pre" v-if="!!item.base_info.is_finished">预告·</text>
						<text class="buy">{{item.base_info.section_count}}小节·{{item.base_info.buy_count}}人已购买</text>
					</view>
				</view>
				<view class="price-layout">
					<view class="price">
						￥{{(item.base_info.price/1000).toFixed(1)}}
					</view>	
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		name:'bookletAll',
		props:['list']
	}
</script>

<style lang="scss" scoped>
	.booklet-list{
		background-color: $uni-bg-color;
		padding: 20rpx;
		display: flex;
		.left-img{
			width: 150rpx;
			height: 200rpx;
			border-radius: 10rpx;
		}
		
		.content-layout{
			flex: 1;
			margin-left: 20rpx;
			.title{
				color: $custom-font-color-title;
				font-weight: bold;
				font-size: 32rpx;
				line-height: 32rpx;
			}
			.user-info{
				font-size: 20rpx;
				margin-top: 10rpx;
			}
			.des{
				font-size: 20rpx;
				margin-top: 10rpx;
				.pre{
					color: #FF7C0B;
				}
				.buy{
					color: #8A9AA9;
				}
			}
		}
		
		.price-layout{
			display: flex;
			align-items: center;
			.price{
				
				color: #007FFF;
				font-size: 20rpx;
				padding: 10rpx 20rpx;
				border-radius: 30rpx;
				background-color: #F1F7FF;
			}
		}
		
	}
</style>
