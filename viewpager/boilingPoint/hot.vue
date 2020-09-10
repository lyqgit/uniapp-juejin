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
	import { postHotList } from '../../services/recommendApi/shortMsg'
	import commentList from './components/commentList'
	export default {
		name:'boilingPointHot',
		components:{
			commentList
		},
		created() {
			this.fresh()
		},
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
				postHotList({"cursor":this.page,"limit":20,"id_type":4,"sort_type":200}).then(res=>{this.list = list.concat(res.data);this.page=res.cursor;console.log('数据',res.data)})
			},
			// 刷新
			fresh(){
				if(this.loadStatus === false){
					this.loadStatus = true
					
					console.log('下拉刷新')
					postHotList({"cursor":"0","limit":20,"id_type":4,"sort_type":200})
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
