require "vueonrails/version"
require "thor"

module VueOnRails
  class Engine < ::Rails::Engine
    engine_name 'vueonrails'
  end

  class Base < Thor
    check_unknown_options!
    package_name 'vueonrails'
  end
end
