/*
 * webpack 自定义移动资源文件插件
 * @Author: Simple
 * @Date: 2017-12-20 11:11:04
 * @Last Modified by: Simple
 * @Last Modified time: 2017-12-20 16:23:16
 */

const fs = require('fs');
const path = require('path');

let entries = [];// 入口获取

/**
 * 获取目标路径下所有的文件
 * @param {*目标路径} path
 * @param {*筛选后缀} subFix
 */
const getFilesPath = (path, subFix) => {
    const files = fs.readdirSync(path);/* 读取目录下的所有文件名称 */
    files.map((item, i) => {
        const tmpPath = `${path}/${item}`;
        const stats = fs.statSync(tmpPath);
        if (stats.isDirectory()) { // 如果是目录，则继续递归执行
            getFilesPath(tmpPath, subFix);
        } else if (subFix) {
            subFix.test(tmpPath) && entries.push(tmpPath);
        } else {
            entries.push(tmpPath);
        }
    });
};

/**
 * 递归找到目录下的所有文件
 * @param {*目标目录} path
 * @param {*筛选后缀} subFix
 */
const getResources = (path, subFix) => {
    entries = [];
    getFilesPath(path, subFix);
    return entries;
};

/**
 * 根据文件目标目录创建文件夹或者文件
 * @param {* 目录地址数组} pathArr
 */
const mkDirOrFile = (pathArr) => {
    let tmpPath = '';
    const len = pathArr.length;
    pathArr.map((item, i) => {
        tmpPath = tmpPath == '' ? item : `${tmpPath}/${item}`;

        if (!fs.existsSync(tmpPath)) {
            if (i == len - 1) {
                fs.writeFileSync(tmpPath, fs.readFileSync(tmpPath.replace('dist/', '')));
            } else {
                fs.mkdirSync(tmpPath);
            }
        }
    });
};

/**
 * 输出到目标文件夹
 * @param {*目标文件夹地址} path
 */
const destSrc = (path) => {
    const imgs = getResources('./client/static');
    const htmls = getResources('./client/views', /\.html$/);

    imgs.map(item => mkDirOrFile((`${path}/${item}`).split('/'))); //移动资源文件

    htmls.map((item) => mkDirOrFile((`${path}/${item}`).split('/'))); //移动页面文件

    // fs.mkdirSync(`${path}/static`);// 直接生成静态化页面目录
};

class MoveResourcesPlugins {
    constructor(options = {}) {
        this.path = options.path;
    }

    apply(compiler) {
        destSrc(this.path || 'dist');
        compiler.plugin('compliation', (compliation) => {
            console.log(compliation);
        });
    }
}

module.exports = MoveResourcesPlugins;
