import { post } from '../../common/utils/request'

export async function postTagList(params){
	return post('/tag_api/v1/query_category_list',params)
}