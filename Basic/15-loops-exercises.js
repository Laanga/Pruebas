/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

/*for (let i = 1; i <= 20; i++) {
    console.log(i)
}*/

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

// let suma =0
// for (let i = 1; i <= 100; i++) {
//     suma += i
//     console.log(suma)
// }

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

// for (let i = 1; i <= 50; i++) {
//     if(i % 2 == 0){
//         console.log(i)
//     }
// }

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

// let nombres = new Array("Alvaro","Pepe","Javier")

// for (let i = 0; i < nombres.length; i++) {
//     console.log(nombres[i])
// }

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

// let string = "pepe"
// let cont = 0
// for (let i = 0; i < string.length; i++) {
//     if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
//         cont++
//     }
// }
// console.log(cont)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

// let numbers = new Array(2,3,5)
// let multi = 1
// for (let i = 0; i < numbers.length; i++) {
//     multi *= numbers[i]
// }
// console.log(multi)


// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

// for (let i = 0; i <= 10; i++) {
//     console.log(`5 x ${i} = ` + (5 * i))
// }

// 8. Usa un bucle para invertir una cadena de texto

// let stringVuelta = "Hola";
// let resultado = "";

// for (let i = stringVuelta.length - 1; i >= 0; i--) {
//     resultado += stringVuelta.charAt(i);
// }

// console.log(resultado);

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

// let a = 0, b = 1, temp;

// console.log(a);
// console.log(b);

// for (let i = 2; i < 10; i++) {
//     temp = a + b;
//     console.log(temp);
//     a = b;
//     b = temp;
// }



// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

let numbers = new Array(2,3,5,10,11,4,15,6,16)
let numbers2 = []
for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] > 10){
        numbers2.push(numbers[i])
    }
}
console.log(numbers2)
