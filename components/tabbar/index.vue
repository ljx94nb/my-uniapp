<template>
	<view class="tab">
		<view :class="activeTabIndex==0?'item active':'item'" @click="changeActiveTabIndex(this.$store.state, 0)">
			<view class="uni-icon uni-icon-home"></view>
			<view>首页</view>
		</view>
		<view :class="activeTabIndex==1?'item active':'item'" @click="changeActiveTabIndex(this.$store.state, 1)">
			<view class="uni-icon uni-icon-list"></view>
			<view>分类</view>
		</view>
		<view :class="activeTabIndex==2?'item active':'item'" @click="changeActiveTabIndex(this.$store.state, 2)">
			<view class="uni-icon uni-icon-compose"></view>
			<view>购物车</view>
		</view>
		<view :class="activeTabIndex==3?'item active':'item'" @click="changeActiveTabIndex(this.$store.state, 3)">
			<view class="uni-icon uni-icon-person"></view>
			<view>我的</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		props: ['activeTabIndex', 'changeActiveTabIndex']
	}
</script>

<style>
	.tab {
		position: fixed;
		z-index: 999;
		height: 200rpx;
		width: 100%;
		bottom: 0;
		background-color: #F7F7F7;
		display: flex;
		justify-content: space-between;
		border-top: #CCCCCC 4rpx solid;
	}

	.uni-icon {
		color: #929292;
		border-radius: 50%;
		box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 1), 0 5px 8px 0 rgba(0, 0, 0, .14), 0 1px 14px 0 rgba(0, 0, 0, .12);
	}

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
