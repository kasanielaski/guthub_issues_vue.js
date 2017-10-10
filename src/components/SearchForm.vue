<template lang="pug">
div#searchForm
	input(v-model='userName' placeholder='input user name')
	input(v-model='repoName' placeholder='input repo name')
	button(@click='submit') SEARCH!
</template>

<script>
export default {
	data() {
		return {
			userName: 'jeargle',
			repoName: 'AlJabr'
		}
	},
	methods: {
		submit() {
			this.$emit('searchIssues', [this.userName, this.repoName]);
			this.userName = '';
			this.repoName = '';
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../style.scss';

#searchForm {
	padding: 1vh 1vw;
	display: flex;
	flex-flow: column;
	border-radius: 3px;
	border: $common_border;
}
input {
	height: $default_height;
	padding-left: 1vw;
	margin-bottom: 1vh;
	border-radius: 3px;
	border: $common_border;
}
button {
	height: $default_height;
	border-radius: 3px;
	border: $common_border;
	background-color: $main_color;
}
button:focus {
	outline: none;
}
</style>
