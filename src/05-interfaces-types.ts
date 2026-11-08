export {};

// interface describe la forma de un objeto; edad es opcional (?)
interface Persona {
  nombre: string;
  edad?: number;
}

// extends: Alumno tiene las propiedades de Persona más carrera
interface Alumno extends Persona {
  carrera: string;
}

// type le pone un nombre a una unión: Id puede ser string o number
type Id = string | number;

// type también puede describir la forma de un objeto
type Coordenada = {
  x: number;
  y: number;
};

// persona no tiene edad, y como es opcional no da error
const persona: Persona = { nombre: "Marcos" };
const idPersona: Id = "A12";
// alumno necesita nombre y carrera, y edad es opcional
const alumno: Alumno = {
  nombre: "Marcos",
  edad: 20,
  carrera: "Desarrollo de Software",
};
const punto: Coordenada = { x: 10, y: 20 };

console.log(persona);
console.log(idPersona);
console.log(alumno);
console.log(punto);
// persona no tiene edad, por eso muestra undefined
console.log(`Edad de persona: ${persona.edad}`);
