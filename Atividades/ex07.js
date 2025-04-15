var prompt = require('prompt-sync')();

let texto = prompt("digite seu texto: ");

const Digitos = texto.split("").filter(caractere => !isNaN(caractere) && caractere !== " ")
  .length;

console.log(`A frase tem ${Digitos} digitos numericos.`);
