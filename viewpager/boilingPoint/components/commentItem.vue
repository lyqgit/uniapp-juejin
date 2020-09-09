<template>
	<view>
		<view class="comment-layout">
			<view class="header">
				<image src="" mode="aspectFill"></image>
				<view class="user-info">
					<view class="user-name"></view>
					<view class="user-des"></view>
				</view>
			</view>
			<view class="content"></view>
			<view class="tag"></view>
			<view class="footer">
				<view class="btn">
					<iconfont></iconfont>
					<text>点赞</text>
				</view>
				<view class="btn">
					<iconfont></iconfont>
					<text>评论</text>
				</view>
				<view class="btn">
					<iconfont></iconfont>
					<text>分享</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:'commentItem',
		props:['list']
	}
</script>

<style>
</style>
