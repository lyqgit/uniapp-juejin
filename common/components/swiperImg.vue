<template>
	<view>
		<u-mask :show="show" @click="hideImg">
			<swiper class="swiper" :current="current">
				<swiper-item v-for="item in list" :key="item" style="display: flex;align-items: center;width: 100%;height: 100%;">
					<image style="width: 100%;" mode="widthFix" :src="item"></image>
				</swiper-item>
			</swiper>
		</u-mask>
	</view>
</template>

<script>
	export default {
		name:'swiperImg',
		data:function(){
			return {
				show:false,
				list:[],
				current:0
			}
		},
		methods:{
			showImg(imgList,index){
				this.show = true
				this.list = imgList
				this.current = index
			},
			hideImg(){
				this.show = false
				this.list = []
				this.current = 0
			}
		}
	}
</script>

<style lang="scss" scoped>
	.swiper{
		width: 100%;
		height: 100%;
	}
</style>
