<template>
	<view>
		<view class="tag-layout">
			<image :src="img" mode="aspectFill"></image>
			<view class="tag-font">
				<text>{{title}}</text>
				<text>{{userCount+' 人关注 - '+articleCount+' 篇文章'}}</text>
			</view>
			<view class="follow-btn bottom-shadow" @click="follow">+ 关注</view>
		</view>
		<division></division>
	</view>
</template>

<script>
	export default {
		name:'tagFollowItem',
		props:['img','title','postArticleCount','concernUserCount','tagId'],
		methods:{
			// 关注
			follow(){
				console.log(this.tagId)
			}
		},
		computed:{
			articleCount:function(){
				if(this.postArticleCount > 10000){
					return (this.postArticleCount/10000).toFixed(1)+'w'
				}else{
					return this.postArticleCount
				}
			},
			userCount:function(){
				if(this.concernUserCount > 10000){
					return (this.concernUserCount/10000).toFixed(1)+'w'
				}else{
					return this.concernUserCount
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.tag-layout{
		padding: 40rpx;
		display: flex;
		align-items: center;
		>image{
			width: 100rpx;
			height: 100rpx;
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
	
	.bottom-shadow{
		box-shadow: 0px 6px 10px -14px #000;
		z-index: 20;
	}
	
</style>
