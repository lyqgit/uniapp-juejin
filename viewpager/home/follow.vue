<template>
	<scroll-view
		scroll-y
		class="view-pager-con body-layout-grey" 
		@refresherrefresh="fresh" 
		:refresher-enabled="isLogin"
		:refresher-triggered="loadStatus"
		@scrolltolower="onreachBottom"
		@scroll="scrollAnimate"
	>
		<notLogin v-if="!isLogin"></notLogin>
		<view v-if="isLogin">
			<division></division>
			<findMoreAuthor></findMoreAuthor>
			<articleListNoAd :list="articleList"></articleListNoAd>
		</view>
	</scroll-view>
</template>

<script>
	import scrollHeader from '@/common/minix/scrollHeader'
	import notLogin from '@/common/components/notLogin.vue'
	import findMoreAuthor from './components/findMoreAuthor.vue'
	import articleListNoAd from '@/common/components/articleListNoAd.vue'
	import { postFollowList } from '@/services/recommendApi/recommendAllFeed'
	
	export default{
		name:'follow',
		components:{
			notLogin,
			findMoreAuthor,
			articleListNoAd
		},
		mixins:[scrollHeader],
		data(){
			return {
				articleList:[],
				articlePage:'0',
				loadStatus:false
			}
		},
		created() {
			this.fresh()
		},
		methods:{
			// scroll-view到底部加载更多
			onreachBottom() {
				console.log('加载更多')
				const list = this.articleList
				// 文章列表
				const params = {"id_type":2,"client_type":2606,"cursor":this.articlePage,"limit":20}
				postFollowList(params).then(res=>{this.articleList = list.concat(res.data);this.articlePage=res.cursor;console.log('数据',res.data)})
			},
			// 刷新
			fresh(){
				if(this.loadStatus === false){
					this.loadStatus = true
					const params = {"id_type":2,"client_type":2606,"cursor":"0","limit":20}
					console.log('下拉刷新')
					postFollowList(params).
					then(res=>{this.articleList = res.data;this.articlePage=res.cursor}).
					then(res=>{
						setTimeout(()=>{
							this.loadStatus = false
						},1000)
						
					})
				}
			},
		},
		computed:{
			isLogin:function(){
				return this.$store.state.user.isLogin
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
