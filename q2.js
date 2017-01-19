
var containsNumber = function(str){
	if (str.match(/[0-9]+/))
		return true;
	return false;
}

var re = containsNumber('abcabc   34');
console.log(re);