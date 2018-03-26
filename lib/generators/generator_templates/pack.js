import Vue from 'vue'
<% if options[:single] == false %>
import App from '../parts/<%= name %>/<%= name %>.vue'
<% else %> 
import App from '../parts/<%= name %>.vue'
<% end %>

document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(document.createElement('hello'))
  const app = new Vue({
    render: h => h(App)
  }).$mount('hello')

  //console.log(app)
})
