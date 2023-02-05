// seTimeout
console.log('Antes do seTimeout');

setTimeout(function(){
    console.log("Testando o seTimout");

}, 2000);

console.log("Depois do seTimeout");

// setinterval

setInterval(function(){
    console.log("Testando setinterval");
}, 1000);

// clearTimeout
var x = 0;

var mytimer = setTimeout(function(){
    console.log(" o x é 0")
}, 1500);

x = 5;
if(x > 0){
    clearTimeout(mytimer);
    console.log("O x passou de 0 ");
}

// clearseTinterval na pratica.
var mytimer = setInterval(function(){
    console.log("imprimindo interval");

}, 500);

setTimeout(function(){

    console.log("Não precisamos mais repetir");
    clearInterval(mytimer);

}, 1500);