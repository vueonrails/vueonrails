# Generating Vue component with different options

`vuejs` gem ships a single generator with different options. 
In this section, we will take a look at some different options. 

### Generate a Vue component with Turbolinks support
```
rails g vue something --turbolinks
```

### Generate a Vue component with Vuex
```
rails g vue something --vuex
```

### Generate a Vue compoennt with Specific Page Vue 
```
rails g vue something --spv
```

### Generate a Vue component with Jest test
```
rails g vue something --tests
```

### Generate a Vue component with `<form-for>` helper component
```
rails g vue something --form-for
```

## Generate a Vue component

Generating a Vue component is as easy as running the following command: 

```
rails generate vue something
```

> By default, `vuejs` gem generates vue component as a single-file component.

To generate a component with seperation of concern, please use the option `--seperate` at the end of your command. For example: 

> rails generate vue something --seperate

## Destroy a Vue component

Destroy a vue component using the Rails' destroyer  
```
rails destroy vue something
```

## View a standalone Vue component

Vue-component viewer allows you to browse your individual & independent Vue component easily without its surrounding element outside the scope of the component. Simply visit http://localhost:3000/vue/<name>

To mount the endpoint `/vue/<name>`, go to routes.rb and paste this: 

```
mount Vuejs::engine, to: 'vue'
```