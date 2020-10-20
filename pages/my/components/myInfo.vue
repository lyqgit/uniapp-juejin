<template>
	<view class="myInfo-con">
		<view class="con-layout">
			<slot></slot>
			<text class="title">{{title}}</text>
			<text class="des">{{count}}</text>
		</view>
		<view class="bottom-border"></view>
	</view>
</template>

<script>
	export default{
		name:'myInfo',
		props:['title','count']
	}
</script>

<style lang="scss" scoped>
	.myInfo-con{
		width: 100%;
		background-color: $uni-bg-color;
	}
	.con-layout{
		display: flex;
		align-items: center;
		justify-content: flex-start;
		padding: 35rpx;
		.title{
			flex: 1;
			padding-left: 35rpx;
			font-size: 26rpx;
		}
		.des{
			@include title(20rpx)
		}
	}
	.bottom-border{
		width: 100%;
		height: 1px;
		background-color: #EFF2F5;
	}
</style>
