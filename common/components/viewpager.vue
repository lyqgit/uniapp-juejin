<template>
	<view style="width: 100%;height: 100%;">
		<slot v-if="show"></slot>
		<view v-if="!show" style="height:100%;;display:flex;align-items: center;justify-content: center;">
			<u-loading mode="circle" color="primary" size="80"></u-loading>
		</view>
	</view>
</template>

<script>
	// viewpager显示时才开始加载组件，只加载一次实现懒加载
	export default {
		name:'viewpager',
		props:['ownerKey','currentKey','direct'],
		data() {
			return {
				show:this.direct?this.direct:false
			}
		},
		watch:{
			currentKey(nV,oV){
				// console.log('新制',nV)
				// console.log('旧制',oV)
				// console.log('当前',this.ownerKey)
				if(!this.show && (nV === this.ownerKey || oV === this.ownerKey)){
					console.log('渲染')
					setTimeout(()=>{
						this.show = true
					},1000)
					
				}
			}
		}
	}
</script>

<style>

</style>
