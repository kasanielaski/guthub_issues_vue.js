<template lang="pug">
div#issuesList
	div.issueContainer
		b result's count: 
		select(v-model='limit')
			option 
			option 5
			option 10
			option 15
	div.issue(v-for='issue in filteredIssues')
		div.issueContainer
			img.avatar(:src='issue.user.avatar_url')
			br
			b username: {{issue.user.login}}
			br
			a(:href='issue.user.html_url' target='_blank') user's profile
		div.issueContainer.info
			span issue's number: {{issue.number}}
			br
			span issue's title: {{issue.title}}
			br
			span issue's date: {{issue.created_at}}
</template>

<script>
export default {
	props: {
		userIssues: {
			type: Array,
			required: true
		}
	},
	data() {
		return {
			limit: '',
		}
	},
	computed: {
		filteredIssues() {
			if(this.limit === '') {
				localStorage.setItem('limit', this.limit);
				return this.userIssues;
			} else {
				localStorage.setItem('limit', this.limit);
				return this.userIssues.slice(0, this.limit);
			}			
		}
	},
	created() {
		if(localStorage.length > 0){
			this.limit = localStorage.getItem('limit');
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../style.scss';

#issuesList {
	width: 100%;
	height: auto;
	padding: 1vh 0;
	display: flex;
	flex-flow: column;
}
.issue {
	padding: 1vh 1vw;
	margin-bottom: 1vh;
	border: $common_border;
	background-color: $main_color;
	border-radius: 3px;
	display: flex;
	flex-wrap: nowrap;
}
.issueContainer {
	flex-grow: 1;
}
.info {
	text-align: right
}
.avatar {
	width: 70px;
	height: 70px;
	border-radius: 100px;
	border: $common_border;
}
a {
	text-decoration: none;
	color: gray;
}
select {
	border-radius: 3px;
	background-color: $main_color;
	margin-bottom: 1vh;
}
</style>
