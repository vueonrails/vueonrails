# Check for the lack of .babelrc or webpacker 4
def check_version_and_babel
  #should i check for evidence of webpacker:install?
  (File.exists?(Rails.root.join(".babelrc")) == true) \
  || ((Gem.loaded_specs["webpacker"].version >= Gem::Version.new('4.x')) == false)
end

begin
  if(check_version_and_babel)
      say "You are using Vue on Rails #{Vueonrails::VERSION} and it does not support webpacker 4. 
    
    Please use the latest Vue on Rails (1.x) in your Gemfile:
      gem 'webpacker', '~> 4.x'
      gem 'vueonrails', '~> 1.x'

    or switch back to webpacker 3:
      gem 'webpacker', '~> 3.x'
      gem 'vueonrails', '~> 0.x'", :yellow 
    exit!
  end
rescue Errno::ENOENT => e
  say "You need webpacker 4."
  exit!
end

# the start of the setup script
say "Adding vueonrails, internationalization, @vue/test-utils and other Jest devdependencies"
run "yarn add vueonrails vue-i18n @vue/test-utils jest jest-serializer-vue vue-jest babel-jest --dev"

# Copy alias.js into Vue on Rails project
copy_file "#{__dir__}/config/alias.js", Rails.root.join("config/webpack/alias/alias.js").to_s
insert_into_file Rails.root.join("config/webpack/environment.js").to_s,
"const alias =  require('./alias/alias')\n", after: "require('@rails/webpacker')\n"

# Add *_pack_tag into application.html.erb This is essential for specific-page vue setup.
if (Gem.loaded_specs["rails"].version >= Gem::Version.new('6.x'))  # rails 6 has default javascript_pack_tag
  pack_tag = <<-eos
      <%= stylesheet_pack_tag 'application', 'data-turbolinks-track': 'reload' %>
  eos
else # non-rails 6
  pack_tag = <<-eos
      <%= javascript_pack_tag 'application', 'data-turbolinks-track': 'reload' %>
      <%= stylesheet_pack_tag 'application', 'data-turbolinks-track': 'reload' %>
  eos
end

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

# Insert locale.js as a default i18n and add second locale cn.yml
copy_file "#{__dir__}/../generators/templates/i18n/index.js", Rails.root.join("app/javascript/locales/locale.js").to_s
copy_file "#{__dir__}/../generators/templates/i18n/cn.yml", Rails.root.join("config/locales/cn.yml").to_s

# Insert store.js as a simple store for components' state 
copy_file "#{__dir__}/../generators/templates/stores/index.js", Rails.root.join("app/javascript/parts/store.js").to_s

# Add Procfile for foreman
template "#{__dir__}/Procfile",  Rails.root.join("Procfile").to_s

# Add specific_page_vue helper to enable Specific-page Vue
gsub_file Rails.root.join("app/views/layouts/application.html.erb").to_s, 
/<body>/, '<%= content_tag :body, class: specific_page_vue do %>'
gsub_file Rails.root.join("app/views/layouts/application.html.erb").to_s, 
/<\/body>/, '<% end %>'
