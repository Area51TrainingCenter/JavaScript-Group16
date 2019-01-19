# Funciones

## 3 formas para crear funciones

```js
// 1.
// ES5+ (ES5, ES6+, etc)
function saludo() {
  console.log("Hola Área51");
}

// [DEPRECIADO]
// ES5 (Legacy)
var saludo = function () {
  console.log("Hola Área51");
};

// 2.
// ES6+
const saludo = function () {
  console.log("Hola Área51");
};

// 3.
// Arrow function (Recomended)
const saludo = () => {
  console.log("Hola Área51");
};
```

Mas ejemplos:

```js
// ES5


function saludo() {
    console.log('Hola');
}

saludo();



var saludo2 = function () {
    console.log('Hola 2');
};



// ES6+


const saludo3 = () => {
    console.log('Hola 2');
};

saludo3();


// Con un parámetro
const saludo4 = (nombre) => { // Los parentesis son opcionales
    console.log(`Hola ${nombre}`);
};

saludo4();


// Con dos parámetros
const saludo5 = (nombre, apellido) => {
    console.log(`Hola ${nombre} ${apellido}`);
};

saludo5();
```

Usando una variable del scope superior:

```js
let nombre = 'Carlos';

const saludo = () => {
	console.log(`Hola ${nombre}!`);
}

saludo();
```

Llenado de un Array usando una función:

```js
let categorias = [];

const insertarCategoria = nombreCategoria => {
	categorias.push(nombreCategoria);
}

insertarCategoria('Computadoras');
insertarCategoria('Audio y Video');
```

Llenado de un Array formateado como tabla de multiplicar del 2:
```js
let tabla = [];

const agregarLinea = (n) => {
	tabla.push(`2 x ${n} = ${2 * n}`);
}

agregarLinea(1);
agregarLinea(2);
agregarLinea(3);
agregarLinea(4);
agregarLinea(5);

console.log(tabla);
/*
[
	'2 x 1 = 2',
	'2 x 2 = 4',
	'2 x 3 = 6',
	'2 x 4 = 8',
	'2 x 5 = 10'
]
*/
```

