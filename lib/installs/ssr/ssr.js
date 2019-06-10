var hypernova = require('hypernova/server');

hypernova({
  devMode: true,
  getComponent(name) {
    // console.log("The component name is -> " + name)
    if (name === 'component.js') {
      return require('./app/javascript/ssr/component.js')
    }
    return null;
  },
  port: 7777,
});
