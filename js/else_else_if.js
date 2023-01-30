let usuarioNome = 'Pedro';

if(usuarioNome == 'maria'){
    console.log(`Olá, ${usuarioNome}`);
} else if(usuarioNome == 'Pedro') {
  console.log(`Olá, ${usuarioNome}`)
}else {
    console.log('Usuário incorreto')
}

let idade = 19;

if(idade >= 18){
    console.log('boa festa')
} else if(idade >= 15 && idade <= 17){
    console.log('so pode entrar com autorização')
} else {
    console.log('entrada nao permitida.')
}