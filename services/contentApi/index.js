import { post } from '../../common/utils/request'

export async function postAdvertList(params){
	return post('/content_api/v1/advert/query_adverts',params)
}

// 文章详情
export async function postArticleDetail(params){
	return post('/content_api/v1/article/detail',params)
}