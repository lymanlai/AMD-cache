define([
  'cache!color/blue'
], function(color){
	
	var what = "Hey there! Today's color is " + color;
	
	var sayIt = function(){
		alert(what);
	};
	
	return sayIt;
});