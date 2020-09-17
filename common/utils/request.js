class Request {
	constructor(baseUrl='',header={}) {
	    this.baseUrl = baseUrl
	    this.header = header
			const that = this
			uni.onNetworkStatusChange(function(res){
				console.log('网络连接正常',res.isConnected);
				that.isConnected = res.isConnected
				console.log(res.networkType);
			})
			this.isDev = process.env.NODE_ENV === 'development'
	}
	
	isDev = true
	
	isConnected = true
	
	instance(baseUrl='',header={}){
		return new Request(baseUrl,header)
	}

	
	request=(url,method,data,header=null)=>{
		if(!this.isConnected){
			uni.showToast({
				title:'网络未连接',
				duration:1000
			})
			return null
		}
		uni.showLoading({
			title:"网络拉取中"
		})
		
		return new Promise((resolve, reject)=>{
			uni.request({
				url:this.baseUrl+url,
				header:header?header:this.header,
				method,
				data,
				success:function(response){
					
					if(response.statusCode === 200){
						// 处理业务
						resolve(response.data)
					}else{
						uni.showToast({
							title:response.data
						})
					}
					
				},
				fail:function(err){
					reject(err)
				},
				complete:function(){
					uni.hideLoading()
				}
			})
		})
		
	}
	
	//#ifdef H5
	get=(url,data,header)=>{
		return this.request(this.isDev?'/api'+url:url,"GET",data,header)
	}
	
	post=(url,data,header)=>{
		return this.request(this.isDev?'/api'+url:url,"POST",data,header)
	}
	
	put=(url,data,header)=>{
		return this.request(this.isDev?'/api'+url:url,"PUT",data,header)
	}
	//#endif
	
	//#ifdef APP-PLUS
	get=(url,data,header)=>{
		return this.request(url,"GET",data,header)
	}
	
	post=(url,data,header)=>{
		return this.request(url,"POST",data,header)
	}
	
	put=(url,data,header)=>{
		return this.request(url,"PUT",data,header)
	}
	//#endif
	
}

//#ifdef H5
const instance = new Request('',{
	'Content-Type':'application/json',
	'X-Agent':'Juejin/xiaomi/Redmi Note 7 Pro Android/9 Juejin/Android/5.9.3',
	'X-Juejin-Src':'android',
})
//#endif

//#ifdef APP-PLUS
// app端
const instance = new Request('https://apinew.juejin.im',{
	'Content-Type':'application/json',
	'X-Agent':'Juejin/xiaomi/Redmi Note 7 Pro Android/9 Juejin/Android/5.9.3',
	'X-Juejin-Src':'android',
})
//#endif

const get = instance.get
const post = instance.post
const put = instance.put

export default instance
export {
	get,
	post,
	put
}