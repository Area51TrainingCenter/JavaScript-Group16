let alumnos = [
  'Magneto',
  'Wolverine',
  'Tormenta',
  'Gambito',
  'Leviatan'
];

let resultadoArray;

resultadoArray = alumnos.map(value => {
  return `ALUMNO: ${value}`;
});

console.log('>> ARRAY: MAP');
console.log('resultadoArray', resultadoArray);
console.log('alumnos', alumnos);
