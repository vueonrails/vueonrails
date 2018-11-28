template "packs/pack.js.erb", "#{PACKS_PATH}/#{name}.js" 
template "single_file_components/index.vue", "#{PARTS_PATH}/#{name}.vue"    
template "single_file_components/index.vue", "#{PARTS_PATH}/#{child}.vue"    

insert_into_file "#{PARTS_PATH}/#{name}.vue",
"import #{child} from './#{child}.vue'\n", after: "<script>\n"