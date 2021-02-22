// Forma que fiz para exibir o resultado no terminal

// let raio = 100.64;
// let raio = 150.00;
let r = 2.00; 

const pi = 3.14159;
let a;

a = pi*(r*r);

console.log("A = " + a.toFixed(4));


// Forma que fiz para exibir em um editor online e no console do navergador
let r; 
let pi = 3.14159;
let a;

r = parseFloat(prompt("Digite o valor do raio: "));

a = pi*(r*r);

console.log("A = " + a.toFixed(4));