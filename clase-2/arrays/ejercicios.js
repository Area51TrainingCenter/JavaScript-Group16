const mostrarEnConsola = valor => console.log(valor);
const mostrarMultiplicacion = (valor, n) => `${valor} x ${n} = ${valor * n}`;


// FOR
const generarTablaDeMultiplicar1 = valor => {
  // Opción 1
  for (let indice = 0; indice < 5; indice++) {
    console.log( mostrarMultiplicacion(valor, indice + 1) );
  }

  // Opción 2
  // for (let indice = 1; indice <= 5; indice++) {
  //   console.log( mostrarMultiplicacion(valor, indice) );
  // }

  // Opción 3
  // for (let indice = 1; indice < 6; indice++) {
  //   console.log( mostrarMultiplicacion(valor, indice) );
  // }
};

// ARRAY: FOR EACH
const generarTablaDeMultiplicar2 = valor => {
  const lista = [1, 2, 3, 4, 5];
  lista.forEach(numero => console.log( mostrarMultiplicacion(valor, numero) ));
};

// ARRAY: MAP
const generarTablaDeMultiplicar3 = valor => {
  const lista = [1, 2, 3, 4, 5];

  const tabla = lista.map(numero => mostrarMultiplicacion(valor, numero));
  // console.log(tabla);

  tabla.forEach(mostrarEnConsola);
};


// EJERCICIO 1
generarTablaDeMultiplicar3(3);

// 3 x 1 = 3
// 3 x 2 = 6
// 3 x 3 = 9
// 3 x 4 = 12
// 3 x 5 = 15




// EJERCICIO 2

let alumnos = [
  'Magneto',
  'Wolverine',
  'Tormenta',
  'Gambito',
  'Leviatan'
];


// const mostrarEnConsola = valor => console.log(valor);
const convertirAMayusculas = valor => valor.toUpperCase();

// Forma 1
const alumnosMayusculas = alumnos.map(convertirAMayusculas);
alumnosMayusculas.forEach(mostrarEnConsola);

// Forma 2 (Programación Funcional)
alumnos.map(convertirAMayusculas).forEach(mostrarEnConsola);

// Forma 3 (Programación Funcional)
alumnos
  .map(convertirAMayusculas)
  .forEach(mostrarEnConsola);











const formula = valor => (valor * valor) + 1;

const convertir = miArray => {
  // return miArray.map(valor => (valor * valor) + 1);
  return miArray.map(formula);
};

const numeros = [2, 4, 6, 8];
// const numerosConvertidos = convertir(numeros);
const numerosConvertidos = numeros.map(formula);
console.log(numerosConvertidos);
// [5, 17, 37, 65]




const personas = [
  { nombre: 'Pedro', edad: 23 },
  { nombre: 'Ana', edad: 25 },
  { nombre: 'Xavi', edad: 32 },
  { nombre: 'Patricia', edad: 35 }
];

const personasConActivo = personas.map(persona => {
  persona.activo = false;
  return persona;
});
console.log('personasConActivo', personasConActivo);

// [
//   { nombre: 'Pedro', edad: 23, activo: false },
//   { nombre: 'Ana', edad: 25, activo: false },
//   { nombre: 'Xavi', edad: 32, activo: false },
//   { nombre: 'Patricia', edad: 35, activo: false }
// ];

