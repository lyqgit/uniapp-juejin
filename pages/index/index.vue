<template>
	<view class="home-layout">
		<view id="home-header" :class="[$store.state.header.hideHeader?'header-animate header-move-top':'header-animate']">
			<view class="header" >
				<view class="header-search" @click="goToSearch">
					<iconfont :icon="icon.search"></iconfont>
					<text style="margin-left: 20rpx;">搜索掘金</text>
				</view>
				<view class="header-setting" @click="goToTagManager">
					<iconfont :icon="icon.setting"></iconfont>
					<text style="margin-left:10rpx;">标签</text>
				</view>
			</view>
		</view>
		<view :class="[$store.state.header.hideHeader?'header-animate bottom-shadow':'header-animate header-top bottom-shadow']">
			<u-tabs-swiper inactive-color="#9B9B9B" active-color="#0076FF" ref="uTabs" :list="list" :current="current"  @change="tabsChange" :is-scroll="true"></u-tabs-swiper>
		</view>
		<view :class="[$store.state.header.hideHeader?'header-animate view-pager':'header-animate viewpager-top view-pager']">
			<swiper style="height: 100%;" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
				<swiper-item class="swiper-item">
					<viewpager :direct="true" :ownerKey="0" :currentKey="swiperCurrent">
						<follow></follow>
					</viewpager>
				</swiper-item>
				<swiper-item class="swiper-item">
					<viewpager :direct="false" :ownerKey="1" :currentKey="swiperCurrent">
						<recommend></recommend>
					</viewpager>
				</swiper-item>
				<swiper-item class="swiper-item">
					<viewpager :direct="false" :ownerKey="2" :currentKey="swiperCurrent">
						<hot></hot>
					</viewpager>
				</swiper-item>
				<swiper-item class="swiper-item" v-for="item in categoryList" :key="item.category_id">
					<viewpager :direct="false" :ownerKey="item.ownerKey" :currentKey="swiperCurrent">
						<category :cateId="item.category_id" :hotTags="item.hot_tags"></category>
					</viewpager>
				</swiper-item>
			</swiper>
		</view>
		
	</view>
</template>

<script>
	
	import follow from '../../viewpager/home/follow'
	import recommend from '../../viewpager/home/recommend'
	import hot from '../../viewpager/home/hot'
	import category from '../../viewpager/home/category'
	import viewpager from '../../common/components/viewpager.vue'
	export default {
		components:{
			follow,
			recommend,
			hot,
			category,
			viewpager,
		},
		data() {
			return {
				icon:{
					search:'\ue606',
					setting:'\ue611',
				},
				list: [
					{
						name: '关注',
						component:'follow'
					},
					{
						name: '推荐',
						component:'recommend'
					},
					{
						name: '热榜'
					}
				],
				current:0,
				swiperCurrent:0
			}
		},
		computed:{
			categoryList(){
				const tags = this.$store.state.tag.list
				tags.forEach((item,index)=>{
					const temp = {name:item.category.category_name,ownerKey:index+3}
					this.list.push(temp)
					item.ownerKey=index+3
					item.hot_tags.unshift({id:0,tag_name:'全部',tag_id:0})
				})
				console.log(tags)
				return this.$store.state.tag.list
			},
			headerHeight(){
				return this.$store.state.header.headerHeight
			}
		},
		onLoad() {
			console.log(this.$store.state.tag.list)
		},
		onReady() {
			const query = uni.createSelectorQuery().in(this);
			query.select('.header').boundingClientRect(data => {
				console.log("得到布局位置信息" + JSON.stringify(data));
				console.log("节点离页面顶部的距离为" + data.top);
				this.$store.commit('header/setHeaderHeight',data.height+'px') 
				this.$store.commit('header/setHeaderOriginHeight',data.height+'px') 
			}).exec();
		},
		methods: {
			goToSearch(){
				uni.navigateTo({
					url:'/pages/search/index'
				})
			},
			goToTagManager(){
				uni.navigateTo({
					url:'/pages/tagManager/index'
				})
			},
			categoryOwnerKey(num){
				console.log(num)
				return num+3
			},
			// tabs通知swiper切换
			tabsChange(index) {
				console.log('tab变更',index)
				this.swiperCurrent = index;
			},
			// swiper-item左右移动，通知tabs的滑块跟随移动
			transition(e) {
				let dx = e.detail.dx;
				this.$refs.uTabs.setDx(dx);
			},
			// 由于swiper的内部机制问题，快速切换swiper不会触发dx的连续变化，需要在结束时重置状态
			// swiper滑动结束，分别设置tabs和swiper的状态
			animationfinish(e) {
				let current = e.detail.current;
				this.$refs.uTabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;
			},
			
		}
	}
</script>

<style lang="scss" scoped>
	
	.view-pager-con{
		height: 100%;
		width: 100%;
	}
	
	.home-layout{
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
	}
	
	#home-header{
		width: 100%;
		height: 100rpx;
		position: fixed;
		top:0;
		left: 0;
		z-index: 100;
		background-color: #FFFFFF;
	}
	
	.header{
		width: 100%;
		background-color: $uni-bg-color;
		display: flex;
		align-items: center;
		padding: 10rpx 20rpx;
		.header-search{
			padding: 20rpx;
			flex: 1;
			background-color: #EEEEEE;
			border-radius: 10rpx;
			font-size: 24rpx;
			color: #CCD0D4;
		}
		
		.header-setting{
			margin-left: 20rpx;
			color: #ABB4BF;
			font-size: 24rpx;
		}
	}
	
	.bottom-shadow{
		box-shadow: 0px 6px 10px -14px #000;
		z-index: 20;
	}
	
	.swiper-item{
		height: 100%;
	}
	
	.view-pager{
		flex: 1;
	}
	
	.header-animate{
		transition: all .5s ease;
	}
	
	.header-move-top{
		transform: translateY(-100%);
	}
	
	.header-top{
		transform: translateY(100rpx);
	}
	
	.viewpager-top{
		padding-top: 100rpx;
	}
	
</style>
