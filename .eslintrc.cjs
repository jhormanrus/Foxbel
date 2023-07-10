/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript"
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    project: ['./tsconfig.app.json', './tsconfig.node.json', './tsconfig.vitest.json']
  }
};
