<!--
 * @Author: allanma allanma@xiaoe-tech.com
 * @Date: 2024-09-25 11:40:07
 * @LastEditors: allanma allanma@xiaoe-tech.com
 * @LastEditTime: 2024-09-26 14:51:24
 * @FilePath: /front-end-regular-demo/src/components/HelloWorld.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()
console.log('HelloWorld.vue')
console.log('HelloWorld.vue')
console.log('HelloWorld.vue')
console.log('HelloWorld.vue')
console.log('HelloWorld.vue')
const a = '111'
console.log('HelloWorld.vue' + a)

const count = ref(0)
function addCount() {
	count.value++
}
addCount()

function addCount2() {
	count.value++
}

addCount2()

function addCount3() {
	count.value++
}

addCount3()
</script>

<template>
	<h1>{{ msg }}</h1>

	<div class="card">
		<button type="button" @click="count++">count is {{ count }}</button>
		<p>
			Edit
			<code>components/HelloWorld.vue</code> to test HMR
		</p>
	</div>

	<p>
		Check out
		<a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
			>create-vue</a
		>, the official Vue + Vite starter
	</p>
	<p>
		Learn more about IDE Support for Vue in the
		<a
			href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
			target="_blank"
			>Vue Docs Scaling up Guide</a
		>.
	</p>
	<p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
	color: #888;
}
</style>
