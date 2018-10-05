list = <<-eos
    <button @click="add()">add</button>
    <button @click="remove()">remove</button>
    <ul>
      <li v-for="(item, index) in items" :key="index">
        {{item}}
      </li>
    </ul>
eos

array = <<-eos
      items: [],
eos

addandremove = <<-eos
    remove: function(){
      this.items.pop()
    },
    add: function(){
      this.items.push(this.message)
    },
eos

say "Inserted list example into component"
insert_into_file "#{PARTS_PATH}/#{name}.vue",
list, after: "<p>{{ message }}</p>\n"

insert_into_file "#{PARTS_PATH}/#{name}.vue",
addandremove, after: "methods: {\n"

insert_into_file "#{PARTS_PATH}/#{name}.vue",
array, after: "return {\n"