pugtemplate = <<-eos
<template lang="pug">
  ##{name}
    p {{ message }}
</template>
eos

if options[:seperate] == true
  gsub_file Rails.root.join("#{PARTS_PATH}/#{name}/#{name}.vue").to_s, 
  /<template>[^\]]*<\/template>/, pugtemplate
else 
  gsub_file Rails.root.join("#{PARTS_PATH}/#{name}.vue").to_s, 
  /<template>[^\]]*<\/template>/, pugtemplate
end
