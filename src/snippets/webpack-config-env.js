module.exports = env => ({
	// ...
	devtool: env === 'production' ? false : 'cheap-eval-source-map',
});
