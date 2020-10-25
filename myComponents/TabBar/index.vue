<template>
	<view class="tab">
		<view :class="activeTabIndex==0?'item active':'item'" @click="changeActiveTabIndex(0)">
			<view class="uni-icon uni-icon-earth"></view>
		</view>
		<view :class="activeTabIndex==1?'item active':'item'" @click="changeActiveTabIndex(1)">
			<view class="uni-icon uni-icon-found"></view>
		</view>
		<view :class="activeTabIndex==2?'item active':'item'" @click="changeActiveTabIndex(2)">
			<view class="uni-icon uni-icon-user"></view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'TabBar',
		data() {
			return {

			}
		},
		props: ['activeTabIndex', 'changeActiveTabIndex'],
		mounted() {
			console.log(this);
		}
	}
</script>

<style>
	@import "@/fonts/iconfont.css";

	.tab {
		position: fixed;
		z-index: 999;
		height: 150rpx;
		width: 100%;
		bottom: 0;
		background-color: #F7F7F7;
		display: flex;
		justify-content: space-around;
		border-top: #CCCCCC 4rpx solid;
	}

	/* 	.uni-icon {
		color: #929292;
		border-radius: 50%;
		box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 1), 0 5px 8px 0 rgba(0, 0, 0, .14), 0 1px 14px 0 rgba(0, 0, 0, .12);
	} */

	.item {
		width: 25%;
		color: #929292;
		font-size: 48rpx;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
	}

	.active .uni-icon {
		color: #20D785;
	}
</style>
