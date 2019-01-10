# install pug dependencies
run "yarn add pug pug-plain-loader"

# add the pug loader
copy_file "#{__dir__}/loaders/pug.js", Rails.root.join("config/webpack/loaders/pug.js").to_s

# insert pug into the environment.js
insert_into_file Rails.root.join("config/webpack/environment.js").to_s,
"const pug =  require('./loaders/pug')\n", after: "require('@rails/webpacker')\n"

insert_into_file Rails.root.join("config/webpack/environment.js").to_s,
"environment.loaders.prepend('pug', pug)\n", before: "module.exports = environment"
