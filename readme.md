# Entregable de la Materia Front End III para C.T.D
La aplicación se trata de un "Elige tu propia aventura", es una página estática creada con React, usando Components Class.
- Historia otorgada por el equipo de Frontend 3.

Temas vistos y aplicados en el proyecto:
- Utilización de CRA para crear una aplicación.
- Estructura de archivos y carpetas en React.
- Componentes de clase.
- Props.
- Estados mediante this.state y setState.
- Ciclo de vida.

## Sobre la APP

- La aplicación creada se trata de un “Elige tu propia aventura”.
- Se presenta un texto que describe una situación y dos opciones (A o B) para reaccionar ante la situación. Cada una de estas opciones te llevará por el recorrido de la historia de una forma u otra, dependiendo de tus elecciones.
- Dentro de la carpeta "components", encontrarás un archivo llamado "data.json" en el cual verás un array de objetos, que es el que se utiliza para el texto de la historia así como también para las opciones.
- Como podrás ver, se trata de una historia prácticamente lineal. Si elegís una opción, esta te dará un texto único. Sin embargo, tendrás las mismas consecuencias de si hubieras elegido la otra opción. Esto es así para evitar tener un JSON extremadamente confuso, con el cual tengas que perder mucho tiempo descifrando.

#### Otras funcionalidades
- Tendrás la posibilidad de realizar funcionalidades extra que te darán la posibilidad de llegar a la nota máxima. Las mismas son las siguientes:
- A medida que hagas elecciones "A" o "B", estas se irán registrando de la siguiente manera:
- Se muestra en pantalla la última elección que realizó el usuario (por ejemplo, "Selección previa: A").
- Se muestran todas las selecciones anteriores (por ejemplo, "Anteriores: A B A").

## FAQ
En caso que necesites crear un componente que tenga estados, necesariamente deberás utilizar componentes de clase. En caso de tener alguno que no tenga la necesidad de utilizar estados, podés utilizar componentes funcionales.

