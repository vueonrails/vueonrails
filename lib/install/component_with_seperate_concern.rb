template "packs/pack.js.erb", "#{PACKS_PATH}/#{name}.js"      
template "index.vue", "#{PARTS_PATH}/#{name}/#{name}.vue"    
template "index.js", "#{PARTS_PATH}/#{name}/#{name}.js"
copy_file "index.css", "#{PARTS_PATH}/#{name}/#{name}.css"
