// setTimeout example
/* console.log("start game");
setTimeout(() => {
    console.log("gracias por jugar!");
}, 5000);
console.log("end game"); */

// setInterval example
/* let counter = 0;
let final_result = false;
const intervalId = setInterval(() => {
    console.log(`counter ${counter}`);
    counter++;
    if (counter === 5) {
        clearInterval(intervalId);
        console.log("interval stopped!");
        // opcional
        if (!final_result) {
            const elementos_eliminados = [];
            for (let i = 0; i < counter; i++) {
                elementos_eliminados.push(i);
            }
            console.log("elementos eliminados", elementos_eliminados);
            final_result = false;
        }
    }
}, 2000); */
/* ******************************************************************** */

const root = document.getElementById("root");

//// API git hub
// example 2
/* fetch("https://api.github.com/users")
// transformamos data para manipular
  .then((res) => res.json())
  // mostrando la data
  .then((data) => {
    //console.log(data);
    data.forEach((user) => {
      const my_section = document.createElement("section");
      my_section.innerHTML = `
            <img src="${user.avatar_url}">
            <h2>${user.login}</h2>
            <a href="${user.html_url}">profile</a>
            <hr>
        `;
      root.append(my_section);
    });
  }); */

// example 1
async function consiguiendoUsuarios() {
  try {
    const res = await fetch("https://api.github.com/users");
    const data = await res.json();

    data.forEach((user) => {
      const my_section = document.createElement("section");
      my_section.innerHTML = `
            <img src="${user.avatar_url}">
            <h2>${user.login}</h2>
            <a href="${user.html_url}">profile</a>
            <hr>
        `;
      root.append(my_section);
    });
  } catch (error) {
    alert("ERROR!");
    console.error(error);
  }
}
//consiguiendoUsuarios();
/* ******************************************************************** */

//// API Banco Central Argentino
fetch("https://api.estadisticasbcra.com/usd_of", {
  headers: {
    Authorization:
      "BEARER eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NDY1ODAxNTQsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJtYWRyaWRlemVxdWllbDI5OUBnbWFpbC5jb20ifQ.1O4W-uHgaN-XOZsIbKZQZxerr7opALHHwz-0FIPNqiiSsLg1at6LltQ9d57e4UQvP8hd4OP-vB6SVbyJHfYFXA",
  },
})
  .then((res) => res.json())
  .then((data) => {
    //console.log(data);
    // manipulando data ANTES de pasarla al DOM
    const newData = data.filter(
      (dolar) => new Date(dolar.d) >= new Date("2024-01-01")
    );
    //console.log(newData);
    newData.forEach((dolar) => {
      const my_section = document.createElement("section");
      my_section.innerHTML = `
            <h2>fecha: ${dolar.d}</h2>
            <h2>valor: ${dolar.v}</h2>
            <hr>
        `;
      root.append(my_section);
    });
  });

/* ******************************************************************** */
// console.log(JSON);

/* stringify() */
// json in Arrays
const users0 = ["ned ", "john", "rob ", "brandon", "sansa", "arya"];

const jsonString0 = JSON.stringify(users0);
// console.log(jsonString0);

// json in Obj
const users1 = {
  character: "john snow",
  age: "21",
  isStark: false,
  hobbies: ["hunting", "sword duels", "reading"],
};

const jsonString1 = JSON.stringify(users1);
// console.log(jsonString1);

// json in Array of Objects
const users2 = [
  {
    character: "john snow",
    age: "20",
    isStark: false,
  },
  {
    character: "rob stark",
    age: "24",
    isStark: true,
  },
  {
    character: "sansa stark",
    age: "18",
    isStark: true,
  },
];

const jsonString2 = JSON.stringify(users2);
//console.log(jsonString2);

/* parse() */
// parsing an Array
const names1 = `["ned ", "john", "rob ", "brandon", "sansa", "arya"]`;
const parsedData1 = JSON.parse(names1);

// console.log(parsedData1);

// parsing an Obj
const names2 = `{
  "character": "john snow",
  "age": "21",
  "isStark": false,
  "hobbies": ["hunting", "sword duels", "reading"]
}`;
const parsedData2 = JSON.parse(names2);

// console.log(parsedData2);

// parsing [{}, {},{}]
const names3 = `[{"character": "john snow","age": "20","isStark": false},{"character": "rob stark","age": "24","isStark": true},
  {"character": "sansa stark","age": "18","isStark": true}]`;

const parsedData3 = JSON.parse(names3);

// console.log(parsedData3);

/* fetching a file.json */

/* fetch("users2.json")
  .then((res) => res.json())
  .catch((err) => console.error("my error es en la url", err));
 */

/* fetchData();

async function fetchData() {
  try {
    const poke_name = document.getElementById("my_pokemon").value.toLowerCase();
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke_name}`);
    const x = await res.json(); // aseguramos que sea formato json
    //console.log(x.name);
    const pokemon_sprite = x.sprites.front_default; // action
    console.log(pokemon_sprite);
    const img = document.getElementById("my_sprite");
    img.src = pokemon_sprite;
    img.style.display = "block";
  } catch (err) {
    console.error(err);
  }
} */

async function getCryptoPrice(coin) {
  const url = `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd`;
  const priceDisplay = document.getElementById("price-display");
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error ${response.status}`);
    }
    const data = await response.json();
    priceDisplay.textContent = `El precio de ${coin} en USD es: $ ${data[coin].usd}`;
  } catch (err) {
    priceDisplay.textContent = `Error al obtener precio de ${err.message}`;
  }
}

document.getElementById("check-price-button").addEventListener("click", () => {
  const coin = document.getElementById("coin-input").value.trim();
  if (coin) {
    getCryptoPrice(coin);
  } else {
    document.getElementById("price-display").textContent =
      "Por favor ingresa una moneda válida";
  }
});
