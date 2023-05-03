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
*/

//FUNCTION DECLARATIONS

function calAge1(birthYear) {
  return 2037 -  birthYear;
}
const age1 = calAge1(1991);


//FUNCTION EXPRESSION
const calAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calAge1(1991);

console.log(age1, age2);