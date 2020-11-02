<template>
	<view class="msgCenter-layout">
		<division height="30rpx"></division>
		<myInfo title="评论" @click="goToPage('/pages/msgCenter/moduleMsg?messageType=3',true)">
			<text class="iconfont" style="color:#FFC347;">&#xe81a;</text>
		</myInfo>
		<myInfo title="点赞" @click="goToPage('/pages/msgCenter/moduleMsg?messageType=1',true)">
			<text class="iconfont" style="color:#6CBD45;">&#xe672;</text>
		</myInfo>
		<myInfo title="关注" @click="goToPage('/pages/msgCenter/moduleMsg?messageType=2',true)">
			<text class="iconfont" style="color:#0076FF;">&#xe8bb;</text>
		</myInfo>
		<division height="30rpx"></division>
		<myInfo title="系统消息" @click="goToPage('/pages/msgCenter/moduleMsg?messageType=4',true)">
			<text class="iconfont" style="color:#0076FF;">&#xe6f2;</text>
		</myInfo>
	</view>
</template>

<script>
	import myInfo from '@/common/components/myInfo'
	import pageRouter from '@/common/minix/router'
	
	export default {
		name:'msgCenter',
		components:{
			myInfo
		},
		mixins:[pageRouter],
	}
</script>

<style lang="scss" scoped>
	.msgCenter-layout{
		height: 100%;
		background-color: #EFF2F5;
	}
</style>
