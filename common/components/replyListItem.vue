<template>
	<view>
		<division height="1px" style="background-color: #F5F6F6;"></division>
		<view class="comment-layout">
			<view class="header">
				<image :src="avatar_large" mode="aspectFill"></image>
				<view class="user-info">
					<view>
						{{user_name}}
						<smallFont v-if="level != 0" style="margin-left: 10rpx;" color="#8CDBF4" :text="'Lv'+level"></smallFont>
					</view>
					<view>
						<text v-if="job_title">{{job_title}}</text>
						<text v-if="company" style="margin-left: 10rpx;word-break:break-all;margin-right: 10rpx;">{{'@'+company}}</text>
						<text>{{diffHour(ctime)}}</text>
					</view>
					
				</view>
				<view class="btn-layout" v-if="showDZ">
					<iconfont :icon="icon.dianzan"></iconfont>
					<text style="vertical-align: middle;font-size: 16px;width: 16px;display: inline-block;">{{digg_count>0?digg_count:''}}</text>
				</view>
				<view class="btn-layout" v-if="showDZ">
					<iconfont :icon="icon.msg"></iconfont>
					<text style="vertical-align: middle;font-size: 16px;width: 16px;display: inline-block;">{{reply_count>0?reply_count:''}}</text>
				</view>
			</view>
			<view class="content">{{comment_content}}</view>
		</view>
	</view>
</template>

<script>
	
	import moment from '@/common/utils/moment.js'
	import smallFont from '@/common/components/smallFont.vue'
	
	export default {
		name:'replyListItem',
		components:{
			smallFont
		},
		props:{
			showDZ:{
				type:Boolean,
				default:true
			},
			avatar_large:{
				type:String,
				default:''
			},
			user_name:{
				type:String,
				default:''
			},
			level:{
				type:Number,
				default:0
			},
			ctime:{
				type:Number,
				default:0
			},
			digg_count:{
				type:Number,
				default:0
			},
			reply_count:{
				type:Number,
				default:0
			},
			job_title:{
				type:String,
				default:''
			},
			company:{
				type:String,
				default:''
			},
			comment_content:{
				type:String,
				default:''
			},
		},
		data(){
			return {
				icon:{
					dianzan:'\ue604',
					msg:'\ue61e',
				},
				list:[],
				page:0
			}
		},
		methods:{
			diffHour(ctime){
				const currentTime = moment()
				const commentTime = moment.unix(ctime)
				return	currentTime.diff(commentTime,'hour')+'小时前'
			}
		}
	}
</script>

<style lang="scss" scoped>
	
	.comment-layout{
		padding: 20rpx;
		.content{
			margin-left: 70rpx;
			margin-top: 20rpx;
			font-size: 30rpx;
		}
		.reply-con{
			margin-left: 70rpx;
			margin-top: 10rpx;
			background-color: #F5F6F6;
			padding: 10rpx 20rpx;
			border-radius: 6rpx;
			.reply-layout:nth-of-type(n+2){
				margin-top: 10rpx;
			}
		}
	}
	
	.header{
		display: flex;
		align-items: center;
		>image{
			width: 60rpx;
			height: 60rpx;
			border-radius: 30rpx;
		}
		.user-info{
			height: 100%;
			margin-left: 10rpx;
			margin-right: 10rpx;
			flex: 1;
			display: flex;
			flex-direction: column;
			font-size: 20rpx;
			color: $custom-font-color-des;
			>view:nth-of-type(1){
				color: #115E91;
				font-size: 30rpx;
			}
			>view:nth-of-type(2){
				margin-top: 10rpx;
			}
		}
	}
	
	.btn-layout{
		line-height: 1.5;
		&:nth-of-type(2){
			margin-right: 20rpx;
		}
		>text:nth-child(1){
			margin-right: 10rpx;
		}
	}
	
	
</style>
