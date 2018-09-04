run "yarn add vuex"

insert_into_file "#{PACKS_PATH}/#{name}.js" ,
"import Vuex from 'vuex'",
after: "import Vue from 'vue'\n"

insert_into_file "#{PACKS_PATH}/#{name}.js",
"Vue.use(Vuex)\n",
before: "document.addEventListener"
