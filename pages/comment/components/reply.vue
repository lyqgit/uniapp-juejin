<template>
	<view style="display: inline-block">
		<text class="user-name">{{username}}</text>
		<text class="user-name" v-if="isAuthor">(作者)</text>
		<smallFont v-if="level>0" color="#8CDBF4" :text="'Lv'+level"></smallFont>
	</view>
</template>

<script>
	import smallFont from '@/common/components/smallFont.vue'
	export default {
		name:'reply',
		components:{
			smallFont
		},
		props:['isAuthor','username','level']
	}
</script>

<style lang="scss" scoped>
	.user-name{
		color: #115E91;
		font-size: 30rpx;
	}
</style>
