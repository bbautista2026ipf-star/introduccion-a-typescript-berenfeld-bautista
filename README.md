# Documentación de TypeScript

## TEMA 1: ¿Qué es TypeScript?

### ¿Qué es TypeScript y quién lo desarrolla?

TypeScript es un superconjunto de JavaScript, es decir, le agrega sintaxis y reglas al lenguaje original sin quitarle nada. Lo desarrolla Microsoft y, al compilarse, el código termina convertido en JavaScript común, que cualquier entorno puede ejecutar.

### ¿Qué diferencias tiene con JavaScript?

Las diferencias que se marcan entre TypeScript y JavaScript son:

- **Tipado estático:** el primero, a diferencia del segundo, permite aclarar el tipo de dato al declarar variables; si no se indica, lo deduce a partir del valor asignado.
- **Orientado al desarrollador:** porque el navegador ejecuta el código JavaScript pero no reconoce el de TypeScript, por lo cual requiere una transpilación que verifique los tipos.
- **Configuración de entorno:** para seguir este flujo y ejecutar el código, suelen instalarse tres (3) paquetes: `typescript`, `@types/node` y `tsx`.

### ¿Qué ventajas ofrece?

De entre sus principales ventajas, este lenguaje ofrece:

- Una mejor detección de errores en el código por la verificación de tipos.
- Mejor refactorización del código gracias a la verificación de tipos.
- Otorga un código mucho más mantenible y escalable.
- El hecho de aclarar el tipo de datos en cada variable funciona dualmente como documentación.

### ¿Cuál es su versión actual?

La versión más actual es TypeScript 7, que salió el 8 de julio de 2026. Su compilador fue reescrito por completo y, según el anuncio oficial, es entre 8 y 12 veces más rápido.

---

## TEMA 2: Crear y ejecutar un proyecto

### ¿Cómo se instala TypeScript en un proyecto?

TypeScript se puede inicializar en un proyecto mediante los siguientes 2 pasos:

#### Paso 0: Verificar el entorno

Verificar que Node y npm estén instalados y ver sus versiones. Como editor se usa VS Code, que ya trae soporte para TypeScript.

```bash
node -v
npm -v
```

#### Paso 1: Crear el proyecto e instalar las dependencias requeridas

1. Crear la carpeta del proyecto y ubicarse en ella:

   ```bash
   cd c:/
   mkdir ts
   cd ts
   ```

2. Ya se ubicó el proyecto, ahora se inicia el proyecto de Node:

   ```bash
   npm init -y
   ```

3. Se instalan las dependencias requeridas:

   ```bash
   npm i -D typescript @types/node@24 tsx
   ```

4. Se crea la carpeta con el código fuente:

   ```bash
   mkdir src
   ```

5. Verificar la versión de TypeScript (7.x):

   ```bash
   npx tsc -v
   ```

### ¿Para qué sirve el archivo tsconfig.json?

Este archivo es importante porque configura y determina ciertos comportamientos que puede tener el proyecto, como por ejemplo:

- **Ruta de entrada y salida para la transpilación del código:** se indican con las opciones `rootDir` y `outDir`.

### ¿Qué hace el comando tsc?

El comando `tsc` transpila el código de TypeScript a JavaScript y detecta los errores de tipos. Por defecto, aunque encuentre errores, igual genera los archivos `.js`, pero informa los errores con un código de salida distinto de cero, por lo que el proceso se marca como fallido.

### ¿Qué diferencia hay entre ejecutar un archivo con tsc, tsx y node?

La diferencia radica en lo que hace cada herramienta con los tipos:

| Herramienta | Reconoce los tipos | Verifica los tipos | Genera archivos `.js` |
| ----------- | :----------------: | :----------------: | :-------------------: |
| `node`      |   Solo los quita   |         No         |          No           |
| `tsx`       |         Sí         |         No         |          No           |
| `tsc`       |         Sí         |         Sí         |          Sí           |

---

