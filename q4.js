
var remove = function(arr, item){
	var result = [];
	arr.forEach(function(elem){
		if(item!=elem){
			result.push(elem);
		}
	});
	return result;
};

var re = remove([1, 2, 3, 4, 2, 'a'], "a");
console.log(re);