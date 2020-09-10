<template>
	<scroll-view
		scroll-y 
		class="view-pager-con body-layout-grey" 
		@refresherrefresh="fresh" 
		refresher-enabled
		:refresher-triggered="loadStatus"
		@scrolltolower="onreachBottom"
	>
		<view class="comment-layout">
			<commentList :list="list"></commentList>
		</view>
	</scroll-view>
</template>

<script>
	//接口
	import { postTopicList } from '../../services/recommendApi/shortMsg'
	import commentList from './components/commentList'
	export default {
		name:'boilingPointFishingAtWork',
		components:{
			commentList
		},
		created() {
			this.fresh()
		},
		props:['topicId'],
		data(){
			return {
				list:[],
				page:'0',
				loadStatus:false
			}
		},
		methods:{
			// scroll-view到底部加载更多
			onreachBottom() {
				console.log('加载更多')
				const list = this.list
				// 文章列表
				postTopicList({"cursor":this.page,"limit":20,"id_type":4,"sort_type":500,"topic_id":this.topicId}).then(res=>{this.list = list.concat(res.data);this.page=res.cursor;console.log('数据',res.data)})
			},
			// 刷新
			fresh(){
				if(this.loadStatus === false){
					this.loadStatus = true
					
					console.log('下拉刷新')
					postTopicList({"cursor":"0","limit":20,"id_type":4,"sort_type":500,"topic_id":this.topicId})
					.then(res=>{
						this.list = res.data
						this.page = res.cursor
					})
					.then(res=>{
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
</style>
