'use strict'

const camelCase = (name) => name.replace(/[-]./g, (m) => m.substr(1).toUpperCase())

module.exports = require('require-directory')(module, __dirname, { recurse: false, rename: camelCase })

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=index.js
