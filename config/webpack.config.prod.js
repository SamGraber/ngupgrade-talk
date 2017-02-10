var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackMd5Hash = require('webpack-md5-hash');

module.exports = {
	debug: true,
	devtool: 'source-map',
	noInfo: false,
	resolve: {
		extensions: ['.webpack.js', '.web.js', '.ts', '.js']
	},
	entry: {
		vendor: path.resolve(__dirname, '../client/vendor'),
		main: path.resolve(__dirname, '../client/app.module'),
	},
	target: 'web',
	output: {
		path: path.resolve(__dirname, '../dist'),
		publicPath: '/',
		filename: '[name].[chunkhash].js',
	},
	plugins: [
		// Hash the files using MD5 so that their names change when the content changes.
		new WebpackMd5Hash(),

		// Use CommonsChunkPlugin to create a separate bundle
		// of vendor libraries so that they're cached separately.
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
		}),

		// Create HTML file that includes reference to bundled JS.
		new HtmlWebpackPlugin({
			template: 'index.html',
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeRedundantAttributes: true,
				useShortDoctype: true,
				removeEmptyAttributes: true,
				removeSylteLinkTypeAttributes: true,
				keepClosingSlash: true,
				minifyJS: true,
				minifyCSS: true,
				minifyURLs: true,
			},
			inject: true,
			production: true,
		}),

		// Eliminate duplicate packages when generating bundle
		new webpack.optimize.DedupePlugin(),

		// Minify JS
		new webpack.optimize.UglifyJsPlugin(),
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
