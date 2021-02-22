// Forma que foi aceita para submter no site, porém não é exibido nada no terminal
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A;
var B;
var C;
var D;
var DIFERENCA;

A = parseInt(lines.shift());
B = parseInt(lines.shift());
C = parseInt(lines.shift());
D = parseInt(lines.shift());

DIFERENCA = (A * B - C * D);
console.log("DIFERENCA = " + DIFERENCA);


// Forma que fiz para exibir o resultado no terminal
var A = 5;
var B = 6;
var C = 7;
var D = 8;

// var A = 0;
// var B = 0;
// var C = 7;
// var D = 8;

// var A = 5;
// var B = 6;
// var C = -7;
// var D = 8;

var DIFERENCA;
DIFERENCA = (A * B - C * D);
console.log("DIFERENCA = " + DIFERENCA);

// Forma que fiz para exibir em um editor online e no console do navegador
var A;
var B;
var C;
var D;
var DIFERENCA;

A = parseInt(prompt("Digite o primeiro valor: "));
B = parseInt(prompt("Digite o segunda valor: "));
C = parseInt(prompt("Digite o terceiro valor: "));
D = parseInt(prompt("Digite o quarto valor: "));



DIFERENCA = (A * B - C * D);
console.log("DIFERENCA = " + DIFERENCA);