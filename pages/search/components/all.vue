<template>
	<scroll-view
		scroll-y 
		class="view-pager-con body-layout-grey" 
		@refresherrefresh="fresh" 
		refresher-enabled
		:refresher-triggered="loadStatus"
		@scrolltolower="onreachBottom"
	>
		<view>
			<template v-for="item in list">
				<division style="background-color: #EFF2F5;" v-if="item.result_type==9"></division>
				<searchTagItem 
				v-if="item.result_type==9"
				:img="item.result_model.tag.icon"
				:title="item.result_model.tag.tag_name"
				:postArticleCount="item.result_model.tag.post_article_count"
				:concernUserCount="item.result_model.tag.concern_user_count"
				:tagId="item.result_model.tag_id"
				></searchTagItem>
				<articleListNoAd v-if="item.result_type==2" :list="[item.result_model]"></articleListNoAd>
				<searchUserItem 
				v-if="item.result_type==1" 
				:img="item.result_model.avatar_large"
				:username="item.result_model.user_name"
				:company="item.result_model.company"
				:jobTitle="item.result_model.job_title"
				:userId="item.result_model.userId"
				></searchUserItem>
			</template>
		</view>
	</scroll-view>
</template>

<script>
	
	import { postSearchList } from '@/services/searchApi'
	import searchTagItem from '@/common/components/searchTagItem.vue'
	import searchUserItem from '@/common/components/searchUserItem.vue'
	import articleListNoAd from '@/common/components/articleListNoAd.vue'
	import {throttle} from '@/common/utils/func'
	
	export default {
		name:'allTag',
		components:{
			searchTagItem,
			searchUserItem,
			articleListNoAd,
		},
		props:{
			idType:{
				type:Number,
				default:0
			},
			keyword:{
				type:String,
				default:''
			}
		},
		data(){
			return {
				list:[],
				page:'0',
				loadStatus:false,
			}
		},
		created() {
			this.fresh()
		},
		methods:{
			// scroll-view到底部加载更多
			onreachBottom() {
				console.log('加载更多')
				const list = this.list
				// 文章列表
				postSearchList({"id_type":this.idType,"key_word":this.keyword,"cursor":this.page,"limit":20}).then(res=>{this.list = list.concat(res.data);this.page=res.cursor;console.log('数据',res.data)})
			},
			// 刷新
			fresh(){
				if(this.loadStatus === false && !!this.keyword){
					this.loadStatus = true
					
					console.log('下拉刷新')
					postSearchList({"id_type":this.idType,"key_word":this.keyword,"cursor":"0","limit":20})
					.then(res=>{
						this.list = res.data;
						this.page = res.cursor
					})
					.then(res=>{
						setTimeout(()=>{
							this.loadStatus = false
						},1000)
						
					})
				}
			},
		},
		watch:{
			keyword:function(){
				throttle(this.fresh,1000)
			}
		}
	}
</script>

<style lang="scss" scoped>
</style>
