import { post } from '../../common/utils/request'

export async function postHotList(params){
	return post('/recommend_api/v1/short_msg/hot',params)
}

export async function postRecommendList(params){
	return post('/recommend_api/v1/short_msg/recommend',params)
}

export async function postTopicList(params){
	return post('/recommend_api/v1/short_msg/topic',params)
}