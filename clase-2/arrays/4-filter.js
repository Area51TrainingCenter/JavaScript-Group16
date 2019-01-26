const personas = [
  { nombre: 'Pedro', edad: 23 },
  { nombre: 'Ana', edad: 25 },
  { nombre: 'Xavi', edad: 32 },
  { nombre: 'Patricia', edad: 35 }
];

// Edad 20s
const personasDeVeintes = personas.filter(persona => persona.edad < 30);
console.log(personasDeVeintes);

// nombre empieza con A
const personasConLetraA = personas.filter(persona => {
  return persona.nombre[0].toLowerCase() === 'a';
});
console.log(personasConLetraA);

// Personas que empiecen con letra P y mayores de 30 años
const personasConLetraA = personas.filter(persona => {
  // true && true
  // false || true
  return persona.nombre[0].toUpperCase() === 'P' && persona.edad > 30;
});
console.log(personasConLetraA);

