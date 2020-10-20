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
		},
		replaceToPage(url){
			uni.redirectTo({
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