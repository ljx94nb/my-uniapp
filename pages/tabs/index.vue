<template>
	<view>
		<swiper :style="'min-height:'+height+'px'" :current="activeTabIndex" duration="0" @change="swiperChange">
			<swiper-item>
				<Home />
			</swiper-item>
			<swiper-item>
				<view class="swiper-item" style="background-color: #20D785;">分类</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item" style="background-color: #6641E2;">购物车</view>
			</swiper-item>
		</swiper>
		<tab-bar :activeTabIndex="activeTabIndex" :changeActiveTabIndex="changeActiveTabIndex" />
	</view>
</template>

<script>
	import TabBar from '@/myComponents/TabBar/index.vue';
	import Home from '@/myComponents/Home/index.vue';
	import {
		mapState,
		mapActions
	} from 'vuex';

	export default {
		data() {
			return {
				active: 0,
				height: 0
			}
		},
		components: {
			TabBar,
			Home
		},
		computed: {
			...mapState(['activeTabIndex'])
		},
		methods: {
			...mapActions(['changeActiveTabIndex']),
			swiperChange(e) {
				this.changeActiveTabIndex(e.detail.current);
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
