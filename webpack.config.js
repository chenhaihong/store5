const webpack = require('webpack');
module.exports = {
    entry: './index.js',
    output: {
        path: './dist',
        filename: 'store5.min.js',
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', presets: 'es2015'},
        ]
    },
	/* devtool: 'eval',
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),
    ] */
};