const saludo = (nombre, apellido) => {
  // Forma 1: NO!
  // return `${nombre} ${apellido}`;

  // Forma 2: NO
  // let resultado = '';

  // if (nombre != undefined) {
  //   resultado = `${resultado}${nombre}`
  // }

  // if (apellido != undefined) {
  //   resultado = `${resultado}${apellido}`
  // }
  //
  // return resultado;


  // Forma 3
  let resultado = [];

  if (nombre != undefined) {
    resultado.push(nombre);
  }

  if (apellido != undefined) {
    resultado.push(apellido);
  }

  return resultado.join(' ');
};

console.log( saludo() ); // 'undefined undefined'
console.log( saludo('Renzo') ); // 'Renzo undefined'
console.log( saludo('Renzo', 'Lopez') ); // 'Renzo Lopez'

