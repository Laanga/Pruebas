/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let nombre = "Alvaro"

if (nombre == "Alvaro") {
    console.log(nombre)
}else{
    console.log("MAL")
}


// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let usuario = "Alvaro"
let contraseña = "1234"
 if (usuario == "Alvaro" && contraseña == "1234") {
     console.log("Correcto")
 }
 else{
     console.log("Incorrecto")
 }

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let number = 3
if (number > 0) {
    console.log("Es positivo")
}
else if (number < 0) {
    console.log("Es negativo")
}
else{
    console.log("Es cero")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let Persona1 = 15

if (Persona1 >= 18){
    console.log("Puede votar")
}else{
    console.log("No puede votar y le faltan " + (18 - Persona1) + " anios para poder votar")
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

let edad = 20

let operador = edad < 18 ? "Es nino" : "Es adulto"

console.log(operador)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let mes = 3

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

// switch
switch (mes) {
    case 1: // Enero
    case 3: // Marzo
    case 5: // Mayo
    case 7: // Julio
    case 8: // Agosto
    case 10: // Octubre
    case 12: // Diciembre
        console.log("31 días");
        break;
    case 4: // Abril
    case 6: // Junio
    case 9: // Septiembre
    case 11: // Noviembre
        console.log("30 días");
        break;
    case 2: // Febrero
        console.log("28 o 29 días");
        break;
    default:
        console.log("Mes no válido");
        break;
}

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

// 9. Usa un switch para hacer de nuevo el ejercicio 6

switch (mes) {
    case 12: // Diciembre
    case 1:  // Enero
    case 2:  // Febrero
        console.log("Invierno");
        break;
    case 3:  // Marzo
    case 4:  // Abril
    case 5:  // Mayo
        console.log("Primavera");
        break;
    case 6:  // Junio
    case 7:  // Julio
    case 8:  // Agosto
        console.log("Verano");
        break;
    case 9:  // Septiembre
    case 10: // Octubre
    case 11: // Noviembre
        console.log("Otoño");
        break;
    default:
        console.log("Mes no válido");
        break;
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7