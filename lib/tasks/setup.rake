bin_path = ENV["BUNDLE_BIN"] || "./bin"
namespace :vue do  
  desc "setup your vue on rails project"
  task :setup do
    template = File.expand_path("../install/setup.rb", __dir__)
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

  desc "setup vue on rails to be ready for Jest tests"
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

  desc "install vuex and vuex-rails-plugins"
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

  desc "make this rails project vue-ui compatible"
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

  desc "is this rail project specific-page vue enabled?"
  task :spv do
    puts "check if spv is enabled and setup?"
  end
end
