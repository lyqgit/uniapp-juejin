import { post } from '../../common/utils/request'

export async function postList(params){
	return post('/recommend_api/v1/article/recommend_all_feed',params)
}