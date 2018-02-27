myForEach = function(arr, callback) {
	for (var i = 0; i < arr.length; i++) {
		callback(arr[i]);
	}
}

var colors = ["red", "green", "blue"];
myForEach(colors, function(element) {
	console.log(element);
});

Array.prototype.myForEach = function(callback) {
	for (var i = 0; i < this.length; i++) {
		callback(this[i]);
	}
}


colors = ["red", "green", "blue", "orange"];
colors.myForEach(function(ele) {
	console.log(ele);
});