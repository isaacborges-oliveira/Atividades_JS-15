var prompt = require('prompt-sync')();

let frasePessoa = prompt("digite sua frase: ");

const PalavraMaior = frasePessoa.split(" ").
reduce((maior, atual) => atual.length > maior.length ? atual : maior, "");

console.log(PalavraMaior); 
