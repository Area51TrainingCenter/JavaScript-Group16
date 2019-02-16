const url = 'https://jsonplaceholder.typicode.com/todos';
const contenedor = document.querySelector('#contenedor');

const crearElemento = text => {
  const el = document.createElement('div');
  el.textContent = text;
  contenedor.appendChild(el);
};

console.log('FETCH');

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log('llego la data');
    data.forEach(elemento => crearElemento(elemento.title));
  });

console.log('debajo del FETCH');



