require 'ostruct'

class VueGenerator < Rails::Generators::NamedBase
  PACKS_PATH = "app/javascript/packs"
  PARTS_PATH = "app/javascript/parts"
  TESTS_PATH = "app/javascript/tests"

  source_root File.expand_path('../../generator_templates', __FILE__)

  argument :name, type: :string, default: nil
  
  OPTIONS = {
    test: {type: :boolean, default: false},
    vuex: {type: :boolean, default: false},
    form: {type: :boolean, default: false},
    tab:  {type: :boolean, default: false},
    list: {type: :boolean, default: false},
    table: {type: :boolean, default: false},
    modal: {type: :boolean, default: false},
    click: {type: :boolean, default: false},
  }.freeze
  
  class_option :child, type: :string, default: nil
  class_option :parent, type: :string, default: nil
  class_option :seperate, type: :boolean, default: false
  class_option :turbolinks, type: :boolean, default: false

  OPTIONS.each do |each_option, value| 
    class_option each_option, type: :boolean, default: false
  end

  def vue
    return if name.empty?

    if options[:child] 
      adding_nested_component(:child, name, nil, options[:child])
    elsif options[:parent]
      adding_nested_component(:parent, name, options[:parent], nil)
    else 
      if options[:seperate]
        if options[:turbolinks]
          add_to_component("turbolinks_seperate", name)
        else 
          add_to_component("seperate", name)
        end
      else 
        if options[:turbolinks]
          add_to_component("turbolinks_single", name)
        else 
          add_to_component("single", name)
        end
      end
    end

    OPTIONS.each do |each_option, value| 
      if each_option == :form
        options[:form] ? add_form_to_component(ARGV, each_option, name) : nil
      else
        options[each_option] ? add_to_component(each_option, name) : nil
      end
    end
  end

  private

  def filter_for_form_attributes(argv)
    return argv.select{ |item| item.include? ":" }
  end

  def process_args(attribute) 
    return if (attribute == "") || (attribute.include? ":")
    attr = attribute.split(':').first
    case attribute
        when :integer              then 'number-field'
        when :float, :decimal      then 'text-field'
        when :time                 then 'time-select'
        when :datetime, :timestamp then 'datetime-select'
        when :date                 then 'date-select'
        when :text                 then 'text-area'
        when :boolean              then 'check-box'
        else
          'text-field'
    end
  end

  def process_name(attribute)
    return if (attribute == "") || (attribute.include? ":")
    return attribute.split(':')[1]
  end

  def adding_nested_component(example, name, parent, child)
    namespace = OpenStruct.new(TESTS_PATH: TESTS_PATH, PARTS_PATH: PARTS_PATH, PACKS_PATH: PACKS_PATH, name: name, child: child, parent: parent)
    template = File.read(File.expand_path("../options/#{example}.rb", __dir__))
    erbtemplate = ERB.new(template).result(namespace.instance_eval { binding })
    eval erbtemplate
  end

  def add_to_component(example, name)
    namespace = OpenStruct.new(TESTS_PATH: TESTS_PATH, PARTS_PATH: PARTS_PATH, PACKS_PATH: PACKS_PATH, name: name)
    template = File.read(File.expand_path("../options/#{example}.rb", __dir__))
    erbtemplate = ERB.new(template).result(namespace.instance_eval { binding })
    eval erbtemplate
  end

  # To handle field_type https://github.com/rails/rails/blob/b1f140ef2e5af605ea12d8ee1c932eaf728a398d/railties/lib/rails/generators/generated_attribute.rb
  def add_form_to_component argv, example, name
    something = filter_for_form_attributes(argv)
    namespace = OpenStruct.new(TESTS_PATH: TESTS_PATH, 
                                PARTS_PATH: PARTS_PATH, 
                                PACKS_PATH: PACKS_PATH, 
                                name: name, 
                                something: something )
    template = File.read(File.expand_path("../options/form.rb", __dir__))
    erbtemplate = ERB.new(template).result(namespace.instance_eval { binding })
    eval erbtemplate
  end
end

