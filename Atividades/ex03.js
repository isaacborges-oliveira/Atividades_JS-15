var prompt = require('prompt-sync')();
  
const frase = prompt("Digite uma frase:");
const letra = prompt("Digite uma letra:");

const palavrasComLetra = frase
  .split(" ") // divide a frase em palavras
  .filter(palavra => palavra.startsWith(letra)); 

console.log(`Quantidade de palavras que começam com '${letra}':`, palavrasComLetra.length);
