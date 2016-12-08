/**
 * @desc webpack --optimize 1 --config webpack.prod.config.js
 */
const webpack = require('webpack');
const minimist = require('minimist');
const defaultArgvs = {
  default: {
    optimize: 0
  }
};
const argvs = minimist(process.argv.slice(2), defaultArgvs);

module.exports = {
  entry: {
    'store5': './index.prod.js',
  },
  output: {
    path: './dist',
    filename: argvs.optimize ? '[name].min.js' : '[name].js',
    libraryTarget: 'umd',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      presets: 'es2015'
    }]
  },
  plugins: argvs.optimize ? [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      output: {
        comments: false,
      },
    })
  ] : []
};