class VueGenerator < Rails::Generators::NamedBase
  source_root File.expand_path('../../generator_templates', __FILE__)
  
  argument :name, :type => :string, :default => "index" 
 
  def vue 
    output = "app/javascript/#{name}/#{name}"    
    pack_output = "app/javascript/packs/#{name}"
    template_path = "#{__dir__}/../generator_templates"
     
    template "#{template_path}/pack.js", "#{pack_output}.js"    
    create_vue_component("#{template_path}/index.js", output)
  end


  private
  def create_vue_component(template_dir, output)
    template "#{template_dir}.vue", "#{output}.vue"    
    template "#{template_dir}.js", "#{output}.js"
    copy_file "#{template_dir}.css", "#{output}.css"
  end
end
