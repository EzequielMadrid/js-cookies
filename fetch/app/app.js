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
