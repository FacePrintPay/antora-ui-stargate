'use strict'

const metadata = require('undertaker/lib/helpers/metadata')
const { watch } = require('gulp')

module.exports = ({ name, desc, opts, call: fn, loop }) => {
  if (name) {
    const displayName = fn.displayName
    if (displayName === '<series>' || displayName === '<parallel>') {
      metadata.get(fn).tree.label = `${displayName} ${name}`
    }
    fn.displayName = name
  }
  if (loop) {
    const delegate = fn
    name = delegate.displayName
    delegate.displayName = `${name}:loop`
    fn = () => watch(loop, { ignoreInitial: false }, delegate)
    fn.displayName = name
  }
  if (desc) fn.description = desc
  if (opts) fn.flags = opts
  return fn
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=create-task.js
