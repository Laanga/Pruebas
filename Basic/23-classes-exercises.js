/*
Clase 39 - Ejercicios: Clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=18630
*/

// 1. Crea una clase que reciba dos propiedades

class Persona {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }
}

// 2. Añade un método a la clase que utilice las propiedades

class PersonaMetodo {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }
  saludar(mensaje) {
    console.log(mensaje);
  }
}

let personaMetodo = new PersonaMetodo("Pepe", 77);

personaMetodo.saludar("Hola");

// 3. Muestra los valores de las propiedades e invoca a la función

console.log(personaMetodo.name);
console.log(personaMetodo.age);

// 4. Añade un método estático a la primera clase

class PersonaStatic {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }

  static saludo() {
    console.log("TE ESTOY SALUDANDO");
  }
}

// 5. Haz uso del método estático

PersonaStatic.saludo();

// 6. Crea una clase que haga uso de herencia

// class PersonaStatic2 extends PersonaStatic {
//   static gritar() {
//     console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAA");
//   }
// }

// PersonaStatic2.saludo();
// PersonaStatic2.gritar();

// 7. Crea una clase que haga uso de getters y setters

class Persona88 {
  #name;
  #age;
  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }
  
  get name(){
    return this.#name
  }
  set name(name){
    this.#name = name
  }
}

let personaa = new Persona88("Juan",66)


console.log(personaa.name)

personaa.name = "Pepe"
console.log(personaa.name)

// 8. Modifica la clase con getters y setters para que use propiedades privadas

//Lo mismo que arriba

// 9. Utiliza los get y set y muestra sus valores
//Hecho

// 10. Sobrescribe un método de una clase que utilice herencia
class PersonaStatic2 extends PersonaStatic {
  static gritar() {
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAA");
  }

  static saludo(){
    console.log("EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE")
  }
}

PersonaStatic2.saludo()
