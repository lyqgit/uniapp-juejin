<template>
	<view class="division-layout" :style="{height:height}"></view>
</template>

<script>
	export default {
		name:'division',
		props:{
			height:{
				type:String,
				default:'20rpx'
			}
		}
	}
</script>

<style>
	.division-layout{
		width: 100%;
	}
</style>
