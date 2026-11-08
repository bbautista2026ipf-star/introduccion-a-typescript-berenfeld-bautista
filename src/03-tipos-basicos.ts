export {};

// TIPOS DE DATOS PRIMITIVOS
let nombre: string = "Jose";
let edad: number = 20;
let activo: boolean = true;
let notas: number[] = [7, 8, 10];
let id: string | number = 1234;

console.log(nombre, edad, activo);
console.log(notas);
console.log(id);

let saludo: string = "Hola";
let decimal: number = 3.14;

console.log(saludo, decimal);
// Arrays
let textos: string[] = ["Saludo", "Despedida"];
let numeros: number[] = [1, 2, 3, 4, 5];
let valores: boolean[] = [true, false];

console.log(textos);
console.log(numeros);
console.log(valores);

console.log(id);

let dato: any = "hola";
// any desactiva la verificación de tipos: typeScript no avisa errores y recién fallan al ejecutar
// toFixed() es un metodo para numeros, no para cadenas, por eso usar any como tipo de valor es inconsistente
try {
  dato.toFixed(2);
} catch (error) {
  console.log(`Con any el error aparece recién al ejecutar: ${error}`);
}
