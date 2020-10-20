<template>
	<view class="container-layout">
		<headerComponent :class="[hideHeader?'header-animate header-move-top':'header-animate']" ></headerComponent>
		<tabAndViewPager :class="[hideHeader?'header-animate':'header-animate header-top']" :categoryList="categoryList" :list="list">
			<template v-slot="{item}">
				<category :cateId="item.category_id" @hideHeader="setHideHeader"></category>
			</template>
		</tabAndViewPager>
	</view>
</template>

<script>
	import headerComponent from './components/header'
	import category from './components/category'
	import tabAndViewPager from '@/common/components/tabAndViewPager'
	import {getTagBriefsList} from '@/services/tagApi'
	
	export default {
		name:'pageListOfArticles',
		components:{
			headerComponent,
			tabAndViewPager,
			category
		},
		created() {
			getTagBriefsList()
			.then(res=>{
				this.categoryList = res.data
				this.list = this.categoryList.map((item,index)=>{
					console.log(item)
					return {
						category_id:item.category_id,
						name:item.category_name,
						ownerKey:index
					}
				})
				console.log(this.list)
			})
		},
		data(){
			return {
				categoryList:[],
				list:[],
				hideHeader:false
			}
		},
		methods:{
			setHideHeader(val){
				this.hideHeader = val
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container-layout{
		width: 100%;
		height: 100%;
	}
	
	.header-animate{
		transition: all .5s ease;
	}
	
	.header-move-top{
		transform: translateY(-100%);
	}
	
	.header-top{
		padding-top: 100rpx;
	}
</style>
