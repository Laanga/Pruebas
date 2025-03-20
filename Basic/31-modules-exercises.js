/*
Clase 45 - Ejercicios: Módulos
Vídeo: https://youtu.be/1glVfFxj8a4?t=22720
*/

// 1. Exporta una función

 export function suma(a,b) {
    return a + b
}

// 2. Exporta una constante

export const Myname = "Alvaro"

// 3. Exporta una clase

export class Circulo {
    constructor(radio) {
        this.radio = radio
    }

    perimetro(){
        return this.radio * 2
    }
}

// 4. Importa una función

import { add } from "./28-export-modules.js";

console.log(add(4,4))

// 5. Importa una constante

import { PI } from "./28-export-modules.js";

console.log(PI)

// 6. Importa una clase

import { Circle } from "./28-export-modules.js";

let circulo = new Circle(5)

console.log(circulo.area().toFixed(2))

// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)

export default { resta, MiNombre, Rectangulo };

// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)

import modulos from "./28-export-modules.js"; //Exportacion por defecto

// 9. Exporta una función, una constante y una clase desde una carpeta

//Mas de lo mismo

// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior

//Mas de lo mismo

//Pruebo a ver si se sube 