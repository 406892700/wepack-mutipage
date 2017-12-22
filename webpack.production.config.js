const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ManifestPlugins = require('./tool/ManifestPlugins');// 生成manifest.json
const getEntries = require('./tool/getEntries');
const MoveResourcePlugins = require('./tool/MoveResourcesPlugins');
const AfterEmitPlugins = require('./tool/AfterEmitPlugin');

const devConfig = {
    // 应用入口
    entry: getEntries('production'),
       
    // 应用出口
    output: {
        path: path.resolve(__dirname, 'dist/client/src'),
        filename: '[name].bundle.[chunkhash].js',
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
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        'resolve-url-loader',
                        'postcss-loader',
                        'sass-loader',
                    ],
                }),
            },
            {
                test: /\.js$/,
                // exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.jsx$/,
                include: [
                    path.resolve(__dirname, "client"),
                ],
                // exclude: [
                //     path.resolve(__dirname, 'node_modules'),
                // ],
                loader: "babel-loader",
            },
            {
                test: /\.vue$/,
                include: [
                    path.resolve(__dirname, "client"),
                ],
                // exclude: /^node_modules$/,
                use: 'vue-loader',
            },
            
        ]
    },
    // sourceMap
    // devtool: '#cheap-module-eval-source-map',
    // 上下文
    context: __dirname,
    // 插件
    plugins: [
        // new webpack.optimize.OccurenceOrderPlugin(),
        // 清空打包文件夹
        new CleanWebpackPlugin(['dist']),
        // 单独抽取css文件
        new ExtractTextPlugin({
            filename: './[name]/style.[chunkhash].css',
            allChunks: true,
        }),
        // 公用资源单独打包
        new webpack.optimize.CommonsChunkPlugin({
            // async: true,
            chunks: getEntries('production'),
            filename: '[name]/common.[chunkhash].js',
            name: 'common', // Move dependencies to our main file
            minChunks: 5, // How many times a dependency must come up before being extracted
        }),
        // 生成manifest插件
        new ManifestPlugins({
            fileName: 'src-manifest.json',
            seed: {
                name: 'My Manifest',
            },
            path: 'dist',
            writeToFileEmit: true,
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.optimize.UglifyJsPlugin(),
        // 自定义资源移动插件
        new MoveResourcePlugins(),
        new AfterEmitPlugins(),
    ],
    resolve: {
        extensions: ['.js', '.vue', '.json', '.jsx'],
        alias: {
            vue$: 'vue/dist/vue.esm.js',
        }
    },
};

module.exports = devConfig;
