module.exports = {
  'rules': {
    'indent': [2, 2, {'SwitchCase': 1}],
    'no-param-reassign': 1,
    'linebreak-style': [2, 'unix'],
    'semi': [2, 'always'],
    'eol-last': 1,
    'no-unused-expressions': 0,
    'no-unused-vars': 0,
    'no-console': 0,
    'jsx-quotes': [2, 'prefer-double'],
    'quotes': [2, 'single']
  },
  'env': {
    'browser': true,
    'es6': true,
    'mocha': true,
    'node': true
  },
  'globals': {
    'expect': true
  },
  'extends': 'eslint:recommended',
  'ecmaFeatures': {
    'classes': true,
    'jsx': true,
    'modules': true,
    'experimentalObjectRestSpread': true
  },
  'plugins': [
    'react'
  ]
};
