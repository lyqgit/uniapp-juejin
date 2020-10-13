import { post } from '@/common/utils/request'

// 榜单
// 参数事例 {"id_type":2,"client_type":2606,"cursor":"0","limit":20,"sort_type":3,"cate_id":"6809637769959178254"}
export async function postCateFeedList(params){
	return post('/recommend_api/v1/article/recommend_cate_feed',params)
}