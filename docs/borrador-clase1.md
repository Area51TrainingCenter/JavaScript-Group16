const sumar = (a, b) => {
    const resultado = a + b;
    return resultado;
};

const res = sumar(3, 5);
console.log(res);




const sumar = (a, b) => {
    return a + b;
};

const res = sumar(3, 5);
console.log(res);




const sumar = (a, b) => a + b;

const res = sumar(3, 5);
console.log(res);




const incremento = a => a + 1;


var incremento = function(a) {
    return a + 1;
}

crear función que retorne un objeto
que reciba un parámetro "color"


crearAuto('azul');
// { color: "azul" }



const crearAuto = c => {
    console.log({ color: c });
};

const crearAuto = c => {
    return { color: c };
};

const crearAuto = c => {
    const o = {};
    o.color = c;
    return o;
};



operacion(1, 2, 3);
// 0

operacion(2, 3, 7);
// -2

operacion(3, 2, 1);
// 4




multiplicar(3, 4, 5)
// 60

multiplicar(1, 2, 3)
// 6



const multiplicar = (a, b, c) => a * b * c;
console.log(multiplicar(1,2,3));

const multiplicar = (a, b, c) => {
    console.log(a * b * c);
}
multiplicar(1,2,3);




let lista = [];

// Aquí crear función
const agregarALista = nombre => lista.push(nombre);

agregarALista('Pedro');
agregarALista('Juan');
agregarALista('Carlos');

console.log(lista);
// ['Pedro', 'Juan', 'Carlos']



let personas = [];

// Aquí crear función
const agregarPersona = (a, b) => {
  personas.push({ nombre: a, edad: b });
}
const agregarPersona = (nombre, edad) => {
  personas.push({ nombre, edad });
}

agregarPersona('Pedro', 24);
agregarPersona('Juan', 25);
agregarPersona('Carlos', 26);

console.log(personas);
// [
//   { nombre: 'Pedro', edad: 24 },
//   { nombre: 'Juan', edad: 25 },
//   { nombre: 'Carlos', edad: 26 },
// ]




"Renzo".toUpperCase()
// "RENZO"

"Renzo".toLowerCase()
// "renzo"

const aMayusculas = t => t.toUpperCase();

aMayusculas('Renzo Castro');
// RENZO CASTRO




==    ===
>=
<=
!=    !==
<
>

if (1 == 1) {
  console.log('verdadero');
} else {
  console.log('falso');
}


if (edad >= 18) {
  console.log('Puede Entrar en Disco');
} else {
  console.log('No puede entrar en Disco');
}


const esMayorDeEdad = edad => {
  if (edad >= 18) {
    return true;
  } else {
    return false;
  }
};

const esMayorDeEdad = edad => edad >= 18;

if (esMayorDeEdad(23)) {
  console.log('Puede Entrar en Disco');
} else {
  console.log('No puede entrar en Disco');
}




const persona = {
  nombre: 'Diego',
  estadoLleno: 0, // 0 a 5
  tieneHambre: function () {
    return this.estadoLleno < 4;
  },
  comer: function (comida) {
    if (comida === 'manzana') {
      this.estadoLleno += 1;
    }
    if (comida === 'papaya') {
      this.estadoLleno += 2;
    }
  }
};


operadores matematicos
+=
-=
*=
/=
++
--
4 % 2 == 0



const comer = (persona, comida) => {
  console.log(`${persona.nombre} come ${comida}`);
}














// sololearn
// https://warrior.js.org/
// codewars.com


https://www.smashingmagazine.com/
https://medium.com/


Código Facilito
Udemy
egghead.io
frontendmasters
