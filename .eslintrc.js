/** @type {import('eslint').Linter.BaseConfig} */
module.exports = {
  root: true,
  env: {
    es2021: true,
    es6: true,
    node: true,
    browser: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    warnOnUnsupportedTypeScriptVersion: false,
  },
  plugins: ['@typescript-eslint', 'n', 'import', 'promise'],
  extends: ['eslint:recommended', 'plugin:n/recommended', 'plugin:promise/recommended', 'plugin:@typescript-eslint/recommended-type-checked', 'plugin:import/typescript'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    'n/no-missing-import': 'off',
    'prefer-arrow-callback': 'error',
    'sort-imports': ['error', { ignoreCase: true, ignoreDeclarationSort: true, ignoreMemberSort: true }],
    'import/order': ['error', { alphabetize: { order: 'asc', caseInsensitive: true } }],
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/require-await': 'off',
  },
  overrides: [
    {
      files: ['backend/testing/*.ts'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/require-await': 'off',
        '@typescript-eslint/no-empty-function': 'off',
      },
    },
    {
      files: ['*.js'],
      parserOptions: {
        project: false,
      },
      extends: ['plugin:import/recommended'],
    },
  ],
}
