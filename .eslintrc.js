module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'react-hooks'
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended'
  ],
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "@typescript-eslint/no-unused-vars": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/exhaustive-deps": "off",
    "@typescript-eslint/no-use-before-define": [2, { "functions": false, "classes": false }],
    "quotes": [2, "single", { "avoidEscape": true }],
    "semi": "error",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "react/prop-types": "off"
  }
}