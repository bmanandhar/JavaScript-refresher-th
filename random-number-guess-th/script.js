//Method-1

var correctGuess = false;
var randomNumber = Math.floor(Math.random() * 6) + 1;
var guess = prompt('I am thinking of a number between 1 and 6. What is it?');
if (parseInt(guess) === randomNumber) {
	document.write('<h2>You gueseed the number!</h2>');
}else {
	document.write('<h2>Sorry. The number was ' + randomNumber + '</h2>');
}

//Method-2, using boolean variables false/true

var correctGuess = false;
var randomNumber = Math.floor(Math.random() * 6) + 1;
var guess = prompt('I am thinking of a number between 1 and 6. What is it?');
if (parseInt(guess) === randomNumber) {
	correctGuess = true;
}
if ( correctGuess ) {
	document.write('<h2>You gueseed the number!</h2>');
} else {
	document.write('<h2>Sorry. The number was ' + randomNumber + '</h2>');
}
									 