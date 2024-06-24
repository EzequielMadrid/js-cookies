/* 
 PROMISEs => new Promise((res,rej) function { async code })
    
🔻objeto que trabaja con código asincrónico 
🔻usar promesas nos da una sintáxis más limpia
🔻async - await => syntactic sugar 
🔻3 status: pending(pendiente)... rejected(rechazada)... fulfilled(cumplida)
*/

// (1)pendiente
/* const promesa = new Promise((resolve, rejected) => {});
console.log(promesa); */

// (2)rechazada
/* const promesa = new Promise((resolve, rejected) => {
  rejected();
}); */
//console.log(promesa);
//promesa.catch((err) => console.log(err))

// (3)cumplida
/* const SECRET_KEY = 2;
const promesa = new Promise((resolve, reject) => {
  const randomNumber = Math.floor(Math.random() * 3);
 //console.log(randomNumber);
  if (randomNumber === SECRET_KEY) {
    resolve("you guessed correctly");
  } else {
    reject("wrong number");
  }
});

//console.log(promesa);
promesa.then((data) => console.log(data)).catch((err) => console.log(err));
 */
/* *********************************************************** */

const btn = document.getElementById("btn");

// example I => la 3ra se muestra ANTES que la 2da
/* btn.addEventListener("click", function () {
  setTimeout(() => {
    primero.style.backgroundColor = "red";
  }, 1000);
  setTimeout(() => {
    segundo.style.backgroundColor = "yellow";
  }, 5000);
  setTimeout(() => {
    tercero.style.backgroundColor = "green";
  }, 3000);
}); */

// example II => manejamos problema de example I con async-await y promesas aunque sigue siendo denso!
/* btn.addEventListener("click", async function () {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  primero.style.backgroundColor = "red";
  await new Promise((resolve) => setTimeout(resolve, 5000));
  segundo.style.backgroundColor = "yellow";
  await new Promise((resolve) => setTimeout(resolve, 3000));
  tercero.style.backgroundColor = "green";
}); */

/* 
callback-hell 😵‍💫
 */

// example III => nos ayuda a solucionar example II aunque sigue siendo en secuencia!
/* btn.addEventListener("click", function () {
  setTimeout(() => {
    primero.style.backgroundColor = "red";
    setTimeout(() => {
      segundo.style.backgroundColor = "yellow";
      setTimeout(() => {
        tercero.style.backgroundColor = "green";
      }, 2000);
    }, 3000);
  }, 1000);
}); */
/* *********************************************************** */

// mejorando semáforo 🔴🟡🟢
/* const primero = document.getElementById("primero");
const segundo = document.getElementById("segundo");
const tercero = document.getElementById("tercero");

btn.addEventListener("click", function () {
  startLights(1000, "primero", "red")
    .then((data) => startLights(3000, "segundo", "yellow"))
    .then((data) => startLights(2000, "tercero", "green"))
    .catch((error) => console.log(error));
});

const startLights = (tiempo, id, bgColor) => {
  const el = document.getElementById(id);
  return new Promise((res, rej) => {
    if (el) {
      setTimeout(() => {
        el.style.backgroundColor = bgColor;
        res();
      }, tiempo);
    } else {
      rej(`no existe este ID en un elemento: "${id}"`);
    }
  });
}; */
/* *********************************************************** */

/*
más fetch... (manejado errores) 
 */

// tours API
const url = "https://www.course-api.com/react-tours-project";
//console.log(fetch(url));

/* fetch(url)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err)); */

/* const getTours = async () => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      const msg = `Ups! Error ${res.status} no lo deja avanzar`;
      throw new Error(msg);
    }
    const data = await res.json();
    console.log(data);
    //return data
  } catch (error) {
    console.log(error);
  }
};
getTours();
const btn = document.getElementById("extra_btn");
btn.addEventListener("click", getTours);
 */
/* *********************************************************** */
