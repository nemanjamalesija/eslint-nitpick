import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import importPlugin from 'eslint-plugin-import';
import { defineConfig } from 'eslint/config';

export default defineConfig([
    js.configs.recommended,
    ...tseslint.configs.recommended,
    ...pluginVue.configs['flat/essential'],
    {
        files: ['**/*.{js,mjs,cjs,ts,mts,cts,vue}'],
        languageOptions: {
            globals: globals.browser
        }
    },
    {
        files: ['**/*.{ts,tsx,vue}'],
        languageOptions: {
            parserOptions: {
                project: './tsconfig.json',
                tsconfigRootDir: import.meta.dirname,
            }
        },
        plugins: {
            import: importPlugin
        },
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
            'vue/no-unused-properties': [
                1,
                { groups: ['props', 'data', 'computed', 'methods', 'setup'] }
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
        languageOptions: {
            parserOptions: {
                parser: tseslint.parser
            }
        },
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
    }
]);

        }
    }
]);
