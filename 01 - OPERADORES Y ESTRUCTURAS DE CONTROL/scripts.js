/*
 * EJERCICIO:
 * - Crea ejemplos utilizando todos los tipos de operadores de tu lenguaje:
 *   Aritméticos, lógicos, de comparación, asignación, identidad, pertenencia, bits...
 *   (Ten en cuenta que cada lenguaje puede poseer unos diferentes)
 * - Utilizando las operaciones con operadores que tú quieras, crea ejemplos
 *   que representen todos los tipos de estructuras de control que existan
 *   en tu lenguaje:
 *   Condicionales, iterativas, excepciones...
 * - Debes hacer print por consola del resultado de todos los ejemplos.
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea un programa que imprima por consola todos los números comprendidos
 * entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3.
 *
 * Seguro que al revisar detenidamente las posibilidades has descubierto algo nuevo.
 */

let myVarX = 10;
let myVarY = 20;
let myVarSolucion;

//ARITMETICOS
//Suma
myVarSolucion = myVarX + myVarY;
console.log(myVarSolucion);

//Resta
myVarSolucion = myVarY - myVarX;
console.log(myVarSolucion);

//Multiplicacion
myVarSolucion = myVarX * myVarY;
console.log(myVarSolucion);

//Division
myVarSolucion = myVarX / myVarY;
console.log(myVarSolucion);

//Resto (Me devuelve el resto de una division entre dos variables)
myVarSolucion = myVarX % myVarY;
console.log(myVarSolucion);

//Exponenciacion
myVarSolucion = myVarX**2;
console.log(myVarSolucion);

//Incremento
console.log(++myVarX);

//Decremento 
console.log(--myVarX)

//OPERADORES LOGICOS

//Operador AND (&&)

let myAge = 25;
let canPass = true;

if(myAge >= 18 && canPass){
    console.log("Puedes Entrar al Boliche")
} else {
    console.log("NO Puedes Entrar al Boliche")
}

//Operador OR (||)

let llueve = true;
let nublado = true;

if(llueve || nublado){
    console.log("Lleva un Paraguas");
}else {
    console.log("No necesitas un paraguas");
}

//Operador NOT (!)

let soleado = true;

if(!soleado){
    console.log("Esta nublado");
}else {
    console.log("Esta soleado");
}

//Operador Nullish Coalescing (??) --> Este operador devuelve el valor de la derecha solo si el valor de la izquierda es null o undefined.

let username = null;
let defaultUsername = "Invitado";

let displayName = username ?? defaultUsername;
console.log(displayName); // Resultado: "Invitado"

//Combinar operadores

let isWeekend = true;
let isHoliday = false;
let isSunny = true;

if ((isWeekend || isHoliday) && isSunny) {
    console.log("Es un buen día para salir.");
} else {
    console.log("Mejor quedarse en casa.");
}
// Resultado: "Es un buen día para salir."