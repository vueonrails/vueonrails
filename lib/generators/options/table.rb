run "yarn add vuetable-2"

say "Inserted table example into component"
insert_into_file "#{PACKS_PATH}/#{name}.js" ,
"import Vuetable from 'vuetable-2/src/components/Vuetable'\n",
after: "import Vue from 'vue'\n"

insert_into_file "#{PACKS_PATH}/#{name}.js",
"Vue.use(Vuetable)\n",
before: "document.addEventListener"