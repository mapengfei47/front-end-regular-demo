<!--
 * Copyright: 小鹅通-企培产品中心提供技术支持
 * @Author: allanma allanma@xiaoe-tech.com
 * @Date: 2024-09-25 11:40:07
 * @LastEditors: allanma allanma@xiaoe-tech.com
 * @LastEditTime: 2024-09-26 14:19:13
 * @FilePath: /front-end-regular-demo/src/App.vue
 * @Description: 
-->
<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
console.log('Vite + Vue')
console.log('Vite + Vue')
console.log('Vite + Vue')
</script>

<template>
	<div>
		<a href="https://vitejs.dev" target="_blank">
			<img src="/vite.svg" class="logo" alt="Vite logo" />
		</a>
		<a href="https://vuejs.org/" target="_blank">
			<img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
		</a>
	</div>
	<HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
	transition: filter 300ms;
}
.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
