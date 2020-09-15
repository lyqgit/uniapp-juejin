import { post } from '../../common/utils/request'

// 评论列表
export async function postCommentList(params){
	return post('/interact_api/v1/comment/list',params)
}
