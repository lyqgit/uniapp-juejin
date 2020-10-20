import { post } from '../../common/utils/request'

export async function postList(params){
	return post('/recommend_api/v1/article/recommend_all_feed',params)
}

// 相关文章详情
export async function postRelativeList(params){
	return post('/recommend_api/v1/article/recommend_article_detail_feed',params)
}

// 关注文章
export async function postFollowList(params){
	return post('/recommend_api/v1/article/recommend_follow_feed',params)
}

export async function postCateTagList(params){
	return post('/recommend_api/v1/article/recommend_cate_tag_feed',params)
}