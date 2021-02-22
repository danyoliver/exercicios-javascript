// Forma que fiz para exibir o resultado no terminal
var notaA = 5.0;
var notaB = 6.1;
var notaC = 7.0;

// var A = 5.0;
// var B = 10.0;
// var notaC = 10.0;

// var A = 10.0;
// var B = 10.0;
// var notaC = 5.0;

var MEDIA;

MEDIA = ((notaA * 2) + (notaB * 3) + (notaC * 5))/10;
console.log("MÉDIA = " + MEDIA.toFixed(1));


// Forma que fiz para exibir em um editor online e no console do navegador
var notaA;
var notaB;
var notaC;

var MEDIA;

notaA = parseFloat(prompt("Digite a primeira nota: "));
notaB = parseFloat(prompt("Digite a segunda nota: "));
notaC = parseFloat(prompt("Digite a terceira nota: "));

MEDIA = ((notaA * 2) + (notaB * 3) + (notaC * 5))/10;

console.log("MÉDIA = " + MEDIA.toFixed(1));