## TEMA 3: Tipos básicos

### ¿Qué son los tipos string, number y boolean?

Son los tipos de datos primitivos de TypeScript que comparte con JavaScript.

| Tipo      | Categoría | Qué representa                                              |
| --------- | --------- | ----------------------------------------------------------- |
| `string`  | Primitivo | Cadena de texto que admite caracteres alfanuméricos         |
| `number`  | Primitivo | Números, tanto enteros (_integer_) como decimales (_float_) |
| `boolean` | Primitivo | Valor lógico que puede ser `true` o `false`                 |

### ¿Cómo se declara un array con tipo?

Un array con tipo se declara de la siguiente forma: se coloca el tipo de dato de sus elementos seguido de corchetes (`[]`), por lo cual el array solo admite valores de ese tipo.

### ¿Qué es un tipo unión?

Un tipo unión se forma combinando dos o más tipos con el operador `|`. Una variable de ese tipo puede contener un valor de cualquiera de esos tipos (los _miembros_ de la unión).

### ¿Por qué se recomienda evitar any?

Porque `any` desactiva la verificación de tipos sobre ese valor: TypeScript permite usarlo de cualquier forma sin avisar, y los errores recién aparecen al ejecutar el programa.

---

## TEMA 4: Funciones

### ¿Cómo se indican los tipos de los parámetros?

Se indican colocando dos puntos (`:`) después del nombre de cada parámetro y luego el tipo de dato que debe recibir, así en cada llamada TypeScript verifica que los argumentos sean del tipo indicado.

### ¿Cómo se indica el tipo de retorno?

El tipo de retorno se indica de la misma forma, con dos puntos (`:`), pero después del paréntesis que cierra los parámetros. En principio no es obligatorio, ya que TypeScript lo deduce a partir del valor que devuelve el `return`; sin embargo, aclararlo funciona también como documentación de la función y evita que por error se devuelva un tipo distinto al esperado. En el caso de que la función no devuelva nada se usa `void`, y si es `async` siempre devuelve una `Promise`.

### ¿Qué es un parámetro opcional?

Es aquel parámetro que se puede omitir a la hora de llamar a la función, y se marca agregando un `?` después de su nombre. Tiene que ir después de los obligatorios y, si no se le pasa ningún valor, queda en `undefined`, por lo cual TypeScript pide verificarlo antes de usarlo.

### ¿Qué es un parámetro por defecto?

Es el parámetro que ya trae un valor asignado con `=`, el cual se usa tan solo cuando no se le pasa ninguno.

---

## TEMA 5: Interfaces y type

### ¿Qué es una interfaz y para qué sirve?

Según el material, tanto las interfaces como los types describen la forma de los datos. La interfaz (`interface`) en particular define la estructura de un objeto: qué propiedades debe tener y de qué tipo es cada una, y una vez declarada su nombre se usa como un tipo más. Sirve para reutilizar esa estructura en distintas partes del código y que TypeScript verifique que cada objeto la cumpla; además, una interfaz puede extender a otra con `extends` para heredar sus propiedades y sumarle nuevas. Al compilar se borra, ya que tan solo existe para verificar los tipos y no queda nada de ella en el `.js`.

### ¿Qué es un type?

Un `type` es un alias de tipo: un nombre que se le asigna a cualquier tipo para poder reutilizarlo, como ser uniones, tipos literales, primitivos o también la estructura de un objeto.

### ¿Cómo se declara una propiedad opcional?

Agregando un `?` al final del nombre de la propiedad, y si el objeto no la tiene, al leerla se obtiene `undefined`.

### ¿Cuándo conviene usar cada uno?

Los dos son muy parecidos, por lo cual en la mayoría de los casos se puede elegir cualquiera; la diferencia radica en que una interfaz se puede volver a declarar para sumarle propiedades nuevas, mientras que un `type` no se puede modificar una vez creado. En base a esto, conviene usarlos de la siguiente forma:

