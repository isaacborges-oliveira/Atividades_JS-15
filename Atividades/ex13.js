var prompt = require('prompt-sync')();

const UsuarioDigita = prompt("Digite palavras separadas por vírgula: ");

const palavrasDigitada = UsuarioDigita.split(",").map(p => p.trim());

const resultado = PalavrasGrandes(palavrasDigitada);

console.log("Palavras com mais de 5 letras:", resultado);

function PalavrasGrandes(palavras) {
    
  return palavras.filter(palavra => palavra.length > 5);
}
