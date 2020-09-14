<template>
	<view>
		<swiper class="swiper" :autoplay="true" >
			<swiper-item v-for="item in list" :key="item.advert_id">
					<image class="banner-img" :src="item.picture" mode="aspectFit"></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import { postAdvertList } from '../../../services/contentApi'
	export default {
		name:'foundBanner',
		created(){
			postAdvertList({"platform":2606,"layout":4,"cursor":"0","limit":20})
			.then(res=>this.list = res.data)
		},
		data(){
			return {
				list:[]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.swiper{
		height: 250rpx;
	}
	.banner-img{
		width: 100%;
		height: 250rpx;
	}
</style>
