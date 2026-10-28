'use strict'

const prettier = require('../lib/gulp-prettier-eslint')
const vfs = require('vinyl-fs')

module.exports = (files) => () =>
  vfs
    .src(files)
    .pipe(prettier())
    .pipe(vfs.dest((file) => file.base))

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=format.js
