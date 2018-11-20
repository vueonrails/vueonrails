template "packs/pack.js.erb", "#{PACKS_PATH}/#{name}.js" 
template "sfc/single-file-component.vue", "#{PARTS_PATH}/#{name}.vue"    
template "sfc/single-file-component.vue", "#{PARTS_PATH}/#{child}.vue"    

insert_into_file "#{PARTS_PATH}/#{name}.vue",
"import #{child} from './#{child}.vue'\n", after: "<script>\n"