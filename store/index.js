import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		activeTabIndex: 0
	},
	mutations: {
		changeActiveTabIndex(state, newIndex) {
			state.activeTabIndex = newIndex;
		}
	}
});

export default store;
