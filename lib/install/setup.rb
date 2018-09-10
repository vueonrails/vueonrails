say "Adding alias.js to config/webpack/alias"
copy_file "#{__dir__}/config/alias.js", Rails.root.join("config/webpack/alias/alias.js").to_s

say "Adding alias to config/webpack/environment.js"
insert_into_file Rails.root.join("config/webpack/environment.js").to_s,
  "const alias =  require('./alias/alias')\n",
  after: "require('@rails/webpacker')\n"

insert_into_file Rails.root.join("config/webpack/environment.js").to_s,
  "environment.config.merge(alias)\n",
  before: "module.exports"

  scripts =   <<-eos
  "scripts": {
    "test": "jest",
    "assets:precompile": "yarn install; rails assets:precompile",
    "webpack-dev-server": "./bin/webpack-dev-server", 
    "rails server": "rails server",
    "yarn install": "yarn install"
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

say "Adding scripts and jest configuration to package.json"
insert_into_file Rails.root.join("package.json").to_s,
  "#{scripts}",
  after: "\"private\": true,\n"

say "Adding test presets to .babelrc"
babelrc = <<-eos
  "test": {
    "presets": [
      ["env", { "targets": { "node": "current" }}]
    ]
  },
eos

insert_into_file Rails.root.join(".babelrc").to_s,
  "#{babelrc}",
  before: "  \"presets\": ["

say "Adding @vue/cli-service to make Vue-ui compatible"
run "yarn add @vue/cli-service --dev"
  