gsub_file Rails.root.join("app/views/layouts/application.html.erb").to_s, 
/<body>/, '<body class="<%= specific_page_vue %>">'

pack_tag = <<-eos
    <%= javascript_pack_tag 'application' %>
    <%= stylesheet_pack_tag 'application' %>
eos

insert_into_file Rails.root.join("app/views/layouts/application.html.erb").to_s,
pack_tag,
before: "  </head>\n"

vue_on_rails = <<-eos
    //= vue-on-rails
eos

insert_into_file Rails.root.join("app/assets/javascripts/application.js").to_s,
vue_on_rails,
before: "//= require_tree ."