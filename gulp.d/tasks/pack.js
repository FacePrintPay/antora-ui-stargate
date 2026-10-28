'use strict'

const vfs = require('vinyl-fs')
const zip = require('gulp-vinyl-zip')
const path = require('path')

module.exports = (src, dest, bundleName, onFinish) => () =>
  vfs
    .src('**/*', { base: src, cwd: src })
    .pipe(zip.dest(path.join(dest, `${bundleName}-bundle.zip`)))
    .on('finish', () => onFinish && onFinish(path.resolve(dest, `${bundleName}-bundle.zip`)))

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=pack.js
