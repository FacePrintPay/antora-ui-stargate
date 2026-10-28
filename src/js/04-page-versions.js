;(function () {
  'use strict'

  var toggle = document.querySelector('.page-versions .version-menu-toggle')
  if (!toggle) return

  var selector = document.querySelector('.page-versions')

  toggle.addEventListener('click', function (e) {
    selector.classList.toggle('is-active')
    // don't let this event get smothered
    e.stopPropagation()
  })

  document.documentElement.addEventListener('click', function () {
    selector.classList.remove('is-active')
  })
})()

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=04-page-versions.js
