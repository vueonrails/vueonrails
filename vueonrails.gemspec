# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'vueonrails/version'
require 'vueonrails/post_message'

Gem::Specification.new do |spec|
  spec.name          = "vueonrails"
  spec.version       = VueOnRails::VERSION
  spec.authors       = ["Bryan Lim"]
  spec.email         = ["ytbryan@gmail.com"]
  spec.summary       = %q{Vue on Rails https://vueonrails.com}
  spec.description   = %q{Ruby on Rails with the power of Vue components}
  spec.homepage      = "https://github.com/vueonrails/vueonrails"
  spec.license       = "MIT"
  spec.post_install_message = Log::MESSAGE
  spec.files         = Dir["{app,config,lib}/**/*", "LICENSE.md", "README.md"]
  spec.executables   = spec.files.grep(%r{^bin/}) { |f| File.basename(f) }
  spec.test_files    = spec.files.grep(%r{^(test|spec|features)/})
  spec.require_paths = ["lib"]
  spec.add_development_dependency "bundler", "~> 1.11"
  spec.add_development_dependency "rake", "~> 10.0"
  spec.add_development_dependency 'rspec', '~> 3.8', '>= 3.8.0'
end
