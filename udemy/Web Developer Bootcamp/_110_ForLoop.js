console.log("All number between -10 and 19:");
for(var i = -10; i <= 19; i++) {
	console.log(i);
}

console.log("All even number between 10 and 40:");
for(var i = 10; i <= 40; i+=2) {
	console.log(i);
}

console.log("All odd number between 300 and 333:");
for(var i = 301; i <= 333; i+=2) {
	console.log(i);
}

console.log("All number divisible by 5 and 3 between 5 and 50:");
for(var i = 5; i <= 50; i+=1) {
	if (i % 5 === 0 && i % 3 === 0)
		console.log(i);
}
