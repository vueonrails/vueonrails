require 'nokogiri'
require 'open-uri'
require 'csv'

urls = %w(https://github.com/vuejs/vue-router/releases)

everyday = []
eachday = []
urls.each_with_index do |value, index|
  page = Nokogiri::HTML(open(value))
  array = page.css("h1.release-title")
  puts array.first.text.strip if array.first && array.first.text
end
