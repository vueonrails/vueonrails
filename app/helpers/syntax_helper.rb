module SyntaxHelper
  def specific_page_vue
    " #{controller_name} #{action_name} "
  end

  def vue_include_tag
    javascript_include_tag "https://cdn.jsdelivr.net/npm/vue/dist/vue.js" if Rails.env.development?
  end

  def rails_version
    content_tag :p, Rails.version
  end

  def vue_on_rails_version
    content_tag :p, Vueonrails::VERSION
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

  #server side rendering via hypernova
  def render_vue_component(id, data = {})
    render_react_component(id, data)
  end
end
