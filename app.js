const express = require('express');
const webpack = require('webpack');
const proxyMiddleware = require('http-proxy-middleware');
const webpackConfig = require('./webpack.dev.config');
const consolidate = require('consolidate');
const path = require('path');
const opn = require('opn');
const fallback = require('express-history-api-fallback');
const gulp = require('gulp');

const app = express();

const compiler = webpack(webpackConfig);

const devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    quiet: true,
});

const hotMiddleware = require('webpack-hot-middleware')(compiler, {
    log: () => {},
});

gulp.watch([
    './*.ejs', 
    './static/*.*'], (e) => {
    console.log(`${e.path} has ${e.type}, reload current page~`);
    hotMiddleware.publish({ action: 'reload' });
});

app.use(fallback('index.html', { root: __dirname + './static'}));

app.use(devMiddleware);

app.use(hotMiddleware);

// 指定静态资源文件夹
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.resolve(__dirname, './client'));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

devMiddleware.waitUntilValid(() => {
    console.log('构建开始...');
    opn('http://localhost:3001');
});

app.listen(3001);