import moment from '@/common/utils/moment.js'

export default {
	methods:{
		diffTime(ctime){
			const currentTime = moment()
			const commentTime = moment.unix(ctime)
			const hour = currentTime.diff(commentTime,'hour')
			const day = currentTime.diff(commentTime,'day')
			const week = currentTime.diff(commentTime,'week')
			const month = currentTime.diff(commentTime,'month')
			const year = currentTime.diff(commentTime,'year')
			if(year > 0){
				return year+'年前'
			}
			if(month > 0){
				return month+'月前'
			}
			if(week > 0){
				return week+'周前'
			}
			if(day > 0){
				return week+'天前'
			}
			if(day > 0){
				return week+'小时前'
			}
		}
	}
}