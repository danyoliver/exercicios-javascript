// Forma que foi aceita para submter no site, porém não é exibido nada no terminal
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A; 
var B;
var SOMA;

A = parseInt(lines.shift());
B = parseInt(lines.shift());

SOMA = (A + B);

console.log("SOMA = " + SOMA); 


// Forma que fiz para exibir o resultado no terminal
var A = 30; 
var B = 10; 

// var A = -30; 
// var B = 10;

// var A = 0; 
// var B = 0;

var SOMA;

SOMA = (A + B);
console.log("SOMA = " + SOMA);


// Forma que fiz para exibir em um editor online e no console do navergador
var A;
var B;
var SOMA;

A = parseInt(prompt("Digite o numero A: "));
B = parseInt(prompt("Digite o numero B: "));

SOMA = (A + B);

console.log("SOMA = " + SOMA);