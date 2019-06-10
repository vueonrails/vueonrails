console.log("hello, component")
const Vue = require("vue")
const renderVue = require("hypernova-vue").renderVue
const component = Vue.extend({
  template: '<h1>hello world</h1>'
})
module.exports = renderVue("component.js", component)
