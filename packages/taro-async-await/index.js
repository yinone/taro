var g = typeof window !== 'undefined' &&
window.Math === Math ? window : typeof global === 'object' ? global : this

if (!g.Promise) {
  g.Promise = require('promise-polyfill')
}
if (!g.regeneratorRuntime) {
  g.regeneratorRuntime = require('regenerator-runtime/runtime')
}
