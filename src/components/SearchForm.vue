<template lang="pug">
div#searchForm
	input(v-model='userInput' placeholder='Input user name and repository')
	button(@click='submit') SEARCH!
	section
		b result's count: 
		select(v-on:change='onSelect')
			option 
			option 5
			option 10
			option 15
	section.control-group
		button.control-group__prev(@click='prev') Prev
		button.control-group__next(@click='next') Next
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
			this.$store.commit('addUser', this.userName);
			this.$store.commit('addRepo', this.repoName);
			this.$parent.findIssues();
		},
		onSelect(e) {
			this.$store.commit('perPage', e.target.value);
			this.$parent.findIssues();			
		},
		prev() {
			this.$store.commit('prevPage');
			this.$parent.findIssues();
		},
		next() {
			this.$store.commit('nextPage');
			this.$parent.findIssues();			
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
	border-radius: $default_radius;
	border: $common_border;
}

select {
	border-radius: $default_radius;
	background-color: $main_color;
	margin-bottom: 1vh;
	font-size: 1.5vh;
	&:focus {
		outline: none;
	}
	&:active {
		background-color: darken($main_color, 10%)
	}
}

input {
	height: $default_height;
	padding-left: 1vw;
	margin-bottom: 1vh;
	border-radius: $default_radius;
	border: $common_border;
	&:focus {
		outline: none;
	}
}

button {
	height: $default_height;
	border-radius: $default_radius;
	border: $common_border;
	background-color: $main_color;
	margin-bottom: 1vh;
	font-size: 1.5vh;
	&:active {
		background-color: darken($main_color, 10%)
	}
	&:focus {
		outline: none;
	}
}

.control-group {
	&__prev,
	&__next {
		@extend button;
		min-width: 3vw;
		margin-right: .5vw; 
	}
}

</style>
