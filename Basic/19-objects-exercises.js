/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades

let Usuario = {
    name : "Laanga",
    password : "1234",
    edad : 20
}

// 2. Accede y muestra su valor

console.log(Usuario.name)
console.log(Usuario.password)
console.log(Usuario.edad)
console.log(Usuario)

// 3. Agrega una nueva propiedad

Usuario.email = "langa@gmail.com"
console.log(Usuario)

// 4. Elimina una de las 3 primeras propiedades

delete Usuario.edad
console.log(Usuario)

// 5. Agrega una función e invócala

Usuario.walk = function () {
    console.log("El usuarios ha comenzado a andar.")
}

Usuario.walk()

// 6. Itera las propiedades del objeto

let Usuario2 = {
    name: "Laanga",
    password: "1234",
    edad: 20,
    walk: function () {
        console.log("CAMINA");
    }
};

// Usando un bucle for...in para iterar las propiedades del objeto
for (let propiedad in Usuario2) {
    console.log(propiedad + ": " + Usuario2[propiedad]);
}


// 7. Crea un objeto anidado
let Usuario22 = {
    name: "Laanga",
    password: "1234",
    edad: 20,
    walk: function () {
        console.log("CAMINA");
    },
    job : {
        name: "programador",
        exp: 5,
        sueldo: 3000
    }
}

// 8. Accede y muestra el valor de las propiedades anidadas
console.log(Usuario22.job.sueldo)

// 9. Comprueba si los dos objetos creados son iguales

//NO SON IGUALES

// 10. Comprueba si dos propiedades diferentes son iguales

//SI TIENEN LO MISMO SERIAN IGUALES