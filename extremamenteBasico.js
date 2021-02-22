// Forma que foi aceita para submter no site, porém não é exibido nada no terminal
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A; 
var B;
var X;

A = parseInt(lines.shift());
B = parseInt(lines.shift());

X = (A + B);

console.log("X = " + X); 


// Forma que fiz para exibir o resultado no terminal
var A = 10; 
var B = 9; 
var X;

// var A = -10; 
// var B = 4;

// var A = 15; 
// var B = -7; 

X = (A + B);
console.log("X = " + X);


// Forma que fiz para exibir em um editor online
var A;
var B;
var X;

A = parseInt(prompt("Digite o numero A: "));
B = parseInt(prompt("Digite o numero B: "));

X = (A + B);

console.log("X = " + X);