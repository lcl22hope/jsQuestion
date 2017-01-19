

var findAllOccurrences = function(arr, item){
	var result = [];
	console.log(arr);
	arr.forEach(function(elem, index){
		if(item === elem){
			result.push(index);
		}
	});
	return result;
}

var a = findAllOccurrences('abcdefabc'.split(''), 'a').sort();
console.log(a);