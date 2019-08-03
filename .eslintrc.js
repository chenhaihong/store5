// .eslintrc
// 说明：该项目中不检查代码风格，只做静态语法检查。
module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: [],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    // Possible Errors
    // https://cn.eslint.org/docs/rules/#possible-errors
    'no-console': 'error',

    // Best Practices
    // https://cn.eslint.org/docs/rules/#best-practices
    'class-methods-use-this': 'error',

    // Variables
    // https://cn.eslint.org/docs/rules/#variables
    'no-undef': 'error',
    'no-unused-vars': 'error',

    // Node.js and CommonJS
    // https://cn.eslint.org/docs/rules/#nodejs-and-commonjs

    // ECMAScript 6
    // https://cn.eslint.org/docs/rules/#ecmascript-6
    'callback-return': 'error',
    'global-require': 'error',
    'handle-callback-err': 'error',
    'no-buffer-constructor': 'error',
    'no-process-env': 'error',
    'no-process-exit': 'error',
  },
};
