import { sumar, restar } from './utils/mathUtils';

const resultadoSumar = sumar(7, 3);
const resultadoRestar = restar(7, 3);

console.log( { resultadoSumar, resultadoRestar } );



const saludo = () => {
  console.log('Hello Webpack 4!');
};

saludo();
