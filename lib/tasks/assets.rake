require 'open-uri'

namespace :vue do
  desc "install vue.js into assets pipeline"
  task :assets do
    version = "2.5.16"
    source = "https://cdnjs.cloudflare.com/ajax/libs/vue/#{version}/vue.js"
    output = "app/assets/javascripts/vue.js"
    done = File.write output, open(source).read
    $stdout.puts "Added Vue.js #{version} (#{source}) into assets pipeline (#{output})" if done != nil
  end
end