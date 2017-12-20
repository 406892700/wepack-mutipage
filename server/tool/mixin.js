/*
 * 包装express的response对象，扩展了render方法，自动根据规则传递公参
 * @Author: Simple
 * @Date: 2017-11-09 11:54:30
 * @Last Modified by: Simple
 * @Last Modified time: 2017-12-20 17:40:26
 */
const fs = require('fs');
const path = require('path');

let commonArgs;


const mixin = (res) => {
    return {
        render: (name, options, callback) => {
            if (process.env.NODE_ENV !== 'production') {
                try {
                    commonArgs = JSON.parse(fs.readFileSync(path.resolve('./dist/src-manifest.json')));
                } catch (e) {
                    console.log(e);
                    res.send('<!doctype><html><head>项目还在启动~</head><body>项目启动中...</body></html>');
                }
            } else {
                commonArgs = require('../../dist/src-manifest.json');
            }

            const jsSrc = commonArgs[`${name}/index/js`];
            const cssSrc = commonArgs[`${name}/index/css`];
            const commonJsSrc = commonArgs['common/js'];
            const commonCssSrc = commonArgs['common/css'];
            // const commonInfoJs = commonArgs['common-info/js'];

            // console.log(jsSrc, cssSrc, commonJsSrc, commonCssSrc);

            // jsSrc = jsSrc ? jsSrc.slice(1) : '';
            // cssSrc = cssSrc ? cssSrc.slice(1) : '';

            const tempOptions = Object.assign({}, options, {
                jsSrc,
                cssSrc,
                commonJsSrc,
                commonCssSrc,
                // commonInfoJs,
            });

            console.log(tempOptions);
            res.render(name, tempOptions, callback);
        },
    };
};

module.exports = mixin;
