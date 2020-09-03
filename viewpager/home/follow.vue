<template>
	<view class="body-layout body-layout-grey">
		<!-- <view>关注</view> -->
		<notLogin></notLogin>
	</view>
	
</template>

<script>
	import notLogin from '../../common/components/notLogin.vue'
	export default{
		name:'follow',
		components:{
			notLogin
		},
	}
</script>

<style scoped>
	
</style>
