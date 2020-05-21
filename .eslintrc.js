module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  extends: ["@nuxtjs", "plugin:nuxt/recommended", "eslint-config-prettier"],
  // add your custom rules here
  rules: {
    camelcase: "off",
    "dot-notation": [2, { allowKeywords: true, allowPattern: "[a-z]*" }],
    "vue/singleline-html-element-content-newline": [
      "error",
      {
        ignoreWhenNoAttributes: true,
        ignoreWhenEmpty: true
      }
    ],
    "vue/multiline-html-element-content-newline": "off",
    "vue/max-attributes-per-line": [
      "error",
      {
        singleline: 1,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ],
    "vue/html-closing-bracket-newline": "off",
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always"
        }
      }
    ]
  }
};
