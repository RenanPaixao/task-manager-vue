module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    '@vue/typescript'
  ],

  parserOptions: {
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser'
  },

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'brace-style': ['error', '1tbs', { allowSingleLine: false }], // Require space after brace
    'comma-dangle': ['error', 'never'], // Remove comma on the end of objects
    'import/no-cycle': ['error', { amd: true, commonjs: true }], // Prevents dependencies cycles
    'import/no-duplicates': ['error'], // Prevent modules duplication
    quotes: ['error', 'single', { allowTemplateLiterals: true }], // Force single quotes
    'no-unused-vars': ['error', { args: 'all' }], /* Prevents unused vars. It can ignore vars with a definite
    template string in your start, if it be pass like a option */
    'no-unreachable': 'error' // prevents code bellow return, break and continue... statements

  }
};
