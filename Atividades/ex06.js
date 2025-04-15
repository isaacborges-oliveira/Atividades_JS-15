var prompt = require('prompt-sync')();

let frase = prompt("digite sua frase: ");

const fraseMaiscula = frase
  .toLowerCase()
  .split(" ")
  .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1))
  .join(" ");

console.log(fraseMaiscula);
