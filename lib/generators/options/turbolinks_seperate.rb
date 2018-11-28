template "turbolinks/index.js.erb", "#{PACKS_PATH}/#{name}.js"      
template "packs/index.vue", "#{PARTS_PATH}/#{name}/#{name}.vue"    
template "packs/index.js", "#{PARTS_PATH}/#{name}/#{name}.js"
copy_file "packs/index.css", "#{PARTS_PATH}/#{name}/#{name}.css"