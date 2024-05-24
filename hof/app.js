// save (f) as variable
const f = function () {
  console.log("#");
};
//f();

// NOW save (f) as paramater
function superF(x) {
  x();
  x();
  x();
  x();
}
// superF(f);

// Callback Review(REAL EXAMPLE)
const bitcoin = () => console.log("BTC");
const dolar = () => console.log("USD");
const euro = () => console.log("EUR");

const callCoin = (x) => x();
//callCoin(bitcoin);
//callCoin(dolar);
//callCoin(euro);

/* ****************************************************** */

// Behind the Scenes in SUPER METHODS
// filter, map, reduce, etc... ARE ALGORITHMS ALREADY CREATED

const returnF = function () {
  return function () {
    return function () {
      return "#";
    };
  };
};
const newF = () => () => "#";
let result = newF();
// console.log(result());

/* ****************************************************** */

// super methods VS loops
const animals = [
  { name: "Hamilton", species: "dog" },
  { name: "Harold", species: "cat" },
  { name: "Nemo", species: "fish" },
  { name: "Garfield", species: "cat" },
  { name: "Laia", species: "dog" },
];

/* 
IMPERATIVE PARADIGM❗
// for
let dogs = [];
for(let i = 0; i < animals.length; i++) {
    if(animals[i].species === "cat") 
    dogs.push(animals[i])
}
console.log(dogs);
// for of
for (let x of animals) {
  console.log(x);
}
// for in
for (let x in animals) {
  console.log(x);
}
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

// extra example
let names = animals.map((x) => `${x.name} is a ${x.species}`);
console.log(names);
