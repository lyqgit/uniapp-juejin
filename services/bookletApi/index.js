import { post } from '../../common/utils/request'

export async function postAllList(params){
	return post('/booklet_api/v1/booklet/listbycategory',params)
}