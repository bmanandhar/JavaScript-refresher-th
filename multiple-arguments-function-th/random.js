//function#1

function getRandomNumber( upper ) {
  var randomNumber = Math.floor( Math.random() * upper ) + 1; 
  return randomNumber;
}

console.log( getRandomNumber(6) );
console.log( getRandomNumber(100) );
console.log( getRandomNumber(500) );
console.log( getRandomNumber(1000) );


//function#2

function goToCoffeeShop(drink, pastry) {
	alert( drink + " and " +  pastry + " are on the way!" );
}

goToCoffeeShop("Espresso", "croissant");
goToCoffeeShop("Chamomile Tea", "crumpets");
goToCoffeeShop("Green Tea", "bagel with cream spread");
goToCoffeeShop("Hazel Nut Coffee", "apple pie");

//function#3

function getArea( width, length, unit ) {
	var area = width * length;
	return area + " sq " + unit;
}

document.write( "<p><strong> Area is: " + getArea(4, 9, "ft") + "</strong></p>" );

