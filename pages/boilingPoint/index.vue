<template>
	<view class="home-layout">
		<view class="tab-layout">
			<u-tabs-swiper class="bottom-shadow" inactive-color="#9B9B9B" active-color="#0076FF" ref="uTabs" :list="list" :current="current"  @change="tabsChange" :is-scroll="true"></u-tabs-swiper>
		</view>
		<view class="view-pager">
			<swiper style="height: 100%;" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
				<swiper-item class="swiper-item">
					<viewpager :direct="true" :ownerKey="0" :currentKey="swiperCurrent">
						<recommend></recommend>
					</viewpager>
				</swiper-item>
				<swiper-item class="swiper-item">
					<viewpager :direct="false" :ownerKey="1" :currentKey="swiperCurrent">
						<hot></hot>
					</viewpager>
				</swiper-item>
				<swiper-item class="swiper-item">
					<viewpager :direct="false" :ownerKey="2" :currentKey="swiperCurrent">
						<follow></follow>
					</viewpager>
				</swiper-item>
				<swiper-item class="swiper-item">
					<viewpager :direct="false" :ownerKey="3" :currentKey="swiperCurrent">
						<category topicId="6824710203301167112"></category>
					</viewpager>
				</swiper-item>
				<swiper-item class="swiper-item">
					<viewpager :direct="false" :ownerKey="4" :currentKey="swiperCurrent">
						<category topicId="6819970850532360206"></category>
					</viewpager>
				</swiper-item>
				<swiper-item class="swiper-item">
					<viewpager :direct="false" :ownerKey="5" :currentKey="swiperCurrent">
						<category topicId="6824710202487472141"></category>
					</viewpager>
				</swiper-item>
				<swiper-item class="swiper-item">
					<viewpager :direct="false" :ownerKey="6" :currentKey="swiperCurrent">
						<category topicId="6824710202562969614"></category>
					</viewpager>
				</swiper-item>
				<swiper-item class="swiper-item">
					<viewpager :direct="false" :ownerKey="7" :currentKey="swiperCurrent">
						<category topicId="6824710202378436621"></category>
					</viewpager>
				</swiper-item>
				<swiper-item class="swiper-item">
					<viewpager :direct="false" :ownerKey="8" :currentKey="swiperCurrent">
						<category topicId="6824710202000932877"></category>
					</viewpager>
				</swiper-item>
				<swiper-item class="swiper-item">
					<viewpager :direct="false" :ownerKey="9" :currentKey="swiperCurrent">
						<category topicId="6824710203112423437"></category>
					</viewpager>
				</swiper-item>
			</swiper>
		</view>
		<view class="float">
			<iconfont :icon="icon.edit" style="font-size: 46rpx;"></iconfont>
		</view>
	</view>
</template>

<script>
	// 组件
	import recommend from '../../viewpager/boilingPoint/recommend.vue'
	import hot from '../../viewpager/boilingPoint/hot.vue'
	import follow from '../../viewpager/boilingPoint/follow.vue'
	import category from '../../viewpager/boilingPoint/category.vue'
	import viewpager from '../../common/components/viewpager.vue'
	
	export default {
		name:'boilingPoint',
		components:{
			recommend,
			hot,
			follow,
			category,
			viewpager,
		},
		data() {
			return {
				icon:{
					search:'\ue606',
					setting:'\ue611',
					edit:'\ue627'
				},
				list: [
					{
						name: '推荐'
					},
					{
						name: '热门'
					},
					{
						name: '关注'
					},
					{
						name: '上班摸鱼'
					},
					{
						name: '内推招聘'
					},
					{
						name: '一图胜前言'
					},
					{
						name: '今天学到了'
					},
					{
						name: '每天一道算法题'
					},
					{
						name: '开发工具推荐'
					},
					{
						name: '树洞一下'
					},
				],
				current:0,
				swiperCurrent:0,
			}
		},
		computed:{
			categoryList(){
				const tags = this.$store.state.tag.list
				tags.forEach((item,index)=>{
					const temp = {name:item.category.category_name,ownerKey:index+3}
					this.list.push(temp)
					item.ownerKey=index+3
					item.hot_tags.unshift({id:0,tag_name:'全部'})
				})
				console.log(tags)
				return this.$store.state.tag.list
			},
			headerHeight(){
				return this.$store.state.header.headerHeight
			}
		},
		methods: {
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
	
	.float{
		position: fixed;
		right: 40rpx;
		bottom: 70px;
		z-index: 99;
		background-color: $custom-font-color-blue;
		width: 100rpx;
		height: 100rpx;
		border-radius: 50rpx;
		line-height: 100rpx;
		text-align: center;
		color: $uni-bg-color;
		box-shadow: 0px 6px 16px -6px #000;
	}
	
	.home-layout{
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
	}
	
	#home-header{
		transition: all .5s ease;
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
		// box-shadow: 0 5rpx 10rpx #000000 inset;
	}
	
	.swiper-item{
		height: 100%;
	}
	
	.view-pager{
		flex: 1;
	}
</style>
