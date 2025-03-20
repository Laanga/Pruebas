//Strings

//Concatenación de strings
let myName = "Juan"

let saludo = "Hola " + myName + ", ¿cómo estás?"

console.log(saludo)

//Longitud de un string

let texto = "Hey como andas"

console.log(texto.length)

//Metodos de Strings

//toUpperCase() y toLowerCase()

console.log(texto.toUpperCase())
console.log(texto.toLowerCase())
console.log(texto.indexOf("pepe")) //Devuelve la posición de la primera ocurrencia de la palabra
console.log(texto.includes("andas")) //Devuelve true o false si el string incluye la palabra
console.log(texto.slice(9,13)) //Extrae una parte del string
console.log(texto.replace("Hey","Hola ")) //Reemplaza una parte del string



//String template

let message = `khjhkhj
como estas ${myName}`

console.log(message)

