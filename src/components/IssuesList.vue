<template lang="pug">
div#issuesList
	div.issue(v-for='issue in userIssues')
		div.issueContainer
			img.avatar(:src='issue.user.avatar_url')
			br
			b username: {{ issue.user.login }}
			br
			a(:href='issue.user.html_url' target='_blank') user's profile
		div.issueContainer.info
			span issue's number: {{ issue.number }}
			br
			span issue's title: {{ issue.title }}
			br
			span issue's date: {{ issue.created_at }}
</template>

<script>
export default {
	props: {
		userIssues: {
			type: Array,
			required: true
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
	border-radius: $default_radius;
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
	width: 6.48vh;
	height: 6.48vh;
	border-radius: 100px;
	border: $common_border;
}
a {
	text-decoration: none;
	color: gray;
}
select {
	border-radius: $default_radius;
	background-color: $main_color;
	margin-bottom: 1vh;
	&:focus {
		outline: none;
	}
	&:active {
		background-color: darken($main_color, 10%)
	}
}
</style>
