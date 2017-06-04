<template>
	<div>
		<h1 class="title">{{ msg }}</h1>
		<C :totalPage='parentTotalPage' :changeCallBack='parentChangeCallBack'></C>
		
	</div>
</template>

<script>
	import C from './c'

	export default {
		components: {
			C
		},
		data(){
			return {
				parentTotalPage:100,
				msg: 'Update your data here.'
			}
		},
		methods: {
			parentChangeCallBack: function (num){
				console.log(111);
				this.msg = 'Update your data here. Page: '+num
			}
		}
	}
</script>

<style>
body,html {margin:0;padding:0;}
.title {margin: 200px 0;}
</style>