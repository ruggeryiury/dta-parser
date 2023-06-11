/** @type {import('eslint').Linter.Config} */
module.exports = {
    env: {
        node: true,
        browser: true,
        amd: true
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint'
    ],
    ignorePatterns: ["src/debug/test.ts"],
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            extends: [
                'plugin:@typescript-eslint/recommended',
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
            ],
            parserOptions: {
                project: ['./tsconfig.json'],
            },
            rules: {
                'prefer-const': ['error', {
                    destructuring: 'any',
                    ignoreReadBeforeAssign: false,
                }],
            }
        },
    ],
    root: true,
};