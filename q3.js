
var count = function(arr, item){
	var result = 0;
	arr.forEach(function(elem){
		if(elem == item){
			result++;
		}
	});
	return result;
}


var re = count([1, 2, 4, 4, 3, 4, 3], 4);
re = count([1, 2, 4, 4, 3, 4, 3, 6, 4, 7, 9], 4);
console.log(re);