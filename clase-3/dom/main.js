let titulo = document.createElement('h1');
titulo.textContent = 'Título';
titulo.classList.add('has-transition');

document.body.appendChild(titulo);



let lista = document.createElement('ul');

// // lista.setAttribute('id', 'lista');
lista.id = 'lista';

document.body.appendChild(lista);



// let persona1 = document.createElement('li');
// persona1.textContent = 'Lucho';
// persona1.classList.add('persona');

// lista.appendChild(persona1);


// let persona2 = document.createElement('li');
// persona2.textContent = 'Jessica';
// persona2.classList.add('persona');

// lista.appendChild(persona2);


// let persona3 = document.createElement('li');
// persona3.textContent = 'Carla';
// persona3.classList.add('persona');

// lista.appendChild(persona3);





let personas = ['Carla','Jessica','Diego'];

const crearPersona = nombre => {
  let persona = document.createElement('li');
  persona.textContent = nombre;
  persona.classList.add('persona');

  lista.appendChild(persona);
};

const crearPersonas = listaPersonas => {
  listaPersonas.forEach(crearPersona);
};


crearPersonas(personas);

  // crearPersona('Carla');


let btn = document.getElementById('miBoton');

btn.addEventListener('click', evento => {
  titulo.classList.toggle('error');
});
