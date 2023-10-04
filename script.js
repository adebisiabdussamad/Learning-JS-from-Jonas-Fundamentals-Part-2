'use strict';
// let hasDriversLicense = false;
// const passTest = true;
/*
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive');
const interface = 'Audio'
function logger() {
  console.log('My name is Adebisi');
}
*/

// We are invoking, running or calling the functions
/*
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
/*
function calAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calAge1(2008);
console.log(age1);
*/

// Expression produces values
//FUNCTION EXPRESSION
/*
const calAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calAge1(1991);

console.log(age1, age2);
*/

//FUNCTION EXPRESSION

//ARROW FUNCTIONS
/*
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
/*
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
*/

//REVIEWING FUNCTIONS
/*
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


};
console.log(yearsUntilRetirement(1991, 'Bisi'));
console.log(yearsUntilRetirement(1970, 'John'));
*/
//DATA STRUCTURES

//ARRAYS
/*
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
const Bisi = [firstName, 'Bisi', 2037 - 2018, 'student', friends];
console.log(Bisi);

console.log(Bisi.length);

//EXERCISE
const calAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2003, 2010, 2018];
const age1 = calAge(years[0]);
const age2 = calAge(years[1]);
const age3 = calAge(years[years.length - 1]);

console.log(age1, age2, age3);
const ages = [calAge(years[0]), calAge(years[1]), calAge(years[years.length - 1])];
console.log(ages)
*/
//BASIC ARRAYS OPERATIONS(METHODS)
/*
const friends = ['Olamide', 'peter', 'John'];
const newLength = friends.push('Adebisi');
console.log(friends);
console.log(newLength);
*/
//Push add element to the end of an array, push returns the length of the array
/* 
friends.unshift('Karl');
console.log(friends);
*/
//Unshift adds element to the front of an array, returns the length of the array
/* 
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);
*/
//Pop removes the last element of an array, returns the element removed
/* 
friends.shift();
console.log(friends);
*/
//Shift removes the first element of an array, returns the element removed
/* 
console.log(friends.indexOf('peter'));
console.log(friends.indexOf('bob'));
*/
//IndexOf tells us a certain position were an element of an array belongs to
/* 
friends.push(23);
console.log(friends.includes('peter'));
console.log(friends.includes('23'));
console.log(friends.includes('23'));
*/
//Includes uses a boolean value to tell us if its in an array
//NB: it uses strict equality
/* 
if (friends.includes('Olamide')) {
  console.log('You have a friend called Olamide');
} 
*/

//OBJECTS
/*
const bisi = {
  firstName: 'Ade',
  lastName: 'Bisi',
  age: 2037 - 2018.,
  friends: ['Olamide', 'peter', 'John'],
  job: 'student'
};
console.log(bisi);
*/

//DOT AND BRACKET NOTATIONS
/*
console.log(bisi.firstName);
console.log(bisi['lastName']);

const nameKey = 'Name';
console.log(bisi['first' + nameKey]);
console.log(bisi['last' + nameKey]);
*/
/*
const interestedIn = prompt('What do you want to know about Adebisi? Choose between firstName, lastName, age, job and friends');

if (bisi[interestedIn]) {
  console.log(bisi[interestedIn]);
} else {
  console.log('Wrong request! ');
}


bisi.location = 'Nigeria';
bisi['twitter'] = '@adebisicodes';
console.log(bisi);
*/

// Challenge
// 'Bisi has 3 friends, and his best friend is called Olamide'
// console.log(`${bisi.lastName} has ${bisi.friends.length} friends, and his best friend is called ${bisi.friends[0]}`)

//OBJECT METHOD
/*const bisi = {
  firstName: 'Ade',
  lastName: 'Bisi',
  birthYear: 2018,
  friends: ['Olamide', 'peter', 'John'],
  job: 'student',
  hasDriverLicense: false,
  
  
  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // }
  
  // calcAge: function () {
  //   // console.log(this)
  //   return 2037 - this.birthYear;
  // }
  calcAge: function () {
    this.age = 2037 - this.birthYear
    return this.age;
  },
  
  //CHALLENGE
  // "Bisi is a 19-year old student, and he has a driver's license"'
  getSummary: function(){
    return `${this.lastName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} drivers-license`
  }

};
console.log(bisi.getSummary())

 console.log(bisi.age)
 console.log(bisi.age)
 console.log(bisi.age)
//  console.log( bisi['calcAge'](2018))
*/

// Object and if/else statement are control structures

// LOOPS
/*
console.log("Lifting weights repetition 1 🏋🏽");
console.log("Lifting weights repetition 2 🏋🏽");
console.log("Lifting weights repetition 3 🏋🏽");
console.log("Lifting weights repetition 4 🏋🏽");
console.log("Lifting weights repetition 5 🏋🏽");
console.log("Lifting weights repetition 6 🏋🏽");
console.log("Lifting weights repetition 7 🏋🏽");
console.log("Lifting weights repetition 8 🏋🏽");
console.log("Lifting weights repetition 9 🏋🏽");
console.log("Lifting weights repetition 10 🏋🏽");
*/
// for loops keeps running while condition is TRUE

/*
for (let rep = 5; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋🏽`);
}
*/

// The for loop runs only if the conditions is true

// LOOPS ARRAYS, BREAKING AND CONTINUING

/*
const bisi = [
  'Adebisi',
  'Bisi',
  2037 - 2018,
  'student',
  ['Micheal, Mark, Olamide'],
  true
];
*/

// const types = [];

// for (let i = 0; i < bisi.length; i++) {
// Reading from bisi array
//   console.log(bisi[i], typeof bisi[i]);

// Filling types arrays
// types[i] = typeof bisi[i];
//   types.push(typeof bisi[i]);
// }
/*
console.log(types);

const years = [1991, 2007, 1969, 2002, 2023];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages);
*/
// continue(this is to exit the current iteration of the loop and moves to the next one)

/*
console.log('----ONLY STRING----');
for (let i = 0; i < bisi.length; i++) {
  if (typeof bisi[i] != 'string') continue;
  console.log(bisi[i], typeof bisi[i]);
}
*/

//  and break(used to terminate the whole loop)

/*
console.log('----BREAK WITH NUMBER----');
for (let i = 0; i < bisi.length; i++) {
  if (typeof bisi[i] === 'number') break;
  console.log(bisi[i], typeof bisi[i]);
}
*/

// LOOPING BACKWARDS AND LOOPS IN LOOPS

/*
const bisi = [
  'Adebisi',
  'Bisi',
  2037 - 2018,
  'student',
  ['Micheal, Mark, Olamide'],
  true
];

for (let i = bisi.length - 1; i >= 0; i--) {
  console.log(i, bisi[i]);
}

for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`-----------Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weights repetition ${rep}🏋🏽`);
  }
}
*/

// THE WHILE LOOP

// for (let rep = 5; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋🏽`);
// }

// let rep = 1;
// while (rep <= 10) {
//   console.log(`WHILE: Lifting weights repetition ${rep} 🏋🏽`);
//   rep++;
// }

let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice)

while (dice != 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('Loop is about to end...')
}

// While does not depend on any counter variable
