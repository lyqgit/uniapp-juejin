<template>
	<view>
		
	</view>
</template>

<script>
	
	import { postBoilingDetail } from '@/services/contentApi/index.js'
	import { postCommentList } from '@/services/interactApi/index.js'
	import { postTopicList } from '@/services/recommendApi/shortMsg.js'
	
	export default {
		name:'boilingPointDetail',
		onLoad(option) {
			const msgId = option.msgId
			const topicId = option.topicId
			if(!!msgId){
				uni.navigateBack()
				return
			}
			this.loadPostBoilingDetail(msgId)
			this.loadPostCommentList(msgId)
			this.loadPostTopicList(msgId,topicId)
		},
		data(){
			return {
				boilingDetail:{},
				commentList:[],
				shortMsgList:[]
			}
		},
		methods:{
			loadPostBoilingDetail(msgId){ // 沸点详情
				postBoilingDetail({"msg_id":msgId})
				.then(res=>this.boilingDetail = res.data)
			},
			loadPostCommentList(itemId){ // 评论列表
				postCommentList({"cursor":"0","limit":20,"client_type":2606,"item_id":itemId,"item_type":4})
				.then(res=>this.shortMsgList = res.data)
			},
			loadPostTopicList(itemId,topicId){ // banner评论
				postTopicList({"id_type":4,"topic_id":topicId,"sort_type":200,"item_id":itemId,"cursor":"0","limit":3})
				.then(res=>this.shortMsgList = res.data)
			}
		}
	}
</script>

<style>
</style>
