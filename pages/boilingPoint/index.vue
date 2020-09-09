<template>
	<view class="home-layout">
		<view class="tab-layout">
			<u-tabs-swiper class="bottom-shadow" inactive-color="#9B9B9B" active-color="#0076FF" ref="uTabs" :list="list" :current="current"  @change="tabsChange" :is-scroll="true"></u-tabs-swiper>
		</view>
		<view class="view-pager">
			<swiper style="height: 100%;" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
				<swiper-item class="swiper-item">
					<viewpager :direct="true" :ownerKey="0" :currentKey="swiperCurrent">
						<follow></follow>
					</viewpager>
				</swiper-item>
			</swiper>
		</view>
		
	</view>
</template>

<script>
	
	import follow from '../../viewpager/home/follow'
	import viewpager from '../../common/components/viewpager.vue'
	export default {
		name:'boilingPoint',
		components:{
			follow,
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
						name: '掘金相亲'
					},
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
