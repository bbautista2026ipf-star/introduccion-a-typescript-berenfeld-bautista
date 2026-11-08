export {};

// TEMA 2:
// Luego de seguir los pasos del tema 2, podemos entender la diferencia de cada compilador (Node, tsx y tsc) con los siguientes ejemplos

enum compilador {
  Node = "Node",
  Tsx = "Tsx",
  Tsc = "Tsc",
}

// Node: node src/02-crear-ejecutar.ts
let compiladorNode: compilador = compilador.Node;
console.log(
  `${compiladorNode} no ejecuta este archivo porque no reconoce el enum`,
);

// Tsx: npx tsx src/02-crear-ejecutar.ts
let compiladorTsx: compilador = compilador.Tsx;
console.log(
  `${compiladorTsx} reconoce el enum y ejecuta el .ts directamente, sin generar archivos`,
);

// Tsc: npx tsc
let compiladorTsc: compilador = compilador.Tsc;
console.log(
  `${compiladorTsc} reconoce el enum y lo transpila a JavaScript en /dist`,
);
// para ver el código transpilado: node dist/02-crear-ejecutar.js
