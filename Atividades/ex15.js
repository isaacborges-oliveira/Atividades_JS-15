var prompt = require('prompt-sync')();

const email = prompt("Digite um e-mail para verificar: ");
verificarEmail(email);

function verificarEmail(email) {
  if (
    email.includes("@") &&  email.includes(".") && email.indexOf("@") < email.lastIndexOf(".")
  ) {
    console.log("E-mail válido!");
  } else {
    console.log("E-mail inválido!");
  }
}

