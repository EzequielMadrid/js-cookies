// loops => ciclos => bucles
/* 
Decido que parte de mi código 
quiero que se repita.
En Programación este concepto 
de repetición o reutilización 
lo llamamos ITERAR
*/

// the same thing, different forms...

document.write("<h2>Iterando variable 'x' con while()</h2>");
let x = 1;
while (x <= 10) {
  document.write(x + "<br/>");
  x++;
}

document.write("<h2>Iterando variable 'i' con for</h2>");
for (let i = 1; i <= 10; i++) {
  document.write(i + "<br/>");
}
