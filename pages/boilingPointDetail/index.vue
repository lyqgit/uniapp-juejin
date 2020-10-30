<template>
	<view v-if="boilingDetail.author_user_info" style="display: flex;flex-direction: column;height: 100%;">
		<navigation 
		:moveUp="headerTopTransilate"
		:avatarLarge="boilingDetail.author_user_info.avatar_large"
		:username="boilingDetail.author_user_info.user_name"
		></navigation>
		<scroll-view
			style="flex: 1;overflow: hidden;"
			scroll-y 
			class="view-pager-con body-layout-grey" 
			@refresherrefresh="fresh" 
			refresher-enabled
			:refresher-triggered="loadStatus"
			@scrolltolower="onreachBottom"
			@scroll="scrollHeaderAnimate"
		>
			<view>
				<view class="comment-layout">
					<view class="header">
						<image lazy-load :src="boilingDetail.author_user_info.avatar_large" alt="用户头像" mode="aspectFill"></image>
						<view class="user-info">
							<view class="user-name">{{boilingDetail.author_user_info.user_name}}</view>
							<view class="user-des">{{boilingDetail.author_user_info.job_title}} @ {{boilingDetail.author_user_info.company}}</view>
						</view>
					</view>
					<view style="margin-top: 30rpx;">
						<view class="content">{{boilingDetail.msg_Info.content}}</view>
						<view class="content-img" v-if="boilingDetail.msg_Info.pic_list.length>0">
							<image @click.stop="showMaskImg(boilingDetail.msg_Info.pic_list,index)" style="margin-right: 20rpx;" lazy-load :src="itemA" :key="itemA" mode="aspectFill" v-for="(itemA,index) in boilingDetail.msg_Info.pic_list"></image>
						</view>
					</view>
					<view class="tag" v-if="!!boilingDetail.topic.title">{{boilingDetail.topic.title}}</view>
				</view>
				<division></division>
				<view class="recommend-layout">
					<text>相关推荐</text>
					<iconfont :icon="rightArrow"></iconfont>
				</view>
				<division></division>
				<banner :list="shortMsgList"></banner>
				<division></division>
				<commentList :list="commentList" style="background-color: #FFFFFF;"></commentList>
			</view>
		</scroll-view>
		<swiperImg ref="maskImg"></swiperImg>
	</view>
</template>

<script>
	
	import { postBoilingDetail } from '@/services/contentApi/index.js'
	import { postCommentList } from '@/services/interactApi/index.js'
	import { postTopicList } from '@/services/recommendApi/shortMsg.js'
	import navigation from './components/navigation'
	import commentList from '@/common/components/commentList'
	import banner from '@/viewpager/boilingPoint/components/banner.vue'
	import swiperImg from '@/common/components/swiperImg'
	
	export default {
		name:'boilingPointDetail',
		components:{
			navigation,
			commentList,
			banner,
			swiperImg
		},
		onLoad(option) {
			const msgId = option.msgId
			const topicId = option.topicId
			this.msgId = msgId
			this.topicId = topicId
			console.log(msgId)
			console.log(topicId)
			if(!msgId){
				uni.navigateBack()
				return
			}
			this.loadPostBoilingDetail(msgId)
			this.loadPostCommentList(msgId)
			if(topicId){
				this.loadPostTopicList(msgId,topicId)
			}
			
		},
		data(){
			return {
				boilingDetail:{},
				commentList:[],
				shortMsgList:[],
				commentPage:'0',
				msgId:'',
				topicId:'',
				loadStatus:false,
				rightArrow:'\ue655',
				headerTopTransilate:false
			}
		},
		methods:{
			showMaskImg(imgList,index){
				this.$refs.maskImg.showImg(imgList,index)
			},
			scrollHeaderAnimate(event){
				if(event.detail.deltaY < 0){
					this.headerTopTransilate = true
				}else if(event.detail.scrollTop < 10){
					this.headerTopTransilate = false
				}
			},
			loadPostBoilingDetail(msgId){ // 沸点详情
				postBoilingDetail({"msg_id":msgId})
				.then(res=>this.boilingDetail = res.data)
			},
			loadPostCommentList(itemId){ // 评论列表
				postCommentList({"cursor":"0","limit":20,"client_type":2606,"item_id":itemId,"item_type":4})
				.then(res=>{this.commentList = res.data;this.commentPage = res.cursor})
			},
			loadPostTopicList(itemId,topicId){ // banner评论
				postTopicList({"id_type":4,"topic_id":topicId,"sort_type":200,"item_id":itemId,"cursor":"0","limit":3})
				.then(res=>this.shortMsgList = res.data)
			},
			// scroll-view到底部加载更多
			onreachBottom() {
				console.log('加载更多')
				console.log('页数',this.commentPage)
				const list = this.commentList
				// 评论列表
				postCommentList({"cursor":this.commentPage,"limit":20,"client_type":2606,"item_id":this.msgId,"item_type":4})
				.then(res=>{
					this.commentList = list.concat(res.data);
					if(res.cursor != '0'){
						this.commentPage=res.cursor;
					}
					console.log('数据',res.data)
				})
			},
			// 刷新
			fresh(){
				if(this.loadStatus === false){
					this.loadStatus = true
					
					console.log('下拉刷新')
					
					Promise.all([
						postBoilingDetail({"msg_id":this.msgId}),
						postCommentList({"cursor":"0","limit":20,"client_type":2606,"item_id":this.msgId,"item_type":4}),
						postTopicList({"cursor":"0","limit":20,"id_type":4,"sort_type":500,"topic_id":this.topicId})
					]).then(res=>{
						
						this.boilingDetail = res[0].data
						this.commentList = res[1].data;
						this.shortMsgList = res[2].data;
						this.commentPage = res[1].cursor
						if(res[2].err_no == 0){
							this.shortMsgList = res[2].data
						}
						setTimeout(()=>{
							this.loadStatus = false
						},1000)
					})
				}
			},
		}
	}
</script>

<style lang="scss" scoped>
	.comment-layout{
		background-color: $uni-bg-color;
		padding: 20rpx;
	}
	.header{
		display: flex;
		align-items: center;
		>image{
			width: 80rpx;
			height: 80rpx;
			border-radius: 40rpx;
		}
	}
	
	.recommend-layout{
		display: flex;
		padding: 20rpx;
		justify-content: space-between;
		align-items: center;
		background-color: #FFFFFF;
	}
	
	.user-info{
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin-left: 20rpx;
		.user-name{
			@include title(28rpx);
		}
		.user-des{
			@include description;
		}
	}
	.content{
		@include title(30rpx);
	}
	.content-img{
		margin-top: 20rpx;
		>image{
			width: 200rpx;
			height: 200rpx;
		}
	}
	.tag{
		margin-top: 20rpx;
		@include contentTag(20rpx);
	}
</style>
