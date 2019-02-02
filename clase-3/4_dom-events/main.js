//------------------
// <h1>Título</h1>
//------------------
let titulo = document.createElement('h1');
titulo.textContent = 'Título';
titulo.classList.add('has-transition');

document.body.appendChild(titulo);


//------------------
// Event
//------------------

let btn = document.getElementById('miBoton');

/*
// Forma clásica

btn.addEventListener('click', evento => {
  titulo.classList.toggle('error');
});
*/


//------------------
// Forma 1: Usando un FLAG

let acceso = false;

const onClickBtn1 = evento => {
  if (acceso === false) {
    acceso = true;

    titulo.classList.toggle('error');
  }
};

// btn.addEventListener('click', onClickBtn1);


//------------------
// Forma 2: removiendo la escucha del evento

const onClickBtn2 = evento => {
  btn.removeEventListener('click', onClickBtn2);

  titulo.classList.toggle('error');
};

btn.addEventListener('click', onClickBtn2);
