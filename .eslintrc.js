module.exports = {
  extends: [
    'airbnb',
    'prettier',
    'plugin:prettier/recommended',
  ],
  plugins: [
    'prettier',
    'compat',
  ],
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'prettier/prettier': 'warn',
    'linebreak-style': 'off', // Gets automatically converted on Git commit
    'import/prefer-default-export': 'off', // Conflicts with Storybook API
  },
};