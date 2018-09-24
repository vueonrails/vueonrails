class VueGenerator < Rails::Generators::NamedBase
  source_root File.expand_path('../../generator_templates', __FILE__)

  argument :name, type: :string, default: :index 
  class_option :seperate, type: :boolean, default: false
  class_option :vuex, type: :boolean, default: false
  class_option :turbolinks, type: :boolean, default: false
  class_option :test, type: :boolean, default: false
  class_option 'form-for', type: :boolean, default: false

  PACKS_PATH = "app/javascript/packs"
  PARTS_PATH = "app/javascript/parts"
  TESTS_PATH = "app/javascript/tests"

  def vue 
    if options[:seperate] 
      if options[:turbolinks]
        create_turbolink_component_with_seperate_concern_using(name) 
      else 
        create_component_with_seperate_concern_using(name) 
      end
    else 
      if options[:turbolinks]
        create_turbolink_single_file_component_using(name) 
      else 
        create_single_file_component_using(name) 
      end
    end
      
    options[:test] ? add_tests_to_component(name) : nil
    options[:vuex] ? add_vuex_to_component(name) : nil
    options['form-for'] ? add_helpers_to_component(name) : nil
  end

  private

  def add_tests_to_component name
    template "tests/unit.test.js.erb", "#{TESTS_PATH}/#{name}.test.js"      
  end
  
  def add_helpers_to_component name
    insert_into_file "#{PACKS_PATH}/#{name}.js" ,
    "import FormFor from 'vue-form-for'",
    after: "import Vue from 'vue'\n"

    insert_into_file "#{PACKS_PATH}/#{name}.js",
    "Vue.use(FormFor)\n",
    before: "document.addEventListener"

    run "yarn add vue-form-for"
  end

  def add_vuex_to_component name
    insert_into_file "#{PACKS_PATH}/#{name}.js" ,
    "import Vuex from 'vuex'\n",
    after: "import Vue from 'vue'\n"

    insert_into_file "#{PACKS_PATH}/#{name}.js",
    "Vue.use(Vuex)\n",
    before: "document.addEventListener"
    run "yarn add vuex"
  end

  def create_component_with_seperate_concern_using name
    say "Generated a vue component with seperation of concern"
    @code = "<%= vue \"#{name}\" %>"
    template "packs/pack.js.erb", "#{PACKS_PATH}/#{name}.js"      
    template "packs/index.vue", "#{PARTS_PATH}/#{name}/#{name}.vue"    
    template "packs/index.js", "#{PARTS_PATH}/#{name}/#{name}.js"
    copy_file "packs/index.css", "#{PARTS_PATH}/#{name}/#{name}.css"
  end

  def create_single_file_component_using name
    say "Generated a single file component"
    @code = "<%= vue \"#{name}\" %>"
    template "packs/pack.js.erb", "#{PACKS_PATH}/#{name}.js" 
    template "sfc/single-file-component.vue", "#{PARTS_PATH}/#{name}.vue"    
  end

  def create_turbolink_single_file_component_using name
    say "Adding turbolinks to a single file component"
    @code = "<%= vue \"#{name}\" %>"
    template "turbolinks/turbolinks-pack.js.erb", "#{PACKS_PATH}/#{name}.js"      
    template "sfc/single-file-component.vue", "#{PARTS_PATH}/#{name}.vue"    
  end

  def create_turbolink_component_with_seperate_concern_using name
    say "Adding turbolinks to vue component with seperate of concerns"
    @code = "<%= vue \"#{name}\" %>"
    template "turbolinks/turbolinks-pack.js.erb", "#{PACKS_PATH}/#{name}.js"      
    template "packs/index.vue", "#{PARTS_PATH}/#{name}/#{name}.vue"    
    template "packs/index.js", "#{PARTS_PATH}/#{name}/#{name}.js"
    copy_file "packs/index.css", "#{PARTS_PATH}/#{name}/#{name}.css"
  end
end
