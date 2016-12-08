const webpack = require('webpack');

module.exports = {
    //devtool: 'source-map',
    entry: {
        'store5': './index.js'
    },
    output: {
        path: './build',
        filename: '[name].js',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            presets: 'es2015'
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            }
        })
    ]
};