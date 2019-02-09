// >
// <
const txtTarea = document.querySelector('#txtTarea');

const crearItem = texto => {
  const miElemento = document.createElement('div');
  miElemento.textContent = texto;

  const miContenedor = document.querySelector('#contenedor');
  miContenedor.appendChild(miElemento);
};

const agregarTarea = () => {
  crearItem(txtTarea.value);

  txtTarea.value = '';
  txtTarea.focus();
};

const onClickBtnAgregar = event => {
  event.preventDefault();

  agregarTarea();
};

const onKeypressTxtTarea = event => {
  // ´.keyCode´ será depreciado en favor de ´.code´ .
  // https://developer.mozilla.org/es/docs/Web/API/KeyboardEvent/keyCode

  let isEnterKeyPressed = false;

  if ( event.hasOwnProperty('code') ) {
    if (event.code === 'Enter') {
      isEnterKeyPressed = true;
    }
  } else {
    if (event.keyCode === 13) {
      isEnterKeyPressed = true;
    }
  }

  if (isEnterKeyPressed) {
    agregarTarea();
  }
};

const btn = document.querySelector('#btnAgregar');

btn.addEventListener('click', onClickBtnAgregar);
txtTarea.addEventListener('keypress', onKeypressTxtTarea);


