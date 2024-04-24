/* 
what's hoisting ⁉️
    variables & functions at top 
    arrow functions are rejected!
*/

/* ****************************************************** */

/* 
languages => paradigms => methodology

functional programming(input-ouput) => pure function
                                       is divided in 2 parts (FCF & HOF)
 */
// 1)first class function => FCF
function createTeam(teamName) {
  return function addPlayerToTeam(playerName) {
    return console.log(`Welcome ${playerName}, you're team on: ${teamName}`);
  };
}
// createTeam() accepts an argument and RETURN a function
let chicagoBulls = createTeam("Bulls");
chicagoBulls("Jordan");
chicagoBulls("Pippen");
let sanAntonio = createTeam("Spurs");
sanAntonio("Ginobilli");
sanAntonio("Duncan");

/* ****************************************************** */

// 2) higher order function => HOF
function greet(greeting, user) {
  return `${greeting} ${user}`;
}

// currying (Haskell Curry)
//          is a technique => series of functions

function curryGreet(greeting) {
  return function (name) {
    return `${greeting} ${user} !`;
  };
}

const greetItalian = curryGreet("Ciao");
greetItalian("Giuseppe");
greetItalian("Luiggi");
const greetTexan = curryGreet("Howdy");
greetTexan("Elon");
greetTexan("Ronald");
/* ****************************************************** */

// closures and scope
// cerraduras y ambiente de variables

function outerFunction() {
  let outerVariable = "I am from outer function";
  function innerFunction() {
    console.log(outerVariable);
  }
  return innerFunction;
}
const theInsider = outerFunction();
theInsider();

/* ****************************************************** */

const animals = [
  { name: "Hamilton", species: "dog" },
  { name: "Harold", species: "cat" },
  { name: "Ursula", species: "fish" },
  { name: "Garfield", species: "cat" },
  { name: "Laia", species: "dog" },
];

/* 
IMPERATIVE PARADIGM❗
let dogs = [];
for(let i = 0; i < animals.length; i++) {
    if(animals[i].species === "cat") 
    dogs.push(animals[i])
}
console.log(dogs);
 */

/* 
FUNCTIONAL PROGRAMMING 🔥
// normal function
let dogs = animals.filter(function (item) {
  return item.species === "cat";
}); 
// arrow function
let dogs = animals.filter((item) => item.species === "cat")
console.log(dogs)
*/
