# Insert store.js as a simple store for components' state 
copy_file "#{__dir__}/../generators/templates/stores/index.js", Rails.root.join("app/javascript/parts/store.js").to_s
