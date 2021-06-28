'use strict';

module.exports = {
  root: true,

  parser: '@babel/eslint-parser',

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    requireConfigFile: false
  },

  env: {
    es6: true
  }
};
