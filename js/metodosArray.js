// length
var arr = [0,1,2,3,4,5,6,7,8,9,];
console.log(arr.length);

// push adiciona elementos no fim do array 
arr.push(10);
arr.push('Adicionando uma string');

console.log(arr);

// pop remove elementos no fim do array 
arr.pop();

console.log(arr);

// unshift adiciona um elemento no começo do array
arr.unshift(2);
arr.unshift('teste')

console.log(arr);

// shift removo o elementos que esta no começo
arr.shift()

console.log(arr);

// acessando io ultimo elemento do array

console.log(arr[arr.length - 1]);

// isArray verifica se um array que esta trabalhando
console.log(Array.isArray(5));
console.log(Array.isArray(arr));