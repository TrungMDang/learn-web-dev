
var solution = function() {
	var todos = [];
	var input = "";
	
	var printTodo = function() {
		console.log("*************************");
			todos.forEach(function(todo, index) {
				console.log((index + 1) + ": " + todo);	
			});	
			console.log("*************************");
	}

	var addTodo = function() {
		var newTask = prompt("Enter new todo:");
		todos.push(newTask);
		console.log(newTask + " added to list");
	}

	var deleteTodo = function() {
		var index = prompt("Enter task number, starting from 1");
		console.log(todos.splice(index - 1, 1) + " removed from todo list");
	}

	while (input !== "quit") {
		input = prompt("What would you like to do?");
		if (input === "list") {
			printTodo();
		} else if (input === "new") {
			addTodo();			
		} else if (input === "delete") {
			deleteTodo();			
		}
	}
	console.log("App exited");
};


window.setTimeout(function() {
	solution();
}, 500);