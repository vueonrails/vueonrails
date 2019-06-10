# Insert locale.js as a default i18n and add second locale cn.yml
copy_file "#{__dir__}/../generators/templates/i18n/index.js", Rails.root.join("app/javascript/locales/locale.js").to_s
copy_file "#{__dir__}/../generators/templates/i18n/cn.yml", Rails.root.join("config/locales/cn.yml").to_s
