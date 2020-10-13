<template>
	<view class="tabAndViewPager-layout">
		<view class="tab-layout bottom-shadow">
			<u-tabs-swiper inactive-color="#9B9B9B" active-color="#0076FF" ref="uTabs" :list="list" :current="current"  @change="tabsChange" :is-scroll="true"></u-tabs-swiper>
		</view>
		<view class="view-pager">
			<swiper style="height: 100%;" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
				<swiper-item class="swiper-item" v-for="item in list" :key="item.ownerKey">
					<viewpager :direct="item.ownerKey==0" :ownerKey="item.ownerKey" :currentKey="swiperCurrent">
						<slot :item="item"></slot>
					</viewpager>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	
	import viewpager from '@/common/components/viewpager.vue'
	
	export default {
		name:'tabAndViewPager',
		components:{
			viewpager
		},
		props:{
			list:Array
		},
		data(){
			return {
				current:0,
				swiperCurrent:0,
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
	.tabAndViewPager-layout{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	.bottom-shadow{
		border-bottom: 2px solid $custom-font-color-des;
		box-shadow: 0px 6px 10px -14px #000;
		z-index: 20;
	}
	.view-pager{
		flex: 1;
	}
</style>
