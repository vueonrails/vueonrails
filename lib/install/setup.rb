say "Adding alias.js to config/webpack/alias"
copy_file "#{__dir__}/config/alias.js", Rails.root.join("config/webpack/alias/alias.js").to_s

say "Adding alias configuration to config/webpack/environment.js"
insert_into_file Rails.root.join("config/webpack/environment.js").to_s,
  "const alias =  require('./alias/alias')\n",
  after: "require('@rails/webpacker')\n"

say "Adding javascript_packs_tag and stylesheet_packs_tag into head"
insert_into_file Rails.root.join("app/views/layouts/application.html.erb").to_s,
"   <%= javascript_pack_tag 'application' %>
    <%= stylesheet_pack_tag 'application' %>\n",
before: "  </head>\n"

say "Adding hello vue example"
insert_into_file Rails.root.join("app/javascript/packs/application.js").to_s,
"\nrequire('./hello_vue')\n",
after: "console.log('Hello World from Webpacker')\n"

insert_into_file Rails.root.join("config/webpack/environment.js").to_s,
  "environment.config.merge(alias)\n",
  before: "module.exports"

scripts =   <<-eos
  "scripts": {
    "rails server": "rails server",
    "webpack-dev-server": "./bin/webpack-dev-server", 
    "rails assets:precompile": "yarn install; rails assets:precompile",
    "yarn install": "yarn install",
    "yarn test": "jest"
  },
  "jest": {
    "moduleFileExtensions": [
      "js",
      "vue"
    ],
    "moduleNameMapper": {
      "^@/(.*)$": "<rootDir>/app/javascript/parts/$1"
    },
    "transform": {
      "^.+\\\\\\.js$": "<rootDir>/node_modules/babel-jest",
      ".*\\\\\\.(vue)$": "<rootDir>/node_modules/vue-jest"
    },
    "snapshotSerializers": [
      "<rootDir>/node_modules/jest-serializer-vue"
    ]
  },
eos

say "Adding scripts and Jest configuration to package.json"
insert_into_file Rails.root.join("package.json").to_s,
  "#{scripts}",
  after: "\"private\": true,\n"

say "Adding test presets to .babelrc"
babelrc = <<-eos
  "env": {
    "test": {
      "presets": [
        ["env", { "targets": { "node": "current" }}]
      ]
    }
  },
eos

insert_into_file Rails.root.join(".babelrc").to_s,
  "#{babelrc}",
  before: "  \"presets\": ["
  
say "Adding @vue/test-utils and other Jest devdependencies"
run "yarn add @vue/test-utils jest jest-serializer-vue vue-jest babel-jest --dev"