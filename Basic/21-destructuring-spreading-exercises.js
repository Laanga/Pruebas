/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 

let myArray = [1, 2, 3, 4]
let myArray66 = [1, 2, 3, 4,8,9,7]

//let  [miArray1, miArray2] = myArray

// console.log(miArray1)
// console.log(miArray2)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let  [miArray1, miArray2, , , miArray3 = 0] = myArray

console.log(miArray1)
console.log(miArray2)
console.log(miArray3)

// 3. Usa desestructuración para extraer dos propiedades de un objeto

let person = {
    name: "Brais",
    age: 37,
    alias: "MoureDev"
}

let {name, age} = person
console.log(name)
console.log(age)

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

let {name : name3, age: age5} = person
console.log(name3)
console.log(age5)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

let person3 = {
    name: "Brais",
    age: 37,
    alias: "MoureDev",
    walk: function () {
        console.log("La persona camina.")
    },
    job: {
        name: "Programador",
        exp: 15,
        work: function () {
            console.log(`La persona de ${this.age} años de experiencia trabaja.`)
        }
    }
}

let {name : name6, job : {name : name77}} = person3

console.log(name6)
console.log(name77)

// 6. Usa propagación para combinar dos arrays en uno nuevo

let myArray4 = [1, 2, 3, 4]
let myArray5 = [1, 2, 3, 4]
let myArray6 = [...myArray4,...myArray5]
console.log(myArray6)

// 7. Usa propagación para crear una copia de un array

let myArray88 = [...myArray5] //copia

// 8. Usa propagación para combinar dos objetos en uno nuevo

let person55 = {
    name: "Brais",
    age: 37,
    alias: "MoureDev",
    email : "fasfsdffsdfs"
}

let person56 = {
    name: "Brais",
    age: 37,
    alias: "MoureDev",
    juego : "pokemon"
}

let person77 = {...person55,...person56}
console.log(person77)

// 9. Usa propagación para crear una copia de un objeto

let personCopia = {...person77}

// 10. Combina desestructuración y propagación

let [array66,array88] = myArray

array66  = [...myArray66]

console.log(array66)