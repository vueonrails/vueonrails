# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'vuejs/version'
require 'vuejs/post_message'

Gem::Specification.new do |spec|
  spec.name          = "vuejs"
  spec.version       = Vuejs::VERSION
  spec.authors       = ["Bryan Lim"]
  spec.email         = ["ytbryan@gmail.com"]
  spec.summary       = %q{Unofficial Vue.js Integration with Asset Pipeline with latest router + resource.}
  spec.description   = %q{Unofficial Vue.js Integration with Asset Pipeline with latest router + resource.}
  spec.homepage      = "http://github.com/ytbryan/vuejs"
  spec.license       = "MIT"
  spec.post_install_message = Log::MESSAGE
  spec.files         = Dir["{app,lib,vendor}/**/*", "LICENSE", "README.md"]
  spec.executables   = spec.files.grep(%r{^bin/}) { |f| File.basename(f) }
  spec.test_files    = spec.files.grep(%r{^(test|spec|features)/})
  spec.require_paths = ["lib"]
  spec.add_development_dependency "bundler", "~> 1.11"
  spec.add_development_dependency "rake", "~> 10.0"
end
