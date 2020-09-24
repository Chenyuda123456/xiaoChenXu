<template>
	<view class="pageClass">
		<view>
			<view>
				<swiper class="swiper" circular='true' :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" style='height: 300rpx;'>
					<swiper-item style="height: 300rpx;">
					 
							 <image style="width: 100%;height: 300rpx;"  mode="scaleToFill" src="../../../static/image/frame/home/swiper/swiper01.png" @error="imageError"></image>
						 
					</swiper-item>
					<swiper-item>
					 
							<image style="width: 100%;height: 300rpx;" mode="scaleToFill" src="../../../static/image/frame/home/swiper/swiper02.png" @error="imageError"></image>
					 
					</swiper-item>
					<swiper-item>
					 
							<image style="width: 100%;height: 300rpx;"  mode="scaleToFill" src="../../../static/image/frame/home/swiper/swiper03.png" @error="imageError"></image>
						 
					</swiper-item>
				</swiper>
			</view>
		</view>
		
		<view >
			 <view class="list">
				<navigator url="/pages/frame/show/show" open-type="switchTab" hover-class="other-navigator-hover">
							    <view class="list-item">
							    	 <image   class='list-item-img' src="../../../static/image/frame/home/grid/OA.png" @error="imageError"></image>
							    	 <view>产品展示</view>
							    </view>               
				</navigator>
							<navigator url="/pages/frame/new/new" open-type="switchTab" hover-class="other-navigator-hover">
								<view class="list-item">
									 <image  class='list-item-img' src="../../../static/image/frame/home/grid/OA.png" @error="imageError"></image>
									 <view>企业资讯</view>
								</view>               
							</navigator>
							<navigator url="/pages/frame/staff/staff"   hover-class="other-navigator-hover">
								<view class="list-item">
									 <image   class='list-item-img' src="../../../static/image/frame/home/grid/OA.png" @error="imageError"></image>
									 <view>员工风采</view>
								</view>               
							</navigator>
							<navigator url="/pages/tabBar/extUI/extUI" open-type="switchTab" hover-class="other-navigator-hover">
								<view class="list-item" @click="go()">
									 <image  class='list-item-img' src="../../../static/image/frame/home/grid/OA.png" @error="imageError"></image>
									 <view>电话咨询</view>
								</view>               
							</navigator>
						  
			 </view>
		 
		</view>
		<view class="show">
			<view class="title flex space-between">
				<text class="name">产品展示</text>
					<navigator url="/pages/frame/show/show" open-type="switchTab" hover-class="other-navigator-hover">
						<text class="more">查看更多 ></text>
					</navigator>
			</view>
			<view class="line"></view>
			<view class="show-b">
				<swiper class="swiper" circular='true' :next-margin="nextMargin"    :interval="interval" :duration="duration">
					<swiper-item>
							 <image style="height: 100%;border-radius: 30rpx;width: 96%;"  mode="scaleToFill" src="../../../static/image/frame/home/swiper/swiper01.png" @error="imageError"></image>
					</swiper-item>
					<swiper-item>
							<image style="height: 100%;border-radius: 30rpx;width: 96%"   mode="scaleToFill" src="../../../static/image/frame/home/swiper/swiper02.png" @error="imageError"></image>
					</swiper-item>
					<swiper-item>
							<image style="height: 100%;border-radius: 30rpx;width: 96%"  mode="scaleToFill" src="../../../static/image/frame/home/swiper/swiper03.png" @error="imageError"></image>
					</swiper-item>
				</swiper>
			</view>
			
			
			
		</view>
		<view class="new">
			<view class="title flex space-between">
				<text class="name">企业资讯</text>
					<navigator url="/pages/frame/new/new" open-type="switchTab" hover-class="other-navigator-hover">
						<text class="more">查看更多 ></text>
					</navigator>
			</view>
			<view class="line"></view>
			<NewItem :dataProps="dataProps"></NewItem>
			<NewItem :dataProps="dataProps"></NewItem>
			<NewItem :dataProps="dataProps"></NewItem>
		</view>
		<view class="staff">
			<view class="title flex space-between">
				<text class="name">员工风采</text>
					<navigator url="/pages/frame/staff/staff"   hover-class="other-navigator-hover">
						<text class="more">查看更多 ></text>
					</navigator>
			</view>
			<view class="line"></view>
			<view class="staff-b">
					<swiper class="swiper"   display-multiple-items='2' next-margin="50rpx"    :interval="interval" :duration="duration">
						<swiper-item>
							<view>
								 <image style="height: 150rpx;border-radius: 10rpx; width: 96%;"  mode="scaleToFill" src="../../../static/image/frame/home/swiper/swiper01.png" @error="imageError"></image>
								 <view class="staff-text-name">陈经理 </view>
								 <view class="staff-text-direction">是是是是是是所所所所所所所所是是是搜索是是是是</view>
							</view>
						</swiper-item >
						<swiper-item>
							<view>
								<image style="height: 150rpx;border-radius: 10rpx; width: 96%;"   mode="scaleToFill" src="../../../static/image/frame/home/swiper/swiper02.png" @error="imageError"></image>
								<view class="staff-text-name">陈经理 </view>
								<view class="staff-text-direction">是是是是是是所所所所所所所所是是是搜索是是是是</view>
							</view>
						</swiper-item>
						<swiper-item>
							<view>
								<image style="height: 150rpx;border-radius: 10rpx; width: 96%;"  mode="scaleToFill" src="../../../static/image/frame/home/swiper/swiper03.png" @error="imageError"></image>
								<view class="staff-text-name">陈经理 </view>
								<view class="staff-text-direction">是是是是是是所所所所所所所所是是是搜索是是是是</view>
							</view>
						</swiper-item>
					</swiper>
				</view>
			
		</view>
	</view>
