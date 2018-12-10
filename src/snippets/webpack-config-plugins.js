const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	// ...
	plugins: [
		new CleanWebpackPlugin([path.resolve(__dirname, 'dist')]),
		new HtmlWebpackPlugin(),
	],
};
