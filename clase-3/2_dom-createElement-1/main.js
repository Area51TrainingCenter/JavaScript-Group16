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
//---------------------------------
let persona1 = document.createElement('li');
persona1.textContent = 'Lucho';
persona1.classList.add('persona');

lista.appendChild(persona1);

//---------------------------------
// <li class="persona">Diana</li>
//---------------------------------
let persona2 = document.createElement('li');
persona2.textContent = 'Diana';
persona2.classList.add('persona');

lista.appendChild(persona2);

//---------------------------------
// <li class="persona">Yessi</li>
//---------------------------------
let persona3 = document.createElement('li');
persona3.textContent = 'Yessi';
persona3.classList.add('persona');

lista.appendChild(persona3);
