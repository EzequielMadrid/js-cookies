// condition vs validation
/* 
let isAdmin = true;
let isGroup = false;
if (isAdmin && isGroup) {
  console.log("user is the admin");
} else if (isGroup) {
  console.log("user is only a member");
} else {
  console.log("user is not in existence!");
} */

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

// Closures & Scope ===> cerraduras y ambiente de variables(técnicas)
function outerFunction() {
  let outerVariable = "I am from outer function";
  function innerFunction() {
    console.log(outerVariable);
  }
  return innerFunction;
}
const theInsider = outerFunction();
// theInsider();

/******************************************************************************/

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
