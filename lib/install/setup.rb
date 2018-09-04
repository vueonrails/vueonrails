say "Adding alias.js to config/webpack/alias"
copy_file "#{__dir__}/config/alias.js", Rails.root.join("config/webpack/alias/alias.js").to_s

say "Adding alias to config/webpack/environment.js"
insert_into_file Rails.root.join("config/webpack/environment.js").to_s,
  "const alias =  require('./alias/alias')\n",
  after: "require('@rails/webpacker')\n"

insert_into_file Rails.root.join("config/webpack/environment.js").to_s,
  "environment.config.merge(alias)\n",
  before: "module.exports"

say "Adding vue-autorequest and vue-form-for"
run "yarn add vue-autorequest vue-form-for"

say "Adding Vuex"
run "yarn add vuex vuex-rails-plugin"

say "Adding tests"
run "yarn add @vue/test-utils"

say "Adding turbolinks"
run "yarn add vue-turbolinks"

say "Making Vue on Rails compatible with Vue-ui"
run "yarn add @vue/cli-service --dev"

