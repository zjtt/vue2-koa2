/**
 * Created by chenjiajun on 2017/8/17.
 */
 const { default: merge } = require("webpack-merge");
const baseConfig = require('./webpack.base.conf');

let prodConfig =  merge(baseConfig, {
	mode: "production",
	optimization: {
		minimize: false,
		splitChunks: {
			minSize: 20000,
			minChunks: 1,
		}
	}
});

module.exports = prodConfig;