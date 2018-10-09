require 'ostruct'

class VueGenerator < Rails::Generators::NamedBase
  source_root File.expand_path('../../generator_templates', __FILE__)

  argument :name, type: :string, default: "" 

  PACKS_PATH = "app/javascript/packs"
  PARTS_PATH = "app/javascript/parts"
  TESTS_PATH = "app/javascript/tests"
  
  OPTIONS = {
    test: {type: :boolean, default: false},
    vuex: {type: :boolean, default: false},
    form: {type: :boolean, default: false},
    tab: {type: :boolean, default: false},
    list: {type: :boolean, default: false},
    table: {type: :boolean, default: false},
    modal: {type: :boolean, default: false},
    click: {type: :boolean, default: false},
  }.freeze

  class_option :seperate, type: :boolean, default: false
  class_option :turbolinks, type: :boolean, default: false

  OPTIONS.each do |each_option, value| 
    class_option each_option, type: :boolean, default: false
  end

  def vue
    return if name.empty?
    
    if options[:seperate]
      if options[:turbolinks]
        add_to_component("turbolinks-seperate", name)
      else 
        add_to_component("seperate", name)
      end
    else 
      if options[:turbolinks]
        add_to_component("turbolinks-single", name)
      else 
        add_to_component("single", name)
      end
    end

    OPTIONS.each do |each_option, value| 
      options[each_option] ? add_to_component(each_option, name) : nil
    end
  end

  private
  def add_to_component(example, name)
    puts "add to component #{name} running #{example}"
    namespace = OpenStruct.new(TESTS_PATH: TESTS_PATH, PARTS_PATH: PARTS_PATH, PACKS_PATH: PACKS_PATH, name: name)
    template = File.read(File.expand_path("../options/#{example}.rb", __dir__))
    erbtemplate = ERB.new(template).result(namespace.instance_eval { binding })
    eval erbtemplate
  end
end
