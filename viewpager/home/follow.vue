<template>
	<scroll-view scroll-y class="view-pager-con body-layout-grey" @scrolltolower="onreachBottom">
		<notLogin></notLogin>
	</scroll-view>
</template>

<script>
	import notLogin from '../../common/components/notLogin.vue'
	export default{
		name:'follow',
		components:{
			notLogin
		},
		methods:{
			// scroll-view到底部加载更多
			onreachBottom() {
				console.log('加载更多')
			}
		}
	}
</script>

<style scoped>
	.view-pager-con{
		height: 100%;
		width: 100%;
	}
</style>
