const nombres = [
  'Pedro',
  'Juan',
  'Ernesto',
  'Susan',
  'Yessi'
];
console.log({ nombres });

// =============
//  EJERCICIO A
// =============

// 1. Crear una función que me devuelva la primera letra de un texto dado.

const primeraLetraDe = texto => {
  // Opción 1
  return texto[0];

  // // Opción 2 (Igual a la Opción 1)
  // return texto.charAt(0);

  // // Opción 3
  // return texto.substr(0, 1);

  // // Opción 4
  // return texto.substring(0, 1);
};

const letra = primeraLetraDe("Renzo");
console.log('A.1.', { letra });

// 2. Mostrar en consola la primera letra da cada elemento del array "nombres".

nombres.forEach(nombre => {
  const letraUsandoForEach = primeraLetraDe(nombre);
  console.log('A.2.', letraUsandoForEach);
});

// 3. Mostrar en consola un array con solo la primera letra da cada elemento del array "nombres".

const nombresConSoloPrimeraLetra = nombres.map(primeraLetraDe(nombre));
console.log('A.3.', { nombresConSoloPrimeraLetra });


// =============
//  EJERCICIO B
// =============

// 1. Crear una función que me devuelva un texto dado pero removiendo la primera letra.

const remuevePrimeraLetra = texto => {
  // Opción 1
  return texto.substr(1);

  // // Opción 2
  // return texto.substr(1, texto.length - 1);

  // // Opción 3
  // return texto.substring(1, texto.length);
};

const textoSinPrimeraLetra = remuevePrimeraLetra("Renzo");
console.log('B.1.', { textoSinPrimeraLetra });

// 2. Mostrar en consola el array "nombres" pero sin la primera letra de cada item.

// Opción 1: Usando Array PUSH
const miArray1 = [];
nombres.forEach(item => {
  miArray1.push(remuevePrimeraLetra(item));
});
console.log('B.2.1.', miArray1);

// Opción 2: Usando Array MAP
const miArray2 = nombres.map(remuevePrimeraLetra);
console.log('B.2.2.', miArray2);


// =============
//  EJERCICIO C
// =============

// 1. Devolver un valor de tipo booleano si un texto contiene una letra dada.

const tieneLaLetra = (texto, letra) => {
  const letraEnMinusculas = letra.toLowerCase();
  const textoEnMinusculas = texto.toLowerCase();
  return textoEnMinusculas.indexOf(letraEnMinusculas) > -1;
};

const tieneLetraE = tieneLaLetra('Renzo', 'e');
console.log('C.1.', 'Renzo tiene la letra e', tieneLetraE);


// 2. mostrar en consola el array de nombres pero solo los item que tengan la letra e.

const nombresSoloConE = nombres.filter(nombre => tieneLaLetra(nombre, 'e'));
console.log('C.2.', { nombresSoloConE });


// =============
//  EJERCICIO D
// =============

// Eliminar un elemento de un array por su indice

const nombresSinUnElemento = nombres.slice(0); // Se hace una copia del Array original
const indice = 2; // Indice del elemento a eliminar
const cantidad = 1; // Cantidad de elementos a eliminar desde el indice indicado

// ".splice" elimina elementos del array. Afecta al Array (mutable).
nombresSinUnElemento.splice(indice, cantidad);

console.log('D.', { nombresSinUnElemento });



