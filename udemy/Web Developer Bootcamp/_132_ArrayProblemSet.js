printReverse = function(arg) {
	for (var i = arg.length - 1; i >= 0; i--) {
		console.log(arg[i]);
	}
}

printReverse([1, 2, 3]);

function isEqual(ele, index, arr) {
	return ele === arr[0];
}

isUniform = function(arg) {
	return arg.every(isEqual);
}
console.log(isUniform([1,1,1]));
console.log(isUniform([1,2,1]));

sumArray = function(arg) {
	var sum = 0;
	for (var i = 0; i < arg.length; i++) {
		sum += arg[i];
	}
	return sum;
}

console.log(sumArray([1, 2, 3]));
console.log(sumArray(["name", 2, 3]));

max = function(arg) {
	var max = 0;
	for (var i = 0; i < arg.length; i++) {
		if (arg[i] > max) {
			max = arg[i];
		}
	}
	return max;
}

console.log(max([10, 3, 10 , 4]));