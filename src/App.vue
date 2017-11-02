<template lang="pug">
	div#app
		SearchForm
		IssuesList(:userIssues='userIssues' v-if='userIssues')
</template>

<script>
import SearchForm from './components/SearchForm.vue'
import IssuesList from './components/IssuesList.vue'

export default {
	components: {
		SearchForm,
		IssuesList
	},
	data() {
		return {
			userIssues: []
		}
	},
	computed: {
		page() {
			return this.$store.state.page;
		},
		perPage() {
			localStorage.setItem('perPage', this.$store.state.perPage);
			return this.$store.state.perPage;
		},
		userName() {
			localStorage.setItem('userName', this.$store.state.userName);
			return this.$store.state.userName;
		},
		repoName() {
			localStorage.setItem('repoName', this.$store.state.repoName);			
			return this.$store.state.repoName;
		} 
	},
	methods: {
		findIssues() {
			this.userIssues = [];
			fetch(`https://api.github.com/repos/${this.userName}/${this.repoName}/issues?per_page=${this.perPage}&page=${this.page}`)
			.then(r => r.json())
			.then(data => {
				this.userIssues.push(...data);
			})
			.catch(err => {
				console.log(`Fetch error: ${err}`);
			})
		}
	},
	created() {
		if(localStorage.getItem('userName') && localStorage.getItem('repoName') && localStorage.getItem('perPage')) {
			this.$store.commit('addUser', localStorage.getItem('userName'));
			this.$store.commit('addRepo', localStorage.getItem('repoName'));
			this.$store.commit('perPage', localStorage.getItem('perPage'));
			this.findIssues();
		}
	}
}
</script>

<style lang="scss">
@import './style.scss';

html,
body {
	margin: 0;
	padding: 0;
	background-color: lightblue;
}
#app {
	height: auto;
	width: 990px;
	margin: 5vh auto;
	padding: 3vh;
	border-radius: $default_radius;
	border: $common_border;
	background-color: cornsilk;
}
</style>
