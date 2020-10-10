export function throttle(fn,wait){
	var timer = null;
	return function(){
		if(!timer){
			timer = setTimeout(function(){
				fn()
				timer = null
			},wait)
		}
	}()
}