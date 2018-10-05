say "Inserted form example into component"
insert_into_file "#{PACKS_PATH}/#{name}.js" ,
"import FormFor from 'vue-form-for'\n",
after: "import Vue from 'vue'\n"

insert_into_file "#{PACKS_PATH}/#{name}.js",
"Vue.use(FormFor)\n",
before: "document.addEventListener"

form = <<-eos
    <form-for model="#{name}">
      <text-field/>
      <submit-tag/>
    </form-for>
eos

insert_into_file "#{PARTS_PATH}/#{name}.vue",
form,
after: "<p>{{ message }}</p>\n"