'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log('I can drive');
*/

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
// console.log(fruitProcessors(5, 0));

const appleOrangeJuice = fruitProcessors(2, 4);
console.log(appleOrangeJuice);