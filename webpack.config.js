const webpack = require('webpack');
const _ZIP = 1;

module.exports = {
	// devtool: 'eval',
    entry: {
		'store5': './index.common.js',
	},
    output: {
		libraryTarget: 'umd',
        path: './dist',
		filename: _ZIP ? '[name].min.js' : '[name].js'
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', presets: 'es2015'},
        ]
    },
    plugins: _ZIP ? [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),
    ] : []
};