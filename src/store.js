import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		userName: '',
		repoName: '',
		perPage: '',
		page: 1
	},
	mutations: {
		addUser(state, user) {
			this.state.userName = user;
		},
		addRepo(state, repo) {
			this.state.repoName = repo;			
		},
		prevPage(state) {
			if(this.state.page > 1 && this.state.perPage !== '') {
				this.state.page --;
			}
		},
		nextPage(state) {
			if(this.state.perPage !== '') {
				this.state.page ++;
			}
		},
		perPage (state, num) {
			this.state.perPage = num;
		}
	}
})