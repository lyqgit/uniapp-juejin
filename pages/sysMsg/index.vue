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
		<template v-for="item in list">
			<msgItem
			 :avatar="item.src_info.image"
			 :idType="item.dst_info.id_type"
			 :ctime="item.message.ctime"
			 :msgType="4"
			 :linkHref="item.src_info.url"
			 :itemId="item.dst_info.item_id"
			 :linkStr="item.dst_info.name"
			 />
		</template>
	</scroll-view>
</template>

<script>
	import { postSysMsgList } from '@/services/interactApi'
	import msgItem from '@/common/components/msgItem'
	
	const message_type = 4
	
	export default {
		name:'sysMsg',
		components:{
			msgItem
		},
		data:function(){
			return {
				page:0,
				list:[],
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
				postSysMsgList({"message_type":4,"cursor":this.page,"limit":20})
				.then(res=>{
					this.list = list.concat(res.data);
					this.page=res.cursor;
				})
			},
			// 刷新
			fresh(){
				if(this.loadStatus === false){
					this.loadStatus = true
					postSysMsgList({"message_type":4,"cursor":"0","limit":20})
					.then(res=>{
						this.list = res.data
						setTimeout(()=>{
							this.loadStatus = false
						},1000)
					})
				}
				
			}
		}
	}
</script>

<style>
</style>
