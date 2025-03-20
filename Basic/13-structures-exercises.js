/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales

let animales = ["Perro", "Gato", "Pajaro", "Pez", "Conejo"]

// 2. Añade dos más. Uno al principio y otro al final
animales.unshift("Tiburon")
animales.push("Caballo")

console.log(animales.toString())


// 3. Elimina el que se encuentra en tercera posición

animales.splice(3, 1) 

console.log(animales.toString())

// 4. Crea un set que almacene cinco libros

let setLibros = new Set(["Qujote","JuegoTronos","Principito","Pokemon","Minecraf"])
//console.log(setLibros)

// 5. Añade dos más. Uno de ellos repetido

setLibros.add("Pokemon2")
setLibros.add("JuegoTronos")
//console.log(setLibros)

// 6. Elimina uno concreto a tu elección

setLibros.delete("Qujote")
console.log(setLibros)

// 7. Crea un mapa que asocie el número del mes a su nombre

let meses = new Map ([
    ["1","Enero"],
    ["2","Febrero"],
    ["3","Marzo"],
    ["4","Abril"],
    ["5","Mayo"]
]) 

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

if(meses.get("5") != null){
    console.log("Existe y es " + meses.get("5"))
}

// 9. Añade al mapa una clave con un array que almacene los meses de verano

meses.set("Verano",["Junio","Julio","Agosto"])
console.log(meses)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let array = new Array ("Enero","Febrero", "Marzo")


let set = new Set(array)

let map = new Map([
    ["set", set]
])

console.log(map)