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
  extends: [
    'eslint:recommended',
    'plugin:n/recommended',
    'plugin:promise/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
  ],
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
  },
  overrides: [
    {
      files: ['backend/testing/init.ts'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/require-await': 'warn',
        '@typescript-eslint/no-empty-function': 'warn',
      },
    },
    {
      files: ['*.js'],
      parserOptions: {
        project: false,
      },
      extends: ['plugin:import/recommended', 'plugin:@typescript-eslint/disable-type-checked'],
    },
  ],
}
