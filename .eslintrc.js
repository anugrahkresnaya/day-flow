module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended', // enables prettier integration
    'next/core-web-vitals'
  ],
  plugins: ['react', '@typescript-eslint', 'import', 'prettier', 'react-hooks'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    // Prettier
    'prettier/prettier': 'warn',

    // Style
    semi: ['warn', 'never'], // use semi: false style
    quotes: ['warn', 'single'],
    indent: ['warn', 2],

    // Best practices
    eqeqeq: 'warn',
    curly: 'warn',
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'no-console': 'warn',
    'no-debugger': 'warn',

    // TypeScript-specific
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'warn',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],

    // React-specific
    'react/prop-types': 'off',
    'react/no-unknown-property': 'warn',

    // Import/order
    'import/order': ['warn', { groups: ['builtin', 'external', 'internal'] }]
  }
}
