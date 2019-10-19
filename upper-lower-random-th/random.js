//Math.floor(Math.random() * (6 - 1 + 1)) + 1; 

var getRandomNumber = function ( lower, upper ) { 
	if ( isNaN(lower) || isNaN(upper) ) {
		throw new Error("Both arguments must be numbers");
	} else {
	return Math.floor(Math.random() * (upper - lower + 1) + lower ); 									
	
	}
};

console.log(getRandomNumber( "ten", 25 ));
console.log(getRandomNumber( 20, 50 ));
console.log(getRandomNumber( 100, 200 ));

																																 