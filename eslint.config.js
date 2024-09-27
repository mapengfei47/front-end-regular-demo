/*
 * @Author: allanma allanma@xiaoe-tech.com
 * @Date: 2024-09-27 16:11:15
 * @LastEditors: allanma allanma@xiaoe-tech.com
 * @LastEditTime: 2024-09-27 16:32:00
 * @FilePath: /front-end-regular-demo/eslint.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'

export default [
	{
		files: ['**/*.{js,mjs,cjs,ts,vue}'],
		rules: {
			'no-unused-vars': 'error',
			'no-console': 'error',
			'@typescript-eslint/ban-ts-comment': 0,
			'@typescript-eslint/no-unused-vars': 0,
		},
	},
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	...pluginVue.configs['flat/essential'],
	{
		files: ['**/*.vue'],
		languageOptions: { parserOptions: { parser: tseslint.parser } },
	},
]
