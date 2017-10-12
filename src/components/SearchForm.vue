<template lang="pug">
div#searchForm
	input(v-model='userInput' placeholder='Input user name and repository')
	button(@click='submit') SEARCH!
</template>

<script>
export default {
	data() {
		return {
			userInput:''
		}
	},
	methods: {
		submit() {
			this.$emit('searchIssues', [this.userName, this.repoName]);
		}
	},
	computed: {
		userName() {
			return this.userInput.split(' ')[0];
		},
		repoName() {
			return this.userInput.split(' ')[1];
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
