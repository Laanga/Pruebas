/*
Clase 43 - Ejercicios: Console
Vídeo: https://youtu.be/1glVfFxj8a4?t=21421
*/

// 1. Crea un función que utilice error correctamente

function erroCorrecto(a){
    if(a == 5){
        console.error("Bien")
    }else{
        console.error("MAL")
    }
}

erroCorrecto(4)

// 2. Crea una función que utilice warn correctamente

function erroCorrecto2(a){
    if(a == 5){
        console.log("Bien")
    }else{
        console.warn("MAL ADVERTENCIA");
    }
}

erroCorrecto2(4)


// 3. Crea una función que utilice info correctamente
console.info("Este es un mensaje de información adicional.")


// 4. Utiliza table

let data = [
    ["Brais", 37],
    ["Sara", 21]
]

console.table(data)

// 5. Utiliza group

console.group(data)

// 6. Utiliza time

console.time("Tiempo de ejecución 2")

for (let i = 0; i < 10000; i++) {

}

console.timeEnd("Tiempo de ejecución 2")
// 7. Valida con assert si un número es positivo

let number = 6
console.assert(number >= 0, "El numero no es positivo")

// 8. Utiliza count

console.count("Click")
console.count("Click")
console.count("Click")
console.countReset("Click")
console.count("Click")

// 9. Utiliza trace

// 10. Utiliza clear