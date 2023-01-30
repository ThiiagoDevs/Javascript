let today = new Date();
let hourNow = today.getHours();
let saudacao;

if (hourNow > 18){
    saudacao = 'Boa noite';
} else if (hourNow > 12){
    saudacao = 'Boa tarde';
} else if (hourNow > 0){
    saudacao = 'Bom dia';
} else {
    saudacao = 'Bem-vindos';
}

document.write(saudacao);