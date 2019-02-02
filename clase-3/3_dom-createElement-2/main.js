//------------------
// <h1>Título</h1>
//------------------
let titulo = document.createElement('h1');
titulo.textContent = 'Título';
titulo.classList.add('has-transition');

document.body.appendChild(titulo);


//-----------------------
// <ul id="lista"></ul>
//-----------------------
let lista = document.createElement('ul');

lista.id = 'lista';
// lista.setAttribute('id', 'lista');

document.body.appendChild(lista);


//---------------------------------
// <li class="persona">Lucho</li>
// <li class="persona">Diana</li>
// <li class="persona">Yessi</li>
//---------------------------------
const crearPersona = nombre => {
  let persona = document.createElement('li');
  persona.textContent = nombre;
  persona.classList.add('persona');

  lista.appendChild(persona);
};

let personas = ['Lucho','Diana','Yessi'];
personas.forEach(crearPersona);
