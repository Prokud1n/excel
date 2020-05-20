const prettierConfig = require('./.prettierrc.js');

module.exports = {
  "extends": ["prettier", "eslint:recommended", "google"],
  "parser": "babel-eslint",
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  },
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": ["error", prettierConfig]
  }
}