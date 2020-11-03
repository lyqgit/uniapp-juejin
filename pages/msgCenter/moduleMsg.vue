<template>
	<scroll-view
		scroll-y 
		class="view-pager-con body-layout-grey" 
		@refresherrefresh="fresh" 
		refresher-enabled
		:refresher-triggered="loadStatus"
		@scrolltolower="onreachBottom"
	>
		<template v-for="item in list">
			<msgItem
			 :dzUser="item.src_info.name"
			 :avatar="item.src_info.image"
			 :idType="item.dst_info.id_type"
			 :msg="item.dst_info.detail"
			 :ctime="item.message.ctime"
			 :msgType="messageType"
			 :linkHref="item.src_info.url"
			 :itemId="item | itemIdFilter(messageType)"
			 :linkStr="item | linkStrFilter(messageType)"
			 :linkImg="item.dst_info.image"
			 :parentIdType="item.parent_info.id_type"
			 />
		</template>
	</scroll-view>
</template>

<script>
	import { postSysMsgList } from '@/services/interactApi'
	import msgItem from '@/common/components/msgItem'
	
	
	export default {
		name:'sysMsg',
		components:{
			msgItem
		},
		onLoad(option) {
			console.log(option.messageType)
			this.messageType = parseInt(option.messageType)
			console.log(this.messageType)
		},
		data:function(){
			return {
				page:0,
				list:[],
				loadStatus:false,
				messageType:0
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
				postSysMsgList({"message_type":this.messageType,"cursor":this.page,"limit":20})
				.then(res=>{
					this.list = list.concat(res.data);
					this.page=res.cursor;
				})
			},
			// 刷新
			fresh(){
				if(this.loadStatus === false){
					this.loadStatus = true
					postSysMsgList({"message_type":this.messageType,"cursor":"0","limit":20})
					.then(res=>{
						this.list = res.data
						setTimeout(()=>{
							this.loadStatus = false
						},1000)
					})
				}
				
			}
		},
		filters:{
			itemIdFilter(item,messageType){
				if(messageType == 3){
					return item.parent_info.item_id
				}
				return item.dst_info.item_id
			},
			linkStrFilter(item,messageType){
				if(messageType == 3){
					return item.parent_info.name
				}
				return item.dst_info.name
			},
		}
	}
</script>

<style>
</style>
