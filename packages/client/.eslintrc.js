module.exports = {
  extends: [
    'react-app',
    'airbnb',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'prettier/react'
  ],
  plugins: ['jsx-a11y', 'prettier'],
  rules: {
    semi: 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-underscore-dangle': 'off',
    'no-tabs': ['error', { allowIndentationTabs: true }],
    'comma-dangle': ['error', 'never'],
    'consistent-return': 0,
    'no-console': 0,
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto'
      }
    ],
    'import/prefer-default-export': 'off'
  }
};
