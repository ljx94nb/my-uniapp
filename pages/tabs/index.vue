<template>
	<view>
		<swiper :style="'min-height:'+height+'px'" current="activeTabIndex" duration="0" @change="swiperChange">
			<swiper-item>
				<view class="swiper-item">首页</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item" style="background-color: #20D785;">分类</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item" style="background-color: #6641E2;">购物车</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item" style="background-color: #FF4081;">我的</view>
			</swiper-item>
		</swiper>
		<tabbar activeTabIndex="activeTabIndex" changeActiveTabIndex="changeActiveTabIndex"></tabbar>
	</view>
</template>

<script>
	import tabbar from '@/components/tabbar/index.vue';
	import {
		mapState,
		mapMutations
	} from 'vuex';

	export default {
		data() {
			return {
				height: 0
			}
		},
		components: {
			tabbar
		},
		computed: {
			...mapState(['activeTabIndex'])
		},
		methods: {
			...mapMutations(['changeActiveTabIndex']),
			swiperChange(e) {
				this.changeActiveTabIndex(this.$store.state, e.detail.current);
			}
		},
		onLoad: function() {
			uni.getSystemInfo({
				success: res => {
					this.height = res.screenHeight;
					// console.log(this.height);
				}
			})
		}
	}
</script>

<style>
	@import "@/common/icon.css";

	.swiper-item {
		display: flex;
		width: 750rpx;
		height: 100%;
		text-align: center;
		background-color: #00BFFF;
		justify-content: center;
		align-items: center;
	}
</style>
