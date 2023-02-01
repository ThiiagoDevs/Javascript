// escopo global
var x = 1;
var y = 3;

console.log(x, y);

//escopo local
function teste(){
    var z = 0;

    console.log(z);
}
teste();

function testando(){
    var z = 5;

    console.log(z);
}

testando();

if(true){
    var p = 1;
}

console.log(p);