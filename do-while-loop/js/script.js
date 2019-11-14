// 01

// var randomNumber = getRandomNumber(1);
// var guess;
// var guessCount = 0;
// var correctGuess = false;

// function getRandomNumber( upper ) {
//   var num = Math.floor(Math.random() * upper) + 1; 
//   return num;
// }

// do {
//   guess = prompt('I am thinking of a number between 1 and 10. What is it?');
//   guessCount += 1;
//   if (parseInt(guess) === randomNumber) {
//     correctGuess = true;
//   }
// } while ( ! correctGuess ) 
//   document.write('<h1>You guessed the number!</h1>');
// document.write('It took you ' + guessCount + ' tries to guess the number ' + randomNumber);

// #02

// var secret;
// do {
//   secret = prompt("What is the secret password?");    
// } while (secret !== "sesame") {
//   document.write("You know the secret password. Welcome!");
// }


for (var i=1; i<=11; i+=2) {
  console.log(i)
}