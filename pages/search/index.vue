<template>
	<view class="home-layout">
		<view class="header" >
			<view class="header-search">
				<iconfont :icon="icon.search"></iconfont>
				<input class="search-input" v-model="keyword" placeholder-class="input-placeholder" :placeholder="placeholder" />
			</view>
			<view class="header-setting" @click="goBack">
				<text class="cancel">取消</text>
			</view>
		</view>
		<view class="tab-layout bottom-shadow">
			<u-tabs-swiper inactive-color="#9B9B9B" active-color="#0076FF" ref="uTabs" :list="list" :current="current"  @change="tabsChange" :is-scroll="true"></u-tabs-swiper>
		</view>
		<view class="view-pager">
			<swiper style="height: 100%;" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
				<swiper-item class="swiper-item" v-for="(item,index) in list" :key="item.idType">
					<viewpager :direct="item.idType==0" :ownerKey="index" :currentKey="swiperCurrent">
						<allList :idType="item.idType" :keyword="keyword"></allList>
					</viewpager>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	
	import viewpager from '@/common/components/viewpager.vue'
	import allList from './components/all.vue'
	
	export default {
		name:'searchPage',
		components:{
			viewpager,
			allList
		},
		data(){
			return {
				icon:{
					search:'\ue606',
				},
				list: [
					{
						name: '综合',
						idType:0
					},
					{
						name: '文章',
						idType:2
					},
					{
						name: '标签',
						idType:9
					},
					{
						name: '用户',
						idType:1
					}
				],
				current:0,
				swiperCurrent:0,
				keyword:'',
			}
		},
		computed:{
			placeholder:function(){
				switch(this.swiperCurrent){
					case 0:
					return '搜索文章/标签/用户';
					case 1:
					return '搜索文章';
					case 2:
					return '搜索标签';
					case 3:
					return '搜索用户';
				}
			},
		},
		methods:{
			goBack(){
				uni.navigateBack()
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
			font-size: 30rpx;
			color: #CCD0D4;
			display: flex;
			align-items: center;
			>input{
				flex:1
			}
		}
		
		.header-setting{
			margin-left: 20rpx;
			color: #ABB4BF;
			font-size: 24rpx;
		}
	}
	
	.search-input{
		margin-left: 20rpx;
		color: #000000;
		font-size: 30rpx;
	}
	
	.input-placeholder{
		color: #D2D2D2;
		font-size: 30rpx;
	}
	
	.cancel{
		margin-left:10rpx;
		color: $custom-font-color-blue;
		font-size: 32rpx;
	}
	
	.bottom-shadow{
		border-bottom: 2px solid #EEEEEE;
		box-shadow: 0px 6px 10px -14px #000;
		z-index: 20;
	}
	
	.swiper-item{
		height: 100%;
	}
	
	.view-pager{
		flex: 1;
	}
</style>
