// ARRAY

let alumnos = [
  'Magneto',
  'Wolverine',
  'Tormenta',
  'Gambito',
  'Leviatan'
];

console.log(alumnos);



// BUCLE: FOR
console.log();
console.log('>> BUCLE: FOR');

let totalSuma = 0;
const sumar = (a, b) => a + b;

for (let indice = 0; indice < alumnos.length; indice++) {

  const element = alumnos[indice];
  console.log(element);

  totalSuma = sumar(totalSuma, indice);
}

console.log(totalSuma);


// BUCLES: FOR ... IN
const persona = { nombre: 'Pedro', edad: 23 };

for (const propiedad in persona) {
  const valor = persona[propiedad];
  console.log(valor);
}


// BUCLES: FOR ... OF
for (const elemento of alumnos) {
  console.log(elemento);
}
// AVANZADO!
//   Symbol.iterator
//   https://medium.freecodecamp.org/demystifying-es6-iterables-iterators-4bdd0b084082




// ARRAY: FOR EACH

// callbackFn: (value: string, index: number, array: []): void
//             (value, index, array) => {  }

const callback1 = valor => console.log(valor);
const callback2 = (valor, indice) => console.log(indice, valor);

console.log('>> callback 1');
alumnos.forEach(callback1);

console.log('>> callback 2');
alumnos.forEach(callback2);

console.log('>> VARIANTE 1');
alumnos.forEach(valor => console.log(valor));

console.log('>> VARIANTE 2');
alumnos.forEach(valor => {
  console.log(valor);
});


// ARRAY: MAP



let resultadoArray;

resultadoArray = alumnos.map(value => {
  return `ALUMNO: ${value}`;
});

console.log();
console.log('>> ARRAY: MAP');
console.log('resultadoArray', resultadoArray);
console.log('alumnos', alumnos);


