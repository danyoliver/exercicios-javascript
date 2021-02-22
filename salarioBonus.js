// Forma que fiz para exibir o resultado no terminal
var nomeFuncionario = 'JOAO';
var salario = 500.00;
var vendas = 1230.30;

// var nomeFuncionario = 'PEDRO';
// var salario = 700.00;
// var vendas = 0.00;

// var nomeFuncionario = 'MANGOJATA';
// var salario = 1700.00;
// var vendas = 1230.50;

var total;
total = (salario + (vendas*15)/100);
console.log("TOTAL = R$ " + total.toFixed(2));

// Forma que fiz para exibir em um editor online e no console do navegador
var nomeFuncionario;
var salario;
var vendas;
var total;

nomeFuncionario = prompt("Digite o nome do vendedor: ");
salario = parseFloat(prompt("Irforme  o salario: "));
vendas = parseFloat(prompt("Informe o valor das vendas: "));

total = (salario + (vendas*15)/100);

console.log("TOTAL = R$ " + total.toFixed(2));