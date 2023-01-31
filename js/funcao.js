// fincao sem recebimento de parametro 
function primeiraFuncao(){

    console.log('Olá, Mundo');
}
primeiraFuncao();

// funcao com um parametro

function dizerNome(nome){
    console.log(`Meu nome é ${nome}`)
}
dizerNome('Paulo');

var nomeDoBancoDeDados = 'Thiago';

dizerNome(nomeDoBancoDeDados);

// funcao com mais de um parametro
function soma(a, b){
    var soma = a + b;
    return soma;
}

var somaUm = soma(2, 5);

console.log(somaUm);