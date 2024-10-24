// https://developer.mozilla.org/es/docs/Web/JavaScript
/* Este es un 
Comentario de 
Varias lineas */

let Var1 = "Variable 1"; //  Se puede reasignar pero no redeclarar. Tiene alcance de bloque.
var Var2 = "Variable 2"; //  Se puede reasignar y redeclarar. Tiene alcance global o de función.
const MY_COST = "JavaScripts "; // No se puede reasignar ni redeclarar. Tiene alcance de bloque.

// Existen dentro de los datos primitivos strings, booleanos, number, float, Int, BigInt, Symbol, Null

let myString = "Variable de Texto";
let myBool = true; // let myBool = false;
let myNumber = 10; //Variable de numeros Enteros
let myNumberFloat = 10.2; //Variable de numeros decimales
let myBigInt = 100000000000000000000; //Variables de numeros enteros grandes 2^53 para positivos y -2^53 para negativos
let mySimbol = Symbol("Key"); // El Symbol es un tipo de dato primitivo en JavaScript que se utiliza para crear identificadores únicos. Cada valor de tipo Symbol es único e inmutable, incluso si se crea con la misma descripción.
let myNull = null; // Variable nula

console.log("Hello," + MY_COST)