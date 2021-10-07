<template>
	<el-row justify="center">
		<el-col :span="12" style="text-align: center;">
			<img src="https://media.discordapp.net/stickers/859988234376052746.png?size=160">
			<el-form style="text-align:left; margin-top: 0.5rem;">
				<el-form-item label="Gun Name">
					<el-input v-model="gunName"/>
				</el-form-item>
				<el-form-item >
					<el-checkbox v-model="isAssaultRifle" label="Assault Rifle"/>
				</el-form-item>
			</el-form>
			<a :href="downloadResult" :download="`${gunId}.xml`" style="display: inline-flex; gap: 0.5rem">
				<img src="https://media.discordapp.net/stickers/885973869167530015.png?size=64">
				<span style="margin-top: auto; margin-bottom: auto;">Download</span>
			</a>
		</el-col>
	</el-row>
	<pre style="margin: 0; max-height: 650px; overflow: scroll;">
		<code class="hljs" v-html="parsedResult"/>
	</pre>
</template>

<script setup>
	import { computed, ref } from "vue-demi";
	import hljs from 'highlight.js/lib/common';
import { assaultRifle, gun } from '../gunny';

	let gunName = ref('');
	let isAssaultRifle = ref(false);
	let gunId = computed(() => gunName.value.toLowerCase());

	const parsedResult = computed(() => hljs.highlight(result.value, {language: 'xml'}).value);
	const downloadResult = computed(() => 'data:text/plain;charset=utf-8,' + encodeURIComponent(result.value));

	const result = computed(() => isAssaultRifle.value ? assaultRifle(gunName.value, gunId.value) : gun(gunName.value, gunId.value));
</script>