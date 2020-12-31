module.exports = {
  env: {
    es6: true,
    node: true,
    'jest/globals': true
  },
  // parser: 'babel-eslint',
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier', 'jest'],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  rules: {
    'no-tabs': ['error', { allowIndentationTabs: true }],
    'comma-dangle': ['error', 'never'],
    'consistent-return': 0,
    'no-console': 0,
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto'
      }
    ],
    'import/prefer-default-export': 'off'
  }
};
