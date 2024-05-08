/* 
    Array[]    ===>  Colección de data 🔥
                    Una variable transformada en estructura
                    que puede sostener más de un valor(data type)
                    
                    [ 1 , 2 , 3 ]  ====> each value === elements
                      0   1   2    ====> each index === position
                    
                    Old school syntax
                    const frutas = new Array("banana", "manzana", "uva")
                    New school syntax
                    const frutas = ["banana", "manzana", "uva"]
                    
                    Accediendo al elemento 3(uva) =====> frutas[2]
*/

/* ************************************************************************ */

// 2d Arrays 📱
const phonePad = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
  ["*", "0", "#"],
];
//console.log(phonePad);

// un loop dentro de un loop ♾️
for (let i = 0; i < phonePad.length; i++) {
  for (let j = 0; j < phonePad[i].length; j++) {
    document.write(phonePad[i][j]);
  }
  document.write(`<br>`);
}
/* ************************************************************************ */

//// sort() => order numbers lexicographically(symbols,letters,nums)
////           not alphabetically(only letters)
/* 
let num = [1, 11, 3, 2];
num.sort();
console.log(num); // ❌
//// correct algorithm to fix it
num.sort((a, b) => a - b); // return 0 or positive values
console.log(num); // ✅
num.sort((a, b) => b - a); // reverse order
console.log(num);// ✅
*/
/* ************************************************************************ */

// objetos literales + el método sort()
const personajes = [
  {
    name: "foggy nelson",
    age: 32,
  },
  {
    name: "matt murdock",
    age: 34,
  },
  {
    name: "jessica jones",
    age: 29,
  },
];
// string method => localeCompare()
personajes.sort((a, b) => a.age - b.age); // ordena objeto literal por n°
personajes.sort((a, b) => a.name - b.name); // error! 👎
personajes.sort((a, b) => a.name.localeCompare(b.name)); // correct 👍
// console.log(personajes);
/* ************************************************************************ */
