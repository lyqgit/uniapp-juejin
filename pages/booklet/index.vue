<template>
	<view class="home-layout">
		<view class="tab-layout">
			<u-tabs-swiper class="bottom-shadow" inactive-color="#9B9B9B" active-color="#0076FF" ref="uTabs" :list="list" :current="current"  @change="tabsChange" :is-scroll="true"></u-tabs-swiper>
		</view>
		<view class="view-pager">
			<swiper style="height: 100%;" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
				<swiper-item class="swiper-item">
					<viewpager :direct="true" :ownerKey="0" :currentKey="swiperCurrent">
						<all></all>
					</viewpager>
				</swiper-item>
				<swiper-item class="swiper-item">
					<viewpager :direct="false" :ownerKey="1" :currentKey="swiperCurrent">
						<notLogin></notLogin>
					</viewpager>
				</swiper-item>
			</swiper>
		</view>
		
	</view>
</template>

<script>
	
	import all from '../../viewpager/booklet/all.vue'
	import notLogin from '../../common/components/notLogin.vue'
	import viewpager from '../../common/components/viewpager.vue'
	export default {
		name:'booklet',
		components:{
			all,
			notLogin,
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
						name: '全部',
					},
					{
						name: '已购',
					},
				],
				current:0,
				swiperCurrent:0
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
	
	.tab-layout {
		text-align: center;
		/deep/ .u-tabs-scroll-box{
		display: inline-block;
	}
	} 
	
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
