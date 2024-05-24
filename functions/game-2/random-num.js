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
