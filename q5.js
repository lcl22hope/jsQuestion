

var duplicates = function(arr){
	var result = [];
	var str = arr.sort().join("");
	var idx = 0;
	while(idx < str.length){
		var re = str.slice(idx).match(/(.)\1+/);
		if (re) {
			idx += (re.index + re[0].length);
			result.push(arr[idx-1]);
		}
	}
	return result;
};


var re = duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3,'a','a','a','a','b','b','b','a','a','a','a','b']).sort();
console.log(re);


