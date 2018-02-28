const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const src = path.resolve(__dirname, 'src/');
const config = {
	watch: false,
	watchOptions: {
		ignored: /node_modules/
	},
	entry: {
		"game": path.join(src, "index.jsx")
	},
	output: {
		path: path.resolve(__dirname, 'static/js'),
		filename: '[name].js'
	},
	devtool: 'source-map',
	plugins: [
		new UglifyJSPlugin({
			sourceMap: true
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_DEV': JSON.stringify('production')
		})// more info and other optimizations at https://webpack.js.org/guides/production/
	],
	module: {
		rules : [
			{
				test: /\.jsx?/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	}
};
module.exports = config;
