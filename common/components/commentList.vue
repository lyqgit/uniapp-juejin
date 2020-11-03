<template>
	<view>
		<view :key="item.comment_id" v-for="item in list">
			<view class="comment-layout">
				<view class="header">
					<image :src="item.user_info.avatar_large" mode="aspectFill"></image>
					<view class="user-info">
						<view>
							{{item.user_info.user_name}}
							<smallFont v-if="item.user_info.level != 0" style="margin-left: 10rpx;vertical-align: middle;" color="#8CDBF4" :text="'Lv'+item.user_info.level"></smallFont>
						</view>
						<view>
							<text v-if="item.user_info.job_title">{{item.user_info.job_title}}</text>
							<text v-if="item.user_info.company" style="margin-left: 10rpx;word-break:break-all;margin-right: 10rpx;">{{'@'+item.user_info.company}}</text>
							<text>{{diffHour(item.comment_info.ctime)}}</text>
						</view>
						
					</view>
					<view class="btn-layout">
						<iconfont :icon="icon.dianzan"></iconfont>
						<text style="vertical-align: middle;font-size: 12px;color: #A3AAB3;width: 16px;display: inline-block;">{{item.comment_info.digg_count>0?item.comment_info.digg_count:''}}</text>
					</view>
					<view class="btn-layout">
						<iconfont :icon="icon.msg"></iconfont>
						<text style="vertical-align: middle;font-size: 12px;color: #A3AAB3;width: 16px;display: inline-block;">{{item.comment_info.reply_count>0?item.comment_info.reply_count:''}}</text>
					</view>
				</view>
				<view class="content">{{item.comment_info.comment_content}}</view>
				<view class="reply-con" v-if="item.reply_infos.length > 0">
					<view class="reply-layout" :key="itemReply.reply_id" v-for="itemReply in item.reply_infos">
						<reply 
						:isAuthor="itemReply.is_author" 
						:username="itemReply.user_info.user_name" 
						:level="itemReply.user_info.level"
						></reply>
						<text v-if="itemReply.reply_user.user_name">回复</text>
						<reply
							v-if="itemReply.reply_user.user_name"
							:isAuthor="false"
							:username="itemReply.reply_user.user_name"
							:level="itemReply.reply_user.level"
						></reply>:
						<text style="word-break:break-all;">{{itemReply.reply_info.reply_content}}</text>
					</view>
					<view v-if="item.comment_info.reply_count>2" class="more" @click="goToReplyList(item.comment_id,item.comment_info.item_id)">全部{{item.comment_info.reply_count}}条回复</view>
				</view>
			</view>
			<division height="1px" style="background-color: #F5F6F6;"></division>
		</view>
	</view>
</template>

<script>
	
	import moment from '@/common/utils/moment.js'
	import smallFont from '@/common/components/smallFont.vue'
	import reply from '@/common/components/reply.vue'
	
	export default {
		name:'commentList',
		components:{
			reply,
			smallFont
		},
		props:['list'],
		data(){
			return {
				icon:{
					dianzan:'\ue604',
					msg:'\ue61e',
				},
			}
		},
		methods:{
			diffHour(ctime){
				const currentTime = moment()
				const commentTime = moment.unix(ctime)
				return	currentTime.diff(commentTime,'hour')+'小时前'
			},
			goToReplyList(commentId,commentItemId){
				// 跳转到回复列表
				uni.navigateTo({
					url:`/pages/reply/index?commentId=${commentId}&commentItemId=${commentItemId}`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	
	.comment-layout{
		padding: 20rpx;
		.content{
			margin-left: 70rpx;
			margin-top: 20rpx;
			font-size: 30rpx;
		}
		.reply-con{
			margin-left: 70rpx;
			margin-top: 10rpx;
			background-color: #F5F6F6;
			padding: 10rpx 20rpx;
			border-radius: 6rpx;
			.reply-layout:nth-of-type(n+2){
				margin-top: 10rpx;
			}
		}
	}
	
	.header{
		display: flex;
		align-items: center;
		>image{
			width: 60rpx;
			height: 60rpx;
			border-radius: 30rpx;
		}
		.user-info{
			height: 100%;
			margin-left: 10rpx;
			margin-right: 10rpx;
			flex: 1;
			display: flex;
			flex-direction: column;
			font-size: 20rpx;
			color: $custom-font-color-des;
			>view:nth-of-type(1){
				color: #115E91;
				font-size: 30rpx;
			}
			>view:nth-of-type(2){
				margin-top: 10rpx;
			}
		}
	}
	
	.btn-layout{
		line-height: 1.5;
		&:nth-of-type(2){
			margin-right: 20rpx;
		}
		>text:nth-child(1){
			margin-right: 10rpx;
		}
	}
	
	
	.more{
		color: #115E91;
		font-size: 30rpx;
		margin-top:20rpx;
	}
</style>
