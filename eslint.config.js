import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

export default [
  js.configs.recommended,
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
    },
    rules: {
      // Spacing and formatting (auto-fixable)
      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],
      'indent': ['error', 4],
      'comma-dangle': ['error', 'always-multiline'],
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      'space-before-blocks': 'error',
      'keyword-spacing': 'error',
      'space-infix-ops': 'error',
      'eol-last': 'error',
      'no-trailing-spaces': 'error',
      'no-multiple-empty-lines': ['error', { 'max': 1 }],
      
      // Code quality (auto-fixable)
      'no-var': 'error',
      'prefer-const': 'error',
      'no-console': 'warn',
      'no-debugger': 'error',
      'no-unused-vars': 'error',
      
      // Remove problematic TypeScript rules for now
    },
  },
  {
    ignores: ['dist/', 'node_modules/', '*.js']
  }
];