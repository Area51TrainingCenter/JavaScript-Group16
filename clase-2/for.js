let alumnos = [
  'Magneto',
  'Wolverine',
  'Tormenta',
  'Gambito',
  'Leviatan'
];

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

