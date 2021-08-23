module.exports = {
  "root": true,
  "env": {
    es6: true,
    node: true,
    commonjs: true,
  },
  "extends": ["google", "plugin:react/recommended"],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 9,
    "ecmaFeatures": {
      "jsx": true,
    },
    "sourceType": "module",
  },
  "rules": {
    "indent": "off",
    "no-tabs": 0,
    "space-before-function-paren": ["error", "always"],
    "linebreak-style": ["error", "windows"],
    "quotes": [2, "double"],
    "max-len": ["error", { ignoreStrings: true }],
    "object-curly-spacing": [2, "always"],
    "react/react-in-jsx-scope": 0,
    "comma-dangle": "off",
  },
};
