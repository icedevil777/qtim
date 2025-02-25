import js from '@eslint/js';
import nuxt from 'eslint-plugin-nuxt';
import prettier from 'eslint-plugin-prettier/recommended';

export default [
  js.configs.recommended,
  {
    plugins: {
      nuxt,
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
    },
  },
  {
    ignores: ['.nuxt/'],
  },
  prettier,
];
