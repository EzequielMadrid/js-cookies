const tablero = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
];

// intentando ta te ti cruzado
/* 
    1 2 X
    4 X 6
    X 8 9
*/

tablero[0][2] = "X"; // marcando "X" en fila 0 elemento 2
tablero[1][1] = "X"; // marcando "X" en fila 1 elemento 1
tablero[2][0] = "X"; // marcando "X" en fila 2 elemento 0

// mostrando siempre el tablero final de esta forma
for (let x of tablero) {
  const row_string = x.join(" ");
  console.log(row_string);
}
