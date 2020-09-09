<template>
	<text class="small-font" :style="{backgroundColor:color}">{{text}}</text>
</template>

<script>
	export default{
		name:'smallFont',
		props:['text','color']
	}
</script>

<style lang="scss" scoped>
	.small-font{
		color: $uni-bg-color;
		width: 20rpx;
		height: 20rpx;
		line-height: 20rpx;
		text-align: center;
		border-radius: 6rpx;
	}
</style>
