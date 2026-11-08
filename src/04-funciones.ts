export {};

// recibe dos números y devuelve su suma, también como number
function sumar(a: number, b: number): number {
  return a + b;
}

// apellido es opcional (?): si no se pasa, vale undefined y se saluda solo con el nombre
function saludar(nombre: string, apellido?: string): string {
  return apellido ? `Hola ${nombre} ${apellido}` : `Hola ${nombre}`;
}

// rol es un parámetro por defecto: si no se pasa, vale "USER"
function crear(nombre: string, rol: string = "USER"): string {
  return `Usuario ${nombre} con rol ${rol}`;
}

// void: la función muestra el mensaje en consola y no devuelve ningún valor
function mostrar(mensaje: string): void {
  console.log(mensaje);
}

// async: siempre devuelve una Promise, y Promise<string> indica que al resolverse contiene un string
async function obtenerMensaje(): Promise<string> {
  return "Mensaje obtenido desde una función async";
}

console.log(sumar(5, 3)); // 8
console.log(saludar("Bautista")); // Hola Bautista
console.log(saludar("Bautista", "Berenfeld")); // Hola Bautista Berenfeld
console.log(crear("Bauti")); // Usuario Bauti con rol USER
console.log(crear("Bauti", "admin")); // Usuario Bauti con rol admin
mostrar("Esto no devuelve ningún valor");
// then recibe el string cuando la promesa se resuelve y lo imprime, por eso aparece al final
obtenerMensaje().then(console.log);
