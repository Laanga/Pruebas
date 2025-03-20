/*
Clase 41 - Ejercicios: Manejo de errores
Vídeo: https://youtu.be/1glVfFxj8a4?t=20392
*/

// 1. Captura una excepción utilizando try-catch

function sum(a,b){
    return a + b
}

let pepe

try {
    pepe.name
} catch (error) {
 console.log("TIENEN QUE SER NUMERO")
}

// 2. Captura una excepción utilizando try-catch y finally

try {
    pepe.name
} catch (error) {
    console.log(error.message)
}finally{
    console.log("Esto siempre va a salir")
}
// 3. Lanza una excepción genérica

//throw new Error("ERRORROROOROROROOR");


// 4. Crea una excepción personalizada

if(sum(5,6) != 11){
    throw new Error("LA SUMA ESTA DANDO MAL");
    
}

// 5. Lanza una excepción personalizada

//ARRIBA

// 6. Lanza varias excepciones según una lógica definida

function getFrase(frase){
    if(frase.length > 4){
        throw new Error("La frase no puede tener mas de 4 letras ");
        
    }
    return frase
}



try {
    getFrase("Aa")
    console.log("la frase tiene menos de 4")
} catch (error) {
    console.log(error.message)
}

// 7. Captura varias excepciones en un mismo try-catch

try {
    let num = 10;
    let resultado = num.toUpperCase(); // Error: num no tiene toUpperCase()
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Se produjo un TypeError:", error.message);
    } else if (error instanceof ReferenceError) {
        console.log("Se produjo un ReferenceError:", error.message);
    } else {
        console.log("Error desconocido:", error.message);
    }
}


// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

let valores = ["3.14", "42", "abc", null, undefined, "10.5px"];

for (let i = 0; i < valores.length; i++) {
    try {
        let num = parseFloat(valores[i]);
        if (isNaN(num)) {
            throw new Error(`No se pudo convertir '${valores[i]}' a float`);
        }
        console.log(`Convertido: ${num}`);
    } catch (error) {
        console.log(`Error en índice ${i}: ${error.message}`);
    }
}


// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

function verificarPropiedad(obj, propiedad) {
    if (!obj.hasOwnProperty(propiedad)) {
        throw new Error(`La propiedad '${propiedad}' no existe en el objeto`);
    }
    return obj[propiedad];
}

// Prueba
let usuario = { nombre: "Juan", edad: 25 };

try {
    console.log(verificarPropiedad(usuario, "nombre")); // "Juan"
    console.log(verificarPropiedad(usuario, "email"));  // Error
} catch (error) {
    console.log("Error:", error.message);
}


// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10

function operacionConReintentos(func, maxIntentos = 10) {
    let intentos = 0;
    while (intentos < maxIntentos) {
        try {
            return func(); // Intentamos ejecutar la función
        } catch (error) {
            intentos++;
            console.log(`Intento ${intentos} fallido: ${error.message}`);
        }
    }
    throw new Error("Se alcanzó el máximo de intentos sin éxito");
}

// Función que falla aleatoriamente
function tareaArriesgada() {
    if (Math.random() < 0.7) { // 70% de probabilidad de fallo
        throw new Error("Error aleatorio");
    }
    return "Éxito!";
}

// Prueba
try {
    let resultado = operacionConReintentos(tareaArriesgada);
    console.log("Resultado final:", resultado);
} catch (error) {
    console.log("Error crítico:", error.message);
}
