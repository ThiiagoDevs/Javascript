// inserir elemrnto no body
var novoParagrafo = document.createElement('p');

console.log(novoParagrafo);

var texto = document.createTextNode('Criando um elemento com Dom');

novoParagrafo.appendChild(texto);

console.log(novoParagrafo);

var body = document.querySelector('body');

console.log(body);

body.appendChild(novoParagrafo)
console.log(body);

// inserir elemento em container
var container = document.getElementById('container');

console.log(container);

var el = document.createElement('span');

el.appendChild(document.createTextNode('texto do span'));

console.log(el);

container.appendChild(el);