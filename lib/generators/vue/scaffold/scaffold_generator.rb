module Vue
  module Generators
    class ScaffoldGenerator < Rails::Generators::NamedBase

    def initialize(*args, &block)
      puts "rails g vue:scaffold works -> first args: #{args[0].first}"
    end

  end
 end
end