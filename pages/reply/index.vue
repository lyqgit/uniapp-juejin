<template>
	<view>
		<replyListItem
		v-if="commentDetail.user_info"
		:showDZ="false" 
		:avatar_large="commentDetail.user_info.avatar_large"
		:user_name="commentDetail.user_info.user_name"
		:level="commentDetail.user_info.level"
		:job_title="commentDetail.user_info.job_title"
		:company="commentDetail.user_info.company"
		:comment_content="commentDetail.comment_info.comment_content"
		:ctime="commentDetail.comment_info.ctime"
		
		></replyListItem>
		<division style="background-color: #F5F6F6;"></division>
		<view class="reply-header" v-if="commentDetail.user_info">
			<text>{{commentDetail.comment_info.reply_count}}回复</text>
			<text>|</text>
			<text>{{commentDetail.comment_info.digg_count}}赞</text>
		</view>
		<replyListItem
		v-for="item in list"
		:key="item.reply_id"
		:avatar_large="item.user_info.avatar_large"
		:user_name="item.user_info.user_name"
		:level="item.user_info.level"
		:job_title="item.user_info.job_title"
		:company="item.user_info.company"
		:comment_content="item.reply_info.reply_content"
		:ctime="item.reply_info.ctime"
		:digg_count="item.reply_info.digg_count"
		:reply_count="item.reply_info.reply_count"
		></replyListItem>
	</view>
</template>

<script>
	
	import replyListItem from '@/common/components/replyListItem.vue'
	import { postCommentDetail,postReplyList } from '@/services/interactApi'
	
	export default {
		name:'replyList',
		components:{
			replyListItem
		},
		onLoad(option) {
			const commentId = option.commentId
			const commentItemId = option.commentItemId
			if(!commentId){
				uni.switchTab({
					url:'/pages/comment/index'
				})
				return
			}
			this.loadPostCommentDetail(commentId)
			this.loadPostReplyList(commentId,commentItemId)
			console.log('评论id',commentId)
		},
		data(){
			return {
				list:[],
				page:0,
				commentDetail:{}
			}
		},
		methods:{
			// 评论详情
			loadPostCommentDetail(commentId){
				postCommentDetail({"comment_id":commentId,"client_type":2606})
				.then(res=>this.commentDetail=res.data)
			},
			// 加载回复列表
			loadPostReplyList(commentId,commentItemId){
				postReplyList({"cursor":"0","limit":20,"client_type":2606,"comment_id":commentId,"item_id":commentItemId,"item_type":2})
				.then(res=>this.list=res.data)
			}
		}
	}
</script>

<style lang="scss" scoped>
	
	.reply-header{
		padding: 20rpx;
		line-height: 1.5;
		>text{
			vertical-align: middle;
			letter-spacing: 6rpx;
		}
		>text:nth-last-of-type(2){
			vertical-align: middle;
			color: $custom-font-color-des;
			vertical-align: top;
			margin-left: 12rpx;
			margin-right: 12rpx;
		}
	}
</style>
