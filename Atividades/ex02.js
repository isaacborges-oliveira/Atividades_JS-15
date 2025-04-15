var prompt = require('prompt-sync')();

let frase = prompt("digite sua frase: ");

const maiorPalavra = frase.split(" ").reduce((maior, atual) => {
    return atual.length > maior.length ? atual : maior;
  });

console.log(maiorPalavra); 
