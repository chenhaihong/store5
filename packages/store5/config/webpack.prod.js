const { resolve } = require('path');
const webpack = require('webpack'); // eslint-disable-line

module.exports = function(
  env, // eslint-disable-line
  argv, // eslint-disable-line
) {
  return {
    name: 'store5 dev',
    target: 'web',
    mode: 'production',
    entry: {
      store5: resolve(__dirname, '../index.js'),
    },
    output: {
      path: resolve(__dirname, '../dist'),
      filename: '[name].min.js',
      library: 'store5',
      libraryTarget: 'umd',
    },
    module: {
      rules: [
        {
          resource: {
            test: /\.js$/,
            exclude: /node_modules/,
          },
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    modules: false,
                  },
                ],
              ],
              // plugins: getAllStagePluginsOfBabel(),
            },
          },
        },
      ],
    },
  };
};

/**
 * 获取babel stage0、1、2、3的所有插件
 * @returns {Array} 一个包含`babel-loader`插件配置的数组
 */
function getAllStagePluginsOfBabel() {
  return [
    // Stage 0
    '@babel/plugin-proposal-function-bind',

    // Stage 1
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-logical-assignment-operators',
    ['@babel/plugin-proposal-optional-chaining', { loose: false }],
    ['@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' }],
    ['@babel/plugin-proposal-nullish-coalescing-operator', { loose: false }],
    '@babel/plugin-proposal-do-expressions',

    // Stage 2
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    '@babel/plugin-proposal-function-sent',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-numeric-separator',
    '@babel/plugin-proposal-throw-expressions',

    // Stage 3
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-syntax-import-meta',
    ['@babel/plugin-proposal-class-properties', { loose: false }],
    '@babel/plugin-proposal-json-strings',
  ];
}
