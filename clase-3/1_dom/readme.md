# 1. DOM: Document Object Model

Abrir el archivo `index.html` en Google Chrome. Inspeccionar la página e ir a `console` y probar las siguientes líneas:

```js
document.body.children[1];
// <ul id=​"lista">​…​</ul>​

document.getElementById('lista')
// <ul id=​"lista">​…​</ul>​

document.querySelector('#lista')
// <ul id=​"lista">​…​</ul>​
```

```js
document.body.children[0]
// <h1>​Título​</h1>​

document.getElementsByTagName('h1')
// HTMLCollection [h1]

document.getElementsByTagName('h1')[0]
// <h1>​Título​</h1>​

document.querySelector('h1')
// <h1>​Título​</h1>​

document.querySelectorAll('h1')
// NodeList [h1]

document.querySelectorAll('h1')[0]
// <h1>​Título​</h1>​
```

```js
let liPersona;

liPersona = document.createElement('li');
// <li>​</li>​

liPersona.textContent = 'Juan';

liPersona
// <li>​Juan​</li>​

liPersona.setAttribute('class', 'persona');

liPersona
// <li class=​"persona">​Juan​</li>​

miLista
// <ul id=​"lista">​…​</ul>​

miLista.appendChild(liPersona);
// <li class=​"persona">​Juan​</li>​

liPersona.classList.add('persona')

liPersona
// <li class=​"persona">​Juan​</li>​

liPersona.classList.remove('persona')

liPersona
// <li class=​"">​Juan​</li>​
```

```js
let htmlCarlos = '<li class="persona">Carlos</li>';

miLista.innerHTML = `${miLista.innerHTML}${htmlCarlos}`;

miLista.removeChild( miLista.children[4] );

miLista.insertBefore( miLista.children[3], miLista.children[1] );
```
