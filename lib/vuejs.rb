require "vuejs/version"
require "thor"

module Vuejs
  class Engine < Rails::Engine
  end
  
  class Base < Thor
    check_unknown_options!
    package_name 'vuejs'
    default_task :info

    desc :info, ""
    def info
      puts "version: "
    end
  end





  # class Base < Thor
  #   check_unknown_options!
  #   package_name 'vuejs'
  #   default_task :info
  #
  #   desc :info
  #   def info
  #     puts "version: "
  #   end
  # end
end
