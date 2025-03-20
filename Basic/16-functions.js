//Funciones

function funcionPrimera (){
    console.log("Hola")
}

funcionPrimera()

// Con parámetros

function myFuncWithParams(name) {
    console.log(`¡Hola, ${name}!`)
}

myFuncWithParams("Brais")
myFuncWithParams("MoureDev")

// Funciones anónimas

const myFunc2 = function (name) {
    console.log(`¡Hola, ${name}!`)
}

myFunc2("Brais Moure")

//Funciones Flecha

const funcionFlecha = (miNombre) => {
    console.log(`Hola ${miNombre}`)
} 

const funcionFlecha2 = (miNombre) => console.log(`Hola ${miNombre}`)

funcionFlecha("Juan")
funcionFlecha2("Juanaaaa")

// Parámetros

function sum(a, b) {
    console.log(a + b)
}

sum(5, 10)
sum(5)
sum()

function defaultSum(a = 0, b = 0) {
    console.log(a + b)
}

// Por defecto

defaultSum()
defaultSum(5)
defaultSum(5, 10)
defaultSum(b = 5)

// Retorno de valores

function mult(a, b) {
    return a * b
}

let result = mult(5, 10)
console.log(result)

// Funciones anidadas

function extern() {
    console.log("Función externa")
    function intern() {
        console.log("Función interna")
    }
    intern()
}

extern()
// intern() Error: fuera del scope

// Funciones de orden superior

function applyFunc(func, param) {
    func(param)
}

applyFunc(myFunc4, "función de orden superior")

// forEach

myArray = [1, 2, 3, 4]

mySet = new Set(["Brais", "Moure", "mouredev", 37, true, "braismoure@mouredev.com"])

myMap = new Map([
    ["name", "Brais"],
    ["email", "braismoure@mouredev.com"],
    ["age", 37]
])

myArray.forEach(function (value) {
    console.log(value)
})

myArray.forEach((value) => console.log(value))

mySet.forEach((value) => console.log(value))

myMap.forEach((value) => console.log(value))