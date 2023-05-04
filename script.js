'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log('I can drive');
*/
/*
function logger() {
  console.log('My name is Adebisi');
}


logger();
logger();
logger();

function fruitProcessors(apples, oranges) {
  const juice = `juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessors(5, 0);
console.log(appleJuice);
console.log(fruitProcessors(5, 0));

const appleOrangeJuice = fruitProcessors(2, 4);
console.log(appleOrangeJuice);

//FUNCTION DECLARATIONS

function calAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calAge1(1991);


//FUNCTION EXPRESSION
const calAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calAge1(1991);

console.log(age1, age2);

//FUNCTION EXPRESSION

//ARROW FUNCTIONS
const calAge3 = birthYear => 2037 - birthYear;
const age3 = calAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, 'Bisi'));
console.log(yearsUntilRetirement(1980, 'Ade'));
*/

// FUNCTION CALLING OTHER FUNCTIONS

function cutFruitPieces(fruit) {
  return fruit * 3;
}

function fruitProcessors(apples, oranges) {

  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
  return juice;
}

console.log(fruitProcessors(2, 3));