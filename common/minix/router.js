export default {
	methods:{
		goToPage(url){
			uni.navigateTo({
				url,
				fail(err) {
					console.log(err)
					uni.showToast({
						title:err
					})
				}
			})
		},
		replaceToPage(url){
			console.log(url)
			uni.redirectTo({
				url,
				fail(err) {
					console.log(err)
					uni.showToast({
						title:err
					})
				}
			})
		},
		switchToTab(url){
			console.log(url)
			uni.switchTab({
				url,
				fail(err) {
					console.log(err)
					uni.showToast({
						title:err
					})
				}
			})
		},
	}
}