</template>
<script>
	// import  uIcon from 'uview-ui/components/u-icon/u-icon.vue'
	import NewItem from '../new/new-item.vue'
export default {
	inheritAttrs: false,
	name: 'home',
	props: {},
	components: {NewItem},
	watch: {},
	onLoad() {},
	onShow() {},
	computed: {},
	onReady() {},
	data() {
		return {
		    background: ['color1', 'color2', 'color3'],
			indicatorDots: true,
			autoplay: true,
			interval: 2000,
			duration: 500,
			nextMargin:"50rpx",
			dataProps:{
				img:'../../../static/image/frame/home/grid/OA.png'
			}
		};
	},
	methods: {
		go(){
		 	uni.makePhoneCall({
		 	
		 	// 手机号
		    phoneNumber: '110', 
		
			// 成功回调
			success: (res) => {
				console.log('调用成功!')	
			},
		
			// 失败回调
			fail: (res) => {
				alert('调用失败!')
			}
			
		  });
		}
	}
};
</script>
<style lang="scss" scoped>
.pageClass {
	overflow: auto;
	background-color: #c0c9d7;
	/deep/.moon-input {
	}
	.list{
		display: flex;
		justify-content: space-around;
		background-color: #fff;
		padding: 30rpx 0 20rpx 0;
		.list-item{
			text-align: center;
			.list-item-img{
				width: 80rpx;
				height: 80rpx;
				border-radius: 50%;
			
			}
		}
	}
	.title{
	
		align-items: center;
		.name{
			font-size: 32rpx;
			color: #666666;
			line-height: 92rpx;
		}
		.more{
			font-size: 24rpx;
			color: #D8D8D8;
			line-height: 92rpx;
		}
	}
	.line{
		height: 1px;
		background-color: #EEEEEE;
		margin-bottom: 30rpx;
	}
	.show{
		margin-top: 24rpx;
		padding: 0 20rpx;
		background-color: #fff;
		padding-bottom: 30rpx;
		.show-b{
			img{
				border-radius: 20rpx;
			}
		}
	}
	.new{
		margin-top: 24rpx;
		padding: 0 20rpx;
		background-color: #fff;
	}
	.staff{
		margin-top: 24rpx;
		padding: 0 20rpx;
		background-color: #fff;
		.staff-text-name{
			font-size: 32rpx;
		}
		.staff-text-direction{
			font-size: 24rpx;
			 width: 98%;
			 white-space: nowrap;
			 overflow: hidden;
			 text-overflow: ellipsis;
		}
		
	}
}
</style>
