say "Generated a single file component"
template "packs/pack.js.erb", "#{PACKS_PATH}/#{name}.js" 
template "sfc/single-file-component.vue", "#{PARTS_PATH}/#{name}.vue"    
