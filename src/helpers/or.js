'use strict'

module.exports = (...args) => {
  const numArgs = args.length
  if (numArgs === 3) return args[0] || args[1]
  if (numArgs < 3) throw new Error('{{or}} helper expects at least 2 arguments')
  args.pop()
  return args.some((it) => it)
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=or.js
