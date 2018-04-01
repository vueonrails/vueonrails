require "vuejs/version"
require "thor"

module Vuejs
  class Engine < ::Rails::Engine
    engine_name 'vuejs'
  end

  class Base < Thor
    check_unknown_options!
    package_name 'vuejs'
  end
end
