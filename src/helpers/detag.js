'use strict'

const TAG_ALL_RX = /<[^>]+>/g

module.exports = (html) => html && html.replace(TAG_ALL_RX, '')

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=detag.js
