<template>
	<view class="comment-con">
		<scroll-view class="comment-list" scroll-y="true" >
			<commentList :list="this.commentList"></commentList>
		</scroll-view>
		
		<articleDetailFooter :diggCount="this.digg_count" :commentCount="this.comment_count"></articleDetailFooter>
	</view>
</template>

<script>
	
	import articleDetailFooter from './components/footer.vue'
	import commentList from '@/common/components/commentList.vue'
	import { postCommentList } from '../../services/interactApi'
	
	export default {
		name:"commentPage",
		components:{
			articleDetailFooter,
			commentList
		},
		data(){
			return {
				commentList:[],
				digg_count:0,
				comment_count:0,
			}
		},
		onLoad(option) {
			const id = option.id
			this.digg_count = option.digg_count
			this.comment_count = option.comment_count
			if(!id){
				uni.switchTab({
					url:'/pages/index/index'
				})
				return
			}
			this.loadCommentList(id)
		},
		methods:{
			loadCommentList(articleId){
				// 获取评论列表
				postCommentList({"cursor":"0","limit":20,"client_type":2606,"item_id":articleId,"item_type":2})
				.then(res=>{this.commentList = res.data;console.log(res.data)})
			}
		}
	}
</script>

<style lang="scss" scoped>
	
	.comment-con{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		.comment-list{
			flex: 1;
			overflow: hidden;
		}
	}
	

</style>
