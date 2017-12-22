/*
 * 代码规范js部分规则
 * @Author: Simple
 * @Date: 2017-12-21 14:01:12
 * @Last Modified by: Simple
 * @Last Modified time: 2017-12-21 14:49:58
 */
module.exports = {
    "globals": {
        "window": true,
        "document": true
    },
    "plugins": [
        "react"
    ],
    "env": {
        "browser": true,
        "node": true
    },
    "settings": {
        "react": {
          "createClass": "createReactClass", // Regex for Component Factory to use,
                                             // default to "createReactClass"
          "pragma": "React",  // Pragma to use, default to "React"
          "version": "15.0", // React version, default to the latest React stable release
          "flowVersion": "0.53" // Flow version
        },
        "propWrapperFunctions": [ "forbidExtraProps" ] // The names of any functions used to wrap the
                                                       // propTypes object, e.g. `forbidExtraProps`.
                                                       // If this isn't set, any propTypes wrapped in
                                                       // a function will be skipped.
    },
    "extends": [
        "eslint:recommended", // 开启eslint推荐的规则
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaVersion": 2017,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "experimentalObjectRestSpread": true
        }
    },
    // 默认规则配置参见 https://cn.eslint.org/docs/rules/
    "rules": {
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",

        "semi": "error", // 语句末尾必须有分号
        "no-console": "off", // 关闭禁止console
        "no-debugger": 'off', // 关闭禁止使用debugger

        "no-sparse-arrays": "off", // 允许使用稀疏数组
        "default-case": "error", // switch语句必须有default语句
        "dot-location": "error", // 点号换行必须保持一致
        "eqeqeq": "warn", // 推荐使用严等判断(警告不报错)
        "no-else-return": "warn", // return语句之后不能有else(如果有则表示代码逻辑可以调整)
        "no-invalid-this": "error", // 禁止this关键字出现在类和类对象之外
        "no-shadow": "warn", // 禁止变量名与外层作用域的变量名称相同

        "block-spacing": "warn", // 强制在单行代码块中使用一致的空格
        "brace-style": ['error', '1tbs', { allowSingleLine: true }],// 强制在代码块中使用一致的大括号风格(https://cn.eslint.org/docs/rules/brace-style)
        "comma-spacing": ['error', { before: false, after: true }],// 逗号前不能有空格,逗号后必须有空格
        "eol-last": "error", // 文件末尾强制要求换行
        "indent": ["error", 4], // 缩进方式为tab
        "no-multiple-empty-lines": ["error", { "max": 1 }], //禁止出现多个空行
        "no-trailing-spaces": ["error", { // 单行后面的空格,方式误操作产生无意义的提交
            "skipBlankLines": false, // (默认) 禁止在空行使用空白符
            "skipBlankLines": true, // 允许在空行使用空白符
            "ignoreComments": false, // (默认) 禁止在注释块中使用空白符
            "ignoreComments": true // 允许在注释块中使用空白符 
        }],
        "no-duplicate-imports": ["error", { "includeExports": true }], //禁止多次引入同一个模块
    }
}