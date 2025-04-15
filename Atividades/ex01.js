var prompt = require('prompt-sync')();

var CPF;

CPF = prompt("Digite seu CPF, 14 dígitos: ")

console.log(`CPF: ${formataCPF(CPF)}`);

function formataCPF(CPF){
  //realizar a formatação...
    return CPF.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}