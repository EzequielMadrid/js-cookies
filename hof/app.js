/* 
what's hoisting ⁉️
    variables & functions at top 
    arrow functions are rejected!

console.log(sumar(2, 4));
const sumar = (a, b) => a + b;
function sumar(a, b) { 
    return a + b;
}
*/
/* ****************************************************** */

// closures & scope ===>cerraduras y ambiente de variables
function outerFunction() {
  let outerVariable = "I am from outer function";
  function innerFunction() {
    console.log(outerVariable);
  }
  return innerFunction;
}
const theInsider = outerFunction();
// theInsider();
/* ****************************************************** */

/* 
languages ===> paradigms ===> methodology

functional programming(input-ouput) => pure function
                                       is divided in 2 parts (FCF & HOF)
 */

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
