const { default: merge } = require("webpack-merge");
const webpackBaseConf = require("./webpack.base.conf");


let devConfig = merge(webpackBaseConf, {
    mode: 'development',
})

module.exports = devConfig