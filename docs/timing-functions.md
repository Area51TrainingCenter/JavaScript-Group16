## setTimeout

### Sintaxis
```ts
setTimeout(handler: function, milliseconds: number);
```

### Ejemplo

El mensaje en consola se mostrará luego de 2 segundos.
Ocurré solo una vez.

```js
let timeoutId = setTimeout(() => {
  console.log('setTimeout');
}, 2000);
```

Se puede cancelar usando:

```js
clearTimeout(timeoutId);
```

## setInterval

### Sintaxis
```ts
setInterval(handler: function, milliseconds: number);
```

### Ejemplo

El mensaje en consola se mostrará cada 2 segundos.
Ocurré indefinidamente hasta que sea detenido usando `clearInterval`.

```js
let intervalId = setInterval(() => {
  console.log('setInterval');
}, 2000);
```

Se puede cancelar usando:

```js
clearInterval(intervalId);
```
