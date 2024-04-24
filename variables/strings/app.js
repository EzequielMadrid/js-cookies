// line comments
/* 
block 
comments
 */

/* 
variables: pensar en ellas como tentáculos 🐙
Las variables en realidad no es que "encierren" los valores(como una caja); 
más bien los agarra (como un tentáculo)  

🔴formula: keyword(let o const) + name = value(type of data);

Variables naming conventions
1)camelCase
2)snake_case
3)kebab-case
4)PascalCase
*/

let user = "peter"; // let puede cambiar su valor
const server = "mundo-2"; // const nunca cambia su valor

// 🔥 Why booleans? => George Boole
let isStock = false;

/* 
characters that are illegal 
in a string are called "escape characters"
   \'
   \"
   \\
   \n
   \t
*/

/* 
   backtics          => ` ` (comillas inversas)
   
   desbloquean       => ${} (template strings)
                        nos ayudan a sumar strings(concatenación) 
*/

/* 
concatenation("string" + "string" + "string")
1)console.log("I'm " + user);
2)console.log("I'm", user);
3)console.log(`I'm ${user}`); 
*/

/* STRING: methods() && properties */
let greeting = "Hi everyone !";
let nickName = "PeTeR";

console.log(greeting.length); // most important

console.log(nickName.toLowerCase()); // return text to lower case
console.log(nickName.toUpperCase()); // return text to upper case

console.log(greeting.startsWith("Hi")); // return a boolean
console.log(greeting.endsWith("everyone!")); // return a boolean
console.log(nickName.includes("P")); // return a boolean

console.log(greeting.replace("Hi", "Hello")); // return a new value

// H i
// 0 1
console.log(greeting.indexOf("H")); // return 0 ❗

// 0 => enero (january)
// 0 => domingo (sunday)
