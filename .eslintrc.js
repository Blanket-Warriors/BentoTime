// Our Style rules that are enforced with ESLint
module.exports = {
  "extends": "eslint:recommended",
  "rules": {
    "indent": ["warn", 2, {"SwitchCase": 1}],
    "no-param-reassign": 1,
    "linebreak-style": ["warn", "unix"],
    "semi": ["warn", "always"],
    "eol-last": 1,
    "no-unused-expressions": 0,
    "no-unused-vars": 0,
    "no-console": 0,
    "jsx-quotes": ["warn", "prefer-double"],
    "quotes": ["warn", "double"]
  },
  "env": {
    "browser": true,
    "es6": true,
    "mocha": true,
    "node": true
  },
  "globals": {
    "browser": true,
    "expect": true,
    "jest": true,
    "sinon": true
  },
  parserOptions: {
    "sourceType": "module",
    "ecmaVersion": 7,
    "ecmaFeatures": {
      "jsx": true,
      "experimentalObjectRestSpread": true
    }
  },
  "plugins": ["react"]
};
