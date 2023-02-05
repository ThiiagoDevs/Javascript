let pessoa = {
    nome:'Luana',
    idade: 21,
    falar: function(){
        console.log('Olá, tudo bem?')
    },
    soma: function(a, b){
        return a + b;
    }
};
console.log(pessoa.nome);
pessoa.falar();

var soma = pessoa.soma(2, 10);

console.log(soma);