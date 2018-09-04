bin_path = ENV["BUNDLE_BIN"] || "./bin"
namespace :vue do  
  desc "Setup your Vue on Rails project"
  task :setup do
    template = File.expand_path("../install/alias.rb", __dir__)
    base_path =
    if Rails::VERSION::MAJOR >= 5
      "#{RbConfig.ruby} #{bin_path}/rails app:template"
    else
      "#{RbConfig.ruby} #{bin_path}/rake rails:template"
    end

    exec "#{base_path} LOCATION=#{template}"
  end

  desc "install other plugins"
  task :others do
    $stdout.puts "#{`yarn add @vue/cli-plugin-babel 
    @vue/cli-plugin-eslint 
    @vue/cli-plugin-unit-jest 
    @vue/cli-plugin-pwa 
    vue-i18n`}"
  end
  
  desc "install turbolinks"
  task :turbolinks do
    $stdout.puts "#{`yarn add vue-turbolinks`}"
  end

  desc "install vue-test-utils"
  task :test do
    $stdout.puts "#{`yarn add @vue/test-utils`}"
  end

  desc "install Vuex"
  task :vuex do
    $stdout.puts "#{`yarn add vuex`}"
  end

  desc "make this Rails project Vue-ui compatible"
  task :ui do
    $stdout.puts "yarn add @vue/cli-service --dev"
  end
end
