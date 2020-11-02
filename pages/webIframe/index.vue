<template>
	<web-view :src="url"></web-view>
</template>

<script>
	export default {
		name:'webIframe',
		onLoad(option) {
			this.url = option.url
		},
		data:function(){
			return {
				url:''
			}
		}
	}
</script>

<style>
</style>
