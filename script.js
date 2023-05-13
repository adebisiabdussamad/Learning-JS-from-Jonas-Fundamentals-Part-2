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

//REVIEWING FUNCTIONS
const calAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = calAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 👏🏽`);
    return -1;
  }

  //return ;
};
console.log(yearsUntilRetirement(1991, 'Bisi'));
console.log(yearsUntilRetirement(1970, 'John'));

//DATA STRUCTURES

//ARRAYS
const friend1 = 'Olamide';
const friend2 = 'peter';
const friend3 = 'John';

const friends = ['Olamide', 'peter', 'John'];
console.log(friends);

const year = new Array(1991, 1992, 1998, 2023);
console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Ade';
const Bisi = [firstName, 'Bisi', 2037 - 2018, friends];
console.log(Bisi);

console.log(Bisi.length);

//EXERCISE
const calAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1991, 1992, 1998, 2023];

const age1 = (calAge(years[0]));
const age2 = (calAge(years[1]));
const age3 = (calAge(years[years.length - 1]));
console.log(age1, age2, age3);

const ages = [calAge(years[0]), calAge(years[1]), calAge(years[years.length - 1])];
console.log(ages);

//BASIC ARRAYS OPERATIONS(METHODS)
const friends = ['Olamide', 'peter', 'John'];
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);
//Push add element to the end of an array

friends.unshift('Karl');
console.log(friends);
//Unshift adds element to the front of an array

friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);
//Pop removes the last element of an array

friends.shift();
console.log(friends);
//Shift removes the first element of an array

console.log(friends.indexOf('peter'));
console.log(friends.indexOf('bob'));
//IndexOf tells us a certain position were an element of an array belongs to 

friends.push(23);
console.log(friends.includes('peter'));
console.log(friends.includes(23));
console.log(friends.includes('23'));
//Includes uses a boolean value to tell us if its in an array
//NB: it uses strict equality

if (friends.includes('Olamide')) {
  console.log('You have a friend called Olamide');
}
*/

//OBJECTS

const bisi = {
  firstName: 'Ade',
  lastName: 'Bisi',
  age: 2037 - 2018.,
  friends: ['Olamide', 'peter', 'John'],
  job: 'student'
};

console.log(bisi);

//DOT AND BRACKET NOTATIONS

console.log(bisi.firstName);
console.log(bisi['lastName']);

const nameKey = 'Name';
console.log(bisi['first' + nameKey]);
console.log(bisi['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Adebisi? Choose between firstName, lastName, age, job and friends');


if (bisi[interestedIn]) {
  console.log(bisi[interestedIn]);
} else {
  console.log('Wrong request! ');
}

bisi.location = 'Nigeria';
bisi['twitter'] = '@adebisicodes';
console.log(bisi);


//Challenge
//'Bisi has 3 friends, and his best friend is called Olamide
console.log(`${bisi.firstName} has ${bisi.friends.length} friends, and his best friend is called ${bisi.friends[0]}`);