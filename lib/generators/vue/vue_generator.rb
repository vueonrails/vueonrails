class VueGenerator < Rails::Generators::NamedBase
  source_root File.expand_path('../../generator_templates', __FILE__)

  argument :name, :type => :string, :default => :index 
  class_option :single, type: :boolean, default: false
  class_option :vuex, type: :boolean, default: false
  # class_option :helpers, type: :boolean, default: false

  PACKS_PATH = "app/javascript/packs"
  PARTS_PATH = "app/javascript/parts"

  def vue 
    if options[:single] 
      create_single_file_component_using(name) 
    else 
      create_component_with_seperate_concern_using(name)
    end
      
    options[:vuex] ? add_vuex_to_component(name) : nil
    options[:helpers] ? add_helpers_to_component(name) : nil
  end

  private
  def add_helpers_to_component name
    puts "adding helpers"
  end

  def add_vuex_to_component name
    puts "adding vuex"
    # yarn add vuex
    # import vuex from 'vuex'
    # Vue.use(vuex)
    # Generate a vuex.html.erb
  end

  def create_component_with_seperate_concern_using name
    template "pack.js", "#{PACKS_PATH}/#{name}.js"      
    template "index.vue", "#{PARTS_PATH}/#{name}/#{name}.vue"    
    template "index.js", "#{PARTS_PATH}/#{name}/#{name}.js"
    copy_file "index.css", "#{PARTS_PATH}/#{name}/#{name}.css"
  end

  def create_single_file_component_using name
    template "pack.js", "#{PACKS_PATH}/#{name}.js" 
    template "single.vue", "#{PARTS_PATH}/#{name}.vue"    
  end
end
