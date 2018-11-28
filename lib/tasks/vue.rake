bin_path = ENV["BUNDLE_BIN"] || "./bin"

TASKS = {
  turbolinks: "Check Vue-turbolinks ready", 
  setup: "Check Vue on Rails ready", 
  test: "Check Jest tests ready", 
  vuex: "Check Vuex ready", 
  ui: "Check Vue-ui ready", 
  specific_page_vue: "Check Specific-page Vue ready?"
}.freeze

namespace :vue do  
  TASKS.each do |task_name, description|
    desc description
    task task_name do
      template = File.expand_path("../install/#{task_name}.rb", __dir__)
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
