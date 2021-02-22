// Forma que foi aceita para submter no site, porém não é exibido nada no terminal
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var numeroFuncionario;
var horas;
var valorHora;
var salario;

numeroFuncionario = parseInt(lines.shift());
horas = parseInt(lines.shift());
valorHora = parseFloat(lines.shift());

salario = (valorHora * horas);

console.log("NUMBER = " + numeroFuncionario);
console.log("SALARY =  R$ " + salario.toFixed(2));


// Forma que fiz para exibir o resultado no terminal

var numeroFuncionario = 25;
var horas = 100;
var valorHora = 5.50;

// var numeroFuncionario = 25;
// var horas = 100;
// var valorHora = 20.50;

// var numeroFuncionario = 25;
// var horas = 100;
// var valorHora = 20.50;

var salario;
salario = (valorHora * horas);
console.log("salario = " + salario);

// Forma que fiz para exibir em um editor online e no console do navegador
var numeroFuncionario;
var horas;
var valorHora;
var salario;

numeroFuncionario = parseInt(prompt("Digite o primeiro valor: "));
horas = parseInt(prompt("Digite o segunda valor: "));
valorHora = parseFloat(prompt("Digite o terceiro valor: "));

salario = (valorHora * horas);

console.log("NUMBER = " + numeroFuncionario);
console.log("SALARY =  R$ " + salario.toFixed(2));