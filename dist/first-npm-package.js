function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

(function universalModuleDefinition(root, factory) {
  console.log('this = ', this);
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["firstNpmPackage"] = factory();
	else
		root["firstNpmPackage"] = factory();
})(this, function() {
  console.log('factory - firstNpmPackage')
  return {
    getRandomColor: getRandomColor
  };
})
