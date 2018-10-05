# Passing data for Vue on Rails project

Vuejs gems ships with a two-punch solution for passing a Rails variable into a vue component at load time. 

1. Make sure that your Vue on Rails project has specific page vue setup. 

First, setup your specific page vue app by placing the `javascript_packs_tag` into your Rails' application header. 
```ruby
<%= javascript_packs_tag "something" %>
```

Second, use the vue_component and pass in its respective rails variable. 

```ruby
<%= vue_component "something" variable: @variable %>
```

The `vue_component` helper will generate a div for your vue component to mount. It will also generate a div with data-attribute to store the @variable. 

2. 

Last but not least, retrieve the value of your Rails variable in the respective `.vue` file by calling 
`erb("variable_name")`

```html
  <template>
    <div>
      {{variable}}
    </div>
  </template>
  
  <script>
    data:{
      variable: erb("variable")
    }
  </script>
```