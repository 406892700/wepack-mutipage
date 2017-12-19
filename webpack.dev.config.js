const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin'); // 友好的错误提示

const ManifestPlugins = require('./tool/ManifestPlugins');// 生成manifest.json

const devConfig = {
    // 应用入口
    entry: { 
        index: ['./client/main/index.js', './dev-client'],
        // act: './client/activity/index.js',
    },
       
    // 应用出口
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.[hash:6].js',
        publicPath: '/'
    },
    // 匹配规则
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: 'url-loader?limit=8192&context=client&name=[path][name].[ext]',
            }, 
            {
                test: /\.(scss|css)$/,
                use: [
                    'style-loader?sourceMap',
                    'css-loader?sourceMap',
                    'resolve-url-loader?sourceMap',
                    'postcss-loader?sourceMap',
                    'sass-loader?sourceMap',
                ],
            }, 
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.jsx$/,
                include: [
                    path.resolve(__dirname, "client"),
                ],
                exclude: [
                    path.resolve(__dirname, 'node_modules'),
                ],
                loader: "babel-loader",
            }
            
        ]
    },
    // sourceMap
    devtool: '#cheap-module-eval-source-map',
    // 上下文
    context: __dirname,
    // 插件
    plugins: [
        // new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        // 友好错误提示插件
        new FriendlyErrorsWebpackPlugin(),
        // 生成manifest插件
        new ManifestPlugins({
            fileName: 'src-manifest.json',
            seed: {
                name: 'My Manifest',
            },
            path: 'dist',
            writeToFileEmit: true,
        }),
        new HtmlWebpackPlugin({
            title: '优谷主工程',
            filename: 'index.html',
            template: './index.ejs'
        }),
        new HtmlWebpackPlugin({
            title: '优谷活动',
            filename: 'index_activity.html',
            template: './index.ejs'
        })
    ],
    resolve: {
        extensions: ['.js', '.vue', '.json', '.jsx'],
        // alias: {
        //     '@': resolve('src')
        // }
    },

}

module.exports = devConfig;