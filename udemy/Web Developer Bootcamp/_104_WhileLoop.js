var c = -10;

console.log("All numbers between -10 and 19:");
while (c <= 19) {
	console.log(c);
	c++;
}


console.log("All even numbers between 10 and 40:");
c = 10;
while(c <= 40) {
	console.log(c);	
	c += 2;				//No need to check odd
}

console.log("All odd numbers between 300 and 333:");
c = 300;
while(c <= 333) {
	if (c % 2 != 0) {
		console.log(c);
	}
	c++;
}

console.log("All numbers divisible by 5 and 3 between 5 and 50:");
c = 5;
while(c <= 50) {
	if (c % 5 == 0 && c % 3 == 0) {
		console.log(c);
	}
	c++;
}