say "Adding alias.js to config/webpack/alias"
copy_file "#{__dir__}/config/alias.js", Rails.root.join("config/webpack/alias/alias.js").to_s

say "Adding alias to config/webpack/environment.js"
insert_into_file Rails.root.join("config/webpack/environment.js").to_s,
  "const alias =  require('./alias/alias')\n",
  after: "require('@rails/webpacker')\n"

insert_into_file Rails.root.join("config/webpack/environment.js").to_s,
  "environment.config.merge(alias)\n",
  before: "module.exports"

