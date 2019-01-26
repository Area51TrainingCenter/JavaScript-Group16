let alumnos = [
  'Magneto',
  'Wolverine',
  'Tormenta',
  'Gambito',
  'Leviatan'
];

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
