export default {
	methods:{
		goToPage(url){
			uni.navigateTo({
				url,
				fail(err) {
					uni.showToast({
						title:err
					})
				}
			})
		}
	}
}