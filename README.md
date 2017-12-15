# Vuejs Gem

> Reactive Components for Modern Web Interfaces by Evan You and Vuejs team

TODO: update this to support webpacker. Or make plans to create [webpacker-vue](https://github.com/ytbryan/webpacker-vue)

The rubygem `vuejs` ships with the following goodies:

  - `vue` (v2.1.10)
  - `vuex` (v2.1.1)
  - `vue-router` (v2.1.3)
  - `vue-validator2` (v2.1.7) + `vue-validator3` (v3.0.0-alpha.2)
  - `axios` (v0.15.3)

It also ships with the following legacy goodies

  - `vue` (v1.0.28)
  - `vuex` (v1.0.1)
  - `vue-router` (v0.7.13)
  - `vue-resource` (v1.2.0)
  - `vue-validator` (v1.4.4)

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


## Vue Component generator

rails g vue <NAME>


## Usage

For 2.x Vue & vue-router or Vue-validator
```
//= require vue2
//= require vue-router2
//= require vue-validator2
//= require vuex2
//= require axios
```

# Some Solution

### Sprockets::FileNotFound: couldn't find file 'vue-validator'

```
Sprockets::FileNotFound: couldn't find file 'vue-validator' with type 'application/javascript'
```
vue-validator has been changed to vue-validator2
and vue-validator3. Use `//= require vue-validator2` or `//= require vue-validator3` instead.


### Sprockets::FileNotFound: couldn't find file 'vuex'

vuex has been updated to vuex2. Therefore use `//= require vuex2` to resolve the error `Sprockets::FileNotFound: couldn't find file 'vuex'`.


###   You are running Vue in development mode.

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

## Development

After checking out the repo, run `bin/setup` to install dependencies. You can also run `bin/console` for an interactive prompt that will allow you to experiment.

To install this gem onto your local machine, run `bundle exec rake install`. To release a new version, update the version number in `version.rb`, and then run `bundle exec rake release`, which will create a git tag for the version, push git commits and tags, and push the `.gem` file to [rubygems.org](https://rubygems.org).

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/ytbryan/vuejs. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.


## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).


## Contact

📮 Bryan Lim ytbryan@gmail.com

> If you are using vue.js via this rubygem, do let me know so that I can list your project/company on this repo. Thank you!
