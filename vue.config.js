const webpack = require('webpack')
const path = require('path')
module.exports = {
	configureWebpack: config => {
		config.plugins.push(new webpack.ProvidePlugin({
			$globalConfig: [path.resolve(__dirname, "config/index.js"), 'default']
		}));
		config.module.rules.push({
			test: /\.md$/,
			use: [{
					loader: "vue-loader"
				},
				{
					loader: require.resolve("./markdown/markdownLoader")
				}
			]
		})
		// config.externals = { };
	}
}
