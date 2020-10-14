<template>
	<view class="modules-layout">
		<view class="module-item" @click="goToPage('/pages/listOfArticles/index')">
			<iconfont :icon="icon.article" style="font-size: 50rpx;color: #7BC736;"></iconfont>
			<view>文章榜</view>
		</view>
		<view class="module-item">
			<iconfont :icon="icon.author" style="font-size: 50rpx;color: #FFDF0E;"></iconfont>
			<view>作者榜</view>
		</view>
		<view class="module-item">
			<iconfont :icon="icon.topic" style="font-size: 50rpx;color: #FF8B24;"></iconfont>
			<view>话题</view>
		</view>
		<view class="module-item">
			<iconfont :icon="icon.offlineAct" style="font-size: 50rpx;color: #FFCC00;"></iconfont>
			<view>线下活动</view>
		</view>
	</view>
</template>

<script>
	
	import minixRouter from '@/common/minix/router'
	
	export default{
		name:'foundModules',
		mixins:[minixRouter],
		data(){
			return {
				icon:{
					article:'\ue643',
					author:'\ue7aa',
					topic:'\ue8c4',
					offlineAct:'\ue6ad',
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.modules-layout{
		display: flex;
		justify-content: space-between;
		padding: 30rpx 60rpx;
		background-color: $uni-bg-color;
		.module-item{
			text-align: center;
			>view{
				margin-top: 20rpx;
				font-size: 20rpx;
			}
		}
	}
</style>
