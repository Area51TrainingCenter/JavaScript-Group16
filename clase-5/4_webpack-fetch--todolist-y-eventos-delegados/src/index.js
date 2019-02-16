let btn;
let txtTarea;
let tareasContador = 1;
let miContenedor;

const removerElemento = selector => {
  const miElemento = document.querySelector(selector);

  miContenedor = document.querySelector('#contenedor');
  miContenedor.removeChild(miElemento);
};

const onClickDelegateContenedor = event => {
  // event.currentTarget // Elemento al cual se aplico la ESCUCHA del evento
  // event.target // elemento hijo contenido que fue cliqueado

  if (event.target.tagName === 'A') {
    const miAncla = event.target;
    const selector = miAncla.getAttribute('href');

    removerElemento(selector);
  }
};

const onClickMiAncla = event => {
  event.preventDefault();

  const miAncla = event.currentTarget;
  const selector = miAncla.getAttribute('href');

  removerElemento(selector);
};

const crearItemUsandoHTML = texto => {
  let miAnclaHTML = '<a href="#">X</a>';
  let miElementoHTML = `<div>${texto} ${miAnclaHTML}</div>`;

  const miContenedor = document.querySelector('#contenedor');
  miContenedor.innerHTML += miElementoHTML;
};

const crearItem = texto => {
  tareasContador += 1;


  const miAncla = document.createElement('a');
  miAncla.textContent = 'X';
  miAncla.href = `#tarea${tareasContador}`;
  //miAncla.addEventListener('click', onClickMiAncla);
  // <a href="#">X</a>

  const miElemento = document.createElement('div');
  miElemento.id = `tarea${tareasContador}`;
  miElemento.textContent = texto;
  // <div>tarea 1</div>

  miElemento.appendChild(miAncla);
  // <div>tarea 1<a href="#">X</a></div>

  miContenedor.appendChild(miElemento);
  // <div id="contenedor">
  //   <div>tarea 1<a href="#">X</a></div>
  // </div>
};

const agregarTarea = () => {
  crearItem(txtTarea.value);
  // crearItemUsandoHTML(txtTarea.value);

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

const loadData = () => {
  return new Promise((resolve, reject) => {
    const url = 'https://jsonplaceholder.typicode.com/todos';

    // fetch(url)
    //   .then(response => response.json())
    //   .then(data => console.log(data));

    fetch(url)
      .then(response => response.json())
      .then(data => {
        resolve(data);
      })
      .catch(err => {
        reject(err);
      })
  });
}

const cache = () => {
  miContenedor = document.querySelector('#contenedor');
  btn = document.querySelector('#btnAgregar');
  txtTarea = document.querySelector('#txtTarea');
};

const listeners = () => {
  btn.addEventListener('click', onClickBtnAgregar);
  txtTarea.addEventListener('keypress', onKeypressTxtTarea);
  miContenedor.addEventListener('click', onClickDelegateContenedor);

};

const setup = () => {
  loadData()
    .then(data => {
      console.log('DATA', data);

      setTimeout(() => {
        // data.map(item => item.title).forEach(crearItem);
        data.forEach(item => crearItem(item.title));
      }, 10000);
    })
    .catch(err => {
      console.log('ERROR', err);
    })
  // crearItem
};

const init = () => {
  cache();
  listeners();
  setup();
};

init();
