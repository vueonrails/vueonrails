run "yarn add vue-js-modal"

say "Inserted vue-js-modal example into component"
insert_into_file "#{PACKS_PATH}/#{name}.js" ,
"import VModal from 'vue-js-modal'\n",
after: "import Vue from 'vue'\n"

insert_into_file "#{PACKS_PATH}/#{name}.js",
"Vue.use(VModal)\n",
before: "document.addEventListener"

modal = <<-eos
    <button @click="onClick">click this</button>
    <modal name="hello-world">
      <div style="padding: 30px;">
        {{ message }}
      </div>
      <v-dialog/>
    </modal>
eos

insert_into_file "#{PARTS_PATH}/#{name}.vue",
modal, after: "<p>{{ message }}</p>\n"

insert_into_file "#{PARTS_PATH}/#{name}.vue",
"      this.$modal.show('hello-world');\n", after: "console.log(\"clicked\")\n"