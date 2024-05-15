/*
Object => es el objeto PADRE del lenguaje
          derivan TODOs

💥Why OBJECTs in JS?  => OOP (Object-Oriented Programming) => LANG paradigm || style           

💥DATA COLLECTION LIKE ARRAYS          
Objects{}       => { key:value, function() }
*/
//console.dir(Object.getOwnPropertyDescriptors(Function.prototype));
/* *************************************************************** */

/* my first objects! 😎 */
const user1 = {
  name: "Donatello",
  favFood: "pepperoni pizza",
  greeting: function () {
    console.log(`Hi, I am ${this.name}`);
  },
  eat: function () {
    console.log(`${this.name} is eating ${this.favFood}`);
  },
};

const user2 = {
  name: "Raphael ",
  favFood: "chicago pizza",
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
/* *************************************************************** */

// Real Object 🤖

// url: https://www.imdb.com/title/tt4158110/?ref_=fn_al_tt_1

const my_serie = {
  title: "mr robot",
  releaseYear: 2015,
  duration: "4 seasons",
  actors: [
    {
      name: "Rami Malek",
      overview: {
        bio: "In November 2016, it was announced that Malek will star as Freddie Mercury in the upcoming Queen biopic, Bohemian Rhapsody, to be released on November 2, 2018",
        birthday: new Date("may 12 1981"),
        homeTown: "Los Angeles, California",
      },
    },
    {
      name: "Carly Chaikin",
      overview: {
        bio: "Chaikin is also a painter, focusing on acrylics and oil, with some mixed media collage.Although she took painting classes growing up, Chaikin says that she is mostly self-taught.",
        birthday: new Date("march 26 1990"),
        homeTown: "Santa Monica, California",
      },
    },
  ],
};

//console.log(my_serie.actors[0].overview.bio);
//console.log(my_serie.actors[1].overview.bio);

/* *************************************************************** */

/* 
🔺la función constructora es un método especial 
para definir propiedades y funciones(métodos propios) de objetos

function Constructor(){
    code.....
} 
*/

// corredores 💯
const drifter1 = {
  user: "sean",
  name: "chevrolet",
  model: "monte carlo",
  year: 1971,
  color: "blue",
  info_drifter: function () {
    //console.log(`The 1st driver is ${this.user}`);
    console.log(`The driver is ${this.user}`);
  },
};
//drifter1.info_drifter();
const drifter2 = {
  user: "o'conner",
  name: "nissan",
  model: "skyline GT-R",
  year: 1999,
  color: "silver",
  info_drifter: function () {
    //console.log(`The 2nd driver is ${this.user}`);
    console.log(`The driver is ${this.user}`);
  },
};
//drifter2.info_drifter();
const drifter3 = {
  user: "han",
  name: "mazda",
  model: "RX-7",
  year: 1997,
  color: "orange",
  info_drifter: function () {
    //console.log(`The 3rd driver is ${this.user}`);
    console.log(`The driver is ${this.user}`);
  },
};
//drifter1.info_drifter();

// iterando objetos ♾️
const drifters = [drifter1, drifter2, drifter3];

for (let i = 0; i < drifters.length; i++) {
  // manejando Number de corredores y evito poner => `The 1st driver is ${this.user}`
  console.log(`Drifter ${i + 1}:`);
  //////////////////////////////////
  drifters[i].info_drifter();
  console.log("-------------------------");
}
/* *************************************************************** */

/* 
classes 🏛️

💥Code Organization   => class => objects => methods && properties = prototype   
*/

// example I
/* class Product {
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
const product2 = new Product("shoes", 39.5);*/
//product1.mostrarProducto();
//product2.mostrarProducto();

// example II
class Product {
  constructor(nombre, precio) {
    this.n = nombre;
    this.p = precio;
  }
  mostrarProducto() {
    console.log(`my product is: ${this.n}`);
    console.log(`the product's value is: ${this.p}`);
  }
  calcularTotal(tarifa) {
    return (this.p = this.p * tarifa);
  }
}

const tarifa = 1.5;
const iphone = new Product("iphone 15", 1999.9999);
iphone.mostrarProducto();
const total = iphone.calcularTotal(tarifa);
console.log(`precio total con tarifa es ${total.toFixed(2)}`);
/* *************************************************************** */
