<template>
	<view class="header-layout">
		<iconfont :icon="arrow" style="color: #007FFF;font-size: 32rpx;" @click.native="goBack"></iconfont>
		<text class="title">文章榜单</text>
		<text class="rule">排名规则</text>
	</view>
</template>

<script>
	
	import back from '@/common/minix/back'
	
	export default {
		name:'pageListOfArticlesHeader',
		mixins:[back],
		data(){
			return {
				arrow:'\ue65b',
			}
		},
		methods:{
			
		}
	}
</script>

<style lang="scss" scoped>
	.header-layout{
		display: flex;
		align-items: center;
		width: 100%;
		height: 100rpx;
		padding: 0 20rpx;
		position: fixed;
		top: 0;
		left: 0;
		.title{
			flex: 1;
			font-size: 30rpx;
			margin-left: 40rpx;
		}
		.rule{
			color: $custom-font-color-blue;
			font-size: 22rpx;
		}
	}
</style>
