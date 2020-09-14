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
			<articleListNoAd :list="articleList"></articleListNoAd>
		</view>
	</scroll-view>
</template>

<script>
	import scrollHeader from '../../common/minix/scrollHeader'
	import headerTag from './components/headerTag.vue'
	import articleListNoAd from '../../common/components/articleListNoAd.vue'
	import { postCateTagList as postList } from '../../services/recommendApi/recommendAllFeed'
	export default{
		name:'homeCategory',
		components:{
			headerTag,
			articleListNoAd,
		},
		props:['hotTags','cateId'],
		mixins:[scrollHeader],
		data(){
			return {
				currentTagId:0,
				articleList:[],
				articlePage:'0',
				loadStatus:false
			}
		},
		created() {
			this.fresh()
		},
		methods:{
			selectTag(tagId){
				console.log(tagId)
				this.currentTagId = tagId
			},
			// scroll-view到底部加载更多
			onreachBottom() {
				console.log('加载更多')
				const list = this.articleList
				// 文章列表
				const params = {"id_type":2,"client_type":2606,"cursor":this.articlePage,"limit":20,"sort_type":200}
				params.cate_id = this.cateId
				if(!!this.currentTagId)params.tag_id = this.currentTagId
				postList(params).then(res=>{this.articleList = list.concat(res.data);this.articlePage=res.cursor;console.log('数据',res.data)})
			},
			// 刷新
			fresh(){
				if(this.loadStatus === false){
					this.loadStatus = true
					const params = {"id_type":2,"client_type":2606,"cursor":'0',"limit":20,"sort_type":200}
					params.cate_id = this.cateId
					if(!!this.currentTagId)params.tag_id = this.currentTagId
					console.log('下拉刷新')
					postList(params).
					then(res=>{this.articleList = res.data;this.articlePage=res.cursor}).
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
