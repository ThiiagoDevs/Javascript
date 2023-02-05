// this.
console.log(this);

let pessoa = {
    nome: ' joao',
    idade: 29,
    falar: function(){
      console.log('Olá, tudo bem?')
    },
    dizerNome: function(){
        console.log(`Meu nome é ${this.nome}`);
    },
    aniversario: function(){
      this.idade += 1; 
    }
};

pessoa.dizerNome();

console.log(pessoa.idade);

pessoa.aniversario();

console.log(pessoa.idade);
