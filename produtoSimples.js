// Forma que foi aceita para submter no site, porém não é exibido nada no terminal
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A;
var B;
var PROD;

A = parseInt(lines.shift());
B = parseInt(lines.shift());

PROD = (A * B);

console.log("PROD = " + PROD);


// Forma que fiz para exibir o resultado no terminal
var A = 3;
var B = 9;

// var A = -30;
// var B = 10;

// var A = 0;
// var B = 9;

var PROD;
PROD = (A * B);
console.log("PROD = " + PROD);


// Forma que fiz para exibir em um editor online e no console do navegador
var A;
var B;
var PROD;

A = parseInt(prompt("Digite o numero A: "));
B = parseInt(prompt("Digite o numero B: "));

PROD = (A * B);

console.log("PROD = " + PROD);