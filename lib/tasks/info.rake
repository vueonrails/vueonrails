namespace :vue do
  desc "Provide information on Webpacker's environment"
  task :info do
    $stdout.puts "Ruby: #{`ruby --version`}"
    $stdout.puts "Rails: #{Rails.version}"
    begin
      $stdout.puts "Webpacker: #{Webpacker::VERSION}" 
    rescue NameError 
      $stdout.puts "Webpacker: Not installed"
    end
    $stdout.puts "Node: #{`node --version`}"
    $stdout.puts "Yarn: #{`yarn --version`}"
    $stdout.puts "\n"
    $stdout.puts "#{`yarn list @rails/webpacker vue vue-loader vuex vue-template-compiler webpack-dev-server @vue/test-utils babel-jest jest jest-serializer-vue vue-jest`}"
    $stdout.puts "\n"

    $stdout.puts "Is bin/webpack present?: #{File.exist? 'bin/webpack'}"
    $stdout.puts "Is bin/webpack-dev-server present?: #{File.exist? 'bin/webpack-dev-server'}"
    $stdout.puts "Is bin/yarn present?: #{File.exist? 'bin/yarn'}"
  end
end
