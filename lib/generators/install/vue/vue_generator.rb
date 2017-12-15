module Install
  module Generators
    class VueGenerator < Rails::Generators::NamedBase

    argument :name, :type => :string, :default => "" 

    def vue      
      puts "rails g install:vue works. This will install vue.js into the assets pipeline."
    end

  end
 end
end