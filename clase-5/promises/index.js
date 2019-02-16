// Ejecutar este archivo usando NodeJS
// Ejm: node index.js

console.log('');
console.log('PROMISES');
console.log('========');
// < >

const promise = new Promise((resolve, reject) => {
  // resolve(); // se usa con .THEN
  reject("No completo la tarea"); // se usa con .CATCH
});

promise
  .then(() => {
    console.log('RESOLVE!');
    console.log('');
  })
  .catch((errorMessage) => {
    console.log('REJECT!', errorMessage);
    console.log('');
  });


