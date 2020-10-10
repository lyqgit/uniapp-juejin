<template>
	<view>
		<division style="background-color: #EFF2F5;"></division>
		<view class="tag-layout">
			<image :src="img" mode="aspectFit"></image>
			<view class="tag-font">
				<text>{{username}}</text>
				<text v-if="jobTitle">{{jobTitle}}</text>
				<text v-if="company" style="margin-left: 10rpx;word-break:break-all;margin-right: 10rpx;">{{'@'+company}}</text>
			</view>
			<view class="follow-btn bottom-shadow" @click="follow">+ 关注</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:'searchUserItem',
		props:['img','username','company','jobTitle','userId'],
		methods:{
			// 关注
			follow(){
				console.log(this.userId)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.tag-layout{
		padding: 20rpx;
		background-color: #FFFFFF;
		display: flex;
		align-items: center;
		>image{
			width: 60rpx;
			height: 60rpx;
			border-radius: 30rpx;
		}
		.tag-font{
			flex: 1;
			margin-left: 20rpx;
			display: flex;
			flex-direction: column;
			>text:nth-of-type(1){
				@include title
			}
			>text:nth-of-type(2){
				@include description;
				//#ifdef H5
				margin-top: 10rpx;
				//#endif
			}
		}
		.follow-btn{
			padding: 10rpx 20rpx;
			font-size: 26rpx;
			color: $custom-font-color-blue;
			background-color: #EFF2F5;
			border-radius: 26rpx;
		}
	}
</style>
