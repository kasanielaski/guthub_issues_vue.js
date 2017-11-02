<template lang="pug">
	div#app
		SearchForm(@searchIssues='search')
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
			userName: '',
			repoName: '',
			userIssues: []
		}
	},
	computed: {
		page() {
			return this.$store.state.page;
		},
		perPage() {
			return this.$store.state.perPage;
			localStorage.setItem('perPage', data);
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
		},
		search(data) {
			[this.userName, this.repoName] = data;
			localStorage.setItem('name', this.userName);
			localStorage.setItem('repo', this.repoName);
			this.findIssues();
		}
	},
	created() {
		if(localStorage.getItem('name') && localStorage.getItem('name')) {
			const name = localStorage.getItem('name');
			const repo = localStorage.getItem('repo');
			const data = [name, repo];
			this.search(data);
		}

		if(localStorage.getItem('perPage')) {
			this.perPage = localStorage.getItem('perPage');
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
