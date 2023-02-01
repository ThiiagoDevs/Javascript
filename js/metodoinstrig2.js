// toLowerCase e toUpperCase

var frase = 'A FESTA ESTA BOA ';
var frase2 = 'a festa esta otima';
console.log(frase.toLowerCase());
console.log(frase2.toUpperCase());


//trim
var nome = ' Thiago';

var nomeTrim = nome.trim();

console.log(nome);
console.log(nomeTrim);

// split
console.log(frase.split(''));

var tags = 'PHP, JavaScript, HTML, CSS, Python';

console.log(tags.split(''));

// lastindexOf

var frase3 = 'Eu quero a ultima palavra teste da frase estou fazendo um teste';

console.log(frase3.indexOf('teste'));
console.log(frase3.lastIndexOf('teste'));