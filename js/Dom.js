// acessando elentos com DOM tags

var titulo = document.getElementsByTagName('h1')[0];

console.log(titulo);

var lis = document.getElementsByTagName('li');
console.log(lis[0]);

// id
var paragrafo = document.getElementById('paragrafo');

console.log(paragrafo);

// class
var itensDaLista = document.getElementsByClassName('item');

console.log(itensDaLista);


var itensClass = document.getElementsByClassName('item');
console.log(itensClass);

// Alterando elemento com querySelectorAll
var itensQuery = document.querySelectorAll('#lista li');

console.log(itensClass);

// QuerySelector
var lista = document.querySelector('#lista');

console.log(lista);

