const secretNumber = Math.floor(Math.random() * 100);

console.log(secretNumber);

let guess = prompt("Guess a number!");

while (Number(guess) !== secretNumber) {
	if (guess <= secretNumber / 2) {
		guess = prompt("Too low. Try again!");
	} else if (guess < secretNumber && guess > secretNumber / 2) {
		guess = prompt("Little Low. Try Again!");
	} else if (guess > 3 * secretNumber / 2) {
		guess = prompt("Little high. Try Again!");		
	} else {
		guess = prompt("Too high. Try Again!");
	}
}

prompt("You got it");