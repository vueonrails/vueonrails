class VueGenerator < Rails::Generators::NamedBase
  PACKS_PATH = "app/javascript/packs"
  PARTS_PATH = "app/javascript/parts"

  source_root File.expand_path('../../generator_templates', __FILE__)
  argument :name, :type => :string, :default => :index 
  class_option :single, type: :boolean, default: false

  def vue 
    if options[:single] == false
      create_component_with_seperate_concern_using(name)
    else 
      create_single_file_component_using(name)
    end
  end

  private
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
