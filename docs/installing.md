# Installing Vue on Rails project

There are three ways to install Vue on Rails as stated in the [Vue on Rails book](vueonrails.com)

1. Install via CDN

```
<!DOCTYPE html>
<html>
  <head>
    <title>App</title>
    <%= csrf_meta_tags %>
    <%= csp_meta_tag %>

    <%= stylesheet_link_tag    'application', media: 'all', 'data-turbolinks-track': 'reload' %>
    <%= javascript_include_tag 'application', 'data-turbolinks-track': 'reload' %>
    <%= vue_include_tag %>
    <%# vue_include_tag(version: 2.4.5, cdn:"cdnjs", minify:false) %>
  </head>

  <body>
    <%= yield %>
  </body>
</html>
```

`vue_include_tag` will insert a `<script>` with respective cdn.  The default is `cdnjs.com` and the latest supported Vue in minified format.

For Rails 5 and below, 
2. You can insert Vue into Asset pipeline. 

```
rails vue:install 
```
For Rails 5 and above, 
3. You can use webpacker. 

To start off with a project, you can run `rails new app --webpack=vue` or `rails new app -w vue`

To install Vue with webpacker, you can run `rails webpacker:install:vue`
This step assumes that you have webpacker installed.