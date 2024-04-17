/* old school arrays
const frutas = new Array("banana", "manzana", "uva");
 */

// 2d Arrays 📱
/* 
const phonePad = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
  ["*", "0", "#"],
];
console.log(phonePad); 
*/

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
const personas = [
  {
    name: "calamardo",
    age: 19,
  },
  {
    name: "bob esponja",
    age: 21,
  },
  {
    name: "patricio",
    age: 24,
  },
];
// string method => localeCompare()
personas.sort((a, b) => a.name - b.name); // error ! ❌
personas.sort((a, b) => a.name.localeCompare(b.name)); // correct 👍
console.log(personas);

// chequeador de contras 👁️
/* 
let pass = "coder123";
let res;
let entryCount = 0;
let limits = 3;
let err = false;

const checkApp = () => {
  while (true) {
    if (entryCount < limits) {
      res = prompt("ponga su contra antes de entrar");
      entryCount++;
    } else {
      err = true;
    }
  }
  if (err) {
    alert("oops!");
  } else {
    alert("login exitoso!");
  }
};
checkApp() */

// truco Argento 🔥
let trucoDeck = []; // maso o baraja
const suits = ["swords", "coins", "cups", "clubs"]; // palos
let playerHands = []; // mano de cada jugador, 1 vs 1, 2 vs 2, 3 vs 3
const ranks = ["1", "2", "3", "4", "5", "6", "7", "10", "11", "12"]; // cartas a usar

function createTrucoDeck() {
  //console.log("creando maso...");
  for (let suit of suits) {
    for (let rank of ranks) {
      trucoDeck.push({ rank: rank, suit: suit });
    }
  }
}

function shuffleTrucoDeck() {
  //console.log("barajando...");
  for (let i = trucoDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i + 1);
    /* 
    swap(technique or skill) === intercambio o destructuración de valores en javaScript
    let a = 1;
    let b = 2;

    // intercambiando valores
    [a, b] = [b, a];

    console.log("a:", a); // output 2
    console.log("b:", b); // output 1
    */
    [trucoDeck[i], trucoDeck[j]] = [trucoDeck[j], trucoDeck[i]];
  }
}

function dealCards(numPlayers) {
  //console.log("repartija");
  for (let i = 0; i < numPlayers; i++) {
    const hand = [];
    /* ❗error de porque reparte 2 o 4 o 6
       en vez de poner 3(num a repartir para c/u) pusimos numPlayer
    for (let j = 0; j < numPlayer; j++) {
      hand.push(trucoDeck.pop());
     */
    for (let j = 0; j < 3; j++) {
      hand.push(trucoDeck.pop());
    }
    playerHands.push(hand);
  }
}

createTrucoDeck();
shuffleTrucoDeck();

// 1 vs 1
/* console.log("1 vs 1:");
dealCards(2);
console.log("Player 1's hand:", playerHands[0]);
console.log("Player 2's hand:", playerHands[1]); */
// 2 vs 2
/* console.log("2 vs 2:");
dealCards(4);
console.log("Team 1, Player 1's hand:", playerHands[0]);
console.log("Team 1, Player 2's hand:", playerHands[1]);
console.log("Team 2, Player 1's hand:", playerHands[2]);
console.log("Team 2, Player 2's hand:", playerHands[3]); */
// 3 vs 3
//console.log("3 vs 3:");
dealCards(6);
//console.log("Team 1, Player 1's hand:", playerHands[0]);
/* document.write(
  "<p>Player 1's hand: " + JSON.stringify(playerHands[0]) + "</p>"
); */

/* console.log("Team 1, Player 2's hand:", playerHands[1]);
console.log("Team 1, Player 3's hand:", playerHands[2]);
console.log("Team 2, Player 1's hand:", playerHands[3]);
console.log("Team 2, Player 2's hand:", playerHands[4]);
console.log("Team 2, Player 3's hand:", playerHands[5]);
 */
