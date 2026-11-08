# Glosario

## Transpilar

Convertir el código de TypeScript a JavaScript, que es lo que realmente se ejecuta. Lo hace el comando `tsc`.

```ts
let mensaje: string = "Hola";
```

Al transpilar, queda en JavaScript como `let mensaje = "Hola";`.

**Fuente:** [Handbook: The Basics, Erased Types](https://www.typescriptlang.org/docs/handbook/2/basic-types.html#erased-types) y material de la cátedra (sección 01, Introducción).

## Inferencia de tipos

TypeScript deduce el tipo de una variable a partir del valor que se le asigna, sin necesidad de escribirlo.

```ts
let nombre = "Lautaro";
```

**Fuente:** [Handbook: Everyday Types, Type Annotations on Variables](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-annotations-on-variables) y material de la cátedra (sección 06, Tipos básicos).

## any

Tipo que acepta cualquier valor y desactiva la verificación de tipos sobre esa variable.

```ts
let dato: any = "hola";
dato = 123;
```

**Fuente:** [Handbook: Everyday Types, any](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any) y material de la cátedra (sección 06, Tipos básicos).

## void

Tipo que indica que una función no devuelve ningún valor.

```ts
function mostrar(texto: string): void {
  console.log(texto);
}
```

**Fuente:** [Handbook: More on Functions, void](https://www.typescriptlang.org/docs/handbook/2/functions.html#void) y material de la cátedra (sección 07, Funciones).

## Parámetro opcional

Parámetro que se puede omitir al llamar a la función. Se marca con `?` y, si no se pasa, vale `undefined`.

```ts
function saludar(nombre: string, apellido?: string): string {
  return apellido ? `Hola ${nombre} ${apellido}` : `Hola ${nombre}`;
}
```

**Fuente:** [Handbook: More on Functions, Optional Parameters](https://www.typescriptlang.org/docs/handbook/2/functions.html#optional-parameters) y material de la cátedra (sección 07, Funciones).

## Parámetro por defecto

Parámetro que ya tiene un valor asignado, que se usa cuando no se le pasa ninguno.

```ts
function crear(nombre: string, rol: string = "USER"): void {
  console.log(`Usuario ${nombre} con rol ${rol}`);
}
```

**Fuente:** [Handbook: More on Functions, Optional Parameters](https://www.typescriptlang.org/docs/handbook/2/functions.html#optional-parameters) y material de la cátedra (sección 07, Funciones).

## Tipo literal

Tipo que acepta solo un valor exacto. Junto con `|`, limita una variable a unas pocas opciones.

```ts
let rol: "ADMIN" | "USER" = "ADMIN";
```

**Fuente:** [Handbook: Everyday Types, Literal Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types) y material de la cátedra (sección 08, Interfaces y Types).

## enum

Conjunto de constantes con nombre que agrupa valores relacionados. Al compilar se convierte en un objeto de JavaScript.

```ts
enum Estado {
  Pendiente,
  Activo,
  Cerrado,
}

let actual: Estado = Estado.Activo;
```

**Fuente:** [Handbook: Enums](https://www.typescriptlang.org/docs/handbook/enums.html) y material de la cátedra (sección 06, Tipos básicos).

## interface

> "An _interface declaration_ is another way to name an object type."

Traducción: una declaración de interfaz es otra forma de ponerle nombre a un tipo de objeto.

```ts
interface Usuario {
  id: number;
  nombre: string;
}
```

**Fuente:** [Handbook: Everyday Types, Interfaces](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces)

## type (alias de tipo)

> "A _type alias_ is exactly that - a _name_ for any _type_."

Traducción: un alias de tipo es exactamente eso, un nombre para cualquier tipo.

```ts
type ID = string | number;
```

**Fuente:** [Handbook: Everyday Types, Type Aliases](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases)

## Propiedad opcional

> "we can mark those properties as _optional_ by adding a question mark (`?`) to the end of their names."

Traducción: podemos marcar esas propiedades como opcionales agregando un signo de pregunta (`?`) al final de sus nombres.

```ts
interface Usuario {
  nombre: string;
  edad?: number;
}
```

**Fuente:** [Handbook: Object Types, Optional Properties](https://www.typescriptlang.org/docs/handbook/2/objects.html#optional-properties)
