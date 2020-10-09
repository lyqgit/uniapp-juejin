import { post } from '../../common/utils/request'

// 标签分类
export async function postTagList(params){
	return post('/tag_api/v1/query_category_list',params)
}

// 标签列表
export async function postQueryTagList(params){
	return post('/tag_api/v1/query_tag_list',params)
}