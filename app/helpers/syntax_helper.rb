module SyntaxHelper
  def specific_page_vue
    " #{controller_name} #{action_name} "
  end

  def vue_include_tag(version)
    javascript_include_tag "https://cdnjs.cloudflare.com/ajax/libs/vue/#{version}/vue.js" if Rails.env.development?
  end

  def rails_version
    "<p>#{Rails.version}</p>".html_safe
  end

  def vue_on_rails_version
     "<p>#{VueOnRails::VERSION}</p>".html_safe
  end
  
  def vue_component(identifier, variable=nil)
    concat("<div id=\"#{identifier}\" refs=\"#{identifier}\">".html_safe)
    concat("</div>".html_safe)
    if(variable != nil)
      variable.each {|key, value| 
        concat("<div id=\"vueonrails-#{key}\" data-#{key}=\'#{value}\'>".html_safe)
        concat("</div>".html_safe)
      }; nil
    end
  end
end
