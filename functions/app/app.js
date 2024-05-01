// condition vs validation
let isAdmin = true;
let isGroup = false;
if (isAdmin && isGroup) {
  console.log("user is the admin");
} else if (isGroup) {
  console.log("user is only a member");
} else {
  console.log("user is not in existence!");
}

// transformamos en validacion una condición
function validarUsuario(isAdmin, isGroup) {
  if (isAdmin && isGroup) {
    return "the admin";
  } else if (isGroup) {
    return "only a member";
  } else {
    return "not in existence!";
  }
}
let user99_is_admin = true;
let user99_is_group = true;
let user99 = validarUsuario(user99_is_admin, user99_is_group);
//console.log("user99 is ", user99);
let user23_is_admin = true;
let user23_is_group = false;
let user23 = validarUsuario(user23_is_admin, user23_is_group);
//console.log("user23 is ", user23);
/******************************************************************************/

/* 🔻currying technique (Haskell Curry)
        a function with multiples arguments is tranformed into a series
        or sequence of functions each taking a single argument
 */
// normal (f)
function sum(x, y, z) {
  return x + y + z;
}
sum(2, 3, 5);
// curry (f)
function currySum(x) {
  return function (y) {
    return function (z) {
      return x + y + z;
    };
  };
}
currySum(2)(3)(5);
/******************************************************************************/
//reusing data with currying 🧠
/* normal (f) */
function greet(greeting, user) {
  return `${greeting} ${user} !`;
}
// call 📞
greet("ciao", "Alonzo");

/* return 1 argument with currying*/
function curryGreet(greeting) {
  return function (user) {
    return `${greeting} ${user} !`;
  };
}
// call 📞
const saludoItaliano = curryGreet("Ciao"); // partial APP
saludoItaliano("Giuseppe");
saludoItaliano("Luiggi");
const saludoTexano = curryGreet("Howdy"); // partial APP
saludoItaliano("Elon");
saludoItaliano("Ronald");

/* return multiple arguments */
// Calculator with Currying 🔥
function evaluate(operation) {
  return function (a) {
    return function (b) {
      if (operation === "sum") return a + b;
      else if (operation === "sub") return a - b;
      else if (operation === "mul") return a * b;
      else if (operation === "div") return a / b;
      else if (operation === "remainder") return a % b;
      else return "Invalid Opereation!";
    };
  };
}
// option 1
//console.log(evaluate("remainder")(10)(3));

//option 2
const remainder = evaluate("remainder"); // partial APP
//console.log(remainder(10)(3));
/******************************************************************************/
// game 1
// configuramos contraseña nosotros para que el usuario/cliente adivine la llave secreta
const SECRET_KEY = "database";
let entryCount = 0;
const limitCount = 3;
function runGuesser() {
  function createChecker(correctKey) {
    function checkKey(inputKey) {
      return inputKey === correctKey;
    }
    return checkKey;
  }
  while (entryCount < limitCount) {
    const userInput = prompt(
      "Porfavor ingrese la Key\nSi no no puede pasar de nivel "
    );
    const checker = createChecker(SECRET_KEY);
    if (checker(userInput)) {
      document.write("Felicitaciones! Bienvenido a nivel 3 🔥");
      break;
    } else {
      entryCount++;
      if (entryCount === limitCount) {
        alert("acceso denegado");
      }
    }
  }
}
// runGuesser();

// game 2
// la APP nos genera un n° random entre 1 y 5, para que el usuario/cliente adivine directamente
const generateMagicNumber = () => {
  const MAGIC_NUMBER = Math.floor(Math.random() * 3) + 1; //

  let chances = 3;
  const guesser = () => {
    const adivinanza = parseInt(
      prompt("Adivina el N° MAGICO: Entre 1 y 5\ntiene 3 chances")
    );

    if (isNaN(adivinanza) || adivinanza < 1 || adivinanza > 5) {
      alert("Porfavor ingresa num entre 1 y 5");
      return guesser(); // retornar la función para volver a mostrar el código
    }
    if (adivinanza === MAGIC_NUMBER) {
      alert("ganaste!");
      document.write("Felicitaciones! Accede al próximo nivel 🔥");
      return;
    } else {
      chances--;
      if (chances === 0) {
        alert("perdiste, el N° MAGICO era: " + MAGIC_NUMBER);
        return;
      } else {
        alert("vuelva a intentar " + chances + "/3 chances");
        return guesser(); // retornamos la función para volver a mostrar el código
      }
    }
  };
  return guesser;
};

const startGame = generateMagicNumber();
// startGame();
