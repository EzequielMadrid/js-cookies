// configuramos contraseña, o palabra secreta, nosotros para que el usuario/cliente adivine la llave secreta
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
