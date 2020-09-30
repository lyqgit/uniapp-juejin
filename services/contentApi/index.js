import { post } from '../../common/utils/request'

export async function postAdvertList(params){
	return post('/content_api/v1/advert/query_adverts',params)
}

// 文章详情
export async function postArticleDetail(params){
	return post('/content_api/v1/article/detail',params)
}

// 沸点详情
export async function postBoilingDetail(params){
	return post('/content_api/v1/short_msg/detail',params)
}