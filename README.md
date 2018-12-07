# Welcome to Vue on Rails 💎

> Vue for your favorite Rails projects

The Vue on Rails gem makes it easy to build Vue components on your Rails application.

It uses Rails 5.x, Vue 2.x, Webpacker 3.x, Ruby 2.x, Node 11.x, Yarn 1.12.x.

- 💎 Compatible with Rails 6/5/4 and Webpacker
- 🌎 Internationalization for component parts
- 🖖 Vue UI ready
- 🔨 Component generators and scaffolds
- 📦 Out of the box configuration
- ✂️ Specific-page Vue
- 🤡 Jest test ready
- 🎯 Simple state management
- 🗃 Easily migrate to Vuex state management
- 👷🏻️ Asset pipeline helpers
- 🏎 Kickstart with our Vue on Rails application template at https://vueonrails.com/vue

It ships out-of-the-box configuration, component generators and other solutions to make life easy for both Vue and Rails.

---

## Getting Started

Create an empty Vue on Rails project by running with an application template:

```
rails new app -m https://vueonrails.com/vue -d postgresql
```

To browse the application template, it's here https://vueonrails.com/vue

## Manual Installation

Create a Rails app with vue and webpack support.

```
rails new app --webpack=vue -d postgresql
```

Add this line to your application's Gemfile and run `bundle`

```ruby
gem 'vueonrails'
```
*note*: `vuejs` gem was renamed to `vueonrails`

and run `rails vue:setup` to complete the installation

You can scaffold a Vue component by reading along the [Vue on Rails Handbook](/docs)

---

## Getting Help & Contributing Back

Feel free to contribute back to Vue on Rails via pull requests. Below are some links that you may find useful.

- [Official Rails documentation](https://guides.rubyonrails.org)
- [Official Vue documentation](https://vuejs.org/v2/guide/)
- [Official Vue Curated components](https://curated.vuejs.org)
- [Vuecomponents.com](https://vuecomponents.com)
- [Vuetoolbox.com](http://www.vuetoolbox.com)
- [Github search for Vue stuffs](https://github.com/search?o=desc&q=vue&s=stars&type=Repositories)
- [Stackoverflow.com](https://stackoverflow.com/questions/tagged/vue.js+ruby-on-rails)
- [Vue on Rails github](https://github.com/vueonrails)

- On stackoverflow.com, tag your Vue on Rails questions with Vue & Rails and we will try to answer you.

- And it is likely that I missed some great online materials. If you think there is a more worthy resource, please edit this readme via a pull request.

- Find a bug? [Submit an issue](https://github.com/vueonrails/vueonrails/issues) on our tracker.

- Find something wrong? [Send a pull request](https://github.com/vueonrails/vueonrails/pulls).

---

## Contact

📮 Bryan Lim ytbryan@gmail.com

Richard LaFranchi and I are writing a book [Vue on Rails](https://vueonrails.com). If you are interested to be one of the early reviewers of our drafts, please email me.

---

## MIT License

[MIT](LICENSE.md)
