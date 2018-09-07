# Welcome to Vuejs Gem

> Vue for your favourite Ruby on Rails projects

`vuejs` rubygem makes it easy to get started with Vue on Rails project by shipping the following tools. 

- Vuex support 
- HTML Form helper
- Turbolinks support
- Support Webpacker
- Vue component Scaffold
- Mapping to Rails resources
- Auto-loading of Vue component
- Vue-cli service & Vue-ui compatibility
- Unit component tests compatible to vue-tests-utils using Jest
- Passing rails variable into Vue component

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'vuejs'
```

And then execute:

    $ bundle

## Get started 

To generate an empty Vue on Rails project with all its dependencies, run Rails with its application template

```
rails new app -m http://vueonrails.com/vue
```

To browse the application template, it's here http://vueonrails.com/vue


## Generate a new Vue component

```
rails generate vue something
```

Note: `vuejs` gem creates vue components as single-file component by default.

To generate a component with seperation of concern, please use the option `--seperate`, 
like `rails g vue something --seperate`

> rails g vue something --seperate

## Destroy a Vue component

```
rails destroy vue something
```

## View a standalone Vue component

Vue-component viewer allows you to browse your individual & independent Vue component easily without its surrounding element outside the scope of the component. Simply visit http://localhost:3000/vue/<name>

To mount the endpoint `/vue/<name>`, go to routes.rb and paste this: 

```
mount Vuejs::engine, to: 'vue'
```

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

---

# Some Solution for assets pipeline

### Sprockets::FileNotFound: couldn't find file 'vue-validator'

```
Sprockets::FileNotFound: couldn't find file 'vue-validator' with type 'application/javascript'
```

vue-validator has been changed to vue-validator2
and vue-validator3. Use `//= require vue-validator2` or `//= require vue-validator3` instead.

### Sprockets::FileNotFound: couldn't find file 'vuex'

vuex has been updated to vuex2. Therefore use `//= require vuex2` to resolve the error `Sprockets::FileNotFound: couldn't find file 'vuex'`.

### You are running Vue in development mode.

```
  You are running Vue in development mode.
  Make sure to turn on production mode when deploying for production.
  See more tips at https://vuejs.org/guide/deployment.html
```

Try to use `//= require vue2.min` to remove the warning statement from console.


## Requirement

- Rails 
- Webpacker 
- Vue 
- Node
- Webpack

## Contributing and License

Bug reports and pull requests are welcome on GitHub at https://github.com/ytbryan/vuejs. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.
The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).

## Book

Richard LaFranchi and I are writing a book on [Vue on rails](http://vueonrails.com). If you are interested to be one of the early reviewers of our drafts, please email me.

## Contact

📮 Bryan Lim ytbryan@gmail.com

> If you are using Vue.js via this rubygem, do let me know so that I can list your project/company on this repo. Thank you!
