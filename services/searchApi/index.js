import { post } from '@/common/utils/request'

// 搜索
export async function postSearchList(params){
	return post('/search_api/v1/search',params)
}

