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

  desc "install turbolinks"
  task :turbolinks do
    template = File.expand_path("../install/turbolinks.rb", __dir__)
    base_path =
    if Rails::VERSION::MAJOR >= 5
      "#{RbConfig.ruby} #{bin_path}/rails app:template"
    else
      "#{RbConfig.ruby} #{bin_path}/rake rails:template"
    end

    exec "#{base_path} LOCATION=#{template}"
  end

  desc "setup Vue on Rails to be ready for Jest tests"
  task :test do
    template = File.expand_path("../install/test.rb", __dir__)
    base_path =
    if Rails::VERSION::MAJOR >= 5
      "#{RbConfig.ruby} #{bin_path}/rails app:template"
    else
      "#{RbConfig.ruby} #{bin_path}/rake rails:template"
    end

    exec "#{base_path} LOCATION=#{template}"
  end

  desc "install Vuex and vuex-rails-plugins"
  task :vuex do
    template = File.expand_path("../install/vuex.rb", __dir__)
    base_path =
    if Rails::VERSION::MAJOR >= 5
      "#{RbConfig.ruby} #{bin_path}/rails app:template"
    else
      "#{RbConfig.ruby} #{bin_path}/rake rails:template"
    end

    exec "#{base_path} LOCATION=#{template}"
  end

  desc "make this Rails project Vue-ui compatible"
  task :ui do
    template = File.expand_path("../install/ui.rb", __dir__)
    base_path =
    if Rails::VERSION::MAJOR >= 5
      "#{RbConfig.ruby} #{bin_path}/rails app:template"
    else
      "#{RbConfig.ruby} #{bin_path}/rake rails:template"
    end

    exec "#{base_path} LOCATION=#{template}"    
  end
end
