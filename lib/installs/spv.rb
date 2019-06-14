gsub_file Rails.root.join("app/views/layouts/application.html.erb").to_s, 
/<body>/, '<%= content_tag :body, class: specific_page_vue do %>'
gsub_file Rails.root.join("app/views/layouts/application.html.erb").to_s, 
/<\/body>/, '<% end %>'

if (Gem.loaded_specs["rails"].version >= Gem::Version.new('6.x'))  # rails 6 has default javascript_pack_tag
    pack_tag = <<-eos
        <%= stylesheet_pack_tag 'application', 'data-turbolinks-track': 'reload' %>
    eos
else # non-rails 6
    pack_tag = <<-eos
        <%= javascript_pack_tag 'application', 'data-turbolinks-track': 'reload' %>
        <%= stylesheet_pack_tag 'application', 'data-turbolinks-track': 'reload' %>
    eos
end


insert_into_file Rails.root.join("app/views/layouts/application.html.erb").to_s,
pack_tag,
before: "  </head>\n"

vue_on_rails = <<-eos
    //= vue-on-rails
eos

insert_into_file Rails.root.join("app/assets/javascripts/application.js").to_s,
vue_on_rails,
before: "//= require_tree ."
