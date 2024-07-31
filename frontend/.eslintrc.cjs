module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@typescript-eslint'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-magic-numbers': 'warn',
    'no-multi-spaces': 'error',
    'no-trailing-spaces': 'error',
    'indent': ['error', 2, { SwitchCase: 1 }],
    '@typescript-eslint/indent': ['error', 2, { SwitchCase: 1 }],
    'quotes': ['error', 'single', { avoidEscape: true }],
    'comma-dangle': ['error', 'always-multiline'],
    'no-unused-vars': ['error', { args: 'none', ignoreRestSiblings: true }],
    '@typescript-eslint/no-unused-vars': ['error', { args: 'none', ignoreRestSiblings: true }],
  }
}
