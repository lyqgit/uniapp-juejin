<template>
	<scroll-view scroll-x class="tag-layout">
		<view @click="childSelect(item.id)" :class="[item.id === currentTag?'tag selected':'tag unselected']" v-for="item in tags" :key="item.id">{{item.name||item.tag_name}}</view>
	</scroll-view>
</template>

<script>
	export default {
		name:'headerTag',
		props:['tags','currentTag'],
		methods:{
			childSelect(id){
				console.log(id)
				this.$emit('select',id)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.tag-layout{
		white-space:nowrap;
		padding: 10rpx 0;
		background-color: $uni-bg-color;
		.tag{
			display: inline-block;
			padding: 10rpx 15rpx;
			//#ifdef APP-PLUS
			line-height: 30rpx;
			//#endif
			border-radius: 20rpx;
			font-size: 20rpx;
			&:nth-of-type(n+1){
				margin-left: 15rpx;
			}
			&:nth-last-of-type(1){
				margin-right: 15rpx;
			}
		}
	}
	
	.unselected{
		background-color: #EFF2F5;
		color: #ABB5BF;
	}
	.selected{
		background-color: $custom-font-color-blue;
		color: $uni-bg-color;
	}
	
</style>
