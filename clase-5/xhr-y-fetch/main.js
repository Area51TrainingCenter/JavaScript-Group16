const url = 'https://jsonplaceholder.typicode.com/todos/1';

// ES5
// const xhr = new XMLHttpRequest();

// xhr.open("GET", url);

// xhr.addEventListener('load', event => {
//   console.log(xhr.responseText);
// });

// xhr.send();


// ES6
// GET
console.log('FETCH');
fetch(url)
  .then(response => {
    console.log(response.json());

  })
  // .then(response => response.json())
  // .then(json => console.log(json));




