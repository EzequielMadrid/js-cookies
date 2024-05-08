let trucoDeck = []; // maso o baraja
const suits = ["swords", "coins", "cups", "clubs"]; // suits === palos
const ranks = ["1", "2", "3", "4", "5", "6", "7", "10", "11", "12"]; // rank === tipo de carta
let playerHands = []; // mano final de cada player

function createTrucoDeck() {
  for (let suit of suits) {
    for (let rank of ranks) {
      trucoDeck.push({ rank: rank, suit: suit });
    }
  }
}
function shuffleTrucoDeck() {
  for (let i = trucoDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i + 1);
    [trucoDeck[i], trucoDeck[j]] = [trucoDeck[j], trucoDeck[i]];
  }
}
function dealCards(numPlayers) {
  for (let i = 0; i < numPlayers; i++) {
    const hand = [];
    for (let j = 0; j < 3; j++) {
      hand.push(trucoDeck.pop());
    }
    playerHands.push(hand);
  }
}

createTrucoDeck(); // creamos el maso completo
shuffleTrucoDeck(); // barajando cartas

/* **************************************************** */
// Probando mi juego antes de mostrarlo...
/* console.log("modalidad 1 vs 1:");
dealCards(2);
console.log("Player 1's hand:", playerHands[0]);
console.log("Player 2's hand:", playerHands[1]); */
/* **************************************************** */

// Solicitamos al usuario/cliente el tipo de juego a través de mi INPUT
const numPlayers = parseInt(
  prompt(`Elija jugadores:\n(2) 1 vs 1\n(4) 2 vs 2\n(6) 3 vs 3`)
);

// 1er OUTPUT
switch (numPlayers) {
  case 2:
    alert("Player 1 es team 1 y Player 2 es team 2");
    dealCards(numPlayers);
    break;
  case 4:
    alert("Player 1 y Player 3 son team 1 / Player 2 y Player 4 son team 2");
    dealCards(numPlayers);
    break;
  case 6:
    alert(
      "Player 1, Player 3 y Player 5 son team 1 / Player 2, Player 4 y Player 6 son team 2"
    );
    dealCards(numPlayers);
    break;
  default:
    alert(
      "Número de jugadores no válido. Por favor, elige 2, 4 o 6 jugadores."
    );
    break;
}

// 2do OUTPUT
let msg = "";
for (let i = 0; i < numPlayers; i++) {
  msg += `Player ${i + 1}'s hand: `;
  for (let card of playerHands[i]) {
    msg += `[${card.rank} of ${card.suit}], `;
  }
  msg = msg.slice(0, -2); // Eliminando la coma y el espacio final
  msg += "\n";
}

alert(msg);
