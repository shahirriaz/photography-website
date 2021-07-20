module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: ["google"],
  rules: {
    "indent": "off",
    "no-tabs": 0,
    "space-before-function-paren": ["error", "always"],
    "linebreak-style": ["error", "windows"],
    "quotes": [2, "double"],
    "max-len": ["error", { ignoreStrings: true }],
    "object-curly-spacing": [2, "always"],
  },
};
