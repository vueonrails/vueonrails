module SyntaxHelper
  def rails_version
    "<p>#{Rails.version}</p>".html_safe
  end

  def vue_gem_version
     "<p>#{Vuejs::VERSION}</p>".html_safe
  end
  
  def vue_component(*name, **options)
    javascript_pack_tag(*name, **options) + ( stylesheet_pack_tag(*name, **options) if options[:stylesheet] != false )    
  end
end
