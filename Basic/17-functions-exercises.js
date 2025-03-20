/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

function suma(a, b) {
    return a + b
}
console.log(suma(5,5))

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

let numbers = [1,2,3,4,5,6]

function arrayMax(array) {
  let max = Math.max(...array)
  return max
}
console.log(arrayMax(numbers))

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
let frase = "pepeeeeeuuii" 
function vocalesString(string){
let cont = 0
for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
        cont++
    }
}
return cont
}
console.log(vocalesString(frase))

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
// let palabras = ["hola","adios"]
// let palabrasMayus = []
// function mayus(array){
// for (let i = 0; i < array.length; i++) {
//     palabrasMayus.push(array[i].toUpperCase())
// }
// return palabrasMayus
// }
// console.log(mayus(palabras))

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

// function esPrimo(numero) {
//     if (numero < 2) return false; // Los números menores de 2 no son primos

//     for (let i = 2; i <= Math.sqrt(numero); i++) {
//         if (numero % i === 0) {
//             return false; // Si es divisible por algún número distinto de 1 y él mismo, no es primo
//         }
//     }
    
//     return true; // Si no se encontró ningún divisor, es primo
// }

// // Ejemplo de uso
// console.log(esPrimo(7));  // true
// console.log(esPrimo(10)); // false
// console.log(esPrimo(2));  // true
// console.log(esPrimo(1));  // false


// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

let array1 = [1,2,3,4,6]
let array2 = [1,2,7,5,6]
let arrayJunto = []

function arraysTogether(array1,array2){
for (let i = 0; i < array1.length; i++) {
   if(array2.includes(array1[i]))
    arrayJunto.push(array1[i])
}
return arrayJunto
}
console.log(arraysTogether(array1,array2))

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
let frase2 = "Hola" 

function vuleta(string) {
    let frase2Vuelta = "" 
    for (let i = string.length - 1; i >= 0; i--) {
       frase2Vuelta += string.charAt(i) 
    }
    return frase2Vuelta
}

console.log(vuleta(frase2))

// 10. Crea una función que calcule el factorial de un número dado