import pluginRouter from '@tanstack/eslint-plugin-router'

/** @type {import('eslint').Linter.Config} */
export default [
  {
    ...pluginRouter.configs['flat/recommended'],

    extends: [],
    plugins: [],
    rules: {
      // Note: you must disable the base rule as it can report incorrect errors
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'require-await': 'error',
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        { prefer: 'type-imports' },
      ],
    },
  },
]
