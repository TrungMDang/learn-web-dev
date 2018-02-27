
var solution = function() {
	var todos = [];
	var input = "";
	
	while (input !== "quit") {
		input = prompt("What would you like to do?");
		if (input === "list") {
			console.log(todos);
		} else if (input === "new") {
			var newTask = prompt("Enter new todo:");
			todos.push(newTask);
		}
	}
	console.log("App exited");
};


window.setTimeout(function() {
	solution();
}, 500);