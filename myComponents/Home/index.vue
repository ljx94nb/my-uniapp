<template>
	<view class="home-container">
		<view>home</view>
		<button type="primary" open-type="feedback">反馈</button>
		<button type="primary" @click="getPhonePictures">打开相册</button>
		<image class="img-test" :src="imgSrc" :data-src="imgSrc" mode=""></image>
	</view>
</template>

<script>
	import Exif from 'exif-js';

	export default {
		name: 'Home',
		data() {
			return {
				imgSrc: ''
			};
		},
		methods: {
			getPhonePictures() {
				// 从相册选择6张图
				uni.chooseImage({
					count: 6,
					sizeType: ['original', 'compressed'],
					sourceType: ['album'],
					success: (res) => {
						this.imgSrc = res.tempFilePaths[0];
						console.log(this.imgSrc, Exif.getData);
						// 预览图片
						// uni.previewImage({
						// 	urls: res.tempFilePaths,
						// 	longPressActions: {
						// 		itemList: ['发送给朋友', '保存图片', '收藏'],
						// 		success: function(data) {
						// 			console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
						// 		},
						// 		fail: function(err) {
						// 			console.log(err.errMsg);
						// 		}
						// 	}
						// });
					}
				});
			}
		}
	}
</script>

<style>
	.img-test {
		width: 750rpx;
		height: 400rpx;
	}
</style>