- **`interface`:** para estructuras de objetos y clases, sobre todo cuando se necesita `extends`.
- **`type`:** para uniones (`|`), intersecciones (`&`), tipos literales y alias de tipos primitivos.

---

## TEMA 6: Enums y tipos literales

### ¿Qué es un enum?

Un `enum` es un conjunto de constantes con nombre que agrupa valores relacionados, el cual puede ser numérico, donde cada miembro aumenta de a uno empezando desde 0 si no se indica otro valor, o de texto, donde a cada miembro se le asigna un _string_. Como lo aclara el material, no es solo un tipo, ya que al compilar se convierte en un objeto de JavaScript.

### ¿Qué es un tipo literal?

Es un tipo que acepta un único valor exacto, y combinado con una unión (`|`) sirve para limitar una variable o un parámetro a unos pocos valores.

### ¿En qué se parecen y en qué se diferencian?

Se parecen en que los dos limitan los valores que puede tomar una variable a un grupo cerrado de opciones, y en ambos casos TypeScript marca un error si se usa uno que no está permitido. Las diferencias que se marcan entre ellos son:

- **En tiempo de ejecución:** el enum se convierte en un objeto de JavaScript, mientras que el tipo literal se borra al compilar y no deja nada en el `.js`.
- **Forma de uso:** el primero se usa mediante su nombre seguido del miembro, en cambio el segundo se usa escribiendo el valor directamente.
- **Compatibilidad:** el enum funciona con `tsc` y `tsx` pero no al ejecutar el `.ts` con `node`, a diferencia del tipo literal, que funciona con las tres herramientas.

### ¿En qué situaciones se puede usar cada uno?

El enum resulta útil para agrupar constantes relacionadas que se usan como valores dentro del programa, como ser estados o roles, y el tipo literal para casos más simples con pocas opciones.

---

## Fuentes consultadas

### Tema 1: ¿Qué es TypeScript?

- [TypeScript: JavaScript With Syntax For Types](https://www.typescriptlang.org/)
- [Announcing TypeScript 7.0 (Microsoft Dev Blogs, 8 de julio de 2026)](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/)
- Material de la cátedra: _Introducción a TypeScript_, guía teórica-práctica de la Unidad 4 (Instituto Politécnico Formosa).

### Tema 2: Crear y ejecutar un proyecto

- [TSConfig Reference: rootDir](https://www.typescriptlang.org/tsconfig/rootDir.html)
- Material de la cátedra: _Introducción a TypeScript_, guía teórica-práctica de la Unidad 4 (Instituto Politécnico Formosa).

### Tema 3: Tipos básicos

- [Handbook: Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
- Material de la cátedra: _Introducción a TypeScript_, guía teórica-práctica de la Unidad 4 (Instituto Politécnico Formosa).

### Tema 4: Funciones

- [Handbook: Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
- [Handbook: More on Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html)
- [TSConfig Reference: strict](https://www.typescriptlang.org/tsconfig/strict.html)
- [Announcing TypeScript 7.0 (Microsoft Dev Blogs, 8 de julio de 2026)](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/)
- Material de la cátedra: _Introducción a TypeScript_, guía teórica-práctica de la Unidad 4 (Instituto Politécnico Formosa).

### Tema 5: Interfaces y type

- [Handbook: Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
- [Handbook: Object Types](https://www.typescriptlang.org/docs/handbook/2/objects.html)
- Material de la cátedra: _Introducción a TypeScript_, guía teórica-práctica de la Unidad 4 (Instituto Politécnico Formosa).

### Tema 6: Enums y tipos literales

- [Handbook: Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
- [Handbook: Enums](https://www.typescriptlang.org/docs/handbook/enums.html)
- [TSConfig Reference: erasableSyntaxOnly](https://www.typescriptlang.org/tsconfig/erasableSyntaxOnly.html)
- Material de la cátedra: _Introducción a TypeScript_, guía teórica-práctica de la Unidad 4 (Instituto Politécnico Formosa).
