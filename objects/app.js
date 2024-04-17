const user1 = {
  name: "Donatello",
  favFood: "pizza",
  greeting: function () {
    console.log(`Hi, I am ${this.name}`);
  },
  eat: function () {
    console.log(`${this.name} is eating ${this.favFood}`);
  },
};

const user2 = {
  name: "Patric",
  favFood: "burgers",
  greeting: function () {
    console.log(`Hi, I am ${this.name}`);
  },
  eat: function () {
    console.log(this.name + " " + "is eating" + " " + this.favFood);
  },
};

//console.log(this);
//user1.eat();
//user2.eat();

/* function Constructor(){
    code.....
} */

/* function Car(a, b, c, d) {
  (this.make = a), (this.model = b), (this.year = c), (this.color = d);
}

const car1 = new Car("Ford", "Mustang", 2020, "red");
console.log(car1.make);
console.log(car1.model);
const car2 = new Car("Ferarri", "F40", 1990, "negra");
 */

/* class */

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  // creating methods
  mostrarProducto() {
    console.log("Product:" + this.name);
    console.log("Price:" + this.price.toFixed(2)); // toFixed(2) => siempre nos muestra max 2 num desp de la coma
  }
}

const product1 = new Product("shirt", 19.99);
const product2 = new Product("shoes", 39.5);

//product1.mostrarProducto();
//product2.mostrarProducto();

// trivia game 🕹️
let questions = [
  {
    singleQuestion:
      "Who was the first character to be introduced in the GOT series?\na) Bran Stark\nb) Khaleesi\nc) Tyrion ",
    res: "a",
  },
  {
    singleQuestion:
      "How many dragons did we see on Khaleesi's shoulders?\na) 2\nb) 3\nc) 4",
    res: "b",
  },
  {
    singleQuestion:
      "Who said the famous line: 'When you play the game of thrones, you win or you die?'\na) John Snow\nb) Cersei\nc) Ned Stark",
    res: "b",
  },
];

let score = 0;
let userResponse = [];

for (let i = 0; i < questions.length; i++) {
  let input;
  do {
    input = prompt(questions[i].singleQuestion);
    if (input !== "a" && input !== "b" && input !== "c") {
      alert("la opcion no existe");
    }
  } while (input !== "a" && input !== "b" && input !== "c");

  let result;

  if (input === questions[i].res) {
    score++;
    result = "correct";
    alert("yes");
  } else {
    result = "incorrect";
    alert("oops!");
  }

  userResponse.push({ res: input, result: result });
  // saving in localStorage
  localStorage.setItem("userResponses", JSON.stringify(userResponse));
}

alert("final score: " + score + "|" + questions.length);
