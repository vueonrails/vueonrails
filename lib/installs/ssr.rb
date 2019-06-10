# Check that webpacker + vueonrails are installed before proceeding
begin
  $stdout.puts "Webpacker: #{Webpacker::VERSION}" 
rescue NameError 
  $stdout.puts "Webpacker: Not installed"
end

# install the dependencies
gem 'hypernova'
run "yarn add hypernova hypernova-vue vue-server-renderer"

#insert the application helper and also import
insert_into_file Rails.root.join("app/controllers/application_controller.rb").to_s,
"require 'hypernova'\n", before: "class"

insert_into_file Rails.root.join("app/controllers/application_controller.rb").to_s,
"around_action :hypernova_render_support\n", before: "end"

# copy the configuration file into config/initializer
copy_file "#{__dir__}/ssr/hypernova.rb", Rails.root.join("config/initializers/hypernova.rb").to_s

# copy hypernova.js to the project root level
copy_file "#{__dir__}/ssr/ssr.js", Rails.root.join("ssr.js").to_s

# copy the first component server-rendered into the  
copy_file "#{__dir__}/ssr/component.js", Rails.root.join("app/javascript/ssr/component.js").to_s
