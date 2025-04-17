var prompt = require('prompt-sync')();

const ValorDigitado = parseFloat(prompt("Digite o valor: "));


console.log("Preço formatado:", formatarPreco(ValorDigitado));

function formatarPreco(valor) {
  const precoFormatado = "R$ " + valor.toFixed(2).replace(".", ",");
  return precoFormatado;
}
