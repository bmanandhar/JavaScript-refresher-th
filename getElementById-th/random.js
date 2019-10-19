function getRandomNumber() {
  var randomNumber = Math.floor( Math.random() * 6 ) + 1; 
	return randomNumber;
}

alert( getRandomNumber() );
console.log( getRandomNumber() );
var dieRoll = getRandomNumber();


function goToCoffeeShop() {
	return "Espresso is on its way.";
}
document.write( '<h2><em>' + goToCoffeeShop() + '</em></h2>' );
