template "ssr/component.js.erb", "#{SSR_PATH}/#{name}.js" 

puts "\nAdd the following line into your ssr.js:

getComponent(name) {
// Add this! 
if (name === '#{name}.js') {
  return require('./app/javascript/ssr/#{name}.js')
}
"
