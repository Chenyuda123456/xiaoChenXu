<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt" v-if="showVideo">
			<view>
				<video :src="src" @error="videoErrorCallback" autoplay controls></video>
				<view style="display: flex;" v-if="openProgress">
					<text>下载进度：</text>
					<progress style="flex: 1;width: 100%;" :percent="percent" show-info />
				</view>
			</view>
		</view>
	</view>
</template>
<script>
export default {
	data() {
		return {
			src: '',
			danmuValue: '',
			showVideo: false,
			openProgress: false,
			percent: 0
		};
	},
	onLoad(e) {
		this.src = e.url;
	},
	onReady() {
		setTimeout(() => {
			this.showVideo = true;
		}, 350);
	},
	methods: {
		videoErrorCallback(e) {
			this.openProgress = true;
			var downloadTask = uni.downloadFile({
				url: this.src,
				complete: res => {
					if (res.statusCode === 200) {
						this.percent = 100;
						this.openProgress = false;
						this.src = res.tempFilePath;
					}
				}
			});
			downloadTask.onProgressUpdate(res => {
				this.percent = res.progress;
			});
		}
	}
};
</script>

<style>
video {
	width: 690rpx;
}
</style>
