module.exports = {
  root: true,

  env: { browser: true, es2021: true },

  settings: {
    "react": {
      "version": "detect"
    }
  },

  extends: [
    'eslint:recommended',
    'plugin:react-hooks/recommended',
    '@rocketseat/eslint-config/react',
    'plugin:@typescript-eslint/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    "@typescript-eslint/no-unused-vars": "off",
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
