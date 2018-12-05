namespace :vue do
  desc "Translate Rails' locale into Vue's locale"
  task :translate do
    Dir.foreach("config/locales/").each do |locale|
      next if locale == '.' or locale == '..'
      config = YAML.load_file("config/locales/#{locale}")
      name = locale.to_s.split('.').first if locale.to_s.split('.') != nil
      if name != nil
        hash = Hash.new
        hash[name] = config[name]

        File.open("app/javascript/locales/#{name}.json", 'w') { |file| 
          file.puts JSON.pretty_generate(hash)
           $stdout.puts "Created app/javascript/locales/#{name}.json"
        }
      end
    end
  end
end