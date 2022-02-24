module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'arrow-body-style': 'warn',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'quotes': 'warn',
    'quote-props': 'off',
    'no-unused-vars': 'warn',
    'import/prefer-default-export': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-filename-extension': [
      1,
      { allow: 'as-needed', extensions: ['.jsx', '.tsx'] },
    ],
  },
};
