const { resolve } = require('path');
const webpack = require('webpack'); // eslint-disable-line
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  name: 'store5 webpack example',
  target: 'web',
  mode: 'development', // 设为开发模式，可显著提升构建速度
  devtool: 'eval-source-map', // 开发模式下使用这个模式，可查看原始源代码，并且重新构建速度较快
  entry: {
    app: resolve(__dirname, '../index.js'),
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].[hash:6].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, './examples/index.html'),
      filename: 'index.html',
    }),
    new webpack.HotModuleReplacementPlugin(), // 启用hot(Only)后，需要追加此插件，才能生效页面自动刷新
  ],
  devServer: {
    contentBase: resolve(__dirname, '../dist'),
    compress: true,
    port: 8080,
    hot: true,
    hotOnly: true,
    open: true,
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  module: {
    rules: [
      { resource: { test: /\.html$/ }, use: ['html-loader'] },
      {
        resource: {
          test: /\.js$/,
          exclude: /node_modules/,
        },
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { modules: false }]],
            plugins: getAllStagePluginsOfBabel(),
          },
        },
      },
    ],
  },
  externals: {
    store5: 'store5',
  },
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
