template "single_file_components/index.vue", "#{PARTS_PATH}/#{name}.vue"    
insert_into_file "#{PARTS_PATH}/#{parent}.vue",
"import #{name} from './#{name}.vue';\n", after: "<script>\n"