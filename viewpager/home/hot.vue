<template>
	<scroll-view 
		scroll-y 
		class="view-pager-con body-layout-grey" 
		@refresherrefresh="fresh" 
		refresher-enabled
		:refresher-triggered="loadStatus"
		@scrolltolower="onreachBottom"
		@scroll="scrollAnimate"
	>
		<view>
			<headerTag :tags="hotTags" :currentTag="currentTagId" @select="selectTag"></headerTag>
			<articleList :list="articleList"></articleList>
		</view>
	</scroll-view>
</template>

<script>
	import scrollHeader from '../../common/minix/scrollHeader'
	import headerTag from './components/headerTag.vue'
	import articleList from '../../common/components/articleList.vue'
	import { postList } from '../../services/recommendApi/recommendAllFeed'
	export default{
		name:'recommend',
		components:{
			headerTag,
			articleList,
		},
		mixins:[scrollHeader],
		data(){
			return {
				currentTagId:0,
				hotTags:[
					{
						id:3,
						name:'3日之内'
					},
					{
						id:7,
						name:'7日之内'
					},
					{
						id:30,
						name:'30日之内'
					},
					{
						id:0,
						name:'全部'
					}
				],
				articleList:[],
				articlePage:0,
				loadStatus:false
			}
		},
		created() {
			this.fresh()
		},
		methods:{
			selectTag(tagId){
				this.currentTagId = tagId
			},
			// scroll-view到底部加载更多
			onreachBottom() {
				console.log('加载更多')
				const list = this.articleList
				// 文章列表
				postList({"id_type":2,"client_type":2606,"cursor":this.articlePage,"limit":20,"sort_type":this.currentTagId})
				.then(res=>{this.articleList = list.concat(res.data);this.articlePage=res.cursor;console.log('数据',res.data)})
			},
			// 刷新
			fresh(){
				if(this.loadStatus === false){
					this.loadStatus = true
					
					console.log('下拉刷新')
					postList({"id_type":2,"client_type":2606,"cursor":"0","limit":20,"sort_type":this.currentTagId}).
					then(res=>{this.articleList = res.data;this.articlePage=res.cursor;}).
					then(res=>{
						setTimeout(()=>{
							this.loadStatus = false
						},1000)
						
					})
				}
			},
		},
		watch:{
			currentTagId(){
				this.fresh()
			}
		}
	}
</script>

<style scoped>
	.view-pager-con{
		height: 100%;
		width: 100%;
	}
</style>
