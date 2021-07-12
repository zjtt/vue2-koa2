const path = require("path")
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
console.log('process.env.NODE_ENV:', process.env.NODE_ENV)
const diyLoader = process.env.NODE_ENV !== 'production'
? 'vue-style-loader'
: MiniCssExtractPlugin.loader

module.exports = {
    entry: {
        index: ["@babel/polyfill", path.resolve(__dirname, '../src/main.js')]
    },
    output: {
        path: path.resolve(__dirname, '../dist'), // 输出目录没有则新建
        publicPath: '/',// 静态目录可以直接从这里取文件
        filename: 'js/[name].[hash].js',
        chunkFilename: 'js/[name].[chunkhash].js'
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: "vue-loader",
        },{
            test: /\.pug$/,
            loader: ["pug-html-loader"]
        },{
            test: /\.css$/,
            loader: [
                diyLoader, "css-loader"
            ]
        },{
            test: /\.less$/,
            loader: [
                diyLoader, "css-loader", "less-loader"
            ]
        },{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        },{
            test: /\.png$|\.jpg$|\.gif$|\.ico$/,
            loader: 'file-loader',
            exclude: /node_modules/
        }]
    },
    resolve: {
		extensions: [' ', '.js', '.vue'],
        alias: {
            '@v': path.resolve(__dirname, '../src/views'),
            '@c': path.resolve(__dirname, '../config'),
        }
	},
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, '../src/index.html'),
            inject: true
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "css/[name].[chunkhash].css",
        })
    ]
}