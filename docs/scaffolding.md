# Scaffolding a basic Vue component

1. `rails g vue something` 

This will generate a single-file component into `app/javascript/parts`. 

2. `rails g vue something --separate`

This will generate a component `something.vue` into `parts` directory, with seperation of concern.



## Generate a Vue component with Turbolinks support

```
rails generate vue something --turbolinks
```

## Generate a Vue component with Vuex support

```
rails generate vue something --vuex
```

## Generate a Vue component with Specific Page Vue support 

```
rails generate vue something --spv
```

## Generate a Vue component with unit tests

```
rails generate vue something --test
```

## Passing Rails Variable into Vue component - coming soon