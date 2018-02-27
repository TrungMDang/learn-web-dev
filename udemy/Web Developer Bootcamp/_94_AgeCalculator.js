const year = prompt("How old are you?");

alert("You have been alived for " + year * 365.25);
console.log("You have been alived for " + year * 365.25);

//.25 is for leap year. Leap year has 1 more day (4 * 0.25) every 4 years so one year is 365.25 
//(even the 1 extra day out over 4 year).