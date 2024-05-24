// validating a switch() in a POKER situation 🌟

const getCartaAndPalo = () => {
  // validando cartas
  const getCardNames = (number) => {
    let card;
    switch (number) {
      case 1:
        card = "As";
        break;
      case 2:
        card = "Dos";
        break;
      case 3:
        card = "Tres";
        break;
      case 4:
        card = "Cuatro";
        break;
      case 5:
        card = "Cinco";
        break;
      case 6:
        card = "Seis";
        break;
      case 7:
        card = "Siete";
        break;
      case 8:
        card = "Ocho";
        break;
      case 9:
        card = "Nueve";
        break;
      case 10:
        card = "Diez";
        break;
      case 11:
        card = "Jack";
        break;
      case 12:
        card = "Queen";
        break;
      case 13:
        card = "King";
        break;
      default:
        card = `¡Oops! ${number} no es una opción para las cartas de poker`;
    }
    return card;
  };
  // validando palos de cartas
  const getSuitNames = (number) => {
    let suit;
    switch (number) {
      case 1:
        suit = "Picas";
        break;
      case 2:
        suit = "Corazones";
        break;
      case 3:
        suit = "Diamantes";
        break;
      case 4:
        suit = "Tréboles";
        break;
      default:
        suit = `¡Oops! ${number} no es una opción para los palos de poker`;
    }
    return suit;
  };
  // creando (f) que llamamos en el caso default en el switch getCardNames
  const showCardError = (number) => {
    alert(`¡Oops! ${number} no es una opción para las cartas de poker`);
  };
  // creando (f) que llamamos en el caso default en el switch getSuitNames
  const showSuitError = (number) => {
    alert(`¡Oops! ${number} no es una opción para los palos de poker`);
  };
  // manejando posibles errores del usuario/cliente
  const getValidCard = () => {
    const card = parseInt(
      prompt(
        "Ingresa num de la carta [1-13]\n(1)As\nDesde 2 a 10 Normal\n(11)Jack\n(12)Queen\n(13)King"
      )
    );
    if (card >= 1 && card <= 13) {
      return card;
    } else {
      showCardError(card);
      return getValidCard(); // llamada recursiva si la carta es inválida, repite misma situación
    }
  };
  const getValidSuit = () => {
    const suit = parseInt(
      prompt(
        "Ingresa num del palo [1-4]\n(1)Picas\n(2)Corazones\n(3)Diamantes\n(4)Tréboles"
      )
    );
    if (suit >= 1 && suit <= 4) {
      return suit;
    } else {
      showSuitError(suit);
      return getValidSuit(); // llamada recursiva si la carta es inválida, repite misma situación
    }
  };
  const final_card = getValidCard();
  const final_suit = getValidSuit();
  return `Mi carta es un ${getCardNames(final_card)} de ${getSuitNames(
    final_suit
  )}`;
};
document.write(getCartaAndPalo());
