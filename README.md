# Vuejs Gem

> Reactive Components for Modern Web Interfaces

gem `vuejs` ships with the 1.x & 2.x latest [Vue.js + vue-router + vue-resource + vue-validator + vuex](http://vuejs.org/) and integrate with Rails' asset pipeline. Vue.js is created by Evan You and the vuejs team.

The current 2.x version is `Vue.js` (v2.1.7) + `vue-router` (v2.1.1) + `vue-validator` (v2.1.3) + `vuex` (v2.1.1).
> Note that Vue 2.x is not compatible with 1.x. vue-router 2.0 only works with Vue 2.x`

#####  Legacy
The current 1.x version is `Vue.js` (v1.0.28) + `vue-router` (v0.7.13) + `vue-resource` (v1.0.3)

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

## Usage

For 1.x

```
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require vue
//= require vue-router
//= require vue-resource
//= require_tree .
```

For 2.x Vue & vue-router or Vue-validator
```
//= require vue2
//= require vue-router2
//= require vue-validator
//= require vuex

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
