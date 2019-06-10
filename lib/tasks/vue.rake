bin_path = ENV["BUNDLE_BIN"] || "./bin"

TASKS = {
  spv: "Install Specific-page Vue",
  store: "Install simple state management",
  i18n: "Install i18n dependencies",
  ssr: "Install server-side rendering using hypernova",
  setup: "Setup and install Vue on Rails dependencies", 
  test: "Install Jest tests", 
  ui: "Check if Vue-ui is installed", 
  vuex: "Check if Vuex is installed", 
  turbolinks: "Check Vue-turbolinks ready", 
}.freeze

namespace :vue do  
  TASKS.each do |task_name, description|
    desc description
    task task_name do
      template = File.expand_path("../installs/#{task_name}.rb", __dir__)
      base_path =
      if Rails::VERSION::MAJOR >= 5
        "#{RbConfig.ruby} #{bin_path}/rails app:template"
      else
        "#{RbConfig.ruby} #{bin_path}/rake rails:template"
      end
  
      exec "#{base_path} LOCATION=#{template}"
    end
  end
end
