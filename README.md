# Vuejs Gem

> Vue for your favourite Ruby on Rails projects

# Requirement

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'vuejs'
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install vuejs

# Webpacker

## Vue component generator

```
rails generate vue <NAME>
```

Note: `vuejs` gem creates vue components with seperation of concern by default.

To generate a single-file component, please use `--single` option. eg. `rails g vue component_name --single`

## Vue component destroyer

```
rails destroy vue <NAME>
```

## Vue viewer

Vue viewer allows you to browse your vue component easily. Simply type in http://localhost:3000/vue/<name>

At routes.rb

```
mount Vuejs::engine, to: 'vue'
```

## Vuex support - coming soon

```
rails g vue <NAME> --vuex
```

This will add vuex using yarn. And generate a vue component with vuex support

## Add webpacker helpers - coming soon

```
rails g vue <NAME> --helpers
```

---

# Asset Pipeline

The ruby gem `vuejs` ships with the following goodies for assets pipeline:

* `vue` (v2.1.10)
* `vuex` (v2.1.1)
* `vue-router` (v2.1.3)
* `vue-validator2` (v2.1.7) + `vue-validator3` (v3.0.0-alpha.2)
* `axios` (v0.15.3)

It also ships with the following legacy goodies

* `vue` (v1.0.28)
* `vuex` (v1.0.1)
* `vue-router` (v0.7.13)
* `vue-resource` (v1.2.0)
* `vue-validator` (v1.4.4)

## Usage

For 2.x Vue & vue-router or Vue-validator

```
//= require vue2
//= require vue-router2
//= require vue-validator2
//= require vuex2
//= require axios
```

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

For 1.x

```
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require vue
//= require vuex
//= require vue-router
//= require vue-resource
//= require vue-validator
//= require_tree .
```

## Contributing and License

Bug reports and pull requests are welcome on GitHub at https://github.com/ytbryan/vuejs. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.
The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).

## Book

Richard LaFranchi and I are writing a book on Vue on rails. If you are interested to be one of the early reviewers of our drafts, please email me.

## Contact

📮 Bryan Lim ytbryan@gmail.com

> If you are using vue.js via this rubygem, do let me know so that I can list your project/company on this repo. Thank you!
