var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	debug: true,
	devtool: 'source-map',
	noInfo: false,
	resolve: {
		extensions: ['.webpack.js', '.web.js', '.ts', '.js']
	},
	entry: {
		vendor: path.resolve(__dirname, '../source/vendor'),
		main: path.resolve(__dirname, '../source/index'),
	},
	target: 'web',
	output: {
		path: path.resolve(__dirname, '../source'),
		publicPath: '/',
		filename: '[name].js',
	},
	plugins: [
		// Use CommonsChunkPlugin to create a separate bundle
		// of vendor libraries so that they're cached separately.
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
		}),

		// Create HTML file that includes reference to bundled JS.
		new HtmlWebpackPlugin({
			template: 'index.html',
			inject: true,
		}),
	],
	module: {
		loaders: [
			{ test: /\.ts$/, exclude: /node_modules/, loaders: ['awesome-typescript-loader'] },
		],
		preLoaders: [
			{ test: /\.js$/, loader: 'source-map-loader' },
		],
	},
};
