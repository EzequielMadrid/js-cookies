// Math & Numbers
let x = -3;
//document.write(2 * (10 + 5));
//document.write(12 % 5);
//document.write(Math.abs(x));
x = 6;
//document.write(Math.max(x, 14));
//document.write(Math.min(x, 14));
x = 6.9;
//document.write(Math.round(x));
//document.write(Math.ceil(x));
//document.write(Math.floor(x));
x = 3;
//document.write(Math.pow(2, x));
//document.write(Math.sqrt(25));
//document.write(Math.round(Math.random() * 10));

// My first APP(basic calculator) 🔥
let num1 = prompt("Enter a number");
let num2 = prompt("Enter another a number");

// parseInt()
// parseFloat() => ideal para precios $299.999
num1 = parseFloat(num1);
num2 = parseFloat(num2);

const result = num1 + num2;
document.write(result);
