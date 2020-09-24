<template>
	<view>
		<view  :class="tabIndex==2?'main-gray':''">
			<view  class="m-e-i">
					<view class="item-l">
						<image :src="dataProps.img" :lazy-load="true" ></image>
					</view>
					<view class="item-r">
						<view class="tit">大经理</view>
						<view class="name">商户名称：描述d顶顶顶顶顶顶顶顶顶大大大多多</view>
						<view class="time">2020-12-2</view>
					</view>
				</view>
			
		 
		</view>
	
	</view>
</template>

<script>
	export default {
		name:'myExchangeItem',
		props: {
			dataProps: {
				type: Object,
				default: () => {}
			},
			tabIndex: {
				type: Number,
				default: () => {}
			},
		},
		data(){
			return {
				show: false,
				content: `
					空山新雨后<br>
					天气晚来秋
				`
			}
		},
		methods:{
			 
		}
	}
</script>

<style lang="scss" scoped>
	.m-e-i{
		display: flex;
		 padding:15rpx 0;
		 align-items: center;
		
		.item-l{
			display: flex;
	        align-items: center; 
		    justify-content: center;
			width:243rpx;
			height:141rpx;
			background:rgba(255,255,255,1);
			border-radius:2rpx;
			margin-right: 20rpx;
			image{
				max-width:243rpx;
				max-height:141rpx;
			}
		} 
		.item-r{
			flex: 1;
			.title{
				font-size: 30rpx;
				color: #333;
				line-height: 40rpx;
			}
			.name{
				font-size: 30rpx;
				line-height: 40rpx;
				margin-top: -10rpx;
				color: #8F8F94;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				width: 420rpx;
			}
			.time{
				width: 98%;
				
				font-size: 16rpx;
				color: #D8D8D8;
			}
			 
		}
	}
	.slot-content{
		padding-top:50rpx;
		.imageBox{
			width: 312rpx;
			height: 312rpx;
			border:1px solid rgba(221, 221, 221, 1);
			margin: auto;
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 8rpx;
			.img{
				width: 100%;
				height: 100%;
	
			}
		}
		.title{
			font-size: 30rpx;
			text-align: center;
			color: #333333;
			margin-top: 30rpx;
		}
		.direction{
			font-size: 30rpx;
			line-height: 40rpx;
			text-align: center;
			color: #888888;
			padding: 40rpx;
		}
		.u-model-title{
			visibility: hidden !important; 
		}
	}
	.main-gray{
		filter:grayscale(1);
	}
</style>
