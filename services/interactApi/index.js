import { post } from '../../common/utils/request'

// 评论列表
export async function postCommentList(params){
	return post('/interact_api/v1/comment/list',params)
}

// 根据评论id获取评论
export async function postCommentDetail(params){
	return post('/interact_api/v1/comment/detail',params)
}

// 回复列表
export async function postReplyList(params){
	return post('/interact_api/v1/reply/list',params)
}

// 系统消息列表
export async function postSysMsgList(params){
	return post('/interact_api/v1/message/get_message',params)
}
