// sumar ( Array<Number> )

const numeros = [2, 5, 7, 9];

console.log(numeros);

const sumar = (a, b) => a + b;
const sumaDeArray = numeros.reduce(sumar);
console.log(sumaDeArray);


// concatenar ( Array<String> )

const letras = ['H', 'o', 'l', 'a'];
const concatenar = (a, b) => `${a}${b}`;
const palabra = letras.reduce(concatenar);
console.log(palabra);


// Sumar edades ( Array<Object> )

const personas = [
  { nombre: 'Pedro', edad: 23 },
  { nombre: 'Ana', edad: 25 },
  { nombre: 'Xavi', edad: 32 },
];

// dirty way
const sumarDeEdades = personas.reduce((a, b) => {
  return { edad: a.edad + b.edad };
});


// better ways

// const edades = personas.map(a => a.edad);
// const sumaDeEdades = edades.reduce(sumar);
// console.log(sumaDeEdades);


const sumaDeEdades = personas.map(a => a.edad).reduce(sumar);
console.log(sumaDeEdades);




