<template>
	<swiper next-margin="50rpx" class="banner-layout" :duration="1000">
		<swiper-item v-for="item in list" :key="item.msg_id">
			<view class="banner-item">
				<view class="left">
					<view class="title-layout">
						<view class="title">
							<smallFont v-if="item.msg_Info.is_advert_recommend" color="red" text="热" style="margin-right: 10rpx;"></smallFont>
							<smallFont v-if="!item.msg_Info.is_advert_recommend" color="orange" text="荐" style="margin-right: 10rpx;"></smallFont>
							{{item.msg_Info.content}}
						</view>
					</view>
					<view class="des">{{item.author_user_info.user_name}} · 点赞 {{item.msg_Info.digg_count}} · 评论 {{item.msg_Info.comment_count}}</view>
				</view>
				<view class="right" v-if="item.msg_Info.pic_list.length>0">
					<image lazy-load :src="item.msg_Info.pic_list[0]" mode="aspectFill"></image>
				</view>
			</view>
		</swiper-item>
	</swiper>
</template>

<script>
	import smallFont from '../../../common/components/smallFont'
	import { postHotList } from '../../../services/recommendApi/shortMsg'
	export default{
		name:'boilingPointRecommendBanner',
		components:{
			smallFont
		},
		data(){
			return {
				list:[]
			}
		},
		created() {
			postHotList({"cursor":"0","limit":20,"sort_type":400})
			.then(res=>{
				console.log(res.data[0].msg_Info.pic_list)
				return res
			})
			.then(res=>this.list = res.data)
		}
	}
</script>

<style lang="scss" scoped>
	
	.banner-layout{
		height: 190rpx;
	}
	
	.banner-item{
		display: flex;
		padding: 30rpx 20rpx;
		background-color: $uni-bg-color;
		margin-left: 20rpx;
		height: 190rpx;
		box-sizing: border-box;
		.left{
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}
		.right{
			margin-left: 20rpx;
			>image{
				width: 120rpx;
				height: 120rpx;
				border-radius: 10rpx;
			}
		}
	}
	
	.title-layout{
		.title{
			vertical-align: middle;
			font-size: 24rpx;
			color: $custom-font-color-title;
			font-weight: bold;
			margin-left: 10rpx;
			overflow: hidden;
			text-overflow:ellipsis;
			display: -webkit-box;
			word-break: break-all;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 2;
		}
	}
	.des{
		font-size: 20rpx;
		color: $custom-font-color-des;
	}
</style>
