import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint, { parser } from 'typescript-eslint';
import globals from 'globals';
import pluginVue from 'eslint-plugin-vue';
import * as importPlugin from 'eslint-plugin-import';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default defineConfig([
	{
		settings: {
			'import/resolver': {
				typescript: {
					project: './tsconfig.json'
				}
			}
		}
	},
	...tseslint.configs.recommended,
	pluginVue.configs['flat/essential'],
	importPlugin.flatConfigs.recommended,
	importPlugin.flatConfigs.typescript,
	{
		files: ['**/*.{js,mjs,cjs,ts,vue}'],
		plugins: { js },
		extends: ['js/recommended']
	},
	{
		files: ['**/*.{js,mjs,cjs,ts,vue}'],
		languageOptions: { globals: globals.browser }
	},

	{
		files: ['**/*.vue'],
		languageOptions: { parserOptions: { parser } }
	},
	{
		files: ['**/*.{ts,tsx,vue}'],
		rules: {
			'import/order': [
				1,
				{
					'pathGroups': [
						{
							'pattern': 'vue',
							'group': 'external',
							'position': 'before'
						}
					],
					'newlines-between': 'never'
				}
			],
			'import/prefer-default-export': 0,
			'import/named': 2,
			'import/default': 2,
			'import/no-commonjs': 2,
			'import/no-unresolved': 2,
			'import/no-nodejs-modules': 2,
			'@typescript-eslint/no-explicit-any': 0,
			'@typescript-eslint/ban-ts-comment': 2,
			'no-console': 2
		}
	},
	{
		files: ['**/*.vue'],
		rules: {
			'vue/multi-word-component-names': 0,
			'vue/v-if-else-key': 0,
			'vue/require-default-prop': 0,
			'vue/new-line-between-multi-line-property': 0,
			'vue/no-multiple-template-root': 0,
			'vue/no-v-for-template-key': 0,
			'vue/v-on-event-hyphenation': 0,
			'vue/custom-event-name-casing': 0,
			'vue/no-reserved-component-names': 0,
			'vue/require-explicit-emits': 0,
			'vue/prefer-prop-type-boolean-first': 0,
			'vue/no-static-inline-styles': 0,
			'vue/no-undef-components': [
				2,
				{
					'ignorePatterns': ['RouterView', 'RouterLink']
				}
			],
			'vue/component-name-in-template-casing': [
				2,
				'PascalCase',
				{
					'ignores': [
						'svg',
						'rect',
						'component',
						'transition',
						'transition-group',
						'keep-alive',
						'slot'
					]
				}
			],
			'vue/order-in-components': [
				2,
				{
					'order': [
						'el',
						'name',
						'key',
						'parent',
						'functional',
						['delimiters', 'comments'],
						['components', 'directives', 'filters'],
						'extends',
						'mixins',
						['provide', 'inject'],
						'ROUTER_GUARDS',
						'layout',
						'validate',
						'scrollToTop',
						'transition',
						'loading',
						'inheritAttrs',
						'model',
						['props', 'propsData'],
						'emits',
						'setup',
						'data',
						'fetch',
						'head',
						'computed',
						'watch',
						'watchQuery',
						'LIFECYCLE_HOOKS',
						'methods',
						['template', 'render'],
						'renderError'
					]
				}
			]
		}
	},
	{
		files: ['vite.config.ts', 'server/**/*.{js,ts}'],
		languageOptions: {
			globals: globals.node
		},
		rules: {
			'import/no-nodejs-modules': 0
		}
	},

	eslintPluginPrettierRecommended
]);

