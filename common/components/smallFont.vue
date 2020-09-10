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
		display: inline-block;
		color: $uni-bg-color;
		line-height: 20rpx;
		text-align: center;
		border-radius: 6rpx;
		padding:6rpx;
		font-size: 20rpx;
	}
</style>
