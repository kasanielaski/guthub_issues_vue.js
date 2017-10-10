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
	methods: {
		search(data) {
			this.userIssues = [];
			[this.userName, this.repoName] = data;
			this.findIssues();
		},
		findIssues() {
			fetch(`https://api.github.com/repos/${this.userName}/${this.repoName}/issues`)
			.then(r => r.json())
			.then(data => {
				this.userIssues.push(...data);
				console.log(data[0]);
			})
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
	border-radius: 3px;
	border: $common_border;
	background-color: cornsilk;
}
</style>
