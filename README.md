# Vuejs Gem

> Reactive Components for Modern Web Interfaces by Evan You and Vuejs team

The rubygem `vuejs` ships with the following goodies:

  - `vue` (v2.1.10)
  - `vuex` (v2.1.3)
  - `vue-router` (v2.1.3)
  - `vue-validator2` (v2.1.7) + `vue-validator3` (v3.0.0-alpha.2)
  - `axios` (v0.15.3)

It also ships with the following legacy goodies

  - `vue` (v1.0.28)
  - `vue-resource` (v1.0.3)
  - `vue-router` (v0.7.13)

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

For 2.x Vue & vue-router or Vue-validator
```
//= require vue2
//= require vue-router2
//= require vue-validator2
//= require vue-validator3
//= require vuex
//= require axios

```

## Note1
vue-validator has been changed to vue-validator2
and vue-validator3.

## Note2
Try to use vue.min to remove the warning statement from

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

## Development

After checking out the repo, run `bin/setup` to install dependencies. You can also run `bin/console` for an interactive prompt that will allow you to experiment.

To install this gem onto your local machine, run `bundle exec rake install`. To release a new version, update the version number in `version.rb`, and then run `bundle exec rake release`, which will create a git tag for the version, push git commits and tags, and push the `.gem` file to [rubygems.org](https://rubygems.org).

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/ytbryan/vuejs. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.


## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).


## Contact

📮 Bryan Lim ytbryan@gmail.com
