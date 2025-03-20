/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética

let suma = 5 + 10
let resta = 5 - 10
let multiplicacion = 5 * 10
let division = 5 / 10
let modulo = 5 % 10
let exponente = 5 ** 10


// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

let sumaAsignacion = suma


// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

/*console.log(5 > 4)
console.log(5 < 6)
console.log(5 >= 5)
console.log(5 <= 5)
console.log(5 == 5)*/

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

/*console.log(5 > 6)
console.log(5 < 4)
console.log(5 >= 6)
console.log(5 <= 4)
console.log(5 == 6)*/


// 5. Utiliza el operador lógico and

console.log(suma && resta)

// 6. Utiliza el operador lógico or

console.log(suma || resta)


// 7. Combina ambos operadores lógicos

console.log(5 < 6 && 5 > 4 || 5 != 5)

// 8. Añade alguna negación



// 9. Utiliza el operador ternario

let ternario = 5 > 4 ? "Verdadero" : "Falso"
console.log(ternario)

// 10. Combina operadores aritméticos, de comparáción y lógicas

console.log(5 + 5 > 4 && 5 - 5 < 6 || 5 * 5 == 25)