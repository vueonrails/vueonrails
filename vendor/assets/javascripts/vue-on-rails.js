function isView(pageClassString){
  if(pageClassString == "###") return
  if(pageClassString != "") pageClassString = pageClassString.replace(/#/g , " ");
  return document.getElementsByClassName(pageClassString).length == 1
}

function puts(obj){
  console.log({obj})
}

function p(obj){
  console.log({obj})
}

function addClass(identifier, className){
  document.getElementById(identifier).classList.addClass(className)
}

function toggleClass(identifier, className){
  document.getElementById(identifier).classList.toggle(className)
}

function table(obj){
  console.table(obj)
}

function titleize(str){
  return str.replace(/\b\S/g, function(t) { return t.toUpperCase() });
}

function isArray(obj){
  return Object.prototype.toString.call(obj) === '[object Array]' ;
}