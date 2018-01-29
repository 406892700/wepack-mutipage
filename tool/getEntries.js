/*
 * 获取多页应用webpack入口文件
 * @Author: Simple
 * @Date: 2017-12-20 14:04:30
 * @Last Modified by: Simple
 * @Last Modified time: 2017-12-27 15:59:53
 */

const fs = require('fs');

const entries = [];// 入口获取
const getFilePath = (path) => {
    const files = fs.readdirSync(path);/* 读取目录下的所有文件名称，返回名称数组，如果文件名是目录，该目录下面的文件不会读取 */
    files.map((item, i) => {
        const tmpPath = `${path}/${item}`;
        const stats = fs.statSync(tmpPath);
        if (stats.isDirectory()) { // 如果是目录，则继续递归执行
            getFilePath(tmpPath);
        } else {
            /index\.js$/.test(tmpPath) && entries.push(tmpPath);// 只获取js
        }
    });
};

getFilePath('./client/views');

/**
 * 获取webpack 入口
 * @param  {[type]} type [类别 production=> 生产环境]
 * @return {[type]}      [description]
 */
const getEntries = (type) => {
    const entry = {

    };

    // var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';
    const hotMiddlewareScript = './dev-client';
    entries.map((item, i) => {
        const name = item.slice(0, -3).replace('./client/views/', '');
        type !== 'production' ? entry[name] = ([item.slice(0, -3), hotMiddlewareScript]) : (entry[name] = item.slice(0, -3));
    });
    console.log(entry);

    // entry['common-info'] = type !== 'production' ? ['./client/src/libs/common-info', hotMiddlewareScript] : './client/src/libs/common-info';
    return entry;
};

module.exports = getEntries;
