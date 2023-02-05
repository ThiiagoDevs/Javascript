var btn2 = document.querySelector('#btn2');

console.log(btn2);

btn2.addEventListener("click", function(){
    console.log("clicou");

    console.log(this);

    this.style.color = 'red'
});

var title = document.querySelector('#title');

title.addEventListener('click', function(){
    
    var subtitle = document.querySelector(".subtitle");


    subtitle.style.display = 'none';
})

//double click
var subtitle = document.querySelector(".subtitle");

subtitle.addEventListener('dblclick', function(){
    console.log("click duplo!")
    
})