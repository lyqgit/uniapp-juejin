import store from '@/store'

export default {
	methods:{
		goToPage(url,mustLogin=false){
			if(mustLogin){
				if(store.state.user.isLogin){
					uni.navigateTo({
						url,
						fail(err) {
							console.log(err)
							uni.showToast({
								title:err
							})
						}
					})
					
				}else{
					uni.navigateTo({
						url:'/pages/login/index',
						fail(err) {
							console.log(err)
							uni.showToast({
								title:err
							})
						}
					})
				}
				
			}else{
				uni.navigateTo({
					url,
					fail(err) {
						console.log(err)
						uni.showToast({
							title:err
						})
					}
				})
			}
			
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