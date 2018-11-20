say "Adding @vue/test-utils and other Jest devdependencies"
run "yarn add vueonrails @vue/test-utils jest jest-serializer-vue vue-jest babel-jest --dev"

# Copy alias.js into Vue on Rails project
copy_file "#{__dir__}/config/alias.js", Rails.root.join("config/webpack/alias/alias.js").to_s
insert_into_file Rails.root.join("config/webpack/environment.js").to_s,
"const alias =  require('./alias/alias')\n", after: "require('@rails/webpacker')\n"

# Add *_pack_tag into application.html.erb This is essential for specific-page vue setup.
pack_tag =   <<-eos
    <%= javascript_pack_tag 'application' %>
    <%= stylesheet_pack_tag 'application' %>
eos
insert_into_file Rails.root.join("app/views/layouts/application.html.erb").to_s,
pack_tag, before: "  </head>\n"

insert_into_file Rails.root.join("app/javascript/packs/application.js").to_s,
"\nimport './hello_vue'\n", after: "console.log('Hello World from Webpacker')\n"

insert_into_file Rails.root.join("config/webpack/environment.js").to_s,
"environment.config.merge(alias)\n", before: "module.exports"

# Jest and scripts configuration. Essential for Jest test and Vue Ui
scripts =   <<-eos
  "scripts": {
    "yarn test": "jest",
    "yarn install": "yarn install --check-files",
    "rails assets:precompile": "yarn install --check-files; rails assets:precompile",
    "rails server": "rails server",
    "webpack-dev-server": "./bin/webpack-dev-server"
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
    "transformIgnorePatterns": [
      "node_modules/(?!(vueonrails)/)"
    ],
    "testPathIgnorePatterns": [
      "<rootDir>/config/webpack/"
    ],
    "snapshotSerializers": [
      "<rootDir>/node_modules/jest-serializer-vue"
    ]
  },
eos

insert_into_file Rails.root.join("package.json").to_s,
scripts, after: "\"private\": true,\n"

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
babelrc, before: "  \"presets\": ["
  
# Add Procfile for foreman
template "#{__dir__}/Procfile",  Rails.root.join("Procfile").to_s

# Add specific_page_vue helper to enable Specific-page Vue
gsub_file Rails.root.join("app/views/layouts/application.html.erb").to_s, 
/<body>/, '<body class="<%= specific_page_vue %>">'