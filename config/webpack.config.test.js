var webpack = require('webpack');

module.exports = {
	debug: true,
	devtool: 'source-map',
	resolve: {
		extensions: ['.webpack.js', '.web.js', '.ts', '.js']
	},
	module: {
		loaders: [
			{ test: /\.ts$/, exclude: /node_modules/, loaders: ['awesome-typescript-loader'] },
		],
		preLoaders: [
			{ test: /\.js$/, loader: 'source-map-loader' },
		],
	},
};
