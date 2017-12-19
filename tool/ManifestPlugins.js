/*
 * 改造后的manifest webpack插件
 * @Author: Simple 
 * @Date: 2017-12-01 15:12:15 
 * @Last Modified by: Simple
 * @Last Modified time: 2017-12-19 17:35:41
 */

const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

module.exports = class AssetManifest {
	constructor(options) {
		this.options = { 
			...AssetManifest.defaults,
			...options,
		}
		this.options = Object.assign({}, {
			path: undefined,
			merge: false,
			fileName: 'webpack-manifest.json',
			extensions: ['.js', '.css'],
			prettyPrint: true
		}, options);
	}

	apply(compiler) {
		compiler.plugin('emit', (compilation, callback) => {
			const opts = this.options;
			const conf = compilation.options;
			const base = conf.output.publicPath || '';
			const regx = new RegExp(`(?:${opts.extensions.join('|')})$`);
			const manifest = {};

			compilation.chunks.forEach((chunk) => {
				if (!chunk.name) {
					return;
				}
				if (process.env.NODE_ENV === 'production') {
					chunk.files.forEach((file) => {
						if (!regx.test(file)) {
							return;
						}

						const exts = /.+\.([^\.]+$)/.exec(file)[1]
						manifest[`${chunk.name}/${exts}`] = '/src/' + file;
					})
				} else {
					let file = chunk.files[0];
					const exts = /.+\.([^\.]+$)/.exec(file)[1]
					manifest[`${chunk.name}/${exts}`] = '/' + file
				}

				// chunk.files.forEach(file => {
				//   if (!regx.test(file)) return
				//   const exts = /.+\.([^\.]+$)/.exec(file)[1]
				//   manifest[`${chunk.name}/${exts}`] =  process.env.NODE_ENV == 'production' ? '/src/'+file  : '/'+file
				// })
			})

			const dest = opts.path || conf.output.path;
			const file = path.join(dest, opts.fileName)

			const writeFile = data => {
				const content = JSON.stringify(data, null, opts.prettyPrint ? 2 : null)
				fs.writeFile(file, content, err => {
					if (err) throw err
					callback()
				})
			}

			mkdirp(dest, err => {
				if (opts.merge) {
					fs.readFile(file, 'utf8', (error, content) => {
						if (error) {
							writeFile(manifest)
						} else {
							const data = JSON.parse(content)
							writeFile({ ...data,
								...manifest
							})
						}
					})
				} else {
					writeFile(manifest)
				}
			})
		})
	}
}
