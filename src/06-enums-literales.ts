export {};

// enum de texto: cada miembro tiene un string asignado
enum Estado {
  PENDIENTE = "PENDIENTE",
  COMPLETADO = "COMPLETADO",
}

// enum numérico: sin valores asignados, empieza en 0 y aumenta de a uno (BAJA 0, MEDIA 1, ALTA 2)
enum Prioridad {
  BAJA,
  MEDIA,
  ALTA,
}

// tipo literal: rol solo puede valer "ADMIN" o "USER"
type Rol = "ADMIN" | "USER";

// nuevoRol solo acepta uno de los valores de Rol
function asignarRol(nombre: string, nuevoRol: Rol): string {
  return `${nombre} ahora tiene el rol ${nuevoRol}`;
}

// el enum se usa con su nombre y el miembro
let tarea: Estado = Estado.PENDIENTE;
// el tipo literal se usa escribiendo el valor directamente
let rol: Rol = "ADMIN";
let prioridad: Prioridad = Prioridad.ALTA;

console.log(tarea);
console.log(rol);
// muestra 2, que es el número de ALTA
console.log(`La prioridad ALTA vale ${prioridad}`);
// el enum existe en ejecución como un objeto, se muestra con sus miembros
console.log(Estado);

// se puede cambiar a otro valor permitido de Rol
rol = "USER";

console.log(rol);
console.log(asignarRol("Lauti", "ADMIN"));
