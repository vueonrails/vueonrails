run "yarn add vuex"

say "Added Vuex"
insert_into_file "#{PACKS_PATH}/#{name}.js" ,
"import Vuex from 'vuex'\n",
after: "import Vue from 'vue'\n"

insert_into_file "#{PACKS_PATH}/#{name}.js",
"Vue.use(Vuex)\n",
before: "document.addEventListener"