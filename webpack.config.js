const webpack = require('webpack');
const _MIN = 1;

module.exports = {
	// devtool: 'eval',
    entry: {
		'store5': './index.prod.js',
	},
    output: {
        path: './dist',
		filename: _MIN ? '[name].min.js' : '[name].js',
		libraryTarget: 'umd',
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', presets: 'es2015'},
        ]
    },
    plugins: _MIN ? [
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