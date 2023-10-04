export default {
  extends: [
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    "plugin:vue/vue3-recommended",
    // 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
  ],
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "singles"],
    ident: ["error", 4],
  },
};
