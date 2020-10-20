<template>
	<view class="findMoreAuthor-layout">
		<text class="title" >发现更多掘金优秀作者</text>
		<iconfont :icon="rightArrow"></iconfont>
	</view>
</template>

<script>
	export default {
		name:'findMoreAuthor',
		data:function(){
			return {
				rightArrow:'\ue655'
			}
		}
	}
</script>

<style lang="scss" scoped>
	.findMoreAuthor-layout{
		display: flex;
		padding: 30rpx 20rpx;
		line-height: 1.5;
		background-color: $uni-bg-color;
		>.title{
			flex: 1;
			@include title
		}
	}
</style